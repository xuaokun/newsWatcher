<template lang="">
    <ul class="menu-nav">
        <router-link v-for="(item, index) in menus" :key="index.url"
        :to="item.url"
        v-slot="{ href, navigate, isActive, isExactActive }"
      >
        <li
          aria-haspopup="true"
          data-menu-toggle="hover"
          class="menu-item"
          :class="[
            isActive && 'menu-item-active',
            isExactActive && 'menu-item-active'
          ]"
        >
          <a :href="href" class="menu-link" @click="navigate">
            <span class="menu-text"> {{item.menuName}} </span>
          </a>
        </li>
      </router-link>
    </ul>
</template>
<script>
export default {
  name: "KTMenu",
  props:{
    menus: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return []
      }
    },
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>
<style lang="">
    
</style>