<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white"
      :class="{
        'login-signin-on': this.state == 'signin',
        'login-signup-on': this.state == 'signup',
        'login-forgot-on': this.state == 'forgot'
      }"
      id="kt_login"
    >
      <!--begin::Aside-->
      <div
        class="login-aside d-flex flex-column flex-row-auto"
        :style="{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% 100%'
        }"
      >
        <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <a href="#" class="text-center mb-10">
            <img src="logo.png" class="max-h-70px" alt="" />
          </a>
          <h3
            class="font-weight-bolder text-center font-size-h4 font-size-h1-lg"
            style="color:#fff;"
          >
            星图<br />企业舆情分析系统
          </h3>
        </div>
        <div
          class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
        ></div>
      </div>
      <!--begin::Aside-->
      <!--begin::Content-->
      <div
        class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
      >
        <div class="d-flex flex-column-fluid flex-center">
          <!--begin::Signin-->
          <div class="login-form login-signin">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signin_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  欢迎使用企业舆情分析系统
                </h3>
                <span class="text-muted font-weight-bold font-size-h4"
                  >新用户？
                  <a
                    id="kt_login_signup"
                    class="text-primary font-weight-bolder"
                    @click="showForm('signup')"
                    >创建新用户</a
                  ></span
                >
              </div>
              <div class="form-group">
                <label class="font-size-h6 font-weight-bolder text-dark"
                  >邮箱/手机</label
                >
                <div
                  id="example-input-group-1"
                  label=""
                  label-for="example-input-1"
                >
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="text"
                    name="email"
                    ref="email"
                    v-model="form.email"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between mt-n5">
                  <label class="font-size-h6 font-weight-bolder text-dark pt-5"
                    >密码</label
                  >
                  <a
                    class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                    id="kt_login_forgot"
                    @click="showForm('forgot')"
                    >忘记密码？</a
                  >
                </div>
                <div
                  id="example-input-group-2"
                  label=""
                  label-for="example-input-2"
                >
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="password"
                    name="password"
                    ref="password"
                    v-model="form.password"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="pb-lg-0 pb-5">
                <button
                  ref="kt_login_signin_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3"
                >
                  登录
                </button>
                <!-- <button type="button" class="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg">
                  <span class="svg-icon svg-icon-md">
                    <inline-svg src="media/svg/social-icons/google.svg" />
                  </span>Sign in with Google
                </button> -->
              </div>
            </form>
          </div>
          <!--end::Signin-->
          <!--begin::Signup-->
          <div class="login-form login-signup">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signup_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  注册
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  {{ tipInfo }}
                </p>
                <!-- <v-alert dense outlined type="error">
                  {{tipInfo}}
                </v-alert> -->
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="用户名"
                  name="fullname"
                  ref="fullname"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="企业社会信用代码"
                  name="creditCode"
                  ref="creditCode"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="邮箱"
                  name="email"
                  ref="remail"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="phone"
                  placeholder="电话"
                  name="phone"
                  ref="phone"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="password"
                  placeholder="密码"
                  name="password"
                  ref="rpassword"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="password"
                  placeholder="确认密码"
                  name="cpassword"
                  ref="cpassword"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label class="checkbox mb-0">
                  <input type="checkbox" name="agree" />
                  <span class="mr-2"></span>
                  我同意
                  <a href="#" class="ml-2">相关使用条款和条件</a>。
                </label>
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
                <button
                  ref="kt_login_signup_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                  style="width:150px;"
                >
                  提交
                </button>
                <button
                  type="button"
                  id="kt_login_signup_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  返回登录
                </button>
              </div>
            </form>
          </div>
          <!--end::Signup-->
          <!--begin::Forgot-->
          <div class="login-form login-forgot">
            <!--begin::Form-->
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_forgot_form"
              ref="kt_login_forgot_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  忘记密码？
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  输入您的邮箱以找回密码
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="邮箱"
                  name="email"
                  autocomplete="off"
                />
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0">
                <button
                  type="button"
                  id="kt_login_forgot_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                >
                  提交
                </button>
                <button
                  type="button"
                  id="kt_login_forgot_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  返回
                </button>
              </div>
            </form>
          </div>
          <!--end::Forgot-->
        </div>
        <!--begin::Content footer-->
        <div
          class="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0"
        >
          <a href="#" class="text-primary font-weight-bolder font-size-h5"
            >条款</a
          >
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
            >方案</a
          >
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
            >联系我们</a
          >
        </div>
        <!--end::Content footer-->
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";

