<!--
 * @Description: 负面舆情走势
 * @Author: akxu
 * @Date: 2021-11-04 13:32:46
 * @LastEditTime: 2021-11-04 22:20:24
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <negative-trend
          title="负面新闻趋势"
          :dataList="trendList"
          :nameList="trendDates"
          @searchTrend="searchTrendByDate"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NegativeTrend from "@/components/SearchNameLineChart/index.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { getNegativeTrend } from "@/logic/news-watcher/negative-trend";
export default {
  components: {
    NegativeTrend
  },
  data() {
    return {
      trendList: [],
      trendDates: [],
      searchTrend: []
    };
  },
  methods: {
    searchTrendByDate(params) {
      getNegativeTrend(params).then(re => {
        const trendList = re.data.map(item => {
          return item.count;
        });
        this.trendList = [
          {
            name: params,
            data: trendList
          }
        ];
        this.trendDates = re.data.map(item => {
          return item._id;
        });
      });
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "舆情分析" },
      { title: "负面新闻" }
    ]);
  },
  created() {
    getNegativeTrend("美国").then(re => {
      const trendList = re.data.map(item => {
        return item.count;
      });
      this.trendList = [
        {
          name: "美国",
          data: trendList
        }
      ];
      this.trendDates = re.data.map(item => {
        return item._id;
      });
    });
  }
};
</script>

<style lang="sass" scoped></style>
