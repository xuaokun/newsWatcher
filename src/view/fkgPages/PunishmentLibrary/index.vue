<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <pieChart
          v-show="punishTypePieData.nameList"
          title="处罚类型"
          :dataObj="punishTypePieData"
        />
      </div>
      <div class="col-lg-6">
        <pieChart title="预警风险" :dataObj="warningPieData" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <PublishList
          tableTitle="最新处罚文件"
          :tableHead="tableHead"
          :dataList="recentPunishment"
        ></PublishList>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import pieChart from "@/components/PieChart";
import PublishList from "@/components/PublishList";
export default {
  name: "PunishmentLibrary",
  components: {
    pieChart,
    PublishList
  },
  computed: {
    ...mapGetters(["currentUserPhoto"]),
    punishTypePieData: function() {
      if (this.punishTypeData.length == 0) {
        return {};
      }
      let nameList = [];
      let numList = [];
      for (let item of this.punishTypeData) {
        if (!item._id) {
          nameList.push("未知类型");
        } else {
          nameList.push(this.punish_type[item._id]);
        }
        numList.push(item.count);
      }
      // console.log({
      //   nameList,
      //   numList
      // })
      return {
        nameList,
        numList
      };
    }
  },
  data() {
    return {
      punishTypeData: [],
      punish_type: {
        "1": "警告处分",
        "2": "终身禁止从事银行业工作",
        "3": "禁止十五年从事银行业工作",
        "4": "取消高级管理人员任职资格2年",
        "7": "禁止从事银行业工作终身",
        "8": "警告并罚款",
        "9": "禁止从事银行业工作1年",
        "10": "取消高管资格终身",
        "11": "罚款",
        "12": "取消高管任职资格一年",
        "13": "取消终身高级管理人员任职资格，禁止终身从事银行业工作",
        "14": "禁止3年从事银行业工作",
        "15": "取消高管任职资格2年",
        "16": "禁止十年从事银行业工作",
        "17": "取消银行业金融机构董事和高级管理人员任职资格10年的行政处罚",
        "18": "禁止五年从事银行业工作",
        "19": "责令改正，警告并罚款",
        "20": "禁止从事银行业工作2年",
        "21": "取消2年高管任职资格，并罚款五万元",
        "22": "罚款，责令相关负责人纪律处分",
        "23": "罚没",
        "24": "禁止五年从事银行业工作",
        "25": "禁止从事银行业工作四年",
        "26": "责令改正并处罚款",
        "27": "罚款并责令停止接受业务三个月的行政处罚",
        "28": "禁止2年从事银行业工作",
        "29": "责令改正并罚款，相关责任人给予纪律处分",
        "30":
          "罚款，责令丰满惠民村镇银行对直接负责的董事、高级管理人员和其他直接责任人给予纪律处分。",
        "31": "撤销李国强任职资格",
        "32": "撤销任职资格",
        "33": "取消银行业高级管理任职资格二年，罚款人民币十万元",
        "34": "取消银行业金融机构高级管理人员任职资格五年",
        "35": "禁止进入保险业终身"
      },
      warningPieData: {
        nameList: [
          "信用风险",
          "保险风险",
          "市场风险",
          "流动性风险",
          "操作风险",
          "国别风险"
        ],
        numList: [133, 231, 34, 56, 66, 129]
      },
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
          property: "pubtime",
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
      recentPunishment: []
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "处罚概况" }]);
  },
  created() {
    this.getPunishData();
  },
  methods: {
    getPunishData() {
      let that = this;
      this.axios
        .post("/api/sykg/query/common/mongostats", {
          IDs: [],
          statsProperty: "punishedOrgan.type",
          dbName: "punish_infos"
        })
        .then(function(result) {
          // console.log(result)
          if (result && result.data.status == 0) {
            that.punishTypeData = result.data.message.data;
            // console.log(that.punishTypeData);
          }
        });

      this.axios
        .post("/api/sykg/query/punish_infos/rencently", { companyName: "" })
        .then(data => {
          // console.log("Here what post returns", data);
          let status = data.data.status;
          // console.log(status);
          if (status == 0) {
            that.recentPunishment = data.data.message.data.slice(0, 10);
            // console.log(that.recentPunishment);
          }
        });
    }
  }
};
</script>
<style scoped>
.row:nth-of-type(2) {
  margin-top: 20px;
}
</style>
