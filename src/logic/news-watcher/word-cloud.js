/*
 * @Description:舆情热点API逻辑
 * @Author: akxu
 * @Date: 2021-09-23 15:30:31
 * @LastEditTime: 2021-11-11 23:25:23
 * @LastEditors: AKXU-NB1
 * @LastEditContent:
 */
import store from "@/core/services/store";
import apiService from "@/core/services/api.service";

//查询关键词及其权重
function getWordsCloudData(startDate, endDate) {
  return apiService
    .query("/api/newsWatcher/getKeyWordsAndWeight", {
      params: {
        startDate,
        endDate
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

//查询热点新闻
function get24hHotNews(startDate, endDate) {
  return apiService
    .query("/api/newsWatcher/get24hHotNews", {
      params: {
        startDate,
        endDate
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

export { getWordsCloudData, get24hHotNews };
