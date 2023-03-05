<template>
<div class="Hotplay">
<ul>
  <li><router-link to="/Message"><div class="content content-6">益智游戏</div></router-link></li>
  <li><router-link to="/Message"><div class="content content-1">解谜游戏</div></router-link></li>
  <li><router-link to="/Message"><div class="content content-2">动作冒险</div></router-link></li>
  <li><router-link to="/Message"><div class="content content-3">模拟经营</div></router-link></li>
  <li><router-link to="/Message"><div class="content content-4">空中飞行</div></router-link></li>
  <li><router-link to="/Message"><div class="content content-5">卡牌游戏</div></router-link></li>

</ul>
</div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "HotPlay"
}
</script>

<style scoped>
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
}
ul li .content {
  height: 230px;
  width: 100%;
  font-size: 20px;
  font-weight: 800;
  color: #4ceef3;
  /*background-size: 230px 300px;*/
  background-position: -12px 0;
  border-radius: 100px;
}
ul li .content:hover{
  box-shadow: 0 .15rem .3rem rgba(0, 0, 0, 0.4);
  transform: translateY(-4px);
}
ul li .content-1 {
  background: url("@/assets/HotPlay/A-B.png");
  background-size: cover;
}
ul li .content-2 {
  background: url("@/assets/HotPlay/A-D.png");
  background-size: cover;
}
ul li .content-3 {
  background: url("@/assets/HotPlay/A-E.png");
  background-size: cover;
}
ul li .content-4{
  background: url("@/assets/HotPlay/A-G.png");
  background-size: cover;
}
ul li .content-5{
  background: url("@/assets/HotPlay/A-H.png");
  background-size: cover;
}
ul li .content-6{
  background: url("@/assets/HotPlay/A-P.png");
  background-size: cover;
}



</style>