<template>
  <div>
    <!-- <v-row>
            <v-col cols="12">
                <v-btn-toggle v-model="text" tile color="#3699FF" group>
                    <v-btn value="left">
                        Left
                    </v-btn>

                    <v-btn value="center">
                        Center
                    </v-btn>

                    <v-btn value="right">
                        Right
                    </v-btn>

                    <v-btn value="justify">
                        Justify
                    </v-btn>

                    <v-btn value="justify1">
                        Justify1
                    </v-btn>

                    <v-btn value="justify2">
                        Justify2
                    </v-btn>

                    <v-btn value="justify3">
                        Justify3
                    </v-btn>

                    <v-btn value="justify4">
                        Justify4
                    </v-btn>

                    <v-btn value="justify5">
                        Justify5
                    </v-btn>

                    <v-btn value="justify6">
                        Justify6
                    </v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row> -->
    <div class="row">
      <!-- <div class="col-lg-3">
                <AsideMenu />
            </div> -->
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-8">
            <!--begin::Card-->
            <div class="card card-custom card-stretch" id="kt_todo_view">
              <!--begin::Header-->
              <div class="card-header border-0 py-5">
                <h3 class="card-title align-items-start flex-column">
                  <span class="card-label font-weight-bolder text-dark"
                    >报道正文</span
                  >
                </h3>
              </div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body p-0">
                <!--begin::Header-->
                <div
                  class="
                    d-flex
                    align-items-center
                    justify-content-between
                    flex-wrap
                    card-spacer-x
                    py-3
                  "
                >
                  <!--begin::Title-->
                  <div class="d-flex flex-column mr-2 py-2">
                    <a
                      target="_blank"
                      :href="
                        detailInfo && detailInfo.url ? detailInfo.url : '#'
                      "
                      class="
                        text-dark text-hover-primary
                        font-weight-bold font-size-h4
                        mr-3
                      "
                      >{{
                        detailInfo && detailInfo.title ? detailInfo.title : "-"
                      }}</a
                    >
                    <!-- <div class="d-flex align-items-center py-1">
                                            <a href="#"
                                                class="d-flex align-items-center text-muted text-hover-primary mr-2">
                                                <span class="fa fa-genderless text-danger icon-md mr-2"></span>现行有效</a>
                                            <a href="#" class="d-flex align-items-center text-muted text-hover-primary">
                                                <span
                                                    class="fa fa-genderless text-success icon-md mr-2"></span>2017年颁布</a>
                                        </div> -->
                  </div>
                  <!--end::Title-->
                  <!--begin::Toolbar-->
                  <!-- <div class="d-flex py-2">
                                        <span class="btn btn-default btn-sm btn-icon" data-dismiss="modal">
                                            <i class="flaticon2-fax"></i>
                                        </span>
                                    </div> -->
                  <!--end::Toolbar-->
                </div>
                <!--end::Header-->

                <!-- 以下为正文内容 -->
                <!--begin::Messages-->
                <div class="mb-3">
                  <!--begin::Message-->
                  <div class="cursor-pointer toggle-on" data-inbox="message">
                    <!--begin::Comment-->
                    <div class="card-spacer-x pt-2 pb-5 toggle-off-item">
                      <!--begin::Text-->
                      <div class="mb-1">
                        <p
                          v-html="
                            detailInfo && detailInfo.content
                              ? detailInfo.content
                              : ''
                          "
                        ></p>
                        <!-- <p>关于对海通证券股份有限公司及曾军、周威采取出具警示函监管措施的决定(2020-12-24)

                                                    一、案情简介

                                                    经查，中国证监会发现海通证券股份有限公司及曾军、周威在保荐四方光电股份有限公司（以下简称发行人）首次公开发行股票并上市过程中，在首次提交的保荐工作报告等材料中未披露发行人实际控制人熊友辉涉嫌行贿的事项。

                                                    上述行为违反了《证券发行上市保荐业务管理办法》（证监会令第137号）第四条的规定。



                                                    二、纪律处分及监管措施

                                                    按照《证券发行上市保荐业务管理办法》第六十二条的规定，中国证监会决定对海通证券股份有限公司及曾军、周威采取出具警示函的监督管理措施。



                                                    三、申辩情况

                                                    无申辩



                                                    相关附件：

                                                    关于对海通证券股份有限公司及曾军、周威采取出具警示函监管措施的决定 </p> -->
                      </div>
                      <!--end::Text-->
                      <!--begin::Attachments-->
                      <div
                        class="d-flex flex-column font-size-sm font-weight-bold"
                      >
                        <div v-for="law in relationLaw" :key="law._source">
                          <router-link
                            v-if="law._source"
                            :to="'/fkgHome/lawDetail/' + law._source"
                            class="
                              d-flex
                              align-items-center
                              text-muted text-hover-primary
                              py-1
                            "
                          >
                            <span
                              class="
                                flaticon2-clip-symbol
                                text-warning
                                icon-1x
                                mr-2
                              "
                            ></span
                            >{{ law.name }}
                          </router-link>
                        </div>
                      </div>
                      <!--end::Attachments-->
                    </div>
                    <!--end::Comment-->
                  </div>
                  <!--end::Message-->
                </div>
                <!--end::Messages-->
              </div>
              <!--end::Body-->
            </div>
            <!--end::Card-->

            <publish-list
              tableTitle="情感分析"
              :tableHead="tableHead"
              :dataList="tableData"
              class="list-box"
            />
          </div>
          <div class="col-lg-4">
            <div class="card card-custom cloud-box">
              <v-progress-linear
                :active="isLoading"
                indeterminate
                height="6"
                absolute
                rounded
              ></v-progress-linear>
              <!--begin::Header-->
              <div class="card-header border-0 py-5">
                <h3 class="card-title align-items-start flex-column">
                  <span class="card-label font-weight-bolder text-dark"
                    >关键词TOP</span
                  >
                </h3>
              </div>
              <!--end::Header-->
              <div class="card-body">
                <div id="chart" ref="chart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import PublishList from "@/components/PublishList";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
