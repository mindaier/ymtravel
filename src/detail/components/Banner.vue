<template>
  <div class="banner">
    <div class="item">
      <img class="item-img" :src="bannerImg" />
    </div>
    <div class="img-desc">
      <p class="img-num">
        <span class="iconfont img-icon">&#xe634;</span>
        4
      </p>
      <p class="img-text">{{sightName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    sightName: String
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    background #eee
    width 100%
    height 0
    padding-bottom 55%
    overflow hidden
    .item-img
      width 100%
    .img-desc
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.7))
      position absolute
      left 0
      right 0
      bottom 0
      padding .1rem .2rem
      .img-num
        width 1.2rem
        height .4rem
        border-radius .2rem
        background rgba(0,0,0,.7)
        color #fff
        font-size .24rem
        line-height .4rem
        text-align center
        .img-icon
          font-size .28rem
          margin-right .06rem
      .img-text
        color #fff
        font-size .34rem
        height .6rem
        line-height .6rem
</style>
