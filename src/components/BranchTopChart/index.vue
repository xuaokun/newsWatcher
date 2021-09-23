<template>
  <!--begin::Mixed Widget 14-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title font-weight-bolder">关联企业处罚状况</h3>
      <div class="card-toolbar">
        <!-- <Dropdown3></Dropdown3> -->
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <div class="flex-grow-1">
        <apexchart
          :options="chartOptions"
          :series="series"
          type="bar"
        ></apexchart>
      </div>
      <!-- <div class="pt-5">
        <p class="text-center font-weight-normal font-size-lg pb-7">
          Notes: Current sprint requires stakeholders <br />to approve newly
          amended policies
        </p>
        <a href="#" class="btn btn-success btn-shadow-hover font-weight-bolder w-100 py-3">Generate Report</a>
      </div> -->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 14-->
</template>

<script>
// import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";
import { mapGetters } from "vuex";

export default {
  name: "BranchTopChart",
  data() {
    return {
      //   series: [{
      //     data: this.dataList
      //   }],
      //   chartOptions: {
      //     chart: {
      //       type: 'bar',
      //       height: 380
      //     },
      //     plotOptions: {
      //       bar: {
      //         barHeight: '100%',
      //         distributed: true,
      //         horizontal: true,
      //         dataLabels: {
      //           position: 'bottom'
      //         },
      //       }
      //     },
      //     colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
      //       '#f48024', '#69d2e7'
      //     ],
      //     dataLabels: {
      //       enabled: true,
      //       textAnchor: 'start',
      //       style: {
      //         colors: ['#fff']
      //       },
      //       formatter: function (val, opt) {
      //         return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      //       },
      //       offsetX: 0,
      //       dropShadow: {
      //         enabled: true
      //       }
      //     },
      //     stroke: {
      //       width: 1,
      //       colors: ['#fff']
      //     },
      //     xaxis: {
      //       categories: this.nameList,
      //     },
      //     yaxis: {
      //       labels: {
      //         show: false
      //       }
      //     },
      //     title: {
      //       text: '',
      //       align: 'center',
      //       floating: true
      //     },
      //     subtitle: {
      //       text: '',
      //       align: 'center',
      //     },
      //     tooltip: {
      //       theme: 'dark',
      //       x: {
      //         show: false
      //       },
      //       y: {
      //         title: {
      //           formatter: function () {
      //             return ''
      //           }
      //         }
      //       }
      //     }
      //   },
    };
  },
  components: {
    // Dropdown3
  },
  props: {
    dataList: {
      type: Array,
      default: () => [1, 2, 3]
    },
    nameList: {
      type: Array,
      default: () => ["a", "b", "c"]
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"]),
    series: function() {
      return [
        {
          data: this.dataList
        }
      ];
    },
    chartOptions: function() {
      return {
        chart: {
          type: "bar",
          height: 380,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            barHeight: "100%",
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: "bottom"
            }
          }
        },
        colors: [
          "#33b2df",
          "#546E7A",
          "#d4526e",
          "#13d8aa",
          "#A5978B",
          "#2b908f",
          "#f9a3a4",
          "#90ee7e",
          "#f48024",
          "#69d2e7"
        ],
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"]
          },
          formatter: function(val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: this.nameList
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        title: {
          text: "",
          align: "center",
          floating: true
        },
        subtitle: {
          text: "",
          align: "center"
        },
        tooltip: {
          theme: "dark",
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function() {
                return "";
              }
            }
          }
        },
        legend: {
          show: false
        }
      };
    }
  },
  mounted() {
    // reference; kt_stats_widget_7_chart
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
