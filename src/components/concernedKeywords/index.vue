<!--
 * @Description: 
 * @Author: akxu
 * @Date: 2021-10-10 16:28:58
 * @LastEditTime: 2021-10-12 22:14:29
 * @LastEditors: AKXU-NB1
 * @LastEditContent: 
-->
<template>
  <!--begin::Mixed Widget 14-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title font-weight-bolder">{{ title }}</h3>
      <div class="card-toolbar"></div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <div class="flex-grow-1">
        <v-text-field
          v-model="addKeyword"
          :counter="10"
          :rules="keywordRules"
          label="添加追踪关键词"
          @keydown.enter="handleAddKeyword"
        ></v-text-field>
        <v-chip
          v-for="(keyword, index) in keywords"
          :key="keyword"
          class="ma-2"
          close
          :color="getRandomColor()"
          text-color="white"
          close-icon="mdi-delete"
          @click:close="deleteKeyword(index)"
        >
          <v-avatar left>
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-avatar>
          {{ keyword }}
        </v-chip>
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 14-->
</template>

<script>
import { mapGetters } from "vuex";
import { getRandomColor } from "@/logic/common";
import {
  getConcernedKeywords,
  updateConcernedKeywords
} from "@/logic/news-watcher/keywords-tracing";
export default {
  name: "concernedKeywords",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      keywords: [],
      addKeyword: "",
      keywordRules: [
        v => !v || (v && v.length <= 10) || "关键词不能超过10个字符"
      ]
    };
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  created() {
    getConcernedKeywords(this.currentUser._id).then(re => {
      if (re.data && re.data.length > 0) {
        this.keywords = re.data;
      }
    });
  },
  methods: {
    //获得随机颜色
    getRandomColor,
    //删除一个关键词
    deleteKeyword(v) {
      let keyword = this.keywords[v];
      this.keywords.splice(v, 1);
      updateConcernedKeywords({
        _id: this.currentUser._id,
        keywords: this.keywords
      }).then(success => {
        if (!success) {
          this.keywords.push(keyword);
        }
      });
    },

    //添加一个关键词
    handleAddKeyword() {
      if (
        this.addKeyword.length > 10 ||
        this.keywords.indexOf(this.addKeyword) > -1
      ) {
        return;
      }
      this.keywords.push(this.addKeyword);
      updateConcernedKeywords({
        _id: this.currentUser._id,
        keywords: this.keywords
      }).then(success => {
        if (!success) {
          this.keywords.pop();
        } else {
          this.addKeyword = "";
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
}
</style>
