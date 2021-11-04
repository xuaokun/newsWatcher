<!--
 * @Description: 
 * @Author: akxu
 * @Date: 2021-10-09 22:00:02
 * @LastEditTime: 2021-11-04 22:19:06
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template>
  <!--begin::Mixed Widget 14-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title font-weight-bolder">{{ title }}</h3>
      <div class="card-toolbar">
        <!-- <Dropdown3></Dropdown3> -->
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <div class="flex-grow-1">
        <v-row>
          <v-col cols="12">
            <!-- <date-search @searchKeywords="submitSearch" /> -->
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
          </v-col>
        </v-row>
        <apexchart
          ref="lineChart"
          type="line"
          height="350"
          :options="chartOptions"
          :series="dataList"
        ></apexchart>
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 14-->
</template>

<script>
import { mapGetters } from "vuex";
import DateSearch from "@/components/DateSearch/index.vue";
export default {
  name: "LineChart",
  components: {
    // DateSearch
  },
  data() {
    return {
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          // width: [5, 7, 5],
          curve: "straight"
          // dashArray: [0, 8, 5]
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: this.nameList
        },
        grid: {
          borderColor: "#f1f1f1"
        }
      },
      companyName: ""
    };
  },
  props: {
    title: {
      type: String,
      default: "图表"
    },
    dataList: {
      type: Array,
      default: () => [
        {
          name: "Series A",
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        },
        {
          name: "Series B",
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }
      ]
    },
    nameList: {
      type: Array,
      default: () => ["a", "b", "c"]
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  watch: {
    nameList(newV) {
      this.$refs.lineChart.updateOptions({
        xaxis: {
          categories: newV
        }
      });
      // this.chartOptions.xaxis.categories = newV;//会出现折线图x轴并未改变的情况
      // this.$forceUpdate(); //强制vue示例重新渲染，只会影响实例本身和插入插槽内容的子组件，不会影响所有子组件
    }
  },
  methods: {
    submitSearch(params) {
      this.$emit("searchTrend", this.companyName);
    }
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
.col-form-label {
  margin: auto 0;
}
</style>
