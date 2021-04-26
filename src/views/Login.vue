<template>
  <div>
    <h1>这是登录页</h1>
    <input type="text" v-model="value"/>
    <button @click="addToken">修改/添加token</button>
    <button @click="delToken">删除token</button>
    <button @click="toHome">跳转首页</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    addToken() {
      this.$store.commit("setToken", this.value);
    },
    delToken() {
      this.$store.commit("delToken");
    },
    toHome() {
      this.$router.push({path: "/home"});
    }
  }
}
</script>

<style scoped>

/* @import url(); 引入公共css类 */

</style>


