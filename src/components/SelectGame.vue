<template>
  <div class="i">
  <short-cut></short-cut>
  <CarouselImage></CarouselImage>
  <HotPlay></HotPlay>
  <footerA></footerA></div>

</template>

<script>
import CarouselImage from "@/components/CarouselImage.vue";
import FooterA from "@/components/FooterA.vue";
import shortCut from "@/components/ShortCut.vue";
import HotPlay from "@/components/HotPlay.vue";
export default {
  name: "SelectGame",
  components:{
    CarouselImage,
    FooterA,
    shortCut,
    HotPlay,
  }
}
</script>

<style scoped>
.i {
  background: url("@/assets/R-O.png");
  background-size: cover;
}
</style>