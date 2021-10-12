<!--
 * @Description: 数据采集管理列表
 * @Author: akxu
 * @Date: 2021-09-20 14:20:56
 * @LastEditTime: 2021-10-11 17:40:06
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <form-for-site-infomation-search
          @gotoSearch="submitSearch"
          @addSiteInfo="addSiteInfo"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <publish-list
          :tableHead="tableHead"
          :dataList="tableData"
          v-on:handleOperation="handleOperation"
          :pageLength="pageLength"
          @getPageData="getPageData"
        />
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <!-- <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
        </template> -->
      <v-card>
        <v-card-title>
          <span class="headline">修改采集网站</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="dialogForm" v-model="diagFormValidation">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="网站名称*"
                    v-model="editForm.siteName"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="采集API*"
                    v-model="editForm.gatherAPI"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    :items="frequencyDict"
                    label="采集频率*"
                    v-model="editForm.gatherFrequency"
                    :rules="[rules.required]"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="网站地址*"
                    v-model="editForm.url"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">取消</v-btn>
          <v-btn color="blue darken-1" text @click="handleSaveEdit">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 确认删除对话框 -->
    <v-dialog v-model="confirmDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          提示
        </v-card-title>
        <v-card-text>您确认要删除此网站的数据采集任务吗？</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="confirmDialog = false">
            取消
          </v-btn>
          <v-btn color="red darken-1" text @click="deleteSite">
            确认
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FormForSiteInfomationSearch from "@/components/FormForSiteInfomationSearch/index.vue";
import PublishList from "@/components/PublishList/index.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import {
  getSiteList,
  updateSiteInfo,
  deleteSite,
  addSiteInfo
} from "@/logic/news-watcher/site-infomation";
export default {
  components: {
    FormForSiteInfomationSearch,
    PublishList
  },
  data() {
    return {
      tableHead: [
        {
          name: "网站名称",
          property: "siteName"
        },
        {
          name: "网站地址",
          property: "url"
        },
        {
          name: "采集API",
          property: "gatherAPI"
        },
        {
          name: "采集频率(秒/次)",
          sortAble: true,
          property: "gatherFrequency"
        },
        {
          name: "最近运行时间",
          property: "lastGatherTime",
          time: true
        },
        {
          name: "操作",
          property: "oper",
          sortAble: false,
          currentSort: -1 //0代表升序
        }
      ],
      tableData: [],
      pageLength: 1,
      dialog: false,
      confirmDialog: false,
      editForm: {},
      rules: {
        required: value => !!value || "不能为空哦"
      },
      diagFormValidation: false,
      currentParams: {},
      frequencyDict: [
        { text: "10分钟", value: 600 },
        { text: "30分钟", value: 1800 },
        { text: "1小时", value: 3600 },
        { text: "3小时", value: 3600 * 3 },
        { text: "6小时", value: 3600 * 6 },
        { text: "12小时", value: 3600 * 12 }
      ]
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "舆情分析" },
      { title: "数据采集管理" }
    ]);
  },
  created() {
    //进入页面先进行一次查询，查询所有网站数据
    this.submitSearch();
  },
  methods: {
    //处理操作
    handleOperation(operation, item) {
      switch (operation) {
        case "edit":
          this.dialog = true;
          this.editForm = item;
          break;
        case "delete":
          this.deleteSiteId = item._id;
          this.confirmDialog = true;
          break;

        default:
          break;
      }
    },
    //保存修改
    async handleSaveEdit() {
      console.log(this.diagFormValidation);
      if (this.diagFormValidation) {
        //判断是新增还是更新网站信息
        if (this.editForm._id) {
          await updateSiteInfo({ newItem: this.editForm }); //let resObj =
          this.tableData.forEach((item, index) => {
            if (item._id === this.editForm._id) {
              //vue不能检测两种数组变动：1.当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
              //2.当你修改数组的长度时，例如：vm.items.length = newLength
              //更改数组元素的两种方法，触发视图更新
              // this.tableData.splice(index, 1, this.editForm);
              //this.$forceUpdate();
              this.$set(this.tableData, index, this.editForm);
              this.dialog = false;
            }
          });
        } else {
          await addSiteInfo(this.editForm);
          this.dialog = false;
          this.submitSearch();
        }
      } else {
        this.$store.dispatch("snackbar/openSnackbar", {
          msg: "请填写完成后保存",
          color: "warning"
        });
      }
    },

    //提交查询
    async submitSearch(params) {
      if (params) {
        this.currentParams = params;
      }
      console.log(params);
      let resObj = await getSiteList({ params: params });
      this.tableData = resObj.data.map(item => {
        return {
          ...item
          // frequencyText: this.getFrequencyText(item.gatherFrequency)
        };
      });
      console.log(this.tableData);
      this.pageLength = resObj.pageLength;
      console.log(resObj);
    },

    //删除网站
    async deleteSite() {
      this.confirmDialog = false;
      await deleteSite(this.deleteSiteId);
      this.submitSearch();
    },

    //添加网站
    addSiteInfo() {
      this.editForm = {};
      this.dialog = true;
    },

    //跳转指定页数
    getPageData(pageNumber) {
      this.currentParams.pageNumber = pageNumber;
      this.submitSearch(this.currentParams);
    }

    // //根据采集频率数值获取中文文本
    // getFrequencyText(val) {
    //   let str = "";
    //   this.frequencyDict.forEach(item => {
    //     if (item.value === val) {
    //       str = item.text;
    //     }
    //   });
    //   return str;
    // },
    // //根据中文文本获取采集频率数值
    // getFrequencyValue(str) {
    //   let val = -1;
    //   this.frequencyDict.forEach(item => {
    //     if (item.text === str) {
    //       val = item.val;
    //     }
    //   });
    //   return val;
    // }
  }
};
</script>

<style></style>
