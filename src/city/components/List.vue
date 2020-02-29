<template>
  <div class="list-wrapper">
    <div class="area">
      <p class="title border-topbottom">您的位置</p>
      <ul class="list">
        <li class="list-item">
          <button class="list-button">北京</button>
        </li>
      </ul>
    </div>
    <div class="area">
      <p class="title border-topbottom">热门城市</p>
      <ul class="list">
        <li class="list-item" v-for="item of hotCities" :key="item.id">
          <button class="list-button">{{item.name}}</button>
        </li>
      </ul>
    </div>
    <div class="area" v-for="(item, key) of cities" :key="key">
      <p class="title border-bottom">{{key}}</p>
      <ul class="list-alpha">
        <li class="list-alpha-item border-bottom"
          v-for="innerItem of item" :key="innerItem.id"
        >
          {{innerItem.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    city: Array,
    hotCities: Array,
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-top .01rem solid #ccc
    &:after
      border-bottom .01rem solid #ccc
  .list-wrapper
    position absolute
    top 1.57rem
    left 0
    right 0
    bottom 0
    overflow hidden
  .title
    height .66rem
    line-height .66rem
    text-indent .2rem
    color #666
    background #eee
  .list
    display flex
    flex-direction row
    flex-wrap wrap
    padding .2rem .8rem .2rem .2rem
    .list-item
      box-sizing border-box
      width 33.33%
      padding .1rem
      .list-button
        padding .1rem
        width 100%
        background #fff
        border .01rem solid #ccc
        border-radius .06rem
        color #666
  .list-alpha
    text-indent .2rem
    color #666
    .list-alpha-item
      line-height .8rem

</style>
