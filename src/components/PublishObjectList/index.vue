<template>
  <!--begin::Advance Table Widget 10-->
  <div class="card card-custom gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">处罚对象</span>
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
              <th class="pl-0" style="width: 30px">
                <label class="checkbox checkbox-lg checkbox-single mr-2">
                  <input
                    type="checkbox"
                    @input="setCheck($event.target.checked)"
                  />
                  <span></span>
                </label>
              </th>
              <!-- <th class="pl-0" style="min-width: 120px">法规名称</th>
              <th style="min-width: 110px">Country</th> -->
              <th style="min-width: 110px">
                <span class="text-primary">处罚对象</span>
                <span class="svg-icon svg-icon-sm svg-icon-primary">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Down-2.svg-->
                  <inline-svg
                    src="media/svg/icons/Navigation/Down-2.svg"
                  ></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </th>
              <th style="min-width: 110px">
                <span class="text-primary">违规类型</span>
                <span class="svg-icon svg-icon-sm svg-icon-primary">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Down-2.svg-->
                  <inline-svg
                    src="media/svg/icons/Navigation/Down-2.svg"
                  ></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </th>
              <th style="min-width: 110px">
                <span class="text-primary">处罚类型</span>
                <span class="svg-icon svg-icon-sm svg-icon-primary">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Down-2.svg-->
                  <inline-svg
                    src="media/svg/icons/Navigation/Up-2.svg"
                  ></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </th>
              <th style="min-width: 120px">处罚日期</th>
              <th style="min-width: 120px">处理人</th>
              <th style="min-width: 110px">
                <span class="text-primary">处罚文件</span>
                <span class="svg-icon svg-icon-sm svg-icon-primary">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Down-2.svg-->
                  <inline-svg
                    src="media/svg/icons/Navigation/Up-2.svg"
                  ></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </th>
              <!-- <th style="min-width: 120px">Status</th> -->
              <th class="pr-0 text-right" style="min-width: 50px">操作</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0 py-6">
                  <label class="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" :value="i" :checked="checked" />
                    <span></span>
                  </label>
                </td>
                <!--  <td class="pl-0">
                  <a href="#" class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">{{ item.order_id
                    }}</a>
                </td> -->
                <td>
                  <router-link :to="'/fkgHome/lawDetail/'.concat(item._id)"
                    ><span
                      class="text-dark-75 font-weight-bolder d-block font-size-lg"
                      >中国邮政储蓄银行</span
                    ></router-link
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >未按规定披露实控人</span
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >书面警告</span
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >2020-12-24</span
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >中国银保监会</span
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >关于中国邮政储蓄银行披露违规的警示函</span
                  >
                </td>
                <td class="pr-0 text-right">
                  <span class="svg-icon svg-icon-md svg-icon-primary">
                    <!--begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg-->
                    <inline-svg
                      src="media/svg/icons/General/Settings-1.svg"
                    ></inline-svg>
                    <!--end::Svg Icon-->
                  </span>
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
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-container class="max-width">
              <v-pagination
                color="#3699FF"
                v-model="page"
                class="my-4"
                :length="15"
              ></v-pagination>
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
    tableTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      page: 0,
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
  components: {},
  methods: {
    setCheck(check) {
      if (check) {
        this.checked = check;
      } else {
        this.checked = false;
      }
    },
    methods: {
      sortData() {}
    }
  }
};
</script>