import KTUtil from "@/assets/js/components/util";
import { mapGetters, mapState } from "vuex";
import { LOGIN, LOGOUT, REGISTER } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";

export default {
  name: "login-1",
  data() {
    return {
      tipInfo: "输入您的详细信息以创建一个新用户",
      state: "signin",
      // Remove this dummy login info
      form: {
        // email: "admin@demo.com",
        // password: "demo"
      }
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapGetters(["currentUser"]),

    backgroundImage() {
      return process.env.BASE_URL + "fullLogin1.jpg";
    }
  },
  mounted() {
    const signin_form = KTUtil.getById("kt_login_signin_form");
    const signup_form = KTUtil.getById("kt_login_signup_form");
    const forgot_form = KTUtil.getById("kt_login_forgot_form");

    this.fv = formValidation(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "邮箱不能为空哦"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "密码不能为空哦"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });

    this.fv1 = formValidation(signup_form, {
      fields: {
        // fullname: {
        //   validators: {
        //     notEmpty: {
        //       message: "Full name is required"
        //     }
        //   }
        // },
        email: {
          validators: {
            notEmpty: {
              message: "email地址不能为空"
            },
            emailAddress: {
              message: "请填入有效的email地址"
            }
          }
        },
        phoneNumber: {
          validators: {
            notEmpty: {
              message: "email地址不能为空"
            },
            emailAddress: {
              message: "请填入有效的email地址"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "密码不能为空哦"
            }
          }
        },
        cpassword: {
          validators: {
            notEmpty: {
              message: "请再次确认密码"
            },
            identical: {
              compare: function() {
                return signup_form.querySelector('[name="password"]').value;
              },
              message: "两次密码输入不一致"
            }
          }
        },
        agree: {
          validators: {
            notEmpty: {
              message: "您需要同意相关条款和使用说明"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });

    this.fv2 = formValidation(forgot_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Email is required"
            },
            emailAddress: {
              message: "The value is not a valid email address"
            }
          }
        },
        creditCode: {
          validators: {
            notEmpty: {
              message: "需要输入社会信用代码"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });

    this.fv.on("core.form.valid", () => {
      var email = this.form.email;
      var password = this.form.password;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // send login request
      this.$store
        .dispatch(LOGIN, { email, password })
        // go to which page after successfully login
        .then(() => this.$router.push("/fkgHome/home"))
        .catch(e => {
          console.log(e);
          this.$store.dispatch("snackbar/openSnackbar", {
            msg: "用户名或者密码错误，请您重新输入~",
            color: "warning"
          });
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
        text: "请输入有效数据",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });

    this.fv1.on("core.form.valid", () => {
      const userName = this.$refs.fullname.value;
      const creditCode = this.$refs.creditCode.value;
      const email = this.$refs.remail.value;
      const phoneNumber = this.$refs.phone.value;
      const password = this.$refs.rpassword.value;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // send register request

      //请求api获得对应企业信息
      this.axios
        .get("/api3/report/infos?creditCode=" + creditCode)
        .then(res => {
          console.log("获取企业信息：" + res);
          let companyInfo = {};
          if (res.data.msg == "请求成功") {
            // this.tipInfo = '企业信息正确'
            companyInfo = res.data.data;
          } else {
            throw new Error("企业信息有误或查询不到");
          }
          return this.$store.dispatch(REGISTER, {
            userName: userName,
            creditCode: creditCode,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            companyInfo
          });
        })
        .then(data => {
          console.log(data);
          if (data.status == -1) {
            throw new Error("邮箱或者手机号已经注册");
          }
          if (data.status == -2) {
            throw new Error("注册出错了");
          }
          this.$router.push("/fkgHome/home");
        })
        .catch(e => {
          this.tipInfo = e;
        });
      submitButton.classList.remove(
        "spinner",
        "spinner-light",
        "spinner-right"
      );
    });

    this.fv1.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "请提供正确的数据哦",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp"
      );
    }
  }
};
</script>

<style scoped>
.v-application .pt-15 {
  padding-top: 20% !important;
}
</style>
