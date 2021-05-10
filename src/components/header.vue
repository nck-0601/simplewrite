<template>
  <div class="border">
    <div class="flex j-s header">
      <div>
        <img src="../assets/img/logo.png" class="logo">
      </div>
      <div class="flex j-s a-c menu1">
        <div class="flex j-end a-c">
          <div class="sy flex j-s a-c">
            <img src="../assets/img/homepage.png" class="img">
            首页
          </div>
          <div class="download flex j-s a-c">
            <img src="../assets/img/download.png" class="img">
            下载App
          </div>
          <div class="flex j-s a-c  search">
            <input type="text" placeholder="搜索" @focus="focus" @blur="blur" :class="{focus:isFocused}">
            <img src="../assets/img/search.png" class="searchicon">
          </div>
        </div>
        <div class="flex j-end a-c">
          <div class="flex a-c">
            <img src="../assets/img/Aa.png" class="Aa">
          </div>
          <div class="login">登录</div>
        </div>
      </div>
      <div class="flex j-s a-c headerbtn">
        <div class="zc">
          注册
        </div>
        <div class="write">
          <img src="../assets/img/pen.png" class="pan">
          <div class="xiewenzhang">
            写文章
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<style src="../assets/css/header.css" scoped>

</style>

<script>
export default {
  data() {
    return {
      isFocused : false,
    }
  },
  methods: {
    focus(){
      console.log("focus");
      this.isFocused = true;
    },
    blur(){
      console.log("blur");
      this.isFocused = false;
    }
  },
}
</script>