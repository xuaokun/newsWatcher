<!--
 * @Description: 舆情热点
 * @Author: akxu
 * @Date: 2021-09-20 14:20:56
 * @LastEditTime: 2022-04-23 17:25:02
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <!-- <form-for-word-cloud-search @searchKeywords="submitSearch" /> -->
        <div class="card-toolbar">
          <ul class="nav nav-pills nav-pills-sm nav-dark-75">
            <li class="nav-item">
              <a
                class="nav-link py-2 px-4"
                data-toggle="tab"
                :class="{ active: this.show === 'month' }"
                href="#kt_tab_pane_2_1"
                @click="show = 'month'"
                >近一个月</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link py-2 px-4"
                data-toggle="tab"
                :class="{ active: this.show === 'week' }"
                href="#kt_tab_pane_2_2"
                @click="show = 'week'"
                >近一周</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link py-2 px-4"
                data-toggle="tab"
                :class="{ active: this.show === 'day' }"
                href="#kt_tab_pane_2_3"
                @click="show = 'day'"
                >近一天</a
              >
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <!-- <v-col cols="12">
        <publish-list
          tableTitle="舆情列表"
          :tableHead="newsTableHead"
          :dataList="tableData"
          :pageLength="pageLength"
          :showOperate="false"
        >
          <template v-slot:operations="slotProps">
            <div
              @click="handleClickUrl(slotProps)"
              class="btn btn-icon btn-light btn-hover-primary btn-sm"
            >
              <span class="svg-icon svg-icon-md svg-icon-primary">
                <inline-svg src="media/svg/misc/015-telegram.svg" />
              </span>
            </div>
          </template>
        </publish-list>
      </v-col> -->

      <v-col cols="6">
        <publish-list
          tableTitle="舆情热点"
          :tableHead="tableHead"
          :dataList="tableData"
          :pageLength="pageLength"
          :showOperate="false"
        >
          <template v-slot:operations="slotProps">
            <div
              @click="handleClickUrl(slotProps)"
              class="btn btn-icon btn-light btn-hover-primary btn-sm"
            >
              <span class="svg-icon svg-icon-md svg-icon-primary">
                <inline-svg src="media/svg/misc/015-telegram.svg" />
              </span>
            </div>
          </template>
        </publish-list>
      </v-col>
      <v-col cols="6">
        <div class="card card-custom cloud-box">
          <v-progress-linear
            :active="isLoading"
            indeterminate
            height="6"
            absolute
            rounded
          ></v-progress-linear>
          <!--begin::Header-->
          <div class="card-header border-0 py-5">
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label font-weight-bolder text-dark"
                >关键词TOP</span
              >
            </h3>
          </div>
          <!--end::Header-->
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
import PublishList from "@/components/PublishList/index.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import {
  getWordsCloudData,
  get24hHotNews,
  getLatestNewsByDate
} from "@/logic/news-watcher/word-cloud";
export default {
  components: {
    // FormForWordCloudSearch,
    PublishList
  },
  data() {
    return {
      worddata: [
        {
          name: "审批",
          value: 2500
        },
        {
          name: "佣金",
          value: 2300
        },
        {
          name: "发票",
          value: 2000
        },
        {
          name: "扶贫金额",
          value: 1900
        },
        {
          name: "增值税",
          value: 1800
        },
        {
          name: "差旅费",
          value: 1700
        },
        {
          name: "核算",
          value: 1600
        },
        {
          name: "商旅单",
          value: 1500
        },
        {
          name: "报销",
          value: 1200
        },
        {
          name: "交通费",
          value: 1100
        },
        {
          name: "业务招待费",
          value: 900
        },
        {
          name: "水费",
          value: 800
        },
        {
          name: "电费",
          value: 700
        }
      ],
      isLoading: true,
      tableHead: [
        {
          name: "排名",
          property: "rankNumber"
        },
        {
          name: "热点话题",
          property: "title",
          maxLen: 30,
          router: "/newswatcher/newsdetail/"
        },
        {
          name: "话题数",
          property: "memberCount"
        },
        {
          name: "话题区间",
          property: "clusterPublishtimeRange"
        }
      ],
      tableData: [
        {
          rankNumber: 1,
          title: "小动作不断！美国海军两艘濒海战斗舰被曝近日频繁进出南海"
        },
        {
          rankNumber: 2,
          title: "最新！海地7.2级地震已造成至少724人死亡"
        }
      ],
      newsTableHead: [
        {
          name: "标题",
          property: "title",
          router: "/newswatcher/newsdetail/"
        },
        {
          name: "关键词",
          property: "keywords"
        },
        {
          name: "发表时间",
          property: "pubdate",
          maxLen: 30
        },
        {
          name: "作者",
          property: "author"
        },
        {
          name: "来源网站",
          property: "siteName"
        }
      ],
      newsTableData: [],
      newsPageLength: 1,
      pageLength: 1,
      show: "day"
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "舆情分析" },
      { title: "舆情热点" }
    ]);
    let now = new Date();
    let today = this.$moment(now)
      .startOf("day")
      .toDate();
    let lastDay = this.$moment(now)
      .startOf("day")
      .subtract(7, "days")
      .toDate();
    this.getWordsCloud(1);
    get24hHotNews(1).then(re => {
      this.tableData = re.data;
    });
    getLatestNewsByDate(lastDay, today, 1).then(re => {
      console.log(re);
    });
  },
  watch: {
    show(val) {
      console.log(val);
      if (val === "day") {
        this.getWordsCloud(1);
        get24hHotNews(1).then(re => {
          this.tableData = re.data;
        });
      } else if (val === "week") {
        this.getWordsCloud(7);
        get24hHotNews(7).then(re => {
          this.tableData = re.data;
        });
      } else if (val === "month") {
        this.getWordsCloud(30);
        get24hHotNews(30).then(re => {
          this.tableData = re.data;
        });
      }
    }
  },
  methods: {
    submitSearch(dates) {
      this.isLoading = true;
      //词云数据
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
      //热点舆情
      get24hHotNews(dates[0], dates[1]).then(re => {
        this.tableData = re.data;
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
              width: "100%",
              height: "100%",
              //数据
              data: this.worddata
            }
          ]
        });
        this.isLoading = false;
      });
    },
    handleClickUrl(item) {
      console.log(item);
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

.card-toolbar {
  display: flex;
  .nav {
    margin-left: auto;
  }
}
</style>
