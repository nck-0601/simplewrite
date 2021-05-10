<template>
  <div class="home flex j-s">
      <List :list="list"></List>
      <Recommend></Recommend>
  </div>
</template>

<script>

import List from '../components/list'
import Recommend from '../components/recommend'
export default {
    components:{
        List,
        Recommend,
    },
    props:[""],
    data() {
        return {
            list:[],
        }
    },
    async created() {
        //请求接口
        this.$axios.get("https://v1.alapi.cn/api/new/toutiao")
        .then(res => {
        //console.log(res.data);
        this.list = res.data.data
      })
    },
}
</script>

<style scoped>
    .home{
        width: 960px;
        margin: 0 auto;
    }
</style>