// import PublishList from "@/components/PublishObjectList";
// import AsideMenu from "@/components/Aside/Aside";

export default {
  name: "PunishmentDetail",
  components: {
    // AsideMenu,
    PublishList
  },
  computed: {
    ...mapGetters(["currentUserPhoto"])
  },
  data() {
    return {
      tableHead: [
        {
          name: "相关实体",
          router: "/fkgHome/home/",
          property: "entityName",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "出现频次",
          property: "totalCount",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "负面统计",
          property: "negativeCount",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "主要情感",
          property: "mainSentiment",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "可信度",
          property: "precision",
          sortAble: true,
          currentSort: -1 //0代表升序
        }
      ],
      tableData: [],
      relationEventsAndCase: {},
      eventInfoList: [],
      caseInfoList: [],
      detailInfo: null,
      relationLaw: [],
      isLoading: true
    };
  },
  props: ["newsId"],
  // watch: {
  //   $route: {
  //     handler() {
  //       console.log("router参数", this.$route);
  //       this.detailInfo = this.$route.query.info;
  //     }
  //   }
  // },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "报道详情" }]);
    this.getWordsCloud(this.detailInfo.keywords);
  },
  created() {
    console.log(this.$route.query);
    //查看是否含有其他页面的传参;
    if (!this.$route.query.info) {
      const id = this.$route.query;
    }
    this.detailInfo = this.$route.query.info;
    console.log(this.$route.query);
    this.getSentimentByDetail();
    //没有参数则请求数据
    //不用路由传参，直接接口获取
    // this.getDetailInfo().then(() => {
    //   this.relationLaw = this.detailInfo.lawInfos
    //     ? this.detailInfo.lawInfos
    //     : [];
    //   console.log("相关法律", this.relationLaw);
    //   let list = [];
    //   let name = this.detailInfo.punishedOrgan
    //     ? this.detailInfo.punishedOrgan.name
    //     : "-";
    //   let objType = "-";
    //   let reason = this.detailInfo.decisionResion;
    //   let punishmentType = this.detailInfo.punishedOrgan
    //     ? this.detailInfo.punishedOrgan.type
    //     : "-";
    //   let decisonName = this.detailInfo.decisionOrganName.name;
    //   list.push({
    //     name,
    //     objType,
    //     reason,
    //     punishmentType,
    //     decisonName
    //   });
    //   if (this.detailInfo.punishedPersons) {
    //     for (let person of this.detailInfo.punishedPersons) {
    //       list.push({
    //         name: person.name,
    //         objType: "-",
    //         reason,
    //         punishmentType: person.type,
    //         decisonName
    //       });
    //     }
    //   }
    //   this.tableData = list;
    //   this.getRelationEvents();
    // });
  },
  methods: {
    //整理情感分析列表数据、
    getSentimentByDetail() {
      const entitySentimentList = this.detailInfo.entitySentiment;
      this.tableData = entitySentimentList.map(item => {
        const mainSentiment = item.mainSentiment;
        let precision = "--";
        if (mainSentiment === 0) {
          precision = `${((item.negtiveCount / item.totalLength) * 100).toFixed(
            2
          )}%`;
        } else {
          precision = `${(
            (item.positiveCount / item.totalLength) *
            100
          ).toFixed(2)}%`;
        }
        return {
          entityName: item.entity,
          totalCount: item.totalLength,
          negativeCount: `${item.negtiveCount}(${(
            (item.negtiveCount / item.totalLength) *
            100
          ).toFixed(2)}%)`,
          mainSentiment: item.mainSentiment === 0 ? "负面" : "非负面",
          precision: precision
        };
      });
    },

    //渲染词云图
    getWordsCloud(keywordsList) {
      this.worddata = keywordsList.map(item => {
        return {
          name: item[0],
          value: item[1]
        };
      });
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(this.$refs.chart);
      // 绘制图表
      this.myChart.setOption({
        title: {
          //text: "热爱祖国",
          x: "center"
        },
        backgroundColor: "#fff",
        // tooltip: {
        //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        // },
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [14, 60],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            textStyle: {
              color: function() {
                return (
                  "rgb(" +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ")"
                );
              }
            },
            //位置相关设置
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "100%",
            height: "100%",
            //数据
            data: this.worddata
          }
        ]
      });
      this.isLoading = false;
    },
    //获取处罚详情
    async getDetailInfo() {
      let res = await this.axios.post("/api/sykg/query/punish_infos/basic", {
        IDs: [this.punishmentId]
      });
      console.log("获取处罚详情", res.data);
      if (res.data.status == 0 && res.data.message.data[0]) {
        console.log(res.data.message.data);
        //获取相关法律
        let res02 = await this.axios.post(
          "/api/sykg/query/punish_infos/lawrelated",
          res.data.message.data[0]
        );
        // console.log('获取相关法规', res02.data)
        if (res02.data.status == 0) {
          this.detailInfo = res02.data.message;
        }
      }
    },
    getRelationEvents() {
      this.axios
        .post("/api/sykg/query/punish_infos/related", {
          punishName: this.detailInfo.title
        })
        .then(data => {
          console.log(data);
          if (data.data.status == 0) {
            this.relationEventsAndCase = data.data.message.data;
            console.log(this.relationEventsAndCase);
            let eventIDs = Object.keys(this.relationEventsAndCase.events); //获取事件信息
            if (eventIDs && eventIDs.length > 0) {
              return this.axios.post(
                "/api/sykg/query/events_infos/basicbyeventID",
                {
                  IDs: eventIDs
                }
              );
            }
          }
        })
        .then(data => {
          console.log("案例详情");
          console.log(data);
          if (data && data.data && data.data.status == 0) {
            this.eventInfoList = data.data.message.data;
          }

          //获取案例信息
          // console.log(this.relationEventsAndCase)
          let caseIDs = Object.keys(this.relationEventsAndCase.case); //获取事件信息
          console.log(caseIDs);
          if (caseIDs && caseIDs.length > 0) {
            let params = {
              ID: caseIDs,
              startTime: {},
              endTime: {},
              or: { content: [], title: [] },
              and: { subject: [], caseType: [] }
            };
            return this.axios.post(
              "/api/sykg/query/case_infos/keywords",
              params
            );
          }
        })
        .then(data => {
          console.log("案例详情");
          console.log(data);
          if (data && data.data && data.data.status == 0) {
            this.caseInfoList = data.data.message.data[0]
              ? [data.data.message.data[0]]
              : [];
          }
        });
    },
    createdSnackbar() {
      console.log("显示提示");
      this.$store.dispatch("snackbar/openSnackbar", {
        msg: "温馨提示：抱歉，暂无企业数据，后台将尽快更新，换个企业试试~ ",
        color: "warning"
      });
    },
    checkHaveCompany(item, next) {
      let that = this;
      if (item.length < 4) {
        that.createdSnackbar();
        next(false);
      }
      this.axios
        .post("/api/sykg/query/company_detail/alias", {
          searchName: item,
          size: 6
        })
        .then(res => {
          console.log(res);
          let status = res.data.status;
          // console.log(status);
          if (status == 0 && res.data.message.data.length > 0) {
            item = res.data.message.data[0].name;
            console.log(item);
            return this.axios.post("/api/sykg/query/company_detail", {
              params: { name: item },
              label: "Company"
            });
          } else {
            that.createdSnackbar();
          }
        })
        .then(data => {
          if (!data) return;
          console.log("Here what post returns", data);
          let status = data.data.status;
          // console.log(status);
          if (
            status == 0 &&
            data.data.message.nodes[0] &&
            data.data.message.nodes[0].organizationCode
          ) {
            console.log("信息存在");
            next({});
          } else {
            that.createdSnackbar();
            next(false);
          }
        })
        .catch(e => {
          console.log(e);
          next(false);
        });
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("路由>>>", to);
    if (to.path != "/fkgHome/home") {
      next();
      return;
    }
    if (to.query.info && to.query.info.name) {
      let item = to.query.info.name;
      this.checkHaveCompany(item, next);
    }
  }
};
</script>
<style lang="scss" scoped>
.row:nth-of-type(2),
.history-timeline,
.relative-events {
  margin-top: 20px;
}

.form-group label {
  align-self: center;
}

.row {
  align-items: flex-start;
}

.case-box {
  margin-top: 10px;
}

.list-box {
  margin-top: 10px;
}

.cloud-box {
  height: 300px;

  #chart {
    width: 100%;
    height: 200px;
  }
}
</style>
