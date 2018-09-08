<template>
  <!--品牌制造商直供  抽取组件-->
  <div class="brand">
    <div class="brand_header">
      <span class="brand_header_item">品牌制造商直供</span>
      <i class="iconfont icon-right_b"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .brand
    width 100%
    .brand_header
      width 100%
      height 50px
      font-size 17px
      text-align center
      line-height 50px
      .brand_header_item
        display inline-block
      .iconfont
        display inline-block
    .brand_content
      width 100%
      height 250px
      .brand_content_item
        width 48%
        height 48%
        background-color #F4F4F4
        margin 1%
        float left
        background-size 100% 100%
        background-repeat no-repeat
        padding-right 2px
        font-size 14px
        text-decoration none
        color black
      .brand_content_item01
        background-image url("../../../static/images/brand/01.png")
        padding-left 5px
        .brand_content_item_margin
          margin-top 4px
          font-size 12px
        .brand_content_item_border
          border 1px solid #b4282d
          display inline-block
        .brand_content_item_p
          font-size 14px
      .brand_content_item02
        background-image url("../../../static/images/brand/02.png")
        padding-left 5px
        .brand_content_item_margin
          margin-top 4px
          font-size 12px
        .brand_content_item_border
          border 1px solid #b4282d
          display inline-block
        .brand_content_item_p
          font-size 14px
      .brand_content_item03
        background-image url("../../../static/images/brand/03.png")
        padding-left 5px
        .brand_content_item_margin
          margin-top 4px
          font-size 12px
        .brand_content_item_border
          border 1px solid #b4282d
          display inline-block
        .brand_content_item_p
          font-size 14px
      .brand_content_item04
        background-image url("../../../static/images/brand/04.png")
        padding-left 5px
        .brand_content_item_margin
          margin-top 4px
          font-size 12px
        .brand_content_item_border
          border 1px solid #b4282d
          display inline-block
        .brand_content_item_p
          font-size 14px
</style>
