/*
 * @Description:
 * @Author: akxu
 * @Date: 2021-07-30 19:37:55
 * @LastEditTime: 2021-09-23 20:12:45
 * @LastEditors: AKXU-NB1
 * @LastEditContent:
 */
import Vue from "vue";

var MockAdapter = require("axios-mock-adapter");

// mock testing user accounts
const users = [
  {
    email: "admin@demo.com",
    password: "demo",
    token: "mgfi5juf74j",
    companyInfo: {}
  },
  {
    email: "admin2@demo.com",
    password: "demo",
    token: "fgj8fjdfk43"
  }
];

const MockService = {
  init() {
    // this sets the mock adapter on the default instance
    var mock = new MockAdapter(Vue.axios);

    // mock login request
    mock.onPost("/login").reply(data => {
      const credential = JSON.parse(data.data);
      const found = users.find(user => {
        return (
          credential.email === user.email &&
          credential.password === user.password
        );
      });
      if (found) {
        return [200, found];
      }
      return [404, { errors: ["The login detail is incorrect"] }];
    });

    // mock to verify authentication
    mock.onGet(/\/verify\/?/).reply(data => {
      const token = data.headers.Authorization.replace("Token ", "");
      if (token !== "undefined") {
        const found = users.find(user => {
          return token === user.token;
        });
        return [200, found];
      }
      return [401, { errors: ["Invalid authentication"] }];
    });

    //mock to get company infomation
    mock.onPost("/companyInfo").reply(data => {
      const params = JSON.parse(data.data);
      console.log(params);
      return {
        status: 0,
        message: {
          nodes: [
            {
              id: "1:平坝县建设银行",
              classType: "Company",
              name: "平坝县建设银行",
              type: "国有经营单位(非法人)",
              foundTime: "1999-01-18 00:00:00",
              registerStatusStandard: "存续",
              regisCapital: 167.0,
              industry: "货币金融服务",
              area: "GZ",
              organizationCode: "5225261900002",
              ID: "平坝县建设银行",
              corporateName: "王双平"
            }
          ],
          links: []
        }
      };
    });

    let siteList = [
      {
        _id: 1,
        siteName: "搜狐新闻",
        url: "www.sohu.com",
        gatherAPI: "sohunews",
        lastGatherTime: new Date(),
        gatherFrequency: 600,
        createTime: new Date(),
        updateTime: new Date()
      },
      {
        _id: 2,
        siteName: "腾讯新闻",
        url: "www.newsqq.com",
        gatherAPI: "newsqq",
        lastGatherTime: new Date(),
        gatherFrequency: 600,
        createTime: new Date(),
        updateTime: new Date()
      },
      {
        _id: 3,
        siteName: "新华网",
        url: "www.xinhuanet.com",
        gatherAPI: "xinhuanet",
        lastGatherTime: new Date(),
        gatherFrequency: 1800,
        createTime: new Date(),
        updateTime: new Date()
      },
      {
        _id: 4,
        siteName: "央视新闻",
        url: "www.cctv.com",
        gatherAPI: "cctv",
        lastGatherTime: new Date(),
        gatherFrequency: 600,
        createTime: new Date(),
        updateTime: new Date()
      }
    ];
    //获取所有采集网站信息
    mock.onGet("/siteInfo").reply(data => {
      if (data.siteName) {
        if (data.siteName) {
          siteList = [siteList.find(item => item.siteName === data.siteName)];
        }
      }
      return [
        200,
        {
          status: 0,
          msg: {
            data: siteList,
            pageLength: 10
          }
        }
      ];
    });

    //更新采集网站信息
    mock.onPost("/updateSiteInfo").reply(data => {
      const params = JSON.parse(data.data);
      siteList.forEach(item => {
        if (item.url === params.url) {
          console.log(item);
          for (let key in params) {
            item[key] = params[key];
          }
        }
      });
      console.log(siteList);
      return [
        200,
        {
          status: 0,
          msg: {
            data: siteList,
            pageLength: 10
          }
        }
      ];
    });

    //删除采集网站
    mock.onPost("/deleteSite").reply(data => {
      const id = JSON.parse(data.data);
      siteList = siteList.filter(item => item._id !== id);
      console.log(siteList);
      return [
        200,
        {
          status: 0,
          msg: {
            data: siteList,
            pageLength: 10
          }
        }
      ];
    });
  }
};

export default MockService;
