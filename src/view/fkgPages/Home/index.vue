<template>
  <div>
    <!--begin::Card-->
    <div
      class="card card-custom gutter-b"
      v-if="JSON.stringify(companyInfo) != '{}'"
    >
      <div class="card-body">
        <!--begin::Details-->
        <div class="d-flex mb-9">
          <!--begin: Pic-->
          <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
            <div class="symbol symbol-50 symbol-lg-120">
              <img :src="companyInfo.img" alt="image" />
            </div>

            <div class="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
              <span class="font-size-h3 symbol-label font-weight-boldest"
                >JM</span
              >
            </div>
          </div>
          <!--end::Pic-->

          <!--begin::Info-->
          <div class="flex-grow-1">
            <!--begin::Title-->
            <div class="d-flex justify-content-between flex-wrap mt-1">
              <div class="d-flex mr-3">
                <a
                  href="#"
                  class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3"
                  >{{ companyInfo.name }}</a
                >
                <a href="#"
                  ><i class="flaticon2-correct text-success font-size-h5"></i
                ></a>
              </div>

              <div class="my-lg-0 my-3">
                <a
                  href="#"
                  class="btn btn-sm btn-light-success font-weight-bolder text-uppercase mr-3"
                  >收藏</a
                >
                <!-- <a href="#" class="btn btn-sm btn-info font-weight-bolder text-uppercase">hire</a> -->
              </div>
            </div>
            <!--end::Title-->

            <!--begin::Content-->
            <div class="d-flex flex-wrap justify-content-between mt-1">
              <div class="d-flex flex-column flex-grow-1 pr-8">
                <div class="d-flex flex-wrap mb-4">
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
                    ><i class="flaticon2-new-email mr-2 font-size-lg"></i
                    >{{ companyInfo.companyCreditCode }}</a
                  >
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
                    ><i class="flaticon2-calendar-3 mr-2 font-size-lg"></i
                    >{{ companyInfo.corporateName }}
                  </a>
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold"
                    ><i class="flaticon2-placeholder mr-2 font-size-lg"></i
                    >{{ companyInfo.type }}</a
                  >
                </div>
              </div>
            </div>
            <!--end::Content-->

            <div class="d-flex flex-wrap justify-content-between mt-1">
              <div class="d-flex flex-column flex-grow-1 pr-8">
                <div class="d-flex flex-wrap mb-4">
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
                    ><i class="flaticon-home-1 mr-2 font-size-lg"></i
                    >{{ companyInfo.industry }}</a
                  >
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
                    ><i class="flaticon2-calendar-3 mr-2 font-size-lg"></i
                    >{{ companyInfo.registerStatusStandard }}
                  </a>
                  <!-- 注册资金 -->
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold"
                    ><i class="flaticon-coins mr-2 font-size-lg"></i
                    >{{
                      companyInfo.regisCapital == 0
                        ? "-"
                        : companyInfo.regisCapital + "万元"
                    }}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!--end::Info-->
        </div>
        <!--end::Details-->

        <div class="separator separator-solid"></div>

        <!--begin::Items-->
        <div class="d-flex align-items-center flex-wrap mt-8">
          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-alarm display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column flex-lg-fill">
              <span class="text-dark-75 font-weight-bolder font-size-sm"
                >{{ relationPunishmentCnt }} 相关处罚
              </span>
              <router-link
                :to="{
                  path: '/fkgHome/punishmentSearch',
                  query: { companyName: companyInfo.name }
                }"
                class="text-primary font-weight-bolder"
                >查看</router-link
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-interface-3 display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column flex-lg-fill">
              <span class="text-dark-75 font-weight-bolder font-size-sm"
                >{{ relationCaseCnt }} 相关案例</span
              >
              <router-link
                :to="{
                  path: '/fkgHome/eventsSearch',
                  query: { companyName: companyInfo.name }
                }"
                class="text-primary font-weight-bolder"
                >查看</router-link
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-file-2 display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column">
              <span class="text-dark-75 font-weight-bolder font-size-sm"
                >{{ relationEventCnt }} 相关事件</span
              >
              <router-link
                :to="{
                  path: '/fkgHome/oneEventSearch',
                  query: { companyName: companyInfo.name }
                }"
                class="text-primary font-weight-bolder"
                >查看</router-link
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mb-2 float-left">
            <span class="mr-4">
              <i
                class="flaticon-network display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="symbol-group symbol-hover">
              <div
                v-for="item in relationPunishmentNameList.slice(0, 5)"
                :key="item"
                class="symbol symbol-40 symbol-circle"
                data-toggle="tooltip"
                :title="item"
              >
                <img
                  alt="Pic"
                  :src="companyInfo.img"
                  @click="goToBranch(item)"
                />
              </div>

              <div class="symbol symbol-30 symbol-circle symbol-light">
                <span class="symbol-label font-weight-bold"
                  >{{ relationPunishmentNameList.slice(0, 5).length }}+</span
                >
              </div>
            </div>
          </div>
          <!--end::Item-->
        </div>
        <!--begin::Items-->
      </div>
    </div>
    <!--end::Card-->

    <div class="row">
      <div class="col-lg-6">
        <risk-trend
          title="近期违规统计"
          :dataList="riskData"
          :nameList="riskName"
        />
      </div>
      <div class="col-lg-6">
        <risk-distribution />
      </div>
      <!-- <div class="col-lg-6">
        <RadarChart />
      </div> -->
    </div>

    <div class="row">
      <div class="col-lg-6">
        <publish-list
          :showPagination="false"
          :tableHead="tableHead"
          tableTitle="近期处罚文件"
          :dataList="recentPunishment"
        >
        </publish-list>
      </div>
      <div class="col-lg-6">
        <branch-top-chart
          title="关联企业处罚状况"
          :dataList="relationPunishmentDataList"
          :nameList="relationPunishmentNameList"
        ></branch-top-chart>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import RiskTrend from "@/components/RiskTrend";
