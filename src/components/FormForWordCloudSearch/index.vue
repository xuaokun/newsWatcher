<!--
 * @Description: 
 * @Author: akxu
 * @Date: 2021-09-20 17:53:04
 * @LastEditTime: 2021-10-06 20:58:02
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template lang="">
  <div class="card card-custom">
    <!--begin::Header-->
    <!-- <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">检索条件</span>
      </h3>
    </div> -->
    <!--end::Header-->

    <!--begin::Form-->
    <form>
      <div class="card-body">
        <div class="form-group row">
          <div class="col-3">
            <v-text-field
              @focus="onDateFocus"
              v-model="dateRangeText"
              label="时间范围"
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>
            <div class="date-picker" v-show="datePickerShow">
              <v-date-picker
                @change="onDateChange"
                v-model="dates"
                :first-day-of-week="0"
                locale="zh-cn"
                range
              ></v-date-picker>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormForSiteInfomationSearch",
  data() {
    return {
      dates: [
        this.$moment()
          .startOf("day")
          .subtract(100, "days")
          .format("YYYY-MM-DD"),
        this.$moment()
          .startOf("day")
          .format("YYYY-MM-DD")
      ],
      datePickerShow: false
    };
  },
  props: {
    initData: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },
  methods: {
    onDateFocus() {
      if (!this.datePickerShow) {
        this.datePickerShow = true;
      }
    },

    onDateChange() {
      this.datePickerShow = false;
      this.$emit("searchKeywords", this.dates);
    }
  }
};
</script>
<style lang="scss" scoped>
.col-form-label {
  margin: auto 0;
}

.date-picker {
  float: right;
}
</style>
