<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <div class="card-title font-weight-bolder">
        <div class="card-label">
          Weekly Sales Stats
          <div class="font-size-sm text-muted mt-2">890,344 Sales</div>
        </div>
      </div>
      <div class="card-toolbar">
        <Dropdown3></Dropdown3>
      </div>
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
  import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";
  import { mapGetters } from "vuex";

  export default {
    name: "RiskDistribution",
    components: {
      Dropdown3
    },
    data() {
      return {
        series: [44, 55, 41, 17, 15],
        chartOptions: {
          labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
        }

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
    }
  };
</script>