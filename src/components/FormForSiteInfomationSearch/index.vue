<!--
 * @Description: 
 * @Author: akxu
 * @Date: 2021-09-20 17:53:04
 * @LastEditTime: 2021-09-23 15:26:27
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template lang="">
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">检索条件</span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Form-->
    <form>
      <div class="card-body">
        <div class="form-group row">
          <label class="col-1 col-form-label">网站名称</label>
          <div class="col-3">
            <input
              class="form-control"
              type="text"
              placeholder="请输入网站名称"
              v-model="siteName"
            />
          </div>
          <div class="col-8">
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
  name: "FormForSiteInfomationSearch",
  data() {
    return {
      siteName: ""
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
      let params = {};
      if (this.siteName) {
        params.siteName = this.siteName;
      }
      this.$emit("gotoSearch", params);
    }
  }
};
</script>
<style lang="scss" scoped>
.col-form-label {
  margin: auto 0;
}
</style>
