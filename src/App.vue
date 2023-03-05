<template>

  <div v-show="isShow" class="begin">
    <div class="enter" @click="a"><router-link to="/SelectGame"><p>9934游戏中心</p></router-link></div>
  </div>
  <router-view></router-view>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: true,
      myShow:false,
    }
  },
  methods:{
    a(){
      this.isShow=false;
      this.myShow=true;
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border-box让盒子的大小不受边框和内外边距影响 */
}

em, i {
  font-style: normal;
}

li {
  list-style: none;
}

img {
  border: 0;
  /* 防止边框下侧空隙 */
  vertical-align: middle;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}
.begin{
  width: 100%;
  height: 740px;
  background: url("@/assets/R-C.jpg");
  opacity: 0.8;
}
.enter {
  position: absolute;
  top: 350px;
  left: 650px;
  height: 40px;
  width: 250px;
  border-radius: 20px;
  background-color: #e0ae44;
  text-align: center;
  line-height: 40px;
  font-weight: 800;
  color: #000000;
}
.enter p{
  color: #0684a9;
}

</style>
