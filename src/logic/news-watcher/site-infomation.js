/*
 * @Description:网站采集管理页面API逻辑
 * @Author: akxu
 * @Date: 2021-09-23 15:30:31
 * @LastEditTime: 2021-09-23 20:03:52
 * @LastEditors: AKXU-NB1
 * @LastEditContent:
 */
import store from "@/core/services/store";
import apiService from "@/core/services/api.service";

//查询网站列表
function getSiteList(params) {
  return apiService
    .query("/siteInfo", params)
    .then(res => {
      if (res.data.status === 0) {
        return res.data.msg;
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

//更新采集网站信息
function updateSiteInfo(params) {
  return apiService
    .post("/updateSiteInfo", params)
    .then(res => {
      if (res.data.status === 0) {
        store.dispatch("snackbar/openSnackbar", {
          msg: "修改成功",
          color: "success"
        });
        return res.data.msg;
      } else {
        throw new Error("处理参数异常");
      }
    })
    .catch(e => {
      store.dispatch("snackbar/openSnackbar", {
        msg: `更新出错：${e}`,
        color: "error"
      });
      return {};
    });
}

//删除网站
function deleteSite(id) {
  return apiService
    .post("/deleteSite", id)
    .then(res => {
      if (res.data.status === 0) {
        store.dispatch("snackbar/openSnackbar", {
          msg: "删除成功",
          color: "success"
        });
        return res.data.msg;
      } else {
        throw new Error("服务处理异常");
      }
    })
    .catch(e => {
      store.dispatch("snackbar/openSnackbar", {
        msg: `删除出错：${e}`,
        color: "error"
      });
      return {};
    });
}

export { getSiteList, updateSiteInfo, deleteSite };
