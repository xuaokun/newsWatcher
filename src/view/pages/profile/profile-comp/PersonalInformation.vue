<template>
  <!--begin::Card-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          个人信息
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >更新你的个人信息</span
        >
      </div>
      <div class="card-toolbar">
        <button
          type="reset"
          class="btn btn-success mr-2"
          @click="save()"
          ref="kt_save_changes"
        >
          保存修改
        </button>
        <button type="reset" class="btn btn-secondary" @click="cancel()">
          撤销
        </button>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Form-->
    <form class="form">
      <!--begin::Body-->
      <div class="card-body">
        <div class="row">
          <label class="col-xl-3"></label>
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">用户信息</h5>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >用户头像</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="image-input image-input-outline" id="kt_profile_avatar">
              <div
                class="image-input-wrapper"
                :style="{ backgroundImage: `url(${photo})` }"
              ></div>
              <label
                class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                data-action="change"
                data-toggle="tooltip"
                title=""
                data-original-title="Change avatar"
              >
                <i class="fa fa-pen icon-sm text-muted"></i>
                <input
                  type="file"
                  name="profile_avatar"
                  accept=".png, .jpg, .jpeg"
                  @change="handleToUpload($event)"
                />
                <input type="hidden" name="profile_avatar_remove" />
              </label>
              <span
                class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                data-action="cancel"
                data-toggle="tooltip"
                title="Cancel avatar"
              >
                <i class="ki ki-bold-close icon-xs text-muted"></i>
              </span>
              <span
                class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                data-action="remove"
                data-toggle="tooltip"
                title="Remove avatar"
                @click="current_photo = null"
              >
                <i class="ki ki-bold-close icon-xs text-muted"></i>
              </span>
            </div>
            <span class="form-text text-muted"
              >允许照片类型: png, jpg, jpeg.</span
            >
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >用户名</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              ref="name"
              class="form-control form-control-lg form-control-solid"
              type="text"
              v-bind:value="currentUser.userName"
            />
          </div>
        </div>
        <!-- <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >用户名</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              ref="surname"
              class="form-control form-control-lg form-control-solid"
              type="text"
              v-bind:value="currentUser.userName"
            />
          </div>
        </div> -->
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >企业社会信用代码</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              ref="company_name"
              class="form-control form-control-lg form-control-solid"
              type="text"
              v-bind:value="currentUser.creditCode"
              disabled
            />
            <!-- <span class="form-text text-muted"
              >If you want your invoices addressed to a company. Leave blank to
              use your full name.</span
            > -->
          </div>
        </div>
        <div class="row">
          <label class="col-xl-3"></label>
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mt-10 mb-6">联系方式</h5>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >联系方式</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="input-group input-group-lg input-group-solid">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="la la-phone"></i>
                </span>
              </div>
              <input
                ref="phone"
                type="text"
                class="form-control form-control-lg form-control-solid"
                placeholder="Phone"
                v-bind:value="currentUser.phoneNumber"
              />
            </div>
            <span class="form-text text-muted"
              >我们不会将您的联系方式用于其他用途。</span
            >
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >邮箱地址</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="input-group input-group-lg input-group-solid">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="la la-at"></i>
                </span>
              </div>
              <input
                ref="email"
                type="text"
                class="form-control form-control-lg form-control-solid"
                placeholder="Email"
                v-bind:value="currentUser.email"
              />
            </div>
          </div>
        </div>
        <!-- <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >企业网站</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="input-group input-group-lg input-group-solid">
              <input
                ref="company_site"
                type="text"
                class="form-control form-control-lg form-control-solid"
                placeholder="Username"
                v-bind:value="currentUser.creditCode"
              />
              <div class="input-group-append">
                <span class="input-group-text">.com</span>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <!--end::Body-->
    </form>
    <!--end::Form-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";

export default {
  name: "PersonalInformation",
  data() {
    return {
      default_photo: "media/users/blank.png",
      current_photo: null
    };
  },
  mounted() {
    this.current_photo = this.currentUser.userHead;
  },
  methods: {
    save() {
      var name = this.$refs.name.value;
      // var surname = this.$refs.surname.value;
      var creditCode = this.$refs.company_name.value;
      var phone = this.$refs.phone.value;
      var email = this.$refs.email.value;
      // var company_site = this.$refs.company_site.value;
      var photo = this.current_photo;

      // set spinner to submit button
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // send update request
      // this.$store.dispatch(UPDATE_PERSONAL_INFO, {
      //   name,
      //   // surname,
      //   creditCode,
      //   phone,
      //   email,
      //   // company_site,
      //   photo
      // });
      console.log(photo);
      this.axios
        .post("/api2/updateUserInfo", {
          _id: this.currentUser._id,
          userName: name,
          creditCode: creditCode,
          phoneNumber: phone,
          email: email
          // userHead: photo,
        })
        .then(() => {
          // console.log(res);
          this.currentUser.userName = name;
          this.currentUser.creditCode = creditCode;
          this.currentUser.phoneNumber = phone;
          this.currentUser.email = email;
          // this.currentUser.userHead = photo;
          this.$store.dispatch(UPDATE_PERSONAL_INFO, this.currentUser);
          // this.$router.push('/fkgHome');
          this.$store.dispatch("snackbar/openSnackbar", {
            msg: "用户信息已经更新~ ",
            color: "success"
          });
        })
        .catch(() => {
          this.$store.dispatch("snackbar/openSnackbar", {
            msg: "用户信息更新出错~ ",
            color: "warning"
          });
        });

      submitButton.classList.remove(
        "spinner",
        "spinner-light",
        "spinner-right"
      );
    },
    cancel() {
      this.$refs.name.value = this.currentUser.userName;
      // this.$refs.surname.value = this.currentUser.userName;
      this.$refs.company_name.value = this.currentUser.creditCode;
      this.$refs.phone.value = this.currentUser.phoneNumber;
      this.$refs.email.value = this.currentUser.email;
      // this.$refs.company_site.value = this.currentUser.creditCode;
      this.current_photo = this.currentUser.userHead;
    },
    onFileChange(e) {
      const file = e.target.files[0];

      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = event => {
          this.current_photo = event.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    handleToUpload(ev) {
      var file = ev.target.files[0];
      // console.log(file)
      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = event => {
          this.current_photo = event.target.result;
          // console.log(this.current_photo)
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
      var param = new FormData();
      param.append("_id", this.currentUser._id);
      param.append("avatar", file, file.name);
      console.log(param);
      var config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      var that = this;
      this.axios.post("/api2/uploadUserHead", param, config).then(res => {
        var status = res.data.status;
        if (status === 0) {
          that.currentUser.userHead =
            res.data.data.userHead + "?" + Math.random();
          this.$store.dispatch(UPDATE_PERSONAL_INFO, this.currentUser);
          this.$store.dispatch("snackbar/openSnackbar", {
            msg: "用户头像已经更新~ ",
            color: "success"
          });
        } else {
          this.$store.dispatch("snackbar/openSnackbar", {
            msg: "用户头像更换出错~ ",
            color: "warning"
          });
        }
      });
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
    photo() {
      return this.current_photo == null
        ? this.default_photo
        : this.current_photo;
    }
  }
};
</script>
