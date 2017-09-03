<template>
  <div class="photo">
    <div class="container" style="padding-top:10vh;padding-bottom:10vh">

      <div class="albums" v-for="(album,index) in albums" :key="index">
        <div class="row">
          <div class="column" @click="showCarousel(index)">
            <img :src="album.src[0]">
            <h4>{{album.name}}</h4>
          </div>
        </div>
      </div>

      <album-carousel v-show="albumCarouselIsShow" :srcs="albums[index].src" @close="closeCarousel()"></album-carousel>

    </div>
  </div>
</template>

<script>
import AlbumCarousel from '@/components/part/AlbumCarousel.vue'
export default {
  name: 'photo',
  components:{
    AlbumCarousel
  },
  data(){
    return {
      albumCarouselIsShow:false,
      index:0,
      //这个只是个demo，真实项目应该通过ajax从后端获取数据
      albums:[
        {
          name:"Gakki",
          src:[
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/gakki/1.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/gakki/2.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/gakki/3.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/gakki/4.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/gakki/5.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/gakki/6.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/gakki/7.jpg",
          ]
        },
        {
          name:"Cats",
          src:[
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/cats/1.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/cats/2.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/cats/3.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/cats/4.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/cats/5.jpg",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/cats/6.jpg",
          ]
        },
        {
          name:"Pikachu",
          src:[
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/pikachu/1.JPG",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/pikachu/2.JPG",
            "https://raw.githubusercontent.com/hurryhuang1007/Personal-Photography-Site-Demo--Front-end/master/imgs/pikachu/3.JPG",
          ]
        },
      ],
    }
  },
  methods:{
    showCarousel(index){
      this.index=index;
      this.albumCarouselIsShow=true;
      document.body.style.overflow="hidden";
    },
    closeCarousel(){
      this.albumCarouselIsShow=false;
      document.body.style.overflow="";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width:100%;
  }
  h4{
    text-align:left;
    padding:10px 15px;
    margin-bottom: 6px;
  }
  .column{
    margin: auto;
    max-width: 800px;
    background-color:#f4f5f6;
    padding:5px 1px;
    border-radius:6px;
    border:2px solid #f4f5f6;
  }
  .column:hover{
    cursor:pointer;
  }
  .albums{
    margin-bottom:5vh;
  }
</style>