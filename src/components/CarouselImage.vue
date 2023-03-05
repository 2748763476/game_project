<template>
  <div class="banner">
    <div class="pre"><a href="javascripts:;" @click.prevent='left'>&lt;</a></div>
    <div class="next"><a href="javascripts:;" @click.prevent='right'>&gt;</a></div>
    <ul>
      <li class="img-slide"><a to="/Game"><img src="../assets/CarouselImages/image_4.png" ></a></li>
      <li class="img-slide"><router-link to="/Game"><img src="../assets/CarouselImages/img_2.png" ></router-link></li>
      <li class="img-slide"><router-link to="/Game"><img src="../assets/CarouselImages/img_1.png" ></router-link></li>
      <li class="img-slide"><router-link to="/Game"><img src="../assets/CarouselImages/image_3.png" ></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CarouselImage",
}
window.addEventListener('mouseover', function () {
  var pre = document.querySelector('.pre');
  var next = document.querySelector('.next');
  var ul = document.querySelector('.banner ul');
  var index = 0, len;
  len = ul.children.length;
  ul.children[index].style.opacity = '1';
  next.addEventListener('click', function () {
    index++;
    if (index >= len) index = 0;
    for (var i = 0; i < len; i++) {
      ul.children[i].style.opacity = '0';
    }
    ul.children[index].style.opacity = '1';
  });
  pre.addEventListener('click', function () {
    index--;
    if (index < 0) {
      index = len - 1;
    }
    for (var i = 0; i < len; i++) {
      ul.children[i].style.opacity = '0';
    }
    ul.children[index].style.opacity = '1';
  });
  function slideShow() {
    index++;
    if (index == len) {
      index = 0;
    }
    for (var i = 0; i < len; i++) {
      ul.children[i].style.opacity = '0';
    }
    ul.children[index].style.opacity = '1';
  }
  setInterval(slideShow, 5000);
})

</script>

<style scoped>
.banner {
  position: relative;
  margin: 0 auto;
  width: 80%;
  height: 300px;
  background-color: #fdfdfd;
}

.next,
.pre {
  position: absolute;
  width: 30px;
  height: 50px;
  background-color: rgb(234, 243, 226);
  color: rgb(194, 182, 165);
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  z-index: 99;
}

.pre {
  left: 10px;
  top: 45%;
}

.next {
  right: 10px;
  top: 50%;
  width: 30px;
  height: 50px;
}

.banner ul li {
  /* display: none; */
  position: absolute;
  /*opacity: 0;*/
  transition: 1s;
  width: 100%;
}
.banner ul li.active {
  display: block;
}
.banner ul li img {
  width: 1215px;
  height: 300px;
}

</style>