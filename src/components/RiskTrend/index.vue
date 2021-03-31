<template>
  <!--begin::Charts Widget 3-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header h-auto border-0">
      <div class="card-title py-5">
        <h3 class="card-label">
          <span class="d-block text-dark font-weight-bolder">{{title}}</span>
          <!-- <span class="d-block text-muted mt-2 font-size-sm">More than 500+ new orders</span> -->
        </h3>
      </div>
      <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-dark-75" role="tablist">
          <li class="nav-item" @click="showMonth()">
            <a class="nav-link py-2 px-4" :class="{ active: this.show === this.month }" style="cursor:pointer">
              <span class="nav-text font-size-sm">月</span>
            </a>
          </li>
          <!-- <li class="nav-item" @click="showWeek()">
            <a class="nav-link py-2 px-4" :class="{ active: this.show === this.week }" style="cursor:pointer">
              <span class="nav-text font-size-sm">Week</span>
            </a>
          </li>
          <li class="nav-item" @click="showDay()">
            <a class="nav-link py-2 px-4" :class="{ active: this.show === this.day }" style="cursor:pointer">
              <span class="nav-text font-size-sm">Day</span>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body">
      <!--            <div id="kt_charts_widget_3_chart"></div>-->
      <apexchart :options="chartOptions" :series="day" type="area"></apexchart>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Charts Widget 3-->
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "RiskTrend",
    props: {
      title: {
        type: String,
        default: ''
      },
      dataList: {
        type: Array,
        default: () => [1, 2, 3]
      },
      nameList: {
        type: Array,
        default: () => ['a', 'b', 'c']
      },
    },
    data() {
      return {
        show: [],
        // chartOptions: {},
        week: [
          {
            name: "Net Profit",
            data: [60, 100, 100, 100, 60, 100]
          },
          {
            name: "Revenue",
            data: [100, 60, 100, 100, 100, 60]
          }
        ],
        month: [
          {
            name: "Net Profit",
            data: [75, 75, 60, 100, 60, 60]
          },
          {
            name: "Revenue",
            data: [100, 100, 100, 120, 100, 100]
          }
        ]
      };
    },
    // watch: {
    //   dataList: function(){
    //     console.log('watch:day变化', this.dataList)
    //     this.day = [
    //       {
    //         name: "违规统计",
    //         data: this.dataList
    //       },
    //     ]
    //   }
    // },
    computed: {
      ...mapGetters(["layoutConfig"]),
      day: function(){
        console.log('day变化', this.dataList)
        return[
          {
            name: "处罚文件个数",
            data: this.dataList
          },
          // {
          //   name: "Revenue",
          //   data: [75, 75, 60, 100, 60, 60]
          // }
        ]
      },
      chartOptions: function () {
        console.log('chartOptions变化', this.nameList)
        return {
          chart: {
            type: "area",
            height: 454,
            toolbar: {
              show: false
            }
          },
          plotOptions: {},
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            type: "solid",
            opacity: 1
          },
          stroke: {
            curve: "smooth"
          },
          xaxis: {
            categories: this.nameList,
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              style: {
                colors: this.layoutConfig("colors.gray.gray-500"),
                fontSize: "12px",
                fontFamily: this.layoutConfig("font-family")
              }
            },
            crosshairs: {
              position: "front",
              stroke: {
                color: this.layoutConfig("colors.theme.light.success"),
                width: 1,
                dashArray: 3
              }
            },
            tooltip: {
              enabled: false
            }
          },
          yaxis: {
            labels: {
              style: {
                colors: this.layoutConfig("colors.gray.gray-500"),
                fontSize: "12px",
                fontFamily: this.layoutConfig("font-family")
              }
            }
          },
          states: {
            normal: {
              filter: {
                type: "none",
                value: 0
              }
            },
            hover: {
              filter: {
                type: "none",
                value: 0
              }
            },
            active: {
              allowMultipleDataPointsSelection: false,
              filter: {
                type: "none",
                value: 0
              }
            }
          },
          tooltip: {
            style: {
              fontSize: "12px",
              fontFamily: this.layoutConfig("font-family")
            },
            y: {
              formatter: function (val) {
                return val;
              }
            }
          },
          colors: [
            this.layoutConfig("colors.theme.base.success"),
            this.layoutConfig("colors.theme.base.warning")
          ],
          grid: {
            borderColor: this.layoutConfig("colors.gray.gray-200"),
            strokeDashArray: 4,
            yaxis: {
              lines: {
                show: true
              }
            }
          },
          markers: {
            colors: [
              this.layoutConfig("colors.theme.light.success"),
              this.layoutConfig("colors.theme.light.warning")
            ],
            strokeColor: [
              this.layoutConfig("colors.theme.light.success"),
              this.layoutConfig("colors.theme.light.warning")
            ],
            strokeWidth: 3
          }
        }
      },
    },
    methods: {
      showDay() {
        this.show = this.day;
      },

      showWeek() {
        this.show = this.week;
      },

      showMonth() {
        this.show = this.month;
      }
    },
    mounted() {
      this.show = this.day;

      // reference; kt_stats_widget_7_chart
      // this.chartOptions = {
      //   chart: {
      //     type: "area",
      //     height: 454,
      //     toolbar: {
      //       show: false
      //     }
      //   },
      //   plotOptions: {},
      //   legend: {
      //     show: false
      //   },
      //   dataLabels: {
      //     enabled: false
      //   },
      //   fill: {
      //     type: "solid",
      //     opacity: 1
      //   },
      //   stroke: {
      //     curve: "smooth"
      //   },
      //   xaxis: {
      //     categories: ["2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08"],
      //     axisBorder: {
      //       show: false
      //     },
      //     axisTicks: {
      //       show: false
      //     },
      //     labels: {
      //       style: {
      //         colors: this.layoutConfig("colors.gray.gray-500"),
      //         fontSize: "12px",
      //         fontFamily: this.layoutConfig("font-family")
      //       }
      //     },
      //     crosshairs: {
      //       position: "front",
      //       stroke: {
      //         color: this.layoutConfig("colors.theme.light.success"),
      //         width: 1,
      //         dashArray: 3
      //       }
      //     },
      //     tooltip: {
      //       enabled: false
      //     }
      //   },
      //   yaxis: {
      //     labels: {
      //       style: {
      //         colors: this.layoutConfig("colors.gray.gray-500"),
      //         fontSize: "12px",
      //         fontFamily: this.layoutConfig("font-family")
      //       }
      //     }
      //   },
      //   states: {
      //     normal: {
      //       filter: {
      //         type: "none",
      //         value: 0
      //       }
      //     },
      //     hover: {
      //       filter: {
      //         type: "none",
      //         value: 0
      //       }
      //     },
      //     active: {
      //       allowMultipleDataPointsSelection: false,
      //       filter: {
      //         type: "none",
      //         value: 0
      //       }
      //     }
      //   },
      //   tooltip: {
      //     style: {
      //       fontSize: "12px",
      //       fontFamily: this.layoutConfig("font-family")
      //     },
      //     y: {
      //       formatter: function (val) {
      //         return "$" + val + " thousands";
      //       }
      //     }
      //   },
      //   colors: [
      //     this.layoutConfig("colors.theme.base.success"),
      //     this.layoutConfig("colors.theme.base.warning")
      //   ],
      //   grid: {
      //     borderColor: this.layoutConfig("colors.gray.gray-200"),
      //     strokeDashArray: 4,
      //     yaxis: {
      //       lines: {
      //         show: true
      //       }
      //     }
      //   },
      //   markers: {
      //     colors: [
      //       this.layoutConfig("colors.theme.light.success"),
      //       this.layoutConfig("colors.theme.light.warning")
      //     ],
      //     strokeColor: [
      //       this.layoutConfig("colors.theme.light.success"),
      //       this.layoutConfig("colors.theme.light.warning")
      //     ],
      //     strokeWidth: 3
      //   }
      // };
    }
  };
</script>

<style scoped>
  .card {
    height: 100%;
  }
</style>