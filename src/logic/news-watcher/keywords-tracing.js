/*
 * @Description:关键词追踪页面逻辑
 * @Author: akxu
 * @Date: 2021-10-08 16:48:12
 * @LastEditTime: 2021-10-10 18:07:13
 * @LastEditors: AKXU-NB1
 * @LastEditContent:
 */
import store from "@/core/services/store";
import apiService from "@/core/services/api.service";

//获取关键词top
function getConcernedData(userID, startDate, endDate) {
  return apiService
    .query("/api/newsWatcher/getUserconcernedStatistic", {
      params: {
        userID,
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

//获取关键词发展趋势
function getConcernedKeywordTrend(userID, startDate, endDate) {
  return apiService
    .query("/api/newsWatcher/getuserconcernedstatisticByDay", {
      params: {
        userID,
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

//获取用户关键词
function getConcernedKeywords(userID) {
  return apiService
    .query("/api/newsWatcher/getUserConcernedKeywords", {
      params: {
        userID
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

//更新用户关键词
function updateConcernedKeywords(params) {
  return apiService
    .post("/api2/updateUserKeywords", params)
    .then(res => {
      if (res.data.status === 0) {
        store.dispatch("snackbar/openSnackbar", {
          msg: "修改成功",
          color: "success"
        });
        return true;
      } else {
        throw new Error("处理参数异常");
      }
    })
    .catch(e => {
      store.dispatch("snackbar/openSnackbar", {
        msg: `更新出错：${e}`,
        color: "error"
      });
      return false;
    });
}

export {
  getConcernedData,
  getConcernedKeywordTrend,
  getConcernedKeywords,
  updateConcernedKeywords
};
