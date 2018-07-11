<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" @click.stop.prevent="decreaseCart" v-show="food.count > 0">
        <span class="icon-remove_circle_outline inner"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    addCart(event) {
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('cartAdd', event.target)
    },
    decreaseCart() {
      if (this.food.count > 0) {
        this.food.count--
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
      &.move-enter-active
         transition: all .5s ease
      &.move-leave-active
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
      &.move-enter, &.move-leave-to
        transform: translateX(10px)
        opacity: 0
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>
