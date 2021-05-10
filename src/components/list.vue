<template>
  <div>
      <ul class="list">
          <li class="flex j-s listitem" v-for="(item,index) in list" :key="index">
              <div class="con">
                  <a href=":javascript">{{ item.title }}</a>
                  <p>{{ item.digest+" ..." }}</p>
                  <ul class="tools flex a-c">
                      <li class="hot flex j-s a-c">
                          <img src="../assets/img/hot.png">
                          {{ index+10 }}
                      </li>
                      <li class="writer">
                          {{ item.source }}
                      </li>
                      <li class="pl flex j-s a-c">
                          <img src="../assets/img/pl.png">
                          {{ index+7 }}
                      </li>
                      <li class="like flex j-s a-c">
                          <img src="../assets/img/like.png">
                          {{ index+3 }}
                      </li>
                  </ul>
              </div>
              <img :src="item.imgsrc" class="contentimg">
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:["list"],
}
</script>

<style src="../assets/css/list.css" scoped></style>