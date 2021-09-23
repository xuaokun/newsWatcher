<template>
  <!--begin::Card-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">修改密码</h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >更改您登录时需要输入的密码</span
        >
      </div>
      <div class="card-toolbar">
        <button
          type="submit"
          class="btn btn-success mr-2"
          @click="save()"
          ref="kt_save_changes"
        >
          保存更改
        </button>
        <button type="reset" class="btn btn-secondary" @click="cancel()">
          取消
        </button>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Form-->
    <form class="form" id="kt_password_change_form">
      <div class="card-body">
        <!--begin::Alert-->
        <div
          v-if="alertShow"
          class="alert alert-custom alert-light-danger fade show mb-10"
          role="alert"
        >
          <div class="alert-icon">
            <span class="svg-icon svg-icon-3x svg-icon-danger">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Code/Info-circle.svg-->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect x="0" y="0" width="24" height="24" />
                  <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                  <rect
                    fill="#000000"
                    x="11"
                    y="10"
                    width="2"
                    height="7"
                    rx="1"
                  />
                  <rect
                    fill="#000000"
                    x="11"
                    y="7"
                    width="2"
                    height="2"
                    rx="1"
                  />
                </g>
              </svg>
              <!--end::Svg Icon-->
            </span>
          </div>
          <div class="alert-text font-weight-bold">
            修改密码后，您将无法使用原账户密码登录，请牢记您的新密码。
          </div>
          <div class="alert-close">
            <button
              @click="setAlert"
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="ki ki-close"></i>
              </span>
            </button>
          </div>
        </div>
        <!--end::Alert-->
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-alert"
            >当前用户密码</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              type="password"
              class="form-control form-control-lg form-control-solid mb-2"
              value=""
              placeholder="当前用户密码"
              name="current_password"
              ref="current_password"
            />
            <a href="#" class="text-sm font-weight-bold">忘记密码 ?</a>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-alert"
            >新密码</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              type="password"
              class="form-control form-control-lg form-control-solid"
              value=""
              placeholder="新密码"
              name="new_password"
              ref="new_password"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-alert"
            >确认新密码</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              type="password"
              class="form-control form-control-lg form-control-solid"
              value=""
              placeholder="确认新密码"
              name="verify_password"
              ref="verify_password"
            />
          </div>
        </div>
      </div>
    </form>
    <!--end::Form-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { UPDATE_PASSWORD } from "@/core/services/store/auth.module";
import KTUtil from "@/assets/js/components/util";

import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import Swal from "sweetalert2";

export default {
  name: "ChangePassword",
  data() {
    return {
      password: "",
      status: "",
      valid: true,
      alertShow: true
    };
  },
  mounted() {
    const password_change_form = KTUtil.getById("kt_password_change_form");
    // var curr_password = this.currentUser.password;

    this.fv = formValidation(password_change_form, {
      fields: {
        current_password: {
          validators: {
            notEmpty: {
              message: "Current password is required"
            }
            // identical: {
            //   compare: function () {
            //     return curr_password;
            //   },
            //   message: "Wrong password"
            // }
          }
        },
        new_password: {
          validators: {
            notEmpty: {
              message: "New password is required"
            }
          }
        },
        verify_password: {
          validators: {
            notEmpty: {
              message: "Confirm password is required"
            },
            identical: {
              compare: function() {
                return password_change_form.querySelector(
                  '[name="new_password"]'
                ).value;
              },
              message: "The password and its confirm are not the same"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        bootstrap: new Bootstrap(),
        submitButton: new SubmitButton()
      }
    });
  },
  methods: {
    save() {
      this.fv.validate();

      this.fv.on("core.form.valid", () => {
        var old = this.$refs.current_password.value;
        var password = this.$refs.new_password.value;
        const submitButton = this.$refs["kt_save_changes"];

        // set spinner to submit button
        submitButton.classList.add("spinner", "spinner-light", "spinner-right");

        // send update request
        this.axios
          .post("/api2/updatePassword", {
            _id: this.currentUser._id,
            old: old,
            password: password
          })
          .then(() => {
            // console.log(res);
            this.$router.push("/fkgHome");
          });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      });

      this.fv.on("core.form.invalid", () => {
        Swal.fire({
          title: "",
          text: "Please, provide correct data!",
          icon: "error",
          confirmButtonClass: "btn btn-secondary"
        });
      });
    },
    cancel() {
      this.fv.resetForm();
      this.$refs.current_password.value = "";
      this.$refs.new_password.value = "";
      this.$refs.verify_password.value = "";
    },
    setAlert() {
      this.alertShow = false;
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>
