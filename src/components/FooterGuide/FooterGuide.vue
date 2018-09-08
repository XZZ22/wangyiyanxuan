<template>
  <div class="footerContainer">
    <span class="guide_item" @click="goto('/home')" :class="{on:isCurrent('/home')}">
      <span class="footerItem">
      <i class="iconfont icon-shouye"></i>
      </span>
      <span class="fontSize">首页</span>
    </span>
    <span class="guide_item" @click="goto('/knowledge')" :class="{on:isCurrent('/knowledge')}">
      <span class="footerItem">
        <i class="iconfont icon-pingbandiannao"></i>
      </span>
      <span class="fontSize">识物</span>
    </span>
    <span class="guide_item" @click="goto('/classify')" :class="{on:isCurrent('/classify')}">
      <span class="footerItem">
        <i class="iconfont icon-liebiaofenlei"></i>
      </span>
      <span class="fontSize">分类</span>
    </span>
    <span class="guide_item" @click="goto('/shoppingcart')" :class="{on:isCurrent('/shoppingcart')}">
      <span class="footerItem">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span class="fontSize">购物车</span>
    </span>
    <span class="guide_item" @click="goto('/personal')" :class="{on:isCurrent('/personal')}">
      <span class="footerItem">
        <i class="iconfont icon-geren"></i>
      </span>
      <span class="fontSize">个人</span>
    </span>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      isCurrent(path){
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footerContainer
    bottom-border-1px(#d9d9d9)
    position fixed
    display flex
    left 0
    right 0
    bottom 0
    z-index 100
    background-color #fafafa
    height 50px
    .guide_item
      display flex
      text-align center
      flex-direction column
      align-items center
      margin 7px
      flex 1
      &.on
        color red
      .fontSize
        font-size 12px
        margin-top 4px
</style>
