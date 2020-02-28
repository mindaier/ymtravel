<template>
  <div>
    <ul>
      <li class="item"
        v-for="item of categoryList"
        :key="item.id"
      >
        <span class="item-icon iconfont">&#xe61b;</span>
        {{item.title}}
        <div v-if="item.children">
          <detail-list :categoryList="item.children"></detail-list>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .item
    line-height .66rem
    font-size .32rem
    padding .1rem .2rem
  .item-icon
    color $bgColor
    margin-right .06rem
</style>
