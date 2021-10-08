<!--
 * @Description: 关键词追踪
 * @Author: akxu
 * @Date: 2021-09-20 14:20:56
 * @LastEditTime: 2021-10-08 15:44:10
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <!-- <FormForWordCloudSearch @searchKeywords="submitSearch" /> -->
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-col cols="12">
        <div class="card card-custom cloud-box">
          <v-progress-linear
            :active="isLoading"
            indeterminate
            height="6"
            absolute
            rounded
          ></v-progress-linear>
          <div class="card-body">
            <div id="chart" ref="chart"></div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import FormForWordCloudSearch from "@/components/FormForWordCloudSearch/index.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import { getWordsCloudData } from "@/logic/news-watcher/word-cloud";
export default {
  components: {
    // FormForWordCloudSearch
  },
  data() {
    return {
      worddata: [],
      isLoading: true
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "舆情分析" },
      { title: "关键词追踪" }
    ]);
    let now = new Date();
    let today = this.$moment(now)
      .startOf("day")
      .toDate();
    let lastDay = this.$moment(now)
      .startOf("day")
      .subtract(100, "days")
      .toDate();
    this.getWordsCloud(lastDay, today);
  },
  methods: {
    submitSearch(dates) {
      this.isLoading = true;
      getWordsCloudData(dates[0], dates[1]).then(re => {
        this.worddata = re.data.map(item => {
          return {
            name: item[0],
            value: item[1]
          };
        });
        this.myChart.setOption({
          series: [
            {
              data: this.worddata
            }
          ]
        });
        this.isLoading = false;
      });
    },
    getWordsCloud(start, end) {
      getWordsCloudData(start, end).then(re => {
        this.worddata = re.data.map(item => {
          return {
            name: item[0],
            value: item[1]
          };
        });
        // 基于准备好的dom，初始化echarts实例
        this.myChart = this.$echarts.init(this.$refs.chart);
        // 绘制图表
        this.myChart.setOption({
          title: {
            //text: "热爱祖国",
            x: "center"
          },
          backgroundColor: "#fff",
          // tooltip: {
          //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
          // },
          series: [
            {
              type: "wordCloud",
              //用来调整词之间的距离
              gridSize: 10,
              //用来调整字的大小范围
              // Text size range which the value in data will be mapped to.
              // Default to have minimum 12px and maximum 60px size.
              sizeRange: [14, 60],
              // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
              //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
              // rotationRange: [-45, 0, 45, 90],
              // rotationRange: [ 0,90],
              rotationRange: [0, 0],
              //随机生成字体颜色
              textStyle: {
                color: function() {
                  return (
                    "rgb(" +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ")"
                  );
                }
              },
              //位置相关设置
              left: "center",
              top: "center",
              right: null,
              bottom: null,
              width: "200%",
              height: "200%",
              //数据
              data: this.worddata
            }
          ]
        });
        this.isLoading = false;
      });
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
