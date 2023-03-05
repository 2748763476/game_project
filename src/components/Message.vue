<template>
  <div class="i">
  <ShortCut></ShortCut>
<div class="message">
  <h1>益智游戏</h1>
  <p>智力游戏就是指包括了IQ题（脑筋急转弯）、推理题、破案题、文字
    游戏等众多与智力有关的游戏类题目
    总称。 智力游戏中有一部分来自于传统的智力测验内容，只是娱乐的成分有所增加。
    大多数情况指指那些通过一定的逻辑或是数学
    ，物理，化学，甚至是自己设定的原理来完成一定任务的小游戏。一般会比较有意思，需要适当的思考，适合年轻人玩。
    益智游戏通常以游戏的形式锻炼了游戏者的脑、眼
    、手等，使人们获得身心健康，增强自身的逻辑分析能力，和思维敏捷性。值得一提
    的是，优秀的益智游戏娱乐性也十分强，既好玩又耐玩。</p>
</div>
  <div class="Hotplay">
    <ul>
      <li><router-link to="/Game"><div class="content content-2">贪吃蛇</div></router-link></li>
      <li><router-link to="/Game"><div class="content content-6">2048</div></router-link></li>
      <li><router-link to="/Game"><div class="content content-1">俄罗斯方块</div></router-link></li>
      <li><router-link to="/Game"><div class="content content-3">五子棋</div></router-link></li>
      <li><router-link to="/Game"><div class="content content-4">飞行棋</div></router-link></li>
      <li><router-link to="/Game"><div class="content content-5">推箱子</div></router-link></li>
    </ul>
  </div>
  <router-view></router-view>
  <FooterA></FooterA>
  </div>
</template>

<script>
import ShortCut from "@/components/ShortCut.vue";
import FooterA from "@/components/FooterA.vue";
export default {
  name: "MessagePart",
  components:{
    ShortCut,
    FooterA
  }
}
</script>

<style scoped>
.i {
  background: url("@/assets/R-C.jpg");
}
.message {
  height: 300px;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #39c1f3;
  background:url("@/assets/Message/016e9c57d4eec60000018c1b4d76f0.jpg@1280w_1l_2o_100sh.jpg");
  opacity: 0.6;
}
.message h1 {
  font-weight: 700;
  font-size: 20px;
  color: #1181dc;
  text-align: center;
}
.message p{
  font-size: 18px;
  text-align: center;
}
.Hotplay {
  height: 500px;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}
li{
  float: left;
  margin-left: 25px;
  margin-bottom: 10px;
  width: 30%;
  height: 230px;
  text-align: center;
  line-height: 230px;
}
ul li .content {
  height: 230px;
  width: 100%;
  font-size: 30px;
  font-weight: 800;
  color: #ffffff;
  /*background-size: 230px 300px;*/
  background-position: -12px 0;
  border-radius: 100px;
}
ul li .content:hover{
  box-shadow: 0 .15rem .3rem rgba(0, 0, 0, 0.4);
  transform: translateY(-4px);
}
ul li .content-1 {
  background: url("@/assets/Message/B-A.png");
  background-size: cover;
}
ul li .content-2 {
  background: url("@/assets/Message/B-C.png");
  background-size: cover;
}
ul li .content-3 {
  background: url("@/assets/Message/B-D.png");
  background-size: cover;
}
ul li .content-4{
  background: url("@/assets/Message/B-E.png");
  background-size: cover;
}
ul li .content-5{
  background: url("@/assets/Message/B-G.png");
  background-size: cover;
}
ul li .content-6{
  background: url("@/assets/Message/B-B.png");
  background-size: cover;
}
</style>