<template>
  <ul class="menu-nav">
    <!-- <router-link to="/dashboard" v-slot="{ href, navigate, isActive, isExactActive }">
      <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">Dashboard</span>
        </a>
      </li>
    </router-link> -->

    <!-- <li class="menu-section">
      <h4 class="menu-text">Components</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li> -->

    <li
      @click="getItem(index)"
      v-for="(mainItem, index) in menus"
      :key="index"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': index == 0 }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-digital-marketing"></i>
        <span class="menu-text">{{ Object.keys(mainItem)[0] }}</span>
        <i
          v-if="mainItem[Object.keys(mainItem)[0]].length > 0"
          class="menu-arrow"
        ></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">{{ Object.keys(mainItem)[0] }}</span>
            </span>
          </li>
          <!-- <router-link to="/vue-bootstrap/alert" v-slot="{ href, navigate, isActive, isExactActive }">
            <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item" :class="[
                activteSubItemId==-1 && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]">
              <span class="menu-link" @click="navigateToItem('全部', -1)">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">全部</span>
              </span>
            </li>
          </router-link> -->

          <router-link
            v-for="(subItem, index) in mainItem[Object.keys(mainItem)[0]]"
            :key="subItem"
            to="/vue-bootstrap/alert"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                activteSubItemId == index && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <span class="menu-link" @click="navigateToItem(subItem, index)">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">{{ subItem }}</span>
              </span>
            </li>
          </router-link>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  props: {
    menus: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      activteSubItemId: -1
    };
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
    navigateToItem(subItem, index) {
      console.log(subItem);
      if (index == this.activteSubItemId) {
        this.activteSubItemId = -1;
        this.$emit("gotoItem", "");
      } else {
        this.activteSubItemId = index;
        this.$emit("gotoItem", subItem);
      }
    },
    getItem(index) {
      // console.log('获得菜单点击项', index);
      this.$emit("gotoMainItem", index);
    }
  },
  mounted() {
    console.log("左边菜单");
    console.log(this.menus);
  }
};
</script>
