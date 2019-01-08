<template>
  <div class="hot">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../imgs/rowing/s1.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/rowing/s2.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/rowing/s3.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/rowing/s4.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/rowing/s5.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/rowing/s6.png" width="100%" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/rowing/s7.png" width="100%" alt=""></div>
      </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
    <!-- 中间导航 -->
        <hot-nav/>
    <!--广告位-->
    <div class="hot-ad">
      <img src="./../../imgs/hot_ad/home_ad.gif" alt="" width="100%">
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

import HotNav from "./HotNav.vue"
export default {
  name: "Hot",
  components:{HotNav},
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
  background: #f5f5f5;
  padding-top: 46px;
  .hot-ad{
    background-color: #fff
    margin-top 8px
    padding 5px
  }
}
</style>
