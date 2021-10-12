<!--
 * @Description: 关键词追踪
 * @Author: akxu
 * @Date: 2021-09-20 14:20:56
 * @LastEditTime: 2021-10-12 22:14:50
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template>
  <div>
    <v-row>
      <v-col cols="6">
        <keywords-top-chart
          title="当前关键词排行"
          :dataList="topChartValueList"
          :nameList="topChartNameList"
        />
      </v-col>
      <v-col cols="6"><concerned-keywords title="我的关键词"/></v-col>
      <v-col cols="12">
        <keywords-trend
          title="舆情发展趋势"
          :dataList="keywordTrendList"
          :nameList="trendDates"
          @searchTrend="searchTrendByDate"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import KeywordsTopChart from "@/components/BranchTopChart/index.vue";
import concernedKeywords from "@/components/concernedKeywords/index.vue";
import keywordsTrend from "@/components/LineChart/index.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import {
  getConcernedData,
  getConcernedKeywordTrend
} from "@/logic/news-watcher/keywords-tracing";
import { mapGetters } from "vuex";
export default {
  components: {
    KeywordsTopChart,
    keywordsTrend,
    concernedKeywords
  },
  data() {
    return {
      worddata: [],
      isLoading: true,
      topDataList: [],
      keywordTrendList: [],
      trendDates: []
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "舆情分析" },
      { title: "关键词追踪" }
    ]);

    this.get24HourTopData();
    this.getKeywordsTrend();
  },
  computed: {
    ...mapGetters(["currentUser"]),
    topChartNameList() {
      return this.topDataList.map(item => {
        return item.word;
      });
    },
    topChartValueList() {
      return this.topDataList.map(item => {
        return item.count;
      });
    }
  },
  methods: {
    //获取用户自定义关键词最新舆情数据
    get24HourTopData() {
      getConcernedData(this.currentUser._id).then(re => {
        this.topDataList = re.data;
      });
    },

    //获取用户自定义关键词舆情发展趋势
    getKeywordsTrend(startDate, endDate) {
      getConcernedKeywordTrend(this.currentUser._id, startDate, endDate).then(
        re => {
          this.trendDates = re.data.allDates;
          const trendData = re.data.keywordFrequency.map(item => {
            return {
              name: item.word,
              data: item.data.map(iitem => iitem.count)
            };
          });
          this.keywordTrendList = trendData;
        }
      );
    },

    //根据日期查询趋势
    searchTrendByDate(dates) {
      const dateList = dates.map(date => {
        return this.$moment(date).toDate();
      });
      this.getKeywordsTrend(...dateList);
    }
  }
};
</script>

<style lang="scss" scoped>
.cloud-box {
  height: 600px;

  #chart {
    width: 100%;
    height: 500px;
  }
}
</style>
