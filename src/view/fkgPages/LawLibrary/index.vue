<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <pie-chart :dataObj="pieDataObj" title="法律位阶" />
      </div>
      <div class="col-lg-6">
        <pie-chart :dataObj="warningPieData" title="预警风险" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <publish-list
          tableTitle="最新法规"
          :tableHead="tableHead"
          :dataList="recentLawList"
        ></publish-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
// import RiskTrend from "@/components/RiskTrend";
import PublishList from "@/components/PublishList";
import PieChart from "@/components/PieChart";
export default {
  name: "LawLibrary",
  components: {
    // RiskTrend,
    PublishList,
    PieChart
  },
  computed: {
    ...mapGetters(["currentUserPhoto"]),
    pieDataObj: function() {
      if (this.lawTypeData.length == 0) {
        return {};
      }
      let nameList = [];
      let numList = [];
      for (let item of this.lawTypeData) {
        nameList.push(item._id);
        numList.push(item.count);
      }
      return {
        nameList,
        numList
      };
    }
  },
  data() {
    return {
      lawTypeData: [],
      warningPieData: {
        nameList: [
          "信用风险",
          "保险风险",
          "市场风险",
          "流动性风险",
          "操作风险",
          "国别风险"
        ],
        numList: [133, 231, 34, 56, 66, 129]
      },
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
      ],
      recentLawList: []
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "法库概况" }]);
  },
  created() {
    let that = this;
    //获取法律位阶统计数据
    this.axios
      .post("/api/sykg/query/law_infos/legalHierarchyStats", { IDs: [] })
      .then(function(result) {
        console.log(result);
        if (result && result.data.status == 0) {
          that.lawTypeData = result.data.message.data;
          console.log(that.lawTypeData);
        }
      });

    //获取最新10条法规信息列表数据
    this.axios
      .post("/api/sykg/query/law_infos/rencently", { size: "" })
      .then(function(result) {
        // console.log(result)
        if (result && result.data.status == 0) {
          that.recentLawList = result.data.message.data;
          console.log(that.recentLawList);
        }
      });
  }
};
</script>
<style scoped>
.row:nth-of-type(2) {
  margin-top: 20px;
}
</style>
