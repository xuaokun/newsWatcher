<template>
  <!--begin::Advance Table Widget 10-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">{{
          tableTitle ? tableTitle : "查询结果"
        }}</span>
        <!-- <span class="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span> -->
      </h3>
      <!-- <div class="card-toolbar">
        <a href="#" class="btn btn-primary font-weight-bolder font-size-sm">New Report</a>
      </div> -->
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table
          class="table table-head-custom table-vertical-center"
          id="kt_advance_table_widget_4"
        >
          <thead>
            <tr class="text-left">
              <!-- <th class="pl-0" style="width: 30px">
                <label class="checkbox checkbox-lg checkbox-single mr-2">
                  <input type="checkbox" @input="setCheck($event.target.checked)" />
                  <span></span>
                </label>
              </th> -->
              <!-- <th class="pl-0" style="min-width: 120px">法规名称</th>
              <th style="min-width: 110px">Country</th> -->
              <th
                style="min-width: 80px;"
                @click="sortDataListByContent(item)"
                v-for="item in tableHead.slice(0, -1)"
                :key="item.name"
              >
                <span :class="{ 'text-primary': item.sortAble }">{{
                  item.name
                }}</span>
                <span class="svg-icon svg-icon-sm svg-icon-primary">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Down-2.svg-->
                  <inline-svg
                    src="media/svg/icons/Navigation/Down-2.svg"
                    v-if="item.sortAble && item.currentSort == 1"
                  >
                  </inline-svg>
                  <inline-svg
                    src="media/svg/icons/Navigation/Up-2.svg"
                    v-if="item.sortAble && item.currentSort == 0"
                  >
                  </inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </th>
              <!-- <th style="min-width: 120px">Status</th> -->
              <th
                class="pr-0 text-right"
                style="min-width: 50px"
                v-if="tableHead[tableHead.length - 1] && showOperate"
              >
                <span>{{ tableHead[tableHead.length - 1].name }}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in itemProperty">
              <tr v-bind:key="i">
                <!-- <td class="pl-0 py-6">
                  <label class="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" :value="i" :checked="checked" />
                    <span></span>
                  </label>
                </td> -->
                <!--  <td class="pl-0">
                  <a href="#" class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">{{ item.order_id
                    }}</a>
                </td> -->
                <!-- <td>
                  <router-link :to="'/fkgHome/lawDetail/'.concat(item._id)"><span
                      class="text-dark-75 font-weight-bolder d-block font-size-lg">{{ item.title }}</span></router-link>
                </td> -->
                <!-- <td v-for="(value,key) in getFilterItem(item)" :key="key">
                  <router-link v-if="checkWhetherShowRouter(key)" :to="{path:getItemRouter(key).concat(item._id), query:{info:dataList[i]}}"><span
                      class="text-dark-75 font-weight-bolder d-block font-size-lg">{{ value }}</span></router-link>
                  <span v-if="!checkWhetherShowRouter(key) && key != '_id'" class="text-dark-75 font-weight-bolder d-block font-size-lg">{{value}}</span>
                </td> -->
                <td
                  style="min-width: 80px;"
                  v-for="oneHead in tableHead.slice(0, -1)"
                  :key="oneHead.name"
                >
                  <router-link
                    v-if="oneHead.router"
                    :to="{
                      path: oneHead.router.concat(item._id),
                      query: { info: dataList[i] }
                    }"
                    ><span
                      class="text-dark-75 font-weight-bolder d-block font-size-lg"
                      >{{
                        item[oneHead.property]
                          ? oneHead.time
                            ? $moment(item[oneHead.property]).format(
                                "YYYY-MM-DD HH:mm"
                              )
                            : oneHead.maxLen &&
                              item[oneHead.property].length > oneHead.maxLen
                            ? item[oneHead.property].slice(0, oneHead.maxLen) +
                              "..."
                            : item[oneHead.property]
                          : "-"
                      }}</span
                    >
                  </router-link>
                  <span
                    v-else
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{
                      item[oneHead.property]
                        ? oneHead.time
                          ? $moment(item[oneHead.property]).format(
                              "YYYY-MM-DD HH:mm"
                            )
                          : oneHead.maxLen &&
                            item[oneHead.property].length > oneHead.maxLen
                          ? item[oneHead.property].slice(0, oneHead.maxLen) +
                            "..."
                          : item[oneHead.property]
                        : "-"
                    }}</span
                  >
                </td>
                <!-- <td>
                  <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{{ item.release_date | formatDate
                    }}</span>
                </td> -->
                <!-- <td>
                  <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{{ item.file_type }}</span>
                </td>
                <td>
                  <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{{ item.ID ? item.ID: '-' }}</span>
                </td>
                <td>
                  <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{{ item.dispatch_units ?
                    item.dispatch_units: '-' }}</span>
                </td>
                <td>
                  <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{{ item.important ? item.important:
                    '-' }}</span>
                </td> -->
                <td class="pr-0 text-right" v-if="showOperate">
                  <div
                    @click="handleEdit(item)"
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <inline-svg
                        src="media/svg/icons/Communication/Write.svg"
                      />
                    </span>
                  </div>
                  <div
                    @click="handleDelete(item)"
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <inline-svg src="media/svg/icons/General/Trash.svg" />
                    </span>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end::Body-->

    <!-- 分页 -->
    <div class="text-center" v-if="showPagination && pageLength > 1">
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-container class="max-width">
              <v-pagination
                color="#3699FF"
                v-model="page"
                class="my-4"
                :length="pageLength"
                @input="onPageChange"
              >
              </v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  <!--end::Advance Table Widget 10-->
