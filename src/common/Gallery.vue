<template>
  <div class="wrapper" @click="closeGallery" v-if="toggle">
    <div class="container">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of gallaryImgs" :key="item.index">
          <img class="item-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    gallaryImgs: Array,
    showHide: Boolean
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true
      },
      toggle: false
    }
  },
  // computed: {
  //   showSwiper () {
  //     return this.gallaryImgs.length > 0 ? 1 : 0
  //   }
  // },
  methods: {
    closeGallery () {
      this.toggle = false
    }
  },
  watch: {
    showHide () {
      this.toggle = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .wrapper
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #000
    z-index 99
    display flex
    flex-direction column
    justify-content center
    .container
      width 100%
      height 0
      // overflow hidden
      padding-bottom 100%
      .item-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
