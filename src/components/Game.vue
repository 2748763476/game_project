<template>
  <div class="game">
  <short-cut></short-cut>
    <div class="content">
      <img src="../assets/Game/C-A.png">
      <div class="about">
        <em> </em>贪食蛇游戏操作简单，可玩性比较高。这个游戏难
        度最大的不是蛇长得很长的时候，而是开始。那个时候蛇身很短，看上去难度不大，
        却最容易死掉，因为把玩一条小短蛇让人容易走神，失去耐心。由于难度小，你会不知不觉加快调整方向的速度，在
        游走自如的时候蛇身逐渐加长了，而玩家却没有意识到危险，在最得意洋洋的一刻突然死亡。
        贪食蛇的另一个危险期在于游戏开始几十秒之后。由于玩家的注意力高度集中，精神紧张，此时局面
        稍好，就会不由自主地想放松一下，结果手指一松劲，贪食蛇就死了。所以贪食蛇可以算作一个敏捷型的小游戏。
      </div>
    </div>
    <div class="play">
      <router-link to="/EatSnack"><div class="inter">开始游戏</div></router-link>
      <div class="ad">
        <img src="../assets/Game/C-B.png" alt="">
        <img src="../assets/Game/C-D.png" alt="">
        广告位招商
      </div>
    </div>

    <footerA></footerA>


  </div>
</template>

<script>
import ShortCut from "@/components/ShortCut.vue";
import FooterA from "@/components/FooterA.vue";

export default {
  name: "GamePlay",
  components: {
    ShortCut,
    FooterA
  }

}
</script>

<style scoped>
.game {
  background: url("@/assets/Game/C-E.png");
  background-size: cover;
}

.content, .play {
  height: 250px;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

.content img {
  height: 200px;
  margin-left: 10px;
  margin-top: 10px;
}

.content span {
  float: right;
}

.about {
  float: right;
  height: 220px;
  width: 600px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  border: 5px dashed deepskyblue;
}

.inter {
  float: left;
  margin-left: 20px;
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: #52c47a;
  text-align: center;
  line-height: 200px;
  font-weight: 800;
  font-size: 30px;
  color: #fffefe;
  transition: all 1s;
}

.inter:hover {
  font-size: 35px;
  background-color: #5ad1d5;
}

.ad {
  float: right;
  height: 200px;
  width: 900px;
  border: 2px solid #e3e353;
  font-size: 20px;
  font-weight: 800;
}

.ad img {
  height: 100%;
}
</style>