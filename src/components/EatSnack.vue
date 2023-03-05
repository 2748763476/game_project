<template>
  <div class="i">
  <ShortCut></ShortCut>
    <div class="game">
    <img src="../assets/TC.png" alt="">
    <div class="control">
      <span class="restart">重新开始</span>
      <span class="new">刷新</span>
      <div class="score">历史最高分:1000</div>
  </div>

</div>
  <div class="do">
    操作介绍：<br>
    玩家使用方向键操控一条长长的蛇不断吞下豆子，同时蛇身随着吞下的豆子不断变长，当蛇头撞到蛇身或障壁时游戏结束。贪吃蛇最初为
    人们所知的是诺基亚手机附带的一个小游戏，它伴随着诺基亚手机走向世界。现在的贪吃蛇出现了许多衍生版本，并被移植到各种平台上
  </div>
  <FooterA></FooterA>
  </div>

</template>

<script>
import FooterA from "@/components/FooterA.vue";
import ShortCut from "@/components/ShortCut.vue";

export default {
  name: "EatSnack",
  components: {
    FooterA,
    ShortCut,
  }
}
</script>

<style scoped>
.i {
  background: url("@/assets/TD.png");
  background-size: cover;
}
.game{
  height: 400px;
  width: 80%;
  margin: 0 auto;
  padding-top: 10px;
  border: 2px solid green;
  text-align: center;
}
.game img {
  height: 250px;
}
.control {
  height: 100px;
  width: 100%;
}
.control span{
  height: 50px;
  width: 200px;
  border-radius: 20px;
  background-color: #4ab4a4;
  text-align: center;
  line-height: 40px;
  font-weight: 800;
  color: #000000;
  margin-top: 20px;
  margin-left: 20px;
}
.restart{
  float: left;
}
.new{
  float: left;
}
.score {
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  height: 50px;
  width: 600px;
  line-height: 50px;
  font-size: 19px;
  border: 3px dashed #b3d4fc;
  border-radius: 10px;
  background-color: #5eab79;
}
.do {
  width: 80%;
  height: 100px;
  margin: 0 auto;
  color: #3daed0;
  font-weight: 800;
}
</style>