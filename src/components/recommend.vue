<template>
  <div>
      <ul class="board">
        <li>
          <a href=":javascript">
            <img src="../assets/img/board1.png">
          </a>
        </li>
        <li>
          <a href=":javascript">
            <img src="../assets/img/board2.png">
          </a>
        </li>
        <li>
          <a href=":javascript">
            <img src="../assets/img/board3.png">
          </a>
        </li>
        <li>
          <a href=":javascript">
            <img src="../assets/img/board4.png">
          </a>
        </li>
      </ul>
      <qrcode></qrcode>
  </div>
</template>

<script>
import qrcode from '../components/qrcode'

export default {
  components: { 
    qrcode 
  },

}
</script>

<style scoped>
.board{
  width: 280px;
  margin-left: 40px;
  padding-top: 30px;
  padding-bottom: 5px;
}
.board li img{
  width: 280px;
}
</style>