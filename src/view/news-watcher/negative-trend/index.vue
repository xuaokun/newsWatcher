<!--
 * @Description: 负面舆情走势
 * @Author: akxu
 * @Date: 2021-11-04 13:32:46
 * @LastEditTime: 2022-04-04 15:53:32
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="card card-custom">
          <form>
            <div class="card-body">
              <div class="form-group row">
                <label class="col-1 col-form-label">公司名称</label>
                <div class="col-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="请输入公司名称"
                    v-model="companyName"
                  />
                </div>
                <div class="col-4">
                  <button
                    type="reset"
                    class="btn btn-success mr-2"
                    @click="submitSearch"
                  >
                    检索
                  </button>
                  <button type="reset" class="btn btn-secondary">重置</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </v-col>
    </v-row>
    <!-- 信息概述 -->
    <div class="row m-0 justify-content-center">
      <div class="col-3 bg-white px-6 py-8 rounded-xl mr-7 mt-7">
        <span class="svg-icon svg-icon-3x svg-icon-info d-flex my-2"
          ><svg
            version="1.1"
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
            <title xmlns="http://www.w3.org/2000/svg">
              Stockholm-icons / Media / Equalizer
            </title>
            <desc xmlns="http://www.w3.org/2000/svg">Created with Sketch.</desc>
            <defs xmlns="http://www.w3.org/2000/svg"></defs>
            <g
              xmlns="http://www.w3.org/2000/svg"
              id="Stockholm-icons-/-Media-/-Equalizer"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <rect id="bound" x="0" y="0" width="24" height="24"></rect>
              <rect
                id="Rectangle-62-Copy"
                fill="#000000"
                opacity="0.3"
                x="13"
                y="4"
                width="3"
                height="16"
                rx="1.5"
              ></rect>
              <rect
                id="Rectangle-62-Copy-2"
                fill="#000000"
                x="8"
                y="9"
                width="3"
                height="11"
                rx="1.5"
              ></rect>
              <rect
                id="Rectangle-62-Copy-4"
                fill="#000000"
                x="18"
                y="11"
                width="3"
                height="9"
                rx="1.5"
              ></rect>
              <rect
                id="Rectangle-62-Copy-3"
                fill="#000000"
                x="3"
                y="13"
                width="3"
                height="7"
                rx="1.5"
              ></rect>
            </g>
          </svg>
          <div class="news-num">{{ totalAmount }}</div> </span
        ><a href="#" class="text-info font-weight-bold font-size-h6">
          今日相关舆情报道量
        </a>
      </div>
      <div class="col-3 bg-white px-6 py-8 rounded-xl mr-7 mt-7">
        <span class="svg-icon svg-icon-3x svg-icon-warning d-flex my-2"
          ><svg
            version="1.1"
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
            <title xmlns="http://www.w3.org/2000/svg">
              Stockholm-icons / Communication / Add-user
            </title>
            <desc xmlns="http://www.w3.org/2000/svg">Created with Sketch.</desc>
            <defs xmlns="http://www.w3.org/2000/svg"></defs>
            <g
              xmlns="http://www.w3.org/2000/svg"
              id="Stockholm-icons-/-Communication-/-Add-user"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
              <path
                d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                id="Combined-Shape"
                fill="#000000"
                fill-rule="nonzero"
                opacity="0.3"
              ></path>
              <path
                d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                id="Mask-Copy"
                fill="#000000"
                fill-rule="nonzero"
              ></path>
            </g>
          </svg>
          <div class="news-num">{{ negRatio }}</div></span
        ><a href="#" class="text-warning font-weight-bold font-size-h6 mt-2">
          今日负面舆情报道占比
        </a>
      </div>
    </div>
    <!-- <v-row>
      <v-col cols="6">
        <pie-chart title="今日舆情报道分布" :dataObj="sitesStatistic" />
      </v-col>
    </v-row> -->
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
          :showOperate="true"
          :showPagination="true"
          @getPageData="getPageData"
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
    </v-row>
  </div>
</template>

<script>
import NegativeTrend from "@/components/SearchNameLineChart/index.vue";
import PublishList from "@/components/PublishList/index.vue";
// import PieChart from "@/components/PieChart/index.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import {
  getNegativeTrend,
  getNegativeNews,
  getCompanyNewsStatistics
} from "@/logic/news-watcher/negative-trend";
export default {
  components: {
    NegativeTrend,
    PublishList
    // PieChart
  },
  data() {
    return {
      pageSize: 5,
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
          maxLen: 30,
          router: "/fkgHome/newsDetail/"
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
      pageLength: 1,
      companyName: "",
      totalAmount: 0,
      negRatio: "--",
      sitesStatistic: {}
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
        this.totalTableData = re.data;
        this.tableData = re.data.slice(0, this.pageSize);
        this.pageLength = Math.ceil(this.totalTableData.length / this.pageSize);
      });

      this.getNewsStatistics(params);
    },
    handleClickUrl(item) {
      window.open(item.item.url);
    },
    //根据关键词查询
    submitSearch() {
      this.searchTrendByDate(this.companyName);
    },
    getPageData(pageNum) {
      this.tableData = this.totalTableData.slice(
        (pageNum - 1) * this.pageSize,
        pageNum * this.pageSize
      );
    },

    getNewsStatistics(params) {
      getCompanyNewsStatistics(params).then(re => {
        this.totalAmount = re.data.total;
        this.negRatio = `${(re.data.neg * 100).toFixed(2)}%`;
        this.sitesStatistic = re.data.sitesStatistic;
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

<style lang="scss" scoped>
.form-group label {
  display: flex;
  justify-content: end;
  align-items: center;
}

.news-num {
  font-size: 40px;
  line-height: 40px;
  margin-left: 40px;
}
</style>
