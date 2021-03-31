<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <PieChart :dataObj="pieDataObj" title="法律位阶" />
      </div>
      <div class="col-lg-6">
        <PieChart :dataObj="warningPieData" title="预警风险" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <PublishList tableTitle="最新法规"></PublishList>
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
      PieChart,
    },
    computed: {
      ...mapGetters(["currentUserPhoto"]),
      pieDataObj: function () {
        if (this.lawTypeData.length == 0) {
          return {};
        }
        let nameList = [];
        let numList = [];
        for (let item of this.lawTypeData) {
          nameList.push(item._id);
          numList.push(item.count)
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
            "信用风险", "保险风险", "市场风险", "流动性风险", "操作风险", "国别风险"
          ],
          numList:[133,231,34,56,66,129]
        }
      };
    },
    mounted() {
      this.$store.dispatch(SET_BREADCRUMB, [{ title: "法库概况" }]);
    },
    created() {
      let that = this;
      this.axios.post('/api/sykg/query/law_infos/legalHierarchyStats', { "IDs": [] })
        .then(function (result) {
          console.log(result)
          if (result && result.data.status == 0) {
            that.lawTypeData = result.data.message.data;
            console.log(that.lawTypeData);
          }
        })
    },
  };
</script>
<style scoped>
  .row:nth-of-type(2) {
    margin-top: 20px;
  }
</style>