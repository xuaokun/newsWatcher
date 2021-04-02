<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">{{title ? title: ''}}</span>
        <!-- <span class="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span> -->
      </h3>
      <!-- <div class="card-toolbar">
        <a href="#" class="btn btn-primary font-weight-bolder font-size-sm">New Report</a>
      </div> -->
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <!--begin::Chart-->
      <apexchart :options="chartOptions" :series="series" type="pie"></apexchart>
      <!--end::Chart-->
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
    data() {
      return {


      };
    },
    props: {
      dataObj: {
        type: Object,
        default: () => {
          return {
            nameList: [],
            numList: []
          }
        }
      },
      title: {
        type: String,
        default: ''
      }
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
      ...mapGetters(["layoutConfig"]),

      series: function () { return this.dataObj.numList ? this.dataObj.numList : [44, 55, 41, 17, 15] },
      chartOptions: function () {
        return {
          labels: this.dataObj.nameList ? this.dataObj.nameList : ['Apple', 'Mango', 'Orange', 'Watermelon'],
          colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#31326f', '#9ddfd3', '#dbf6e9', '#e4bad4', '#f6dfeb', '#edffec', '#caf7e3'],
          legend: {
            show: true,
            // floating: true,
            formatter: function (seriesName, opts) {
              if(seriesName.length < 5){
                return seriesName;
              }
              console.log(opts)
              return seriesName.slice(0,5) + '...'
            }
          }

        }
      }
    },
    mounted() {
    }
  };
</script>