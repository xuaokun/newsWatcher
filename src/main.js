/*
 * @Description:
 * @Author: akxu
 * @Date: 2021-07-30 19:37:55
 * @LastEditTime: 2021-10-06 21:58:31
 * @LastEditors: AKXU-NB1
 * @LastEditContent:
 */
import Vue from "vue";
import * as echarts from "echarts";
import App from "./App.vue";
import router from "./router";
import store from "@/core/services/store";
import ApiService from "@/core/services/api.service";
import Moment from "moment";
// import MockService from "@/core/mock/mock.service";
import { VERIFY_AUTH } from "@/core/services/store/auth.module";
import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";

Vue.prototype.$echarts = echarts;
// 定义全局时间戳过滤器
Vue.filter("formatDate", function(value) {
  console.log(value);
  return Moment(value).format("YYYY年M月D日");
});

Vue.filter("ellipsis", function(value) {
  if (!value) return "";
  if (value.length > 100) {
    return value.slice(0, 100) + "...";
  }
  return value;
});

Vue.prototype.$moment = Moment;

// Vue.prototype.$moment = moment;//赋值使用

Vue.config.productionTip = false;

// Global 3rd party plugins
import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

// Vue 3rd party plugins
import i18n from "@/core/plugins/vue-i18n";
import vuetify from "@/core/plugins/vuetify";
import "@/core/plugins/portal-vue";
import "@/core/plugins/bootstrap-vue";
import "@/core/plugins/perfect-scrollbar";
import "@/core/plugins/highlight-js";
import "@/core/plugins/inline-svg";
import "@/core/plugins/apexcharts";
import "@/core/plugins/treeselect";
import "@/core/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";
import "@/core/plugins/formvalidation";

// API service init
ApiService.init();

// Remove this to disable mock API
// MockService.init();

router.beforeEach((to, from, next) => {
  // Ensure we checked auth before each page load.
  Promise.all([store.dispatch(VERIFY_AUTH)])
    .then(next)
    .catch(() => {
      next({ path: "/login" });
    });

  // reset config to initial state
  store.dispatch(RESET_LAYOUT_CONFIG);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

// console.log = function() {};

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
