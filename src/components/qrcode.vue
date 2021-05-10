<template>
  <div>
      <div class="QRcode flex a-c" @mouseenter.stop="show" @mouseleave.stop="hidden">
        <img src="../assets/img/QRcode.png" class="QRcodeimg">
        <div class="download">
          <div class="part1">
            下载简书手机App
            <img src="../assets/img/more.png" class="more">
          </div>
          <div class="part2">
            随时随地发现和创作内容
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        show(){
            console.log("show");
        },
        hidden(){
            console.log("hidden");
        }
    },
}
</script>

<style scoped>
.QRcode{
  width: 236px;
  margin-left: 40px;
  margin-bottom: 30px;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
}
.download{
  color: #333;
  font-size: 15px;
  margin-left: 10px;
}
.QRcodeimg{
  width: 60px;
}
.more{
  -webkit-filter: grayscale(1);
  width: 15px;
  height: 13px;
  padding-top: 3.5px;
}
.part2{
  margin-top: 5px;
  font-size: 13px;
  color: #999;
}
</style>