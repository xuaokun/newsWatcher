<template>
  <div>
    <!-- <v-row>
      <v-col cols="12">
        <v-tabs v-model="tabs" align-with-title>
          <v-tab :href="'#'.concat(item)" v-for="item in riskType" :key="item">
            {{ item }}
          </v-tab>
          <v-tabs-slider color="pink"></v-tabs-slider>
        </v-tabs>
      </v-col>
    </v-row> -->
    <div class="row">
      <div class="col-lg-3">
        <aside-menu
          v-if="menuData"
          :menuData="menuData"
          v-on:gotoItem="searchByMenuSelect"
        />
      </div>
      <div class="col-lg-9">
        <div class="row">
          <div class="col-lg-12">
            <form-for-punishment-search
              v-on:gotoSearch="searchByCondition"
              :initData="params"
            />
          </div>
          <div class="col-lg-12 res-list">
            <publish-list
              :pageLength="pageLength"
              v-on:getPageData="getPageData"
              :dataList="resultLawInfoList"
              :tableHead="tableHead"
              tableTitle="处罚列表"
            ></publish-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import PublishList from "@/components/PublishList";
import AsideMenu from "@/components/Aside/Aside";
import FormForPunishmentSearch from "@/components/FormForPunishmentSearch";
export default {
  name: "PunishmentSearch",
  components: {
    PublishList,
    AsideMenu,
    FormForPunishmentSearch
  },
  computed: {
    ...mapGetters(["currentUserPhoto"]),
    pageLength: function() {
      let len = parseInt(this.searchResultIdList.length / 100) + 1;
      // console.log(len);
      return len;
    },
    menuData: function() {
      return [
        // {
        //   违规类型: []
        // },
        {
          处罚类型: Object.values(this.punish_type)
        }
        // {
        //   所属证监局: []
        // }
      ];
    }
  },
  data() {
    return {
      searchResultIdList: [],
      searchResultSize: 0,
      currentStartId: 0,
      resultLawInfoList: [],
      resultLawInfoSize: [],
      tableHead: [
        {
          name: "处罚文件",
          property: "title",
          router: "/fkgHome/punishmentDetail/",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "文号索引",
          property: "decisionFile",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "处罚对象",
          property: "punishedOrgan.name",
          router: "/fkgHome/home/",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "违规类型",
          property: "decisionResion",
          sortAble: true,
          currentSort: -1, //0代表升序
          maxLen: 15
        },
        {
          name: "处罚类型",
          property: "punishType",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "发布时间",
          property: "pubtime",
          sortAble: true,
          time: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "发文单位",
          property: "decisionOrganName.name",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "操作",
          property: "oper",
          sortAble: false,
          currentSort: -1 //0代表升序
        }
      ],
      riskType: [
        "全部",
        "信用风险",
        "保险风险",
        "市场风险",
        "流动性风险",
        "操作风险",
        "国别风险",
        "利率风险",
        "战略风险",
        "信息科技风险",
        "其他风险"
      ],
      punish_type: {
        "1": "警告处分",
        "2": "终身禁止从事银行业工作",
        "3": "禁止十五年从事银行业工作",
        "4": "取消高级管理人员任职资格2年",
        "7": "禁止从事银行业工作终身",
        "8": "警告并罚款",
        "9": "禁止从事银行业工作1年",
        "10": "取消高管资格终身",
        "11": "罚款",
        "12": "取消高管任职资格一年",
        "13": "取消终身高级管理人员任职资格，禁止终身从事银行业工作",
        "14": "禁止3年从事银行业工作",
        "15": "取消高管任职资格2年",
        "16": "禁止十年从事银行业工作",
        "17": "取消银行业金融机构董事和高级管理人员任职资格10年的行政处罚",
        "18": "禁止五年从事银行业工作",
        "19": "责令改正，警告并罚款",
        "20": "禁止从事银行业工作2年",
        "21": "取消2年高管任职资格，并罚款五万元",
        "22": "罚款，责令相关负责人纪律处分",
        "23": "罚没",
        "24": "禁止五年从事银行业工作",
        "25": "禁止从事银行业工作四年",
        "26": "责令改正并处罚款",
        "27": "罚款并责令停止接受业务三个月的行政处罚",
        "28": "禁止2年从事银行业工作",
        "29": "责令改正并罚款，相关责任人给予纪律处分",
        "30":
          "罚款，责令丰满惠民村镇银行对直接负责的董事、高级管理人员和其他直接责任人给予纪律处分。",
        "31": "撤销李国强任职资格",
        "32": "撤销任职资格",
        "33": "取消银行业高级管理任职资格二年，罚款人民币十万元",
        "34": "取消银行业金融机构高级管理人员任职资格五年",
        "35": "禁止进入保险业终身"
      },
      params: {
        decOrgName: [],
        decisionTime: "",
        pubTime: "",
        or: { content: "", title: "" },
        and: { punishedOrg: [], punishType: [] }
      }
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "处罚检索" }]);
    // console.log(Object.values(this.punish_type))
  },
  methods: {
    getPunishType(dataList) {
      for (let item of dataList) {
        if (item.punishedPersons && item.punishedPersons[0]) {
          console.log(this.punish_type[item.punishedPersons[0].type]);
          item.punishType = this.punish_type[item.punishedPersons[0].type];
        }
      }
      return dataList;
    },
    async searchByCondition(params) {
      console.log("start search");
      params.and.punishType = this.params.and.punishType;
      this.params = params;
      if (params) {
        let res = await this.axios.post(
          "/api/sykg/query/punish_infos/keywords",
          params
        );
        console.log(res);
        if (res.data.status == 0) {
          this.searchResultIdList = res.data.message.data;
          this.searchResultSize = res.data.message.size;
          this.currentStartId = 0;
          console.log(this.searchResultIdList, this.searchResultSize);
        }
        let res2 = await this.axios.post("/api/sykg/query/punish_infos/basic", {
          IDs: this.searchResultIdList.slice(0, 100)
        });
        console.log("处罚结果", res2.data);
        if (res2.data.status == 0) {
          this.resultLawInfoList = this.getPunishType(res2.data.message.data);
          this.resultLawInfoSize = res2.data.message.size;
        }
        this.currentStartId += 100;
        console.log(this.resultLawInfoList);
      }
    },

    async getPageData(page) {
      console.log(page);
      console.log(this.searchResultIdList.length);
      let where = {
        IDs: this.searchResultIdList.slice((page - 1) * 100, page * 100)
      };
      console.log(where);
      let res2 = await this.axios.post(
        "/api/sykg/query/punish_infos/basic",
        where
      );
      if (res2.data.status == 0) {
        this.resultLawInfoList = this.getPunishType(res2.data.message.data);
        this.resultLawInfoSize = res2.data.message.size;
        // console.log(this.resultLawInfoList)
      }
    },
    searchByMenuSelect(item) {
      console.log("菜单提交");
      item = item.split("(");
      if (item[0]) {
        console.log(item[0]);
        this.params.and.punishType = [item[0]]; //还需修改
      }
      console.log(this.params);
      this.searchByCondition(this.params);
    },
    createdSnackbar() {
      console.log("显示提示");
      this.$store.dispatch("snackbar/openSnackbar", {
        msg: "温馨提示：抱歉，暂无企业数据，后台将尽快更新，换个企业试试~ ",
        color: "warning"
      });
    },
    checkHaveCompany(item, next) {
      let that = this;
      if (item.length < 4) {
        that.createdSnackbar();
        next(false);
      }
      this.axios
        .post("/api/sykg/query/company_detail/alias", {
          searchName: item,
          size: 6
        })
        .then(res => {
          console.log(res);
          let status = res.data.status;
          // console.log(status);
          if (status == 0 && res.data.message.data.length > 0) {
            item = res.data.message.data[0].name;
            console.log(item);
            return this.axios.post("/api/sykg/query/company_detail", {
              params: { name: item },
              label: "Company"
            });
          } else {
            that.createdSnackbar();
          }
        })
        .then(data => {
          console.log("Here what post returns", data);
          let status = data.data.status;
          // console.log(status);
          if (
            status == 0 &&
            data.data.message.nodes[0] &&
            data.data.message.nodes[0].organizationCode
          ) {
            console.log("信息存在");
            next();
          } else {
            that.createdSnackbar();
            next(false);
          }
        })
        .catch(e => {
          console.log(e);
          next(false);
        });
    }
  },
  created() {
    //若路由参数中含有companyName字段，则将其作为处罚对象进行搜索
    if (this.$route.query.companyName) {
      console.log(this.$route.query.companyName);
      this.params.and.punishedOrg = [this.$route.query.companyName];
      this.searchByCondition(this.params);
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("路由离开", to);
    if (to.path != "/fkgHome/home") {
      next();
      return;
    }
    if (
      to.query.info &&
      to.query.info.punishedOrgan &&
      to.query.info.punishedOrgan.name
    ) {
      this.checkHaveCompany(to.query.info.punishedOrgan.name, next);
    }
  }
};
</script>
<style scoped>
.row:nth-of-type(2),
.res-list {
  margin-top: 20px;
}
</style>
