<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont header-left-back">&#xe6bc;</span>
    </div>
    <div class="header-search">
      <span class="iconfont search-icon">&#xe61d;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city" tag="div" class="header-right">
      {{this.city}}
      <span class="iconfont">&#xe6aa;</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
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
      min-width 1.2rem
      padding 0 .06rem
      text-align center
</style>
