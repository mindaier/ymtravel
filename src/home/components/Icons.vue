<template>
  <div class="items">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of pages" :key="item.index">
        <div class="item" v-for="i of item" :key="i.id">
          <img class="item-img" :src="i.imgUrl">
          <span class="item-desc">{{i.desc}}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .items
    width 100%
    height 50%
    padding .2rem .1rem
    .item
      position relative
      box-sizing border-box
      float left
      width 25%
      overflow hidden
      height 0
      padding-bottom 25%
      margin-bottom .1rem
      text-align center
      // background #000
      .item-img
        width 70%
      .item-desc
        position absolute
        left 0
        right 0
        bottom .1rem
        font-size .30rem
</style>
