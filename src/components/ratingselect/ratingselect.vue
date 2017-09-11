<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2, $event)" class="block positive" :class="{'active':parameter.selectType===2}">{{parameter.desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0, $event)" class="block positive" :class="{'active':parameter.selectType===0}">{{parameter.desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(1, $event)" class="block negative" :class="{'active':parameter.selectType===1}">{{parameter.desc.negative}}<span class="count">{{negative.length}}</span></span>
    </div>
    <div class="switch" :class="{'on':parameter.onlyContent}" @click="toggleContent">
      <i class="icon-check_circle"></i>
      <span class="text">只看内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0;
  const NEGATIVE = 1;
  export default {
    props: {
      ratings: {
        type: Array,
        default () {
          return [];
        }
      },
      parameter: {
        type: Object,
        default: {}
      }
    },
    methods: {
      select (type, event) {
        this.parameter.selectType = type;
      },
      toggleContent () {
        this.parameter.onlyContent = !this.parameter.onlyContent;
      }
    },
    computed: {
      positives () {
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE;
        });
      },
      negative () {
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE;
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7,17,27,0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        border-radius: 1px
        font-size: 12px
        color: rgb(77,85,93)
        &.active
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
        &.positive
          background: rgba(0,160,220,0.2)
          &.active
            background: rgb(0,160,220)
        &.negative
          background: rgba(77,85,93,0.2)
          &.active
            background: rgb(77,85,93)
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7,17,27,0.1)
      color: rgb(147,153,159)
      font-size: 0
      &.on
        .icon-check_circle
          color: #00c850
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        font-size: 12px
</style>
