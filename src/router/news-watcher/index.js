/*
 * @Description:舆情监控相关页面路由配置
 * @Author: akxu
 * @Date: 2021-09-18 16:30:40
 * @LastEditTime: 2021-10-05 20:57:46
 * @LastEditors: AKXU-NB1
 * @LastEditContent:
 */
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
      component: () => import("@/view/news-watcher/siteinfomation")
    },
    {
      path: "wordscloud",
      name: "wordsCloud",
      component: () => import("@/view/news-watcher/wordsCloud")
    },
    {
      path: "/newswatcher",
      redirect: "/newswatcher/siteinfomation"
    }
  ]
};
