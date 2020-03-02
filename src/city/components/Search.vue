<template>
  <div class="search">
    <div class="search-input-wrapper">
      <input type="text"
        class="search-input"
        placeholder="请输入城市名或拼音"
        v-model="keyworld"
        v-focus
      />
    </div>
    <div class="search-content" ref="wrapper" v-show="keyworld">
      <div>
        <ul class="search-list">
          <li class="list-item border-bottom"
            v-for="item of list" :key="item.id"
            @click="handleItemClick(item.name)"
          >{{item.name}}</li>
          <li class="list-item border-bottom" v-show="hasNodata">没有找到匹配数据</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      list: [],
      keyworld: '',
      timer: null
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  computed: {
    hasNodata () {
      return !this.list.length
    }
  },
  watch: { // 监听input框输入值的改变，作出相应的事情
    keyworld () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyworld) { // 如果input框的输入值取消，列表内容置为空
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.spell.indexOf(this.keyworld) > -1 || item.name.indexOf(this.keyworld) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleItemClick (city) {
      // this.keyworld = e.target.innerText
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
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
      color #666
  .search-content
    z-index 1
    overflow hidden // 不设置的话，引入bscroll会导致整个页面滚动
    position absolute
    top 1.57rem
    left 0
    right 0
    bottom 0
    background #eee
    .list-item
      line-height .62rem
      padding-left .2rem
      font-size .26rem
      background #fff
      color #666
</style>