import RiskDistribution from "@/components/RiskDistribution";
// import RadarChart from "@/components/RadarChart";
import PublishList from "@/components/PublishList";
import BranchTopChart from "@/components/BranchTopChart";
export default {
  name: "CompanyInfo",
  components: {
    RiskTrend,
    // RadarChart,
    RiskDistribution,
    PublishList,
    BranchTopChart
  },
  computed: {
    ...mapGetters(["currentUserPhoto", "currentUser"]),
    companyName: function() {
      return this.$route && this.$route.query && this.$route.query.name
        ? this.$route.query.name
        : this.$route.query.info &&
          (this.$route.query.info.punishedOrgan || this.$route.query.info.name)
        ? this.$route.query.info.name ||
          this.$route.query.info.punishedOrgan.name
        : this.currentUser.companyInfo.companyName;
    }
  },
  data() {
    return {
      // companyName: this.$route && this.$route.query && this.$route.query.name ? this.$route.query.name : '中国农业银行股份有限公司',
      // companyName:'中国农业银行股份有限公司',
      companyInfo: {},
      tableHead: [
        {
          name: "处罚对象",
          property: "punishedCompany.name",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "违规原因",
          property: "decisionResion",
          sortAble: true,
          maxLen: 15,
          currentSort: -1 //0代表升序
        },
        {
          name: "处罚类型",
          property: "punishType",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "处罚日期",
          property: "decisionTime",
          sortAble: true,
          time: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "发文单位",
          property: "decisionOrganName.name",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "处罚文件",
          property: "title",
          router: "/fkgHome/punishmentDetail/",
          sortAble: true,
          maxLen: 15,
          currentSort: -1 //0代表升序
        },
        {
          name: "操作",
          property: "oper",
          sortAble: false,
          currentSort: -1 //0代表升序
        }
      ],
      recentPunishment: [],
      relationPunishmentDataList: [],
      relationPunishmentNameList: [],
      riskData: [],
      riskName: [],
      relationPunishmentCnt: 0, ///相关处罚总计
      relationCaseCnt: 0, //相关案例总数
      relationEventCnt: 0 //相关事件总数
    };
  },
  watch: {
    $route: {
      handler() {
        console.log("router参数", this.$route);
        this.companyName = this.$route.query.name
          ? this.$route.query.name
          : this.$route.query.info &&
            (this.$route.query.info.punishedOrgan ||
              this.$route.query.info.name)
          ? this.$route.query.info.name ||
            this.$route.query.info.punishedOrgan.name
          : this.currentUser.companyInfo.companyName;
        this.getData();
      }
    }
  },
  mounted() {
    console.log("企业名称" + this.companyName);
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "主页" }]);
    this.getData();
  },
  methods: {
    getData() {
      console.log("watch搜索" + this.companyName);
      //获取企业基础信息
      this.axios
        .post("/api/sykg/query/company_detail", {
          params: { name: this.companyName },
          label: "Company"
        })
        .then(data => {
          console.log("Here what post returns", data);
          let status = data.data.status;
          // console.log(status);
          if (status == 0 && data.data.message.nodes[0]) {
            this.companyInfo = data.data.message.nodes[0];
          }
        })
        .catch(e => {
          console.log(e);
        });
      //获取企业最新处罚信息
      this.axios
        .post("/api/sykg/query/punish_infos/rencently", {
          companyName: this.companyName
        })
        .then(data => {
          // console.log("Here what post returns", data);
          let status = data.data.status;
          // console.log(status);
          if (status == 0) {
            this.recentPunishment = data.data.message.data.slice(0, 5);
            console.log(this.recentPunishment);
          }
        })
        .catch(e => {
          console.log(e);
        });
      //获取企业关联企业处罚状况
      this.axios
        .post("/api/sykg/query/punish_infos/stats", {
          companyName: this.companyName
        })
        .then(data => {
          console.log("Here what post returns", data);
          let status = data.data.status;
          // console.log(status);
          if (status == 0) {
            let dataList = [];
            let nameList = [];
            for (let item of data.data.message.data) {
              dataList.push(item[1]);
              nameList.push(item[0]);
            }
            this.relationPunishmentDataList = dataList;
            this.relationPunishmentNameList = nameList;
            console.log(
              this.relationPunishmentDataList,
              this.relationPunishmentNameList
            );
          }
        })
        .catch(e => {
          console.log(e);
        });
      let searchTime = this.$moment()
        .subtract("days", 180)
        .format("YYYY-MM-DD");
      console.log(searchTime);
      //获取企业违规统计
      this.axios
        .post("/api/sykg/query/punish_infos/statsbydate", {
          companyName: this.companyName,
          searchTime: "2020-09-01"
        })
        .then(data => {
          console.log("Here what post returns", data);
          let status = data.data.status;
          // console.log(status);
          if (status == 0) {
            data.data.message.data.reverse();
            let dataList = [];
            let nameList = [];
            for (let item of data.data.message.data) {
              dataList.push(item.count);
              // nameList.push(item._id)
              nameList.push(this.$moment(item._id).format("YYYY-M-D"));
            }
            this.riskData = dataList;
            this.riskName = nameList;
            console.log(this.riskData, this.riskName);
          }
        })
        .catch(e => {
          console.log(e);
        });

      //获取企业相关处罚、案例、事件的统计数字
      this.axios
        .post("/api/sykg/query/punish_infos/keywords", {
          decOrgName: [],
          decisionTime: "",
          pubTime: "",
          or: { content: "", title: "" },
          and: { punishedOrg: [this.companyName], punishType: [] }
        })
        .then(res => {
          if (res.data.status == 0) {
            this.relationPunishmentCnt = res.data.message.size;
            console.log("相关处罚", res);
          }
        });
      this.axios
        .post("/api/sykg/query/case_infos/keywords", {
          ID: "",
          startTime: {},
          endTime: {},
          or: { content: [], title: [] },
          and: { subject: [this.companyName], caseType: [] }
        })
        .then(res => {
          if (res.data.status == 0) {
            this.relationCaseCnt = res.data.message.size;
            console.log("相关案例", res);
          }
        });

      this.axios
        .post("/api/sykg/query/events_infos/keywords", {
          ID: "",
          startTime: {},
          endTime: {},
          or: { content: [], title: [] },
          and: { subject: [this.companyName], eventType: [] }
        })
        .then(res => {
          // console.log(res)
          if (res.data.status == 0) {
            this.relationEventCnt = res.data.message.size;
            console.log("相关事件", res);
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
    checkHaveCompany(item) {
      let that = this;
      if (item.length < 4) {
        return;
      }
      this.axios
        .post("/api/sykg/query/company_detail", {
          params: { name: item },
          label: "Company"
        })
        .then(data => {
          console.log("Here what post returns", data);
          let status = data.data.status;
          // console.log(status);
          if (
            status == 0 &&
            data.data.message.nodes[0] &&
            data.data.message.nodes[0].organizationCode
          ) {
            console.log(data.data.message.nodes[0]);
            that.$router.push({ path: "/fkgHome/home", query: { name: item } });
          } else {
            that.createdSnackbar();
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    goToBranch(item) {
      this.checkHaveCompany(item);
    }
  }
};
</script>
