<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont header-left-back">&#xe6bc;</span>
    </div>
    <div class="header-search">
      <span class="iconfont search-icon">&#xe61d;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      深圳
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height $headerHeight
    background $bgColor
    line-height $headerHeight
    color #fff
    font-size .30rem
    display flex
    .header-left
      width .8rem
      text-align center
      font-size .4rem
      color #fff
      .header-left-back
        font-size .4rem
    .header-search
      flex 1
      height .6rem
      line-height .58rem
      background #fff
      color #e4e7ea
      border-radius .06rem
      padding-left .2rem
      margin-top .12rem
      font-size .28rem
      .search-icon
        font-size .36rem
        position relative
        top .03rem
    .header-right
      min-width 1.3rem
      text-align center
</style>
