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
          <label class="col-1 col-form-label">企业名称</label>
          <div class="col-3">
            <input
              class="form-control"
              type="text"
              placeholder="公司名称或者简称"
              v-model="title_include"
            />
          </div>
          <label class="col-1 col-form-label">统一社会信用代码</label>
          <div class="col-3">
            <input
              class="form-control"
              type="search"
              placeholder="代码"
              v-model="content_include"
            />
          </div>
          <label class="col-1 col-form-label">法人名称</label>
          <div class="col-3">
            <input
              class="form-control"
              type="email"
              placeholder="法人"
              v-model="org_include"
            />
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-9">
            <button type="reset" class="btn btn-success mr-2">检索</button>
            <button type="reset" class="btn btn-secondary">重置</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormForMyAttentionSearch",
  data() {
    return {
      public_start: "2011-08-19T13:45:00",
      public_end: "2011-08-19T13:45:00",
      decision_start: "2011-08-19T13:45:00",
      decision_end: "2011-08-19T13:45:00",
      title_include: "",
      content_include: "",
      org_include: ""
    };
  },
  methods: {
    submitSearch() {
      // let title_include = this.title_include ? this.title_include.split(' '): [];
      // let content_include = this.content_include ? this.content_include.split(' '): [];
      // let org_include = this.org_include ? this.org_include.split(' '): [];
      // let public_start = this.public_start ? this.public_start.replace('T',' ') + ':00': null;
      // let public_end = this.public_end ? this.public_end.replace('T',' ') + ':00': null;
      // let decision_start = this.decision_start ? this.decision_start.replace('T',' ')+ ':00': null;
      // let decision_end = this.decision_end ? this.decision_end.replace('T',' ')+ ':00': null;
      // console.log(title_include,content_include,org_include,public_start,public_end,decision_start,decision_end);
      // let action_time_cond = {}, pub_time_cond={}
      // if(effetive_start){
      //     action_time_cond.from = effetive_start
      // }
      // if(effetive_end){
      //     action_time_cond.to = effetive_end
      // }
      // if(public_start){
      //     pub_time_cond.from = public_start
      // }
      // if(public_end){
      //     pub_time_cond.to = public_end
      // }
      // let params = {
      //     "or": {
      //         "content": content_word_include_one_list,
      //         "title": title_word_include_one_list
      //     },
      //     "and":
      //     {
      //         "content": content_word_include_all_list,
      //          "title": title_word_include_all_list
      //     },
      //     "not":
      //     {
      //         "content": content_word_not_include_list,
      //         "title": title_word_not_include_list
      //     },
      //     publishDepartment: publish_department,
      //     actionTime:action_time_cond,
      //     pubTime: pub_time_cond,
      // }
      // console.log(params);
      // this.$emit("gotoSearch", params);
    }
  }
};
</script>
<style scoped>
.row {
  align-items: center;
}
</style>
