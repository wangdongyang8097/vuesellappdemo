<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop="decreaseCart">
        <i class="inner icon-remove_circle_outline"></i>
      </div>
    </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart($event)"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object,
        default: {}
      }
    },
    methods: {
      addCart (event) {
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count ++;
        }
        console.log(event);
        this.$emit('cartcontrolAdd', event.target);
      },
      decreaseCart () {
        if (this.food.count) {
          this.food.count --;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      &.move-enter-active
        transition: all .5s linear
      &.move-leave-active
        transition: all .3s linear
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3D(24px, 0, 0) rotate(180deg)
      .inner
        display: inline-block
        font-size: 24px
        line-height: 24px
        color: rgb(0,160,120)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147,153,159)
    .cart-add
      display: inline-block
      padding: 6px
      font-size: 24px
      line-height: 24px
      color: rgb(0,160,120)
</style>
