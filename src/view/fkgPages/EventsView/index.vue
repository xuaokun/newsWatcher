<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <pie-chart title="案例概况" :dataObj="caseTypePieData" />
      </div>
      <div class="col-lg-6">
        <pie-chart title="事件概况" :dataObj="eventTypePieData" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <publish-list
          tableTitle="热门案例"
          :tableHead="tableHead"
          :dataList="searchResultList"
        ></publish-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import PieChart from "@/components/PieChart";
import PublishList from "@/components/PublishList";
export default {
  name: "EventsView",
  components: {
    PieChart,
    PublishList
  },
  computed: {
    ...mapGetters(["currentUserPhoto"]),
    caseTypePieData: function() {
      if (this.caseTypeData.length == 0) {
        return {};
      }
      let nameList = [];
      let numList = [];
      for (let item of this.caseTypeData) {
        nameList.push(item._id);
        numList.push(item.count);
      }
      console.log({
        nameList,
        numList
      });
      return {
        nameList,
        numList
      };
    },
    eventTypePieData: function() {
      if (this.eventTypeData.length == 0) {
        return {};
      }
      let nameList = [];
      let numList = [];
      for (let item of this.eventTypeData) {
        nameList.push(item._id);
        numList.push(item.count);
      }
      console.log({
        nameList,
        numList
      });
      return {
        nameList,
        numList
      };
    }
  },
  data() {
    return {
      caseTypeData: [],
      eventTypeData: [],
      tableHead: [
        {
          name: "案例名称",
          property: "title",
          router: "/fkgHome/eventDetail/",
          params: true,
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "案例索引",
          property: "ID",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "相关对象",
          property: "subject",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "风险类型",
          property: "caseType",
          sortAble: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "发生日期",
          property: "startTime",
          sortAble: true,
          time: true,
          currentSort: -1 //0代表升序
        },
        {
          name: "操作",
          property: "oper",
          sortAble: false,
          currentSort: -1 //0代表升序
        }
      ],
      searchResultList: [] //热门列表
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "事件展示" }]);
  },
  created() {
    this.getPieData();
  },
  methods: {
    getPieData() {
      let that = this;
      this.axios
        .post("/api/sykg/query/common/mongostats", {
          IDs: [],
          statsProperty: "caseType",
          dbName: "case"
        })
        .then(function(result) {
          console.log(result);
          if (result && result.data.status == 0) {
            that.caseTypeData = result.data.message.data;
            console.log(that.caseTypeData);
          }
        });

      this.axios
        .post("/api/sykg/query/common/mongostats", {
          IDs: [],
          statsProperty: "eventType",
          dbName: "events"
        })
        .then(function(result) {
          console.log(result);
          if (result && result.data.status == 0) {
            that.eventTypeData = result.data.message.data;
            console.log(that.eventTypeData);
          }
        });

      this.axios
        .post("/api/sykg/query/case_infos/keywords", {
          ID: "",
          startTime: {},
          endTime: {},
          or: { content: [], title: [] },
          and: { subject: [], caseType: [] }
        })
        .then(res => {
          console.log(res);
          if (res.data.status == 0) {
            that.searchResultList = res.data.message.data;
            console.log(that.searchResultIdList);
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
