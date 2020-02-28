<template>
  <div>
    <div class="area" >
      <p class="title">热销推荐</p>
      <ul class="hot" >
        <li class="hot-item"
          v-for="item of recommendList"
          :key="item.id"
        >
          <div class="img">
            <img class="img-content" :src="item.imgUrl">
          </div>
          <div class="content">
            <p class="content-name">{{item.title}}</p>
            <p class="content-desc">{{item.desc}}</p>
            <router-link to="/detail">
              <button class="item-button">查看详情</button>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="area">
      <p class="title">周末去哪儿</p>
      <ul class="weekend">
        <li class="weekend-item" v-for="item of weekendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array,
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .title
    height .88rem
    line-height .88rem
    background #eee
    padding-left .2rem
    font-size .32rem
  .hot
    padding .1rem
    .hot-item
      display flex
      .img
        width 2rem
        height 2rem
        padding .1rem
        .img-content
          width 100%
      .content
        flex 1
        padding-left .1rem
        margin-top .1rem
        line-height .60rem
        .content-name
          height .60rem
          font-size .38rem
        .content-desc
          font-size .32rem
          color #777
        .item-button
          margin-top .14rem
          width 1.7rem
          height .5rem
          line-height .5rem
          border-radius .06rem
          background rgb(255, 131, 0)
          color #fff
          font-size .32rem
          text-align center
  .weekend-item
    .item-img
      width 100%
    .item-info
      padding .1rem .2rem
    .item-title
      font-size .32rem
      line-height .60rem
    .item-desc
      line-height .5rem
      font-size .28rem
      color #666
</style>