</template>

<script>
export default {
  name: "widget-2",
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    tableHead: {
      type: Array,
      default: () => []
    },
    tableTitle: {
      type: String,
      default: ""
    },
    pageLength: {
      type: Number,
      default: 1
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    showOperate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // tableData: this.dataList,
      page: 1,
      checked: false,
      list: [
        {
          order_id: "56037-XDER",
          country: "Brasil",
          country_desc: "Code: BR",
          date: "05/28/2020",
          date_desc: "Paid",
          company: "Intertico",
          company_desc: "Web, UI/UX Design",
          class: "primary",
          status: "Approved"
        },
        {
          order_id: "05822-FXSP",
          country: "Belarus",
          country_desc: "Code: BY",
          date: "02/04/2020",
          date_desc: "Rejected",
          company: "Agoda",
          company_desc: "Houses & Hotels",
          class: "warning",
          status: "In Progress"
        },
        {
          order_id: "00347-BCLQ",
          country: "Phillipines",
          country_desc: "Code: PH",
          date: "23/12/2020",
          date_desc: "Paid",
          company: "RoadGee",
          company_desc: "Transportation",
          class: "success",
          status: "Success"
        },
        {
          order_id: "4472-QREX",
          country: "Argentina",
          country_desc: "Code: AR",
          date: "17/09/2021",
          date_desc: "Pending",
          company: "The Hill",
          company_desc: "Insurance",
          class: "danger",
          status: "Danger"
        }
      ]
    };
  },
  computed: {
    // tableData: function(){
    //   // console.log(this.dataList)
    //   return this.dataList;
    // }
    itemProperty: function() {
      let list = [];

      for (let oneRow of this.dataList) {
        let oneRowObj = {};
        for (let item of this.tableHead) {
          if (item.property.indexOf(".") > -1) {
            oneRowObj[item.property] = oneRow[item.property.split(".")[0]]
              ? oneRow[item.property.split(".")[0]][item.property.split(".")[1]]
              : "-";
          } else {
            oneRowObj[item.property] = oneRow[item.property];
          }
          oneRowObj["_id"] = oneRow["_id"] || oneRow["ID"];
        }
        list.push(oneRowObj);
      }
      return list;
    }
  },
  components: {},
  methods: {
    setCheck(check) {
      if (check) {
        this.checked = check;
      } else {
        this.checked = false;
      }
    },

    checkWhetherShowRouter(key) {
      for (let thead of this.tableHead) {
        if (thead.property == key) {
          if (thead.router) {
            return true;
          } else {
            return false;
          }
        }
      }
      return false;
    },

    getItemRouter(key) {
      for (let thead of this.tableHead) {
        if (thead.property == key) {
          return thead.router;
        }
      }
    },

    getFilterItem(item) {
      let newItem = { ...item };
      delete newItem._id;
      return newItem;
    },

    async onPageChange(page) {
      await this.getPageData(page);
    },

    async getPageData(page) {
      this.$emit("getPageData", page);
    },
    sortDataListByContent(item) {
      if (!item.sortAble) return;
      let content = item.property;
      if (item.currentSort != 0) {
        this.tableHead.forEach(function(v) {
          if (v.name == item.name) {
            //更新升降序图标
            v.currentSort = 0;
          } else {
            v.currentSort = -1;
          }
        });
        this.dataList.sort(function(a, b) {
          try {
            return a[content].localeCompare(b[content], "zh-CN");
          } catch (e) {
            return a[content] - b[content];
          }
        });
      } else {
        this.tableHead.forEach(function(v) {
          if (v.name == item.name) {
            //更新升降序图标
            v.currentSort = 1;
          } else {
            v.currentSort = -1;
          }
        });
        this.dataList.sort(function(a, b) {
          try {
            return b[content].localeCompare(a[content], "zh-CN");
          } catch (e) {
            return b[content] - a[content];
          }
        });
      }
    },

    //点击编辑操作
    handleEdit(item) {
      this.$emit("handleOperation", "edit", item);
    },

    //点击删除操作
    handleDelete(item) {
      this.$emit("handleOperation", "delete", item);
    }
  }
};
</script>

<style scoped>
.card.card-custom {
  height: 100%;
}
</style>
