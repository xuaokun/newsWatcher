<template lang="">
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">检索条件</span>
        <!-- <span class="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span> -->
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Form-->
    <form>
      <div class="card-body">
        <div class="form-group mb-8" v-if="false">
          <div class="alert alert-custom alert-default" role="alert">
            <div class="alert-icon">
              <i class="flaticon-warning text-primary"></i>
            </div>
            <div class="alert-text">
              Here are examples of <code>.form-control</code> applied to each
              textual HTML5 input type:
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-1 col-form-label">标题检索</label>
          <div class="col-3">
            <input
              class="form-control"
              type="text"
              placeholder="以空格隔开多个关键词"
              v-model="title_include"
            />
          </div>
          <label class="col-1 col-form-label">全文检索</label>
          <div class="col-3">
            <input
              class="form-control"
              type="search"
              placeholder="以空格隔开多个关键词"
              v-model="content_include"
            />
          </div>
          <label class="col-1 col-form-label">处罚对象</label>
          <div class="col-3">
            <input
              class="form-control"
              type="text"
              placeholder="公司名称/代码/人名"
              v-model="org_include"
            />
          </div>
        </div>

        <!-- <div class="form-group row">
                    <label class="col-form-label col-3">其他条件</label>
                    <div class="col-3">
                        <div class="input-daterange input-group" id="kt_datepicker_5">
                            <input type="text" class="form-control" name="start" />
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="la la-ellipsis-h"></i></span>
                            </div>
                            <input type="text" class="form-control" name="end" />
                        </div>
                        <span class="form-text text-muted">颁布开始时间至颁布结束时间</span>
                        <v-row justify="center" v-if="false">
                            <v-date-picker v-model="picker"></v-date-picker>
                          </v-row>
                    </div>
                    <div class="col-3">

                        <div class="input-daterange input-group" id="kt_datepicker_5">
                            <input type="text" class="form-control" name="start" />
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="la la-ellipsis-h"></i></span>
                            </div>
                            <input type="text" class="form-control" name="end" />
                        </div>

                        <span class="form-text text-muted">生效开始时间至生效结束时间</span>
                    </div>
                    <div class="col-3">
                        <div class="input-daterange input-group" id="kt_datepicker_5">
                            <input type="text" class="form-control" name="start" />
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="la la-ellipsis-h"></i></span>
                            </div>
                            <input type="text" class="form-control" name="end" />
                        </div>
                        <span class="form-text text-muted">发文单位</span>
                    </div>
                </div> -->
        <div class="form-group row">
          <label for="example-datetime-local-input" class="col-1 col-form-label"
            >发布时间</label
          >
          <div class="col-2">
            <input class="form-control" type="date" v-model="public_start" />
          </div>
          <label for="example-datetime-local-input" class="col-1 col-form-label"
            >至</label
          >
          <div class="col-2">
            <input class="form-control" type="date" v-model="public_end" />
          </div>
          <label for="example-datetime-local-input" class="col-1 col-form-label"
            >决策时间</label
          >
          <div class="col-2">
            <input class="form-control" type="date" v-model="decision_start" />
          </div>
          <label for="example-datetime-local-input" class="col-1 col-form-label"
            >至</label
          >
          <div class="col-2">
            <input class="form-control" type="date" v-model="decision_end" />
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-9">
            <button class="btn btn-success mr-2" @click="submitSearch">
              检索
            </button>
            <button type="reset" class="btn btn-secondary">重置</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormForPunishmentSearch",
  data() {
    return {
      public_start: this.$moment()
        .subtract("days", 180)
        .format("YYYY-MM-DD"),
      public_end: this.$moment().format("YYYY-MM-DD"),
      decision_start: "",
      decision_end: "",
      title_include: "",
      content_include: "",
      org_include:
        this.initData &&
        this.initData.and &&
        this.initData.and.punishedOrg &&
        this.initData.and.punishedOrg[0]
          ? this.initData.and.punishedOrg[0]
          : ""
    };
  },
  props: {
    initData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    submitSearch() {
      let title_include = this.title_include
        ? this.title_include.split(" ")
        : [];
      let content_include = this.content_include
        ? this.content_include.split(" ")
        : [];
      let org_include = this.org_include ? this.org_include.split(" ") : [];
      let public_start = this.public_start
        ? this.public_start + " 00:00:00"
        : null;
      let public_end = this.public_end ? this.public_end + " 00:00:00" : null;
      let decision_start = this.decision_start
        ? this.decision_start + " 00:00:00"
        : null;
      let decision_end = this.decision_end
        ? this.decision_end + " 00:00:00"
        : null;
      console.log(
        title_include,
        content_include,
        org_include,
        public_start,
        public_end,
        decision_start,
        decision_end
      );

      let dec_time_cond = {},
        pub_time_cond = {};
      if (decision_start) {
        dec_time_cond.from = decision_start;
      }
      if (decision_end) {
        dec_time_cond.to = decision_end;
      }
      if (public_start) {
        pub_time_cond.from = public_start;
      }
      if (public_end) {
        pub_time_cond.to = public_end;
      }

      let params = {
        decOrgName: [],
        decisionTime: dec_time_cond,
        pubTime: pub_time_cond,
        or: { content: content_include, title: title_include },
        and: { punishedOrg: org_include }
      };
      console.log(params);
      this.$emit("gotoSearch", params);
    }
  }
};
</script>
<style scoped>
.row {
  align-items: center;
}
</style>
