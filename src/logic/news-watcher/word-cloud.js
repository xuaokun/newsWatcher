/*
 * @Description:舆情热点API逻辑
 * @Author: akxu
 * @Date: 2021-09-23 15:30:31
 * @LastEditTime: 2022-04-23 17:12:16
 * @LastEditors: AKXU-NB1
 * @LastEditContent:
 */
import store from "@/core/services/store";
import apiService from "@/core/services/api.service";

//查询关键词及其权重
function getWordsCloudData(day) {
  // function getWordsCloudData(startDate, endDate) {
  return apiService
    .query("/api/newsWatcher/getKeyWordsAndWeight", {
      params: {
        day
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
// function get24hHotNews(startDate, endDate) {
function get24hHotNews(day) {
  return apiService
    .query("/api/newsWatcher/get24hHotNews", {
      params: {
        day
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

//根据日期查询新闻
function getLatestNewsByDate(startDate, endDate, pageNumber) {
  return apiService
    .query("/api/newsWatcher/getLatestNewsByDate", {
      params: {
        startDate,
        endDate,
        pageNumber
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

export { getWordsCloudData, get24hHotNews, getLatestNewsByDate };
