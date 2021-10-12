<template>
  <div id="kt_header" ref="kt_header" class="header flex-column header-fixed">
    <div class="header-top">
      <div class="container">
        <div class="d-none d-lg-flex align-items-center mr-3">
          <!--begin::Logo-->
          <div class="mr-20">
            <router-link to="/fkgHome">
              <img
                alt="Logo"
                :src="layoutConfig('self.logo.default')"
                class="max-h-35px"
              />
            </router-link>
          </div>
          <!--end::Logo-->
          <ul
            class="header-tabs nav align-self-end font-size-lg"
            role="tablist"
          >
            <li class="nav-item">
              <router-link
                class="nav-link py-4 px-6"
                @click.native="setActiveTab"
                data-tab="0"
                data-toggle="tab"
                to="/fkgHome/home"
                role="tab"
                aria-selected="true"
                >首页</router-link
              >
            </li>
            <li class="nav-item mr-3">
              <a
                class="nav-link py-4 px-6"
                @click="setActiveTab"
                data-tab="1"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="true"
                >法律法规</a
              >
            </li>
            <li class="nav-item mr-3">
              <a
                class="nav-link py-4 px-6"
                @click="setActiveTab"
                data-tab="2"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="true"
                >行政处罚</a
              >
            </li>
            <li class="nav-item mr-3">
              <a
                class="nav-link py-4 px-6"
                @click="setActiveTab"
                data-tab="3"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="true"
                >违规事件</a
              >
            </li>
            <li class="nav-item mr-3">
              <router-link
                class="nav-link py-4 px-6"
                @click.native="setActiveTab"
                data-tab="4"
                data-toggle="tab"
                to="/fkgHome/myAttention"
                role="tab"
                aria-selected="true"
                >我的收藏</router-link
              >
              <!-- <a class="nav-link py-4 px-6" @click="setActiveTab" data-tab="4" data-toggle="tab" href="#" role="tab"
                aria-selected="true">我的收藏</a> -->
            </li>
            <li class="nav-item mr-3">
              <router-link
                class="nav-link py-4 px-6"
                @click.native="setActiveTab"
                data-tab="5"
                data-toggle="tab"
                to="/newswatcher"
                role="tab"
                aria-selected="true"
                >舆情分析</router-link
              >
            </li>
          </ul>
        </div>
        <k-t-topbar></k-t-topbar>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div
          class="header-navs header-navs-left"
          id="kt_header_navs"
          ref="kt_header_navs"
        >
          <ul
            class="header-tabs p-5 p-lg-0 d-flex d-lg-none nav nav-bold nav-tabs"
            role="tablist"
          >
            <li class="nav-item mr-2">
              <router-link
                to="/fkgHome"
                class="nav-link btn btn-clean active"
                @click.native="setActiveTab"
                data-tab="0"
                data-toggle="tab"
                data-target="#kt_header_tab_1"
                role="tab"
                >首页</router-link
              >
            </li>
            <li class="nav-item mr-2">
              <a
                href="#"
                class="nav-link btn btn-clean"
                @click="setActiveTab"
                data-tab="1"
                data-toggle="tab"
                data-target="#kt_header_tab_2"
                role="tab"
                >法律法规</a
              >
            </li>
            <li class="nav-item mr-2">
              <a
                href="#"
                class="nav-link btn btn-clean"
                @click="setActiveTab"
                data-tab="2"
                data-toggle="tab"
                data-target="#kt_header_tab_2"
                role="tab"
                >行政法规</a
              >
            </li>
            <li class="nav-item mr-2">
              <a
                href="#"
                class="nav-link btn btn-clean"
                @click="setActiveTab"
                data-tab="3"
                data-toggle="tab"
                data-target="#kt_header_tab_2"
                role="tab"
                >违规事件</a
              >
            </li>
            <li class="nav-item mr-2">
              <router-link
                to="/fkgHome/myAttention"
                class="nav-link btn btn-clean"
                @click.native="setActiveTab"
                data-tab="4"
                data-toggle="tab"
                data-target="#kt_header_tab_2"
                role="tab"
                >我的收藏</router-link
              >
            </li>
            <li class="nav-item mr-2">
              <router-link
                to="/newswatcher"
                class="nav-link btn btn-clean"
                @click.native="setActiveTab"
                data-tab="5"
                data-toggle="tab"
                data-target="#kt_header_tab_2"
                role="tab"
                >舆情分析</router-link
              >
            </li>
          </ul>
          <b-tabs class="hide-tabs" v-model="tabIndex">
            <b-tab>
              <div class="tab-pane py-5 show active">
                <!--begin::Menu-->
                <div
                  id="kt_header_menu"
                  ref="kt_header_menu"
                  class="header-menu header-menu-mobile header-menu-layout-default"
                >
                  <k-t-menu :menus0="menus0"></k-t-menu>
                </div>
                <!--end::Menu-->
              </div>
            </b-tab>

            <b-tab class="tab-pane p-5 justify-content-between">
              <div
                id="kt_header_menu"
                ref="kt_header_menu"
                class="header-menu header-menu-mobile header-menu-layout-default"
              >
                <k-t-menu :menus="menus1"></k-t-menu>
              </div>
            </b-tab>
            <b-tab class="tab-pane p-5 justify-content-between">
              <div
                id="kt_header_menu"
                ref="kt_header_menu"
                class="header-menu header-menu-mobile header-menu-layout-default"
              >
                <k-t-menu :menus="menus2"></k-t-menu>
              </div>
            </b-tab>
            <b-tab class="tab-pane p-5 justify-content-between">
              <div
                id="kt_header_menu"
                ref="kt_header_menu"
                class="header-menu header-menu-mobile header-menu-layout-default"
              >
                <k-t-menu :menus="menus3"></k-t-menu>
              </div>
            </b-tab>
            <b-tab class="tab-pane p-5 justify-content-between">
              <div
                id="kt_header_menu"
                ref="kt_header_menu"
                class="header-menu header-menu-mobile header-menu-layout-default"
              >
                <k-t-menu :menus="menus4"></k-t-menu>
              </div>
            </b-tab>
            <b-tab class="tab-pane p-5 justify-content-between">
              <div
                id="kt_header_menu"
                ref="kt_header_menu"
                class="header-menu header-menu-mobile header-menu-layout-default"
              >
                <k-t-menu :menus="menus5"></k-t-menu>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import KTTopbar from "@/view/layout/header/Topbar.vue";
