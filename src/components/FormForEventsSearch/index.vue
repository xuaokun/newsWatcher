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
              v-model="title"
            />
          </div>
          <label class="col-1 col-form-label">全文检索</label>
          <div class="col-3">
            <input
              class="form-control"
              type="search"
              placeholder="以空格隔开多个关键词"
              v-model="content"
            />
          </div>
          <label class="col-1 col-form-label">相关对象</label>
          <div class="col-3">
            <input
              class="form-control"
              type="email"
              placeholder="公司名称/代码/人名"
              v-model="relation_object"
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
          <label class="col-1 col-form-label">限制条件</label>
          <div class="col-3">
            <input
              class="form-control"
              type="email"
              placeholder="风险类型"
              v-model="risk_type"
            />
          </div>
          <!-- <div class="col-1"></div> -->
          <label for="example-datetime-local-input" class="col-1 col-form-label"
            >发布时间</label
          >
          <div class="col-3">
            <input
              class="form-control"
              type="datetime-local"
              value=""
              v-model="from_time"
            />
          </div>
          <label for="example-datetime-local-input" class="col-1 col-form-label"
            >至</label
          >
          <div class="col-3">
            <input
              class="form-control"
              type="datetime-local"
              value=""
              v-model="to_time"
            />
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-9">
            <button
              type="reset"
              class="btn btn-success mr-2"
              @click="submitSearch"
            >
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
  name: "FormForEventsSearch",
  data() {
    return {
      title: "",
      content: "",
      relation_object:
        this.initData &&
        this.initData.and &&
        this.initData.and.subject &&
        this.initData.and.subject[0]
          ? this.initData.and.subject[0]
          : "",
      // public_start:'',
      // public_end:'',
      public_start: this.$moment()
        .subtract("days", 180)
        .format("YYYY-MM-DDThh:mm"),
      public_end: this.$moment().format("YYYY-MM-DDThh:mm")
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
      let title_include = this.title ? this.title.split(" ") : [];
      let content_include = this.content ? this.content.split(" ") : [];
      console.log(this.relation_object);
      let org_include = this.relation_object
        ? this.relation_object.split(" ")
        : [];
      let public_start = this.from_time
        ? this.from_time.replace("T", " ") + ":00"
        : null;
      let public_end = this.to_time
        ? this.to_time.replace("T", " ") + ":00"
        : null;
      console.log(
        title_include,
        content_include,
        org_include,
        public_start,
        public_end
      );
      let time_cond = {};
      if (public_start) {
        time_cond.from = public_start;
      }
      if (public_end) {
        time_cond.to = public_end;
      }
      let params = {
        ID: "",
        startTime: time_cond,
        endTime: {},
        or: { content: content_include, title: title_include },
        and: { subject: org_include }
      };
      // console.log(params);
      this.$emit("gotoSearch", params);
    }
  }
};
</script>
<style lang=""></style>
