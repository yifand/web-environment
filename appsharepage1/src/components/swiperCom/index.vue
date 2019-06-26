<template>
  <div class="banner-box">
    <swiper :options="swiperOption" class="banner-showbox" ref="mySwiper">
      <swiper-slide> <img class="ad-img2" src="http://image.jufengchaopao.com/iphonex 1.png" alt=""></swiper-slide>
      <swiper-slide> <img class="ad-img3" src="http://image.jufengchaopao.com/iphonex-21.png" alt=""></swiper-slide>
    </swiper>  
  </div>  
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'swiperCom',
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return {
      swiperOption:{
        loop:true,
        autoplay:true
      }
    }
  },
  methods:{

  },
  created(){

  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted(){
    this.swiper.slideTo(3, 1000, false)
    this.swiper.autoplay.start();
  }
}
</script>

<style lang="less" scoped>
.banner-box{
  width:280px;
  height:600px;
  overflow:hidden;
}
</style>
