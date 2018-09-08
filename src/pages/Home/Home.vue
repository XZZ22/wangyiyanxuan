<template>
  <div class="homeContainer">
    <!--头部导航-->
    <div class="nav_content">
      <!--搜索 better-scroll-->
      <div class="nav_yanxuan">
        <img src="../../../static/images/home/logo.png" class="logo"/>
        <div class="searchItem">
          <span class="iconSearch iconfont icon-search"></span>
          <span class="searchFont">搜索商品，共13091款好物</span>
        </div>
      </div>
      <!--tab-->
      <div class="wrapper">
        <ul class="nav_tab">
          <li class="nav_tab_item" @click="handleClick(index)" v-for="(headCateList,index) in headCateLists" :key="index">
            <span class="nav_tab_item_span active">{{headCateList.name}}</span>
            <!--判断这个线有没有 class="line"-->
            <span :class="{line:currentIndex===index}"></span>
          </li>
        </ul>
      </div>
      <!--轮播图-->
      <nav class="home_nav border-1px">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(headCateList,index) in headCateLists" :key="index">
              <a href="javascript:">
                <img :src="headCateList.bannerUrl"/>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--底部描述-->
      <div class="nav_description">
        <div class="nav_footer ziying">
          <i class="iconfont icon-duigou icon01"></i>
          <span>网易自营品牌</span>
        </div>
        <div class="nav_footer tuihuo">
          <i class="iconfont icon-duigou icon01"></i>
          <span>30天无忧退货</span>
        </div>
        <div class="nav_footer tuikuan">
          <i class="iconfont icon-duigou icon01"></i>
          <span>48小时快速退款</span>
        </div>
      </div>
    </div>
    <SlotDiv/>
    <!--品牌制造商直供  抽取组件-->
    <BrandHeader/>
    <!--品牌制造商直供-->
    <div class="brand">
      <div class="brand_content">
        <a href="/" class="brand_content_item brand_content_item01">
          <p class="brand_content_item_margin brand_content_item_p">海外制造商</p>
          <p class="brand_content_item_margin">9.9元起</p>
          <p class="brand_content_item_margin brand_content_item_border">上新</p>
        </a>
        <a href="/" class="brand_content_item brand_content_item02">
          <p class="brand_content_item_margin brand_content_item_p">海外制造商</p>
          <p class="brand_content_item_margin">9.9元起</p>
          <p class="brand_content_item_margin brand_content_item_border">上新</p>
        </a>
        <a href="/" class="brand_content_item brand_content_item03">
          <p class="brand_content_item_margin brand_content_item_p">海外制造商</p>
          <p class="brand_content_item_margin">9.9元起</p>
          <p class="brand_content_item_margin brand_content_item_border">上新</p>
        </a>
        <a href="/" class="brand_content_item brand_content_item04">
          <p class="brand_content_item_margin brand_content_item_p">海外制造商</p>
          <p class="brand_content_item_margin">9.9元起</p>
          <p class="brand_content_item_margin brand_content_item_border">上新</p>
        </a>
      </div>
    </div>
    <!--新品首发-->
    <div class="new_product">
      <p class="new_product_starting">新品首发</p>
      <a href="/" class="new_product_alert">
        <span>查看全部</span>
        <i class="iconfont icon-go"></i>
      </a>
    </div>
    <!--横向滑动轮播图-->
    <div class="swiper_Landscape">
      <a href="/" class="swiper_Landscape_item">
        <img src="../../../static/images/swiper_Landscape/01.png" alt="">
        <p class="swiper_Landscape_item_margin">网易有道翻译王 2.0pro</p>
        <p class="swiper_Landscape_item_margin">随身离线翻译神器 预售送100元礼品卡</p>
        <span class="swiper_Landscape_item_margin swiper_Landscape_item_price">￥1688</span>
      </a>
      <a href="/" class="swiper_Landscape_item">
        <img src="../../../static/images/swiper_Landscape/02.png" alt="">
        <p class="swiper_Landscape_item_margin">网易有道翻译王 2.0pro</p>
        <p class="swiper_Landscape_item_margin">随身离线翻译神器 预售送100元礼品卡</p>
        <span class="swiper_Landscape_item_margin swiper_Landscape_item_price">￥1688</span>
      </a>
      <a href="/" class="swiper_Landscape_item">
        <img src="../../../static/images/swiper_Landscape/02.png" alt="">
        <p class="swiper_Landscape_item_margin">网易有道翻译王 2.0pro</p>
        <p class="swiper_Landscape_item_margin">随身离线翻译神器 预售送100元礼品卡</p>
        <span class="swiper_Landscape_item_margin swiper_Landscape_item_price">￥1688</span>
      </a>
    </div>
    <!--凹槽-->
    <SlotDiv/>
    <!--人气推荐 · 好物精选-->
    <div class="new_product new_product_color">
      <p class="new_product_starting">人气推荐 · 好物精选</p>
      <a href="/" class="new_product_alert">
        <span>查看全部</span>
        <i class="iconfont icon-go"></i>
      </a>
    </div>
    <!--限时抢购-->
    <div class="swiper_Landscape">
      <a href="/" class="swiper_Landscape_item">
        <img src="../../../static/images/swiper_Landscape/11.png" alt="">
        <!--三个class，遍历使用-->
        <span class="active_red">爆品</span>
        <p class="swiper_Landscape_item_margin">网易有道翻译王 2.0pro</p>
        <p class="swiper_Landscape_item_margin">随身离线翻译神器 预售送100元礼品卡</p>
        <span class="swiper_Landscape_item_margin swiper_Landscape_item_price">￥1688</span>
      </a>
      <a href="/" class="swiper_Landscape_item">
        <img src="../../../static/images/swiper_Landscape/12.png" alt="">
        <span class="active_orange">特价</span>
        <p class="swiper_Landscape_item_margin">网易有道翻译王 2.0pro</p>
        <p class="swiper_Landscape_item_margin">随身离线翻译神器 预售送100元礼品卡</p>
        <span class="swiper_Landscape_item_margin swiper_Landscape_item_price">￥1688</span>
      </a>
      <a href="/" class="swiper_Landscape_item">
        <img src="../../../static/images/swiper_Landscape/13.png" alt="">
        <span class="active_orange active_red"></span>
        <p class="swiper_Landscape_item_margin">网易有道翻译王 2.0pro</p>
        <p class="swiper_Landscape_item_margin">随身离线翻译神器 预售送100元礼品卡</p>
        <span class="swiper_Landscape_item_margin swiper_Landscape_item_price">￥1688</span>
      </a>
      <a href="/" class="swiper_Landscape_item">
        <img src="../../../static/images/swiper_Landscape/14.png" alt="">
        <span class="active_red">爆品</span>
        <p class="swiper_Landscape_item_margin">网易有道翻译王 2.0pro</p>
        <p class="swiper_Landscape_item_margin">随身离线翻译神器 预售送100元礼品卡</p>
        <span class="swiper_Landscape_item_margin swiper_Landscape_item_price">￥1688</span>
      </a>
    </div>
    <!--凹槽-->
    <SlotDiv/>
    <!--严选限时购-->
    <div class="limited_time_purchase">
      <div class="limited_time_purchase_left">
        <p class="limited_time_purchase_left_p">严选限时购</p>
        <div class="limited_time_purchase_left_timer">
          <span class="bg_black">01</span>:
          <span class="bg_black">50</span>:
          <span class="bg_black">54</span>
        </div>
        <span>下一场 18:00 开始</span>
      </div>
      <div class="limited_time_purchase_right">
        <img src="../../../static/images/xianshigou/index.png" alt="">
        <div class="limited_time_purchase_right_price">
          <span class="current_price">￥39</span>
          <span class="delete_price">￥49</span>
        </div>
      </div>
    </div>
    <!--凹槽-->
    <SlotDiv/>
    <!--福利社-->
    <div class="welfare_club">
      <a href="/"></a>
    </div>
    <!--凹槽-->
    <SlotDiv/>
    <!--抽取组件 brand-->
    <BrandHeader/>
    <!--专题精选-->
    <div class="featured">
      <!--遍历生成-->
      <div class="featured_content">
        <a href="/" class="featured_content_item">
          <img src="../../../static/images/featured/01.jpg" alt="">
          <div class="featured_content_item_div">
            <p class="featured_content_item_p">吃得到果肉的, 才是真凤梨酥</p>
            <p class="featured_content_item_p small">47%凤梨果肉</p>
          </div>
          <span class="featured_content_item_price">38元起</span>
        </a>
      </div>
    </div>
    <!--凹槽-->
    <SlotDiv/>
    <!--居家好物-->
    <div class="home_good">
      <!--抽取组件-->
      <div class="header_good">居家好物</div>
      <ul class="home_good_content">
        <li class="home_good_content_item">
          <div class="home_good_content_item_header">
            <img class="home_good_content_item_img" src="../../../static/images/home_good/01.png" alt="">
            <p class="home_good_content_item_position">优质食材，薯类膨化多肉配方</p>
          </div>
          <!--根据数据生成-->
          <span class="active_orange">满折</span>
          <p class="kg">全期猫粮 1.8KG</p>
          <p class="price">￥88</p>
        </li>
        <li class="home_good_content_item">
          <div class="home_good_content_item_header">
            <img class="home_good_content_item_img" src="../../../static/images/home_good/01.png" alt="">
            <p class="home_good_content_item_position">优质食材，薯类膨化多肉配方</p>
          </div>
          <!--根据数据生成-->
          <span class="active_orange">满折</span>
          <p class="kg">全期猫粮 1.8KG</p>
          <p class="price">￥88</p>
        </li>
        <li class="home_good_content_item">
          <div class="home_good_content_item_header">
            <img class="home_good_content_item_img" src="../../../static/images/home_good/01.png" alt="">
            <p class="home_good_content_item_position">优质食材，薯类膨化多肉配方</p>
          </div>
          <!--根据数据生成-->
          <span class="active_orange">满折</span>
          <p class="kg">全期猫粮 1.8KG</p>
          <p class="price">￥88</p>
        </li>
        <li class="home_good_content_item">
          <div class="home_good_content_item_header">
            <img class="home_good_content_item_img" src="../../../static/images/home_good/01.png" alt="">
            <p class="home_good_content_item_position">优质食材，薯类膨化多肉配方</p>
          </div>
          <!--根据数据生成-->
          <span class="active_orange">满折</span>
          <p class="kg">全期猫粮 1.8KG</p>
          <p class="price">￥88</p>
        </li>
      </ul>
    </div>
    <!--凹槽-->
    <SlotDiv/>
    <!--服饰好物-->
    <div class="home_good">
      <!--抽取组件-->
      <div class="header_good">服饰好物</div>
      <ul class="home_good_content">
        <li class="home_good_content_item">
          <div class="home_good_content_item_header">
            <img class="home_good_content_item_img" src="../../../static/images/home_good/01.png" alt="">
            <p class="home_good_content_item_position">优质食材，薯类膨化多肉配方</p>
          </div>
          <!--根据数据生成-->
          <span class="active_orange">满折</span>
          <p class="kg">全期猫粮 1.8KG</p>
          <p class="price">￥88</p>
        </li>
        <li class="home_good_content_item">
          <div class="home_good_content_item_header">
            <img class="home_good_content_item_img" src="../../../static/images/home_good/01.png" alt="">
            <p class="home_good_content_item_position">优质食材，薯类膨化多肉配方</p>
          </div>
          <!--根据数据生成-->
          <span class="active_orange">满折</span>
          <p class="kg">全期猫粮 1.8KG</p>
          <p class="price">￥88</p>
        </li>
        <li class="home_good_content_item">
          <div class="home_good_content_item_header">
            <img class="home_good_content_item_img" src="../../../static/images/home_good/01.png" alt="">
            <p class="home_good_content_item_position">优质食材，薯类膨化多肉配方</p>
          </div>
          <!--根据数据生成-->
          <span class="active_orange">满折</span>
          <p class="kg">全期猫粮 1.8KG</p>
          <p class="price">￥88</p>
        </li>
        <li class="home_good_content_item">
          <div class="home_good_content_item_header">
            <img class="home_good_content_item_img" src="../../../static/images/home_good/01.png" alt="">
            <p class="home_good_content_item_position">优质食材，薯类膨化多肉配方</p>
          </div>
          <!--根据数据生成-->
          <span class="active_orange">满折</span>
          <p class="kg">全期猫粮 1.8KG</p>
          <p class="price">￥88</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SlotDiv from '../../components/SlotDiv/SlotDiv.vue'
  import BrandHeader from '../../components/BrandHeader/BrandHeader.vue'

  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data() {
      return {
        currentIndex:0
      }
    },
    mounted(){
      this.$store.dispatch('getHeadCateList',()=>{
        this.$nextTick(()=>{
          this.headListBS = new BScroll(".wrapper",{
            click:true,
            scrollX:true
          })
            new Swiper('.swiper-container',{
              pagination:{
                el:'.swiper-pagination',
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                autoplay:100
              },
              loop:true
            })
        })
      })
    },
    computed:{
      ...mapState(['headCateLists'])
    },
    watch:{
      headCateLists(){
        this.$nextTick(()=>{
          this.headListBS.refresh()
        })
      }
    },
    methods:{
      handleClick(index){
        this.currentIndex = index
      }
    },
    components:{
      SlotDiv,
      BrandHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .homeContainer
    font-size 12px
    margin-bottom 50px
    .nav_content
      width 100%
      .nav_yanxuan
        width 100%
        padding 8px
        clearFix()
        .logo
          width 20%
          height 20%
          vertical-align middle
          float left
          margin-top 2px
        .searchItem
          width 77%
          height 60%
          padding 6px
          border-radius 5px
          background-color #eee
          margin-left 7px
          float left
          vertical-align middle
          text-align center
          .iconSearch
            margin-right 3px
            display inline-block
          .searchFont
            display inline-block
      .wrapper
        width 100%
        overflow hidden
        .nav_tab
          height 30px
          padding-right 5px
          padding-left 5px
          white-space nowrap
          width 620px
          bottom-border-1px(#d9d9d9)
          .nav_tab_item
            display inline-block
            text-align center
            line-height 27px
            position relative
            margin-right 20px
            clear both
            .nav_tab_item_span
              font-size 14px
              width 100%
              padding-left 4px
              padding-right 5px
            .line
              width 100%
              height 2px
              background-color #b4282d;
              display inline-block
              position absolute
              top 27px
              left 0
            .active
              color #b4282d


      .home_nav
        bottom-border-1px(#e4e4e4)
        height 200px
        background #fff
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              display flex
              width 100%
              height 100%
              justify-content center
              align-items flex-start
              flex-wrap wrap
              img
                width 100%
                height 100%
              .link_to_food
                width 25%
                .food_container
                  display block
                  width 100%
                  text-align center
                  padding-bottom 10px
                  font-size 0
                  img
                    display inline-block
                    width 50px
                    height 50px
                span
                  display block
                  width 100%
                  text-align center
                  font-size 13px
                  color #666
          .swiper-pagination
            .swiper-pagination-bullet
              width 20px
              height 2px
              border-radius 5px
              background-color transparent
            >span.swiper-pagination-bullet-active
              background white
      .nav_description
        width 100%
        height 40px
        display flex
        align-items center
        justify-content center
        flex 1
        .nav_footer
          display inline-block
          font-size 12px
          margin-right 20px
        .icon01
          display inline-block
          width 15px
          height 12px
          font-size 12px
          color #b4282d
    .brand
      width 100%
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
    .new_product
      width 100%
      height 100px
      background-color #F1F7FD
      text-align center
      .new_product_starting
        font-size 20px
        margin-bottom 5px
        padding-top  30px
      .new_product_alert
        text-decoration none
        span
          display inline-block
        .iconfont
          font-size 12px
    .new_product_color
      width 100%
      height 100px
      text-align center
      background-color #FEF7E3
      .new_product_starting
        font-size 20px
        margin-bottom 5px
        padding-top  30px
      .new_product_alert
        text-decoration none
        span
          display inline-block
        .iconfont
          font-size 12px
    .swiper_Landscape
      width 100%
      height 230px
      overflow hidden
      .swiper_Landscape_item
        margin 4px
        height 100%
        width 40%
        display inline-block
        text-decoration none
        padding 3px
        color black
        .active_red
          background-color #e5686d
          border-radius 2px
          padding 0 5px
          display inline-block
          margin-left 2px
        .active_orange
          background-color #f48f18
          border-radius 2px
          padding 0 5px
          display inline-block
          margin-left 2px
        img
          width 100%
          background-color #F4F4F4
        .swiper_Landscape_item_margin
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          margin-top 5px
          padding-left 3px
        .swiper_Landscape_item_price
          display inline-block
          color #b4282d
          font-weight bold
    .limited_time_purchase
      width 100%
      height 200px
      .limited_time_purchase_left
        display flex
        flex-direction column
        align-items center
        justify-content center
        width 50%
        height 100%
        float left
        .limited_time_purchase_left_p
          font-size 17px
        .limited_time_purchase_left_timer
          font-size 18px
          .bg_black
            margin-top 4px
            text-align center
            border-radius 2px
            background-color #666666
            display inline-block
            width 24px
            height 24px
            line-height 24px
            margin-bottom 10px
      .limited_time_purchase_right
        position relative
        background-color white
        float left
        width 50%
        height 100%
        img
          width 100%
          height 90%
        .limited_time_purchase_right_price
          background-color rgba(244,143,24,.95)
          display flex
          align-items center
          justify-content center
          flex-direction column
          width 45px
          height 45px
          border-radius 100%
          position absolute
          bottom 20px
          right 36px


    .welfare_club
      width 100%
      height 150px
      background-size 100%
      background-repeat no-repeat
      background-image url("../../../static/images/welfare_club.jpg")
    .featured
      width 100%
      height 200px
      overflow hidden
      .featured_content
        float left
        width 73%
        height 100%
        .featured_content_item
          text-decoration none
          color black
          width 100%
          height 100%
          padding 12px
          img
            border-radius 3px
            margin-bottom 3px
          .featured_content_item_div
            margin-left 12px
            font-size 14px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            float left
            .featured_content_item_p
              margin-top 2px
            .small
              font-size 12px
          .featured_content_item_price
            float right
            color #b4282d
            font-size 15px
            font-weight bold
            margin-right -7px
    .home_good
      width 100%
      .header_good
        width 100%
        height 48px
        color black
        font-size 16px
        text-align center
        line-height 48px
      .home_good_content
        width 100%
        .home_good_content_item
          margin 3px
          float left
          width 47%
          height 290px
          position relative
          .home_good_content_item_header
            margin 6px
            background-color #f4f4f4
            width 100%
            height 80%
            border-radius 5px
            display flex
            align-items center
            justify-content center
            .home_good_content_item_img
              width 80%
              height 70%
            .home_good_content_item_position
              position absolute
              bottom 18%
              left 0
              margin-left 6px
              text-align center
              background-color #F1ECE2
              width 100%
              height 25px
              line-height 25px
              border-radius 5px
          .active_orange
            display inline-block
            background-color #f48f18
            border-radius 2px
            padding 0 2px
            margin-left 10px
          .kg
            font-size 14px
            margin-left 8px
            margin-top 3px
          .price
            margin-left 8px
            margin-top 3px
            font-size 14px
            color #b4282d
            font-weight bold
</style>
