<template>
<div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
        <slot></slot>
    </div>
    <div class="dots"></div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import {addClass} from '../../common/js/dom'
export default {
    props:{
        loop:{
            type:Boolean,
            default:true
        },
        autoPlay:{
            type:Boolean,
            default:true
        },
        interval:{
            type:Number,
            default:4000
        }
    },
    mounted(){
      setTimeout(()=>{
        this._setSliderWidth();
        this._initSlider();
      },20)
    },
    methods:{
        _setSliderWidth(){
           this.children = this.$refs.sliderGroup.children
           let width = 0
           let sliderWidth = this.$refs.slider.clientWidth
           for(let i=0;i<this.children.length;i++){
               let child = this.children[i]
               addClass(child,'slider-item')
               child.style.width = sliderWidth + 'px'
               width+=sliderWidth
           }
           if(this.loop){
              width += 2*sliderWidth
           }
           this.$refs.sliderGroup.style.width = width +'px'
        },
        _initSlider(){

        }
    }
}
</script>

<style>

</style>
