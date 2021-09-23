<template>
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header h-auto border-0">
      <div class="card-title py-5">
        <h3 class="card-label">
          <span class="d-block text-dark font-weight-bolder">声誉风险图谱</span>
          <!-- <span class="d-block text-muted mt-2 font-size-sm">More than 500+ new orders</span> -->
        </h3>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <!--begin::Chart-->
      <apexchart
        :options="radarOptions"
        :series="radarSeries"
        type="radar"
      ></apexchart>
      <!--end::Chart-->
      <!--begin::Items-->
      <div class="mt-10 mb-5">
        <div class="row row-paddingless mb-10">
          <!--begin::Item-->
          <div class="col">
            <div class="d-flex align-items-center mr-2">
              <!--begin::Symbol-->
              <div
                class="symbol symbol-45 symbol-light-info mr-4 flex-shrink-0"
              >
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-lg svg-icon-info">
                    <inline-svg src="media/svg/icons/Shopping/Cart3.svg" />
                  </span>
                </div>
              </div>
              <!--end::Symbol-->
              <!--begin::Title-->
              <div>
                <div class="font-size-h4 text-dark-75 font-weight-bolder">
                  企业分值：60
                </div>
              </div>
              <!--end::Title-->
            </div>
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="col">
            <div class="d-flex align-items-center mr-2">
              <!--begin::Symbol-->
              <div
                class="symbol symbol-45 symbol-light-danger mr-4 flex-shrink-0"
              >
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-lg svg-icon-danger">
                    <inline-svg src="media/svg/icons/Home/Library.svg" />
                  </span>
                </div>
              </div>
              <!--end::Symbol-->
              <!--begin::Title-->
              <div>
                <div class="font-size-h4 text-dark-75 font-weight-bolder">
                  行业平均分值：50
                </div>
              </div>
              <!--end::Title-->
            </div>
          </div>
          <!--end::Item-->
        </div>
      </div>
      <!--end::Items-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
// import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";
import { mapGetters } from "vuex";

export default {
  name: "RiskDistribution",
  components: {
    // Dropdown3
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      chartOptions: {},
      series: [60, 50, 75, 80],
      radarOptions: {
        chart: {
          type: "radialBar",
          // height: 454,
          toolbar: {
            show: false
          }
        },
        series: [
          {
            name: "企业分值",
            data: [45, 52, 38, 24, 33]
          },
          {
            name: "行业分值",
            data: [26, 21, 20, 6, 8]
          }
        ],
        labels: ["处罚文件", "违规案例", "企业规模", "盈利能力", "舆情管控"]
      },
      radarSeries: [
        {
          name: "企业分值",
          data: [45, 52, 38, 24, 33]
        },
        {
          name: "行业分值",
          data: [26, 21, 20, 6, 8]
        }
      ]
    };
  },
  methods: {
    lastElement(i) {
      if (i === this.list.length - 1) {
        return false;
      } else {
        return true;
      }
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {
    this.chartOptions = {
      chart: {
        height: 200,
        type: "radialBar",
        toolbar: {
          show: false
        }
      },

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "30%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
              fontWeight: "700"
            },
            value: {
              color: this.layoutConfig("colors.gray.gray-700"),
              fontSize: "18px",
              fontWeight: "700",
              offsetY: 10,
              show: true
            },
            total: {
              show: true,
              label: "Total",
              fontWeight: "bold",
              formatter: function() {
                return "60%";
              }
            }
          },
          track: {
            background: this.layoutConfig("colors.gray.gray-100"),
            strokeWidth: "100%"
          }
        }
      },
      colors: [
        this.layoutConfig("colors.theme.base.info"),
        this.layoutConfig("colors.theme.base.danger"),
        this.layoutConfig("colors.theme.base.success"),
        this.layoutConfig("colors.theme.base.primary")
      ],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
