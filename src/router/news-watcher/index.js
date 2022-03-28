/*
 * @Description:舆情监控相关页面路由配置
 * @Author: akxu
 * @Date: 2021-09-18 16:30:40
 * @LastEditTime: 2021-11-16 12:19:15
 * @LastEditors: AKXU-NB1
 * @LastEditContent:
 */
import store from "@/core/services/store";
import authMoudule from "@/core/services/store/auth.module";
export default {
  path: "/newswatcher",
  name: "newsWatcher",
  component: () => import("@/view/fkgHome"), //@为src路径
  children: [
    {
      path: "recentnews",
      name: "recentNews",
      component: () => import("@/view/news-watcher/recent-news")
    },
    {
      path: "siteinfomation",
      name: "siteInfomation",
      component: () => import("@/view/news-watcher/site-infomation"),
      beforeEnter: (to, from, next) => {
        const isAuthorized = authMoudule.state.user.isAdmin;
        if (!isAuthorized) {
          store.dispatch("snackbar/openSnackbar", {
            msg: "温馨提示：抱歉，您不是管理员，无法查看~ ",
            color: "warning"
          });
          next(false);
        } else {
          next();
        }
      }
    },
    {
      path: "wordscloud",
      name: "wordsCloud",
      component: () => import("@/view/news-watcher/words-cloud")
    },
    {
      path: "keywordstracing",
      name: "keywordsTracing",
      component: () => import("@/view/news-watcher/keywords-tracing")
    },
    {
      path: "negativetrend",
      name: "negativeTrend",
      component: () => import("@/view/news-watcher/negative-trend")
    },
    {
      path: "/newswatcher",
      redirect: "/newswatcher/wordscloud"
    }
  ]
};
