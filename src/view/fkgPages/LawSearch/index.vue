<template>
  <div>
    <v-row>
      <v-col cols="12">
        <!-- v-model="text" -->
        <!-- <v-btn-toggle tile color="#3699FF" group>
                    <v-btn value="left">
                        信用风险
                    </v-btn>

                    <v-btn value="center">
                        保险风险
                    </v-btn>

                    <v-btn value="right">
                        市场风险
                    </v-btn>

                    <v-btn value="justify">
                        流动性风险
                    </v-btn>

                    <v-btn value="justify1">
                        操作风险
                    </v-btn>

                    <v-btn value="justify2">
                        国别风险
                    </v-btn>

                    <v-btn value="justify3">
                        利率风险
                    </v-btn>

                    <v-btn value="justify4">
                        战略风险
                    </v-btn>

                    <v-btn value="justify5">
                        信息科技风险
                    </v-btn>

                    <v-btn value="justify6">
                        其他风险
                    </v-btn>
                    <v-btn value="justify7">
                        全部
                    </v-btn>
                </v-btn-toggle> -->
        <v-tabs v-model="tabs" align-with-title>
          <v-tab :href="'#'.concat(item)" v-for="item in riskType" :key="item">
            {{ item }}
          </v-tab>
          <v-tabs-slider color="pink"></v-tabs-slider>
        </v-tabs>
      </v-col>
    </v-row>
    <div class="col-lg-12"></div>
    <div class="row">
      <div class="col-lg-3">
        <AsideMenu
          :menuData="menuDataList"
          v-on:gotoItem="searchByMenuSelect"
        />
      </div>
      <div class="col-lg-9">
        <div class="row">
          <div class="col-lg-12">
            <FormForSearch v-on:gotoSearch="searchByCondition" />
          </div>
          <div class="col-lg-12 res-list">
            <PublishList
              :dataList="resultLawInfoList"
              :pageLength="pageLength"
              tableTitle="查询结果"
              v-on:getPageData="getPageData"
              :tableHead="tableHead"
            ></PublishList>
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
import FormForSearch from "@/components/FormForSearch";
export default {
  name: "LawSearch",
  components: {
    PublishList,
    AsideMenu,
    FormForSearch
  },
  computed: {
    ...mapGetters(["currentUserPhoto"]),
    pageLength: function() {
      let len = parseInt(this.searchResultIdList.length / 20) + 1;
      // console.log(len);
      return len;
    },
    menuDataList: function() {
      let list = [];
      let lawType = [];
      for (let item of this.lawTypeData) {
        lawType.push(`${item._id}(${item.count})`);
      }
      list.push({
        法律位阶: lawType
      });
      return list;
    }
  },
  data() {
    return {
      params: {
        legalHierarchy: "",
        publishDepartment: "",
        pubTime: {},
        actionTime: {},
        or: { content: [], title: [] },
        and: { content: [], title: [] },
        not: { content: [], title: [] }
      },
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
      searchResultIdList: [],
      searchResultSize: 0,
      currentStartId: 0,
      resultLawInfoList: [],
      resultLawInfoSize: [],
      lawTypeData: [], //法律位阶总计
      tableHead: [
        {
          name: "法规名称",
          property: "title",
          router: "/fkgHome/lawDetail/",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "颁布时间",
          property: "release_date",
          sortAble: true,
          time: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "法律位阶",
          property: "file_type",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "法律文号",
          property: "ID",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "发文单位",
          property: "dispatch_units",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "重要性",
          property: "important",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "操作",
          property: "oper",
          sortAble: false,
          currentSort: -1 //0代表升序
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "法库检索" }]);
  },
  methods: {
    async searchByCondition(params) {
      console.log("start search");
      params.legalHierarchy = this.params.legalHierarchy;
      this.params = params;
      if (params) {
        let res = await this.axios.post(
          "/api/sykg/query/law_infos/keywords",
          params
        );
        console.log(res);
        if (res.data.status == 0) {
          this.searchResultIdList = res.data.message.data;
          this.searchResultSize = res.data.message.size;
          this.currentStartId = 0;
          console.log(this.searchResultIdList, this.searchResultSize);
        }
        let res2 = await this.axios.post("/api/sykg/query/law_infos/basic", {
          IDs: this.searchResultIdList.slice(0, 20)
        });
        if (res2.data.status == 0) {
          this.resultLawInfoList = res2.data.message.data;
          this.resultLawInfoSize = res2.data.message.size;
        }
        this.currentStartId += 20;
        console.log(this.resultLawInfoList);
      }
    },

    async getPageData(page) {
      console.log(page);
      console.log(this.searchResultIdList.length);
      let where = {
        IDs: this.searchResultIdList.slice((page - 1) * 20, page * 20)
      };
      console.log(where);
      let res2 = await this.axios.post(
        "/api/sykg/query/law_infos/basic",
        where
      );
      if (res2.data.status == 0) {
        this.resultLawInfoList = res2.data.message.data;
        this.resultLawInfoSize = res2.data.message.size;
      }
    },
    searchByMenuSelect(item) {
      console.log("菜单提交");
      if (!item) {
        console.log("查询全部");
        this.params.legalHierarchy = "";
        this.searchByCondition(this.params);
        return;
      }
      item = item.split("(");
      if (item[0]) {
        console.log(item[0]);
        this.params.legalHierarchy = item[0];
      }
      console.log(this.params);
      this.searchByCondition(this.params);
    }
  },
  created() {
    let that = this;
    this.axios
      .post("/api/sykg/query/law_infos/legalHierarchyStats", { IDs: [] })
      .then(function(result) {
        if (result && result.data.status == 0) {
          that.lawTypeData = result.data.message.data;
          // console.log(that.lawTypeData.length);
        }
      });
  }
};
</script>
<style scoped>
.row:nth-of-type(2),
.res-list {
  margin-top: 20px;
}
</style>
