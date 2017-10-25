<template>
<div class="container">
   <div class="recommend">
       <div class="recommend-content">
          <div class="slider-wrapper">
             <slider>
                 <div v-for="item in recommend" :key="item.id">
                    <a :href="item.linkUrl">
                       <img :src="item.picUrl" alt="">
                    </a>
                 </div>
             </slider>
          </div>
       </div>
     </div>					
</div>
</template>

<script>
// import {getRecommond} from 'api/recommend'
import Slider from '../../base/slider/slider'
export default {
  data() {
    return {
      recommend: [
        {
          linkUrl:"https://y.qq.com/m/act/maskessinger2/v3/index.html?ADTAG=jiaodiantu",
          picUrl:"http://y.gtimg.cn/music/photo_new/T003R720x288M000000FUqEs2TsRZe.jpg",
          id: 12585
        },
        {
          linkUrl: "https://y.qq.com/msa/cdreview/0_4446.html",
          picUrl:"http://y.gtimg.cn/music/photo_new/T003R720x288M000004Zwtdt2sO6tu.jpg",
          id: 12554
        },
        {
          linkUrl: "https://y.qq.com/m/act/sfhd/97.html?ADTAG=jdt",
          picUrl:"http://y.gtimg.cn/music/photo_new/T003R720x288M000002QA9kw0QwiVQ.jpg",
          id: 12609
        },
        {
          linkUrl: "http://y.qq.com/w/album.html?albummid=003z9kma13yhja",
          picUrl:"http://y.gtimg.cn/music/photo_new/T003R720x288M000000HyHFG0ZYbxR.jpg",
          id: 11621
        },
        {
          linkUrl:"https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=257459?ADTAG=jiaodiantu",
          picUrl:"http://y.gtimg.cn/music/photo_new/T003R720x288M000000jgDUf3GcuCn.jpg",
          id: 12549
        }
      ]
    };
  },
  conponents:{
     Slider
  },
  create() {
    console.log("111");
  },
  methods: {}
};
</script>

