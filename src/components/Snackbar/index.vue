<template>
  <v-snackbar top text v-model="visible" :color="color">
    {{ this.$store.state.snackbar.msg }}
    <!-- 关闭按钮 -->
    <template v-slot:action="{ attrs }">
      <v-btn v-bind="attrs" v-if="showClose" icon @click="close" :color="color"
        ><v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    visible: {
      // return this.$store.state.snackbar.visible;
      get: function() {
        return this.$store.state.snackbar.visible;
      },
      set: function() {
        //因为我这里并不需要其他属性也跟着一起改变 所以就这样写了
        console.log("1");
      }
    },
    showClose() {
      return this.$store.state.snackbar.showClose;
    },
    color() {
      return this.$store.state.snackbar.color;
    }
  },
  methods: {
    close() {
      this.$store.commit("snackbar/CLOSE_SNACKBAR");
    }
  }
};
</script>
