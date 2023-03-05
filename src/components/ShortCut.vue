<template>
  <iconfont></iconfont>
  <div class="ShortCut">
    <h1>
      9934游戏中心
      <img src="../assets/ShortCut/游戏机.png" alt="">
    </h1>
    <div class="font">
      <span class="iconfont icon-youxihuodong">主页
      <img src="../assets/ShortCut/NO.0005.png" alt="">
      </span>
      <span class="iconfont icon-a-bianzu13-15">通知
      <img src="../assets/ShortCut/NO.0003.png" alt=""></span>
      <span class="iconfont icon-a-bianzu13-36">设置
      <img src="../assets/ShortCut/NO.0010.png" alt=""></span>
      <span class="iconfont icon-lishiyouxibitongjiweijihuo">历史
      <img src="../assets/ShortCut/NO.0012.png" alt=""></span>
    </div>


  </div>
</template>

<script>
import iconfont from "@/assets/font_3860830_762logbikd9/iconfont.css";

export default {
  name: "ShortCut",
  components: {
    iconfont,
  },
}

</script>

<style scoped>
.ShortCut {
  height: 50px;
  width: 80%;
  margin: 0 auto;
  background-color: #e7e587;
}
h1 {
  float: left;
  width: 300px;
  background-color: #90d7bf;
  font-size: 20px;
  font-weight: 800;
  line-height: 50px;
  color: #3daed0;
  border-radius: 0 50px 50px 0;
  padding-left: 25px;
}

h1 img {
  float: right;
  margin-top: 2px;
}

.font {
  float: right;
  height: 50px;
  width: 70%;

}

.font span {
  line-height: 50px;
  font-size: 40px;
  margin-left: 15px;
}

img {
  height: 50px;
  margin-top: -10px;
}


</style>