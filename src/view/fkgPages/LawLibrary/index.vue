<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <PieChart/>
      </div>
      <div class="col-lg-6">
        <PieChart/>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <PublishList></PublishList>
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
    ...mapGetters(["currentUserPhoto"])
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "法库概况" }]);
  }
};
</script>
<style scoped>
  .row:nth-of-type(2){
    margin-top: 20px;
  }
</style>