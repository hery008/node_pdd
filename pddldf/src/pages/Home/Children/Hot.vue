<template>
  <div class="hot">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../imgs/rowing/s1.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../imgs/rowing/s2.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../imgs/rowing/s3.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../imgs/rowing/s4.png" width="100%" alt=""></div> 
        <div class="swiper-slide"><img src="../imgs/rowing/s5.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../imgs/rowing/s6.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../imgs/rowing/s7.png" width="100%" alt=""></div>
      </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

export default {
  name: "Hot",
  mounted () {
    //创建swiper实例
    new Swiper('.swiper-container', {
      autoplay:true,
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }
}  
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.hot {
  width: 100%;
  height: 100%;
  background: purple;
  padding-top: 46px;
}
</style>
