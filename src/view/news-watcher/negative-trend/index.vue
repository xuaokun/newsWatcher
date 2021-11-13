<!--
 * @Description: 负面舆情走势
 * @Author: akxu
 * @Date: 2021-11-04 13:32:46
 * @LastEditTime: 2021-11-13 10:36:51
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template>
  <div>
    <v-row>
      <v-col cols="6">
        <negative-trend
          title="负面新闻趋势"
          :dataList="trendList"
          :nameList="trendDates"
          @searchTrend="searchTrendByDate"
        />
      </v-col>
      <v-col cols="6">
        <publish-list
          tableTitle="负面新闻预警"
          :tableHead="tableHead"
          :dataList="tableData"
          :pageLength="pageLength"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NegativeTrend from "@/components/SearchNameLineChart/index.vue";
import PublishList from "@/components/PublishList/index.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import {
  getNegativeTrend,
  getNegativeNews
} from "@/logic/news-watcher/negative-trend";
export default {
  components: {
    NegativeTrend,
    PublishList
  },
  data() {
    return {
      trendList: [],
      trendDates: [],
      searchTrend: [],
      tableHead: [
        {
          name: "时间",
          property: "pubdate",
          time: true
        },
        {
          name: "新闻标题",
          property: "title",
          maxLen: 30
        },
        {
          name: "操作",
          property: "oper",
          sortAble: false,
          currentSort: -1 //0代表升序
        }
      ],
      tableData: [
        {
          pubdate: 1,
          title: "小动作不断！美国海军两艘濒海战斗舰被曝近日频繁进出南海"
        },
        {
          pubdate: 2,
          title: "最新！海地7.2级地震已造成至少724人死亡"
        }
      ],
      pageLength: 1
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

      getNegativeNews(params).then(re => {
        this.tableData = re.data;
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
    // getNegativeTrend("美国").then(re => {
    //   const trendList = re.data.map(item => {
    //     return item.count;
    //   });
    //   this.trendList = [
    //     {
    //       name: "美国",
    //       data: trendList
    //     }
    //   ];
    //   this.trendDates = re.data.map(item => {
    //     return item._id;
    //   });
    // });
    this.searchTrendByDate("美国");
  }
};
</script>

<style lang="sass" scoped></style>
