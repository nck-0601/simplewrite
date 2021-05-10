<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/header.vue'
// eslint-disable-next-line no-unused-vars
import Commoncss from './assets/css/common.css'
export default {
  components:{
    Header,
  }
}
</script>
<style>

</style>
