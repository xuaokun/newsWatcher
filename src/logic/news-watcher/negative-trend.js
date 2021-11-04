/*
 * @Description: 负面新闻趋势
 * @Author: akxu
 * @Date: 2021-11-04 17:40:16
 * @LastEditTime: 2021-11-04 17:44:57
 * @LastEditors: AKXU-NB1
 * @LastEditContent:
 */
import apiService from "@/core/services/api.service";
import store from "@/core/services/store";

//获取负面新闻发展趋势
function getNegativeTrend(companyName) {
  return apiService
    .query("/api/newsWatcher/getMyCompanyNegative", {
      params: {
        companyName
      }
    })
    .then(res => {
      if (res.data.status === 0) {
        return res.data.msg;
      } else {
        throw new Error(`处理参数异常${res.data.info}`);
      }
    })
    .catch(e => {
      store.dispatch("snackbar/openSnackbar", {
        msg: `查询出错：${e}`,
        color: "error"
      });
      return {};
    });
}

export { getNegativeTrend };