<template>
  <div class="footer">
    <div class="mian">
      <div class="left">
        作者:<br>
        付聪政
        <br>
        qq:<br>
        2748763476

      </div>
      <div class="right">
        温馨提示：抵制不良游戏，拒绝盗版游戏，注意自我保护，谨防受骗上当，适度游戏益脑，沉迷游戏伤身，合理安排时间，享受健康生活
      </div>
      <h4>Copyright © 2023 - 2023 9943.com All Rights Reserved. 九九四三网络股份有限公司 版权所有</h4>

    </div>

  </div>
</template>

<script>
export default {
  name: "FooterA"
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 200px;
 }
.mian{
  height: 200px;
  width: 80%;
  margin: 0 auto;
  background-color: #ffffff;
}
.left,.right{
  height: 90%;
  width: 50%;
  padding: 20px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  opacity: 0.8;
}
.left{
  float: left;
  border: 3px solid #50bfe1;
  background:url("@/assets/footer/01526a5bde40dfa80120925280875c.jpg@2o.jpg");
}
.right{
  border: 3px solid #47b296;
  float: right;
  color: #4ceef3;
  background:url("@/assets/footer/01e86d561f39d232f8755701af4285.jpg@1280w_1l_2o_100sh.jpg");
}
h4{
  text-align: center;
}
</style>