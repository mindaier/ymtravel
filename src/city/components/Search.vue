<template>
  <div class="search">
    <div class="search-input-wrapper">
      <input type="text"
        class="search-input"
        placeholder="请输入城市名或拼音"
        v-model="inputVal"
      />
    </div>
    <div class="search-content">
      <ul class="search-list" v-if="showList">
        <li class="list-item border-topbottom"
          v-for="item of list" :key="item.id"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    hotCities: Array
  },
  data () {
    return {
      showList: true,
      inputVal: '',
      list: []
    }
  },
  components: {

  },
  methods: {
    inputValChange () {
      this.hotCities.forEach((item, index) => {
        if (this.inputVal.indexOf(item.spell) > -1 && this.inputVal.indexOf(item.name) > -1) {
          this.list.push(item)
        }
      })
      console.log(this.list)
      return this.list
    }
  },
  updated () {
    this.inputValChange()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .search
    position relative
    height 100%
    .search-input-wrapper
      height .72rem
      background $bgColor
      text-align center
      padding 0 .1rem
      .search-input
        box-sizing border-box
        padding 0 .1rem
        width 100%
        height .62rem
        line-height .62rem
        border-radius .06rem
        text-align center
    .search-content
      z-index 1
      position absolute
      top .72rem
      left 0
      right 0
      bottom 0
      background #000
      .search-list
        background #eee
        .list-item
          height .4rem
          line-height .4rem
          padding .1rem .2rem
          font-size .24rem
</style>
