<!--
 * @Description: 
 * @Author: akxu
 * @Date: 2021-09-20 17:53:04
 * @LastEditTime: 2022-05-16 12:13:36
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template lang="">
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="dateRangeText"
          label="选择时间范围"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="dates"
        no-title
        scrollable
        range
        :first-day-of-week="0"
        locale="zh-cn"
        @input="dateInputChange"
      >
        <v-spacer></v-spacer>
      </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "DateSearch",
  data() {
    return {
      dates: [
        this.$moment()
          .startOf("day")
          .subtract(7, "days")
          .format("YYYY-MM-DD"),
        this.$moment()
          .startOf("day")
          .format("YYYY-MM-DD")
      ],
      datePickerShow: false,
      menu: false
    };
  },
  props: {
    initData: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    dateRangeText: {
      get: function() {
        return this.dates.join(" ~ ");
      },
      set: function(val) {
        return val;
      }
    }
  },
  methods: {
    onDateFocus() {
      if (!this.datePickerShow) {
        this.datePickerShow = true;
      }
    },

    dateInputChange() {
      if (this.dates.length === 2) {
        this.menu = false;
        this.$emit("searchKeywords", this.dates);
      }
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
