<template>
  <div id="edit">
    <el-autocomplete class="inline-input" style="margin: 2%" v-model="title" :fetch-suggestions="querySearch"
      placeholder="请输入标题" @select="handleSelect"></el-autocomplete>
    <div id="inp">
      <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="message">
      </el-input>
    </div>
    <div id="but">
      <el-button @click="unpubedit">保存到草稿箱</el-button>
      <el-button type="primary" @click="finishedit">发表文章</el-button>
    </div>
  </div>
</template>
<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        restaurants: [],
        title: "",
        message: "",
        name: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString
          ? restaurants.filter(this.createFilter(queryString))
          : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
            0
          );
        };
      },
      loadAll() {
        return [{ value: "html" }, { value: "js" }, { value: "vue" }];
      },
      handleSelect(item) {
        console.log(item);
      },
      finishedit() {
        const { title, message, name } = this
        const val = { title, message, name }
        this.$store.commit('finishedit', val)
      },
      unpubedit(){
        const { title, message, name } = this
        const val = { title, message, name }
        this.$store.commit('unpubedit', val)
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
        const that = this.$store.state.article.editdata
      if (that) {
        this.title = that.title
        this.message = that.message
        this.name = that.name
      }
    },
    destroyed() {
      this.$store.state.article.editdata = {}
    },
  };
</script>

<style scoped lang="less">
  #edit {
    width: 82vw;

    #inp {
      transform: translateX(1.5vw);
    }

    #but {
      margin: 1vw;
      position: absolute;
      right: 4vw;
    }
  }
</style>