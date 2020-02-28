<template>
  <div>
    <div class="header-fixed" v-show="showHeader" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont back-home">&#xe6bc;</span>
      </router-link>
      <div class="header-title">{{this.sightName}}</div>
    </div>
    <div class="header-icon" v-show="!showHeader">
      <router-link to="/">
        <span class="iconfont back-icon">&#xe6bc;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    scrollTop () { // 页面滚动的时候，header渐隐渐显
      const top = document.documentElement.scrollTop
      // console.log(top)
      let opacity = top / 140
      opacity = opacity > 1 ? 1 : opacity
      if (top > 60) {
        this.showHeader = true
        this.opacityStyle = {opacity}
      } else {
        this.showHeader = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.scrollTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollTop)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-fixed // 固定头部，渐隐渐现
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    background $bgColor
    line-height $headerHeight
    display flex
    color #fff
    font-size .34rem
    z-index 9
    .back-home
      position absolute
      top 0
      left 0
      display inline-block
      width .8rem
      height .8rem
      text-align center
      font-size .42rem
      color #fff
    .header-title
      flex 1
      text-align center
  .header-icon
    z-index 9
    position absolute
    top .2rem
    left .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius 50%
    background rgba(0,0,0,.6)
    text-align center
    color #fff
    padding-right .01rem
    .back-icon
      font-size .44rem

</style>