import KTLayoutHeader from "@/assets/js/layout/base/header.js";
import KTLayoutHeaderMenu from "@/assets/js/layout/base/header-menu.js";
// import KTMenu from "@/view/layout/header/Menu.vue";
import KTMenu from "@/components/Menu";
export default {
  name: "KTHeader",
  data() {
    return {
      tabIndex: 0,
      menus0: [],
      menus1: [
        {
          menuName: "法规检索",
          url: "/fkgHome/lawSearch"
        },
        {
          menuName: "法库概况",
          url: "/fkgHome/lawLibrary" //
        }
      ],
      menus2: [
        {
          menuName: "处罚检索",
          url: "/fkgHome/punishmentSearch"
        },
        {
          menuName: "处罚概况",
          url: "/fkgHome/punishmentLibrary"
        }
      ],
      menus3: [
        {
          menuName: "案例查询",
          url: "/fkgHome/eventsSearch"
        },
        {
          menuName: "事件查询",
          url: "/fkgHome/oneEventSearch"
        },
        {
          menuName: "事件展示",
          url: "/fkgHome/eventsView"
        }
      ],
      menus4: [],
      menus5: [
        {
          menuName: "数据采集",
          url: "/newswatcher/siteinfomation"
        },
        {
          menuName: "舆情热点",
          url: "/newswatcher/wordscloud"
        },
        {
          menuName: "关键词追踪",
          url: "/newswatcher/keywordstracing"
        }
      ]
    };
  },
  components: {
    KTTopbar,
    KTMenu
  },
  mounted() {
    // Init Desktop & Mobile Headers
    KTLayoutHeader.init(
      this.$refs["kt_header"],
      this.$refs["kt_header_mobile"]
    );

    // Init Header Menu
    KTLayoutHeaderMenu.init(
      this.$refs["kt_header_menu"],
      this.$refs["kt_header_navs"]
    );
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Check if the header menu is enabled
     * @returns {boolean}
     */
    headerMenuEnabled() {
      return !!this.layoutConfig("header.menu.self.display");
    },

    /**
     * Get extra classes for header based on the options
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Get extra classes for header menu based on the options
     * @returns {null|*}
     */
    headerMenuClasses() {
      const classes = this.getClasses("header_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Check if header container is fluid
     */
    widthFluid() {
      return this.layoutConfig("header.self.width") === "fluid";
    }
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      let target = event.target;
      // console.log(target.classList)
      if (!event.target.classList.contains("nav-link")) {
        target = event.target.closest(".nav-link");
      }

      const tab = target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(target.getAttribute("data-tab"));

      // set current active tab
      target.classList.add("active");
      // console.log(target.classList)
    }
  }
};
</script>

<style scoped>
.container {
  padding: 0 25px;
}
</style>
