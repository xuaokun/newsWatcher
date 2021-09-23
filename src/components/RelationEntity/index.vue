<template lang="">
  <div class="card card-custom first-row">
    <!--begin::Header-->
    <div class="card-header h-auto py-4">
      <div class="card-title">
        <h3 class="card-label">
          <span class="font-weight-bolder text-dark">相关对象</span>
        </h3>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-4">
      <div
        class="form-group row my-2"
        v-for="(item, index) in relationObjects.sort(function(a, b) {
          return b.length - a.length;
        })"
        :key="index"
      >
        <div class="col-8">
          <span
            class="form-control-plaintext font-weight-bolder"
            @click="checkHaveCompany(item)"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RelationEntity",
  props: {
    relationObjects: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
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
        that.createdSnackbar();
        return;
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
            console.log(data.data.message.nodes[0]);
            that.$router.push({ path: "/fkgHome/home", query: { name: item } });
          } else {
            that.createdSnackbar();
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
<style lang=""></style>
