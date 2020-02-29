<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/">
        <span class="iconfont back-home">&#xe6bc;</span>
      </router-link>
    </div>
    <div class="header-right">
      选择城市
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height $headerHeight
    line-height $headerHeight
    background $bgColor
    display flex
    font-size .34rem
    .header-left
      width .6rem
      text-align center
      .back-home
        color #fff
        font-size .42rem
    .header-right
      flex 1
      color #fff
      text-align center
</style>
