<!-- 
	这个页面用的轮播插件并没有专为Vue优化，所以比较麻烦。。。
	以后还是尽可能使用那些针对Vue优化过的吧
-->
<template>
  <div class="albumCarousel">
    <div id="X" @click.self="$emit('close')">X</div>
	<div class="row owl-carousel owl-theme">
	  
	  <div v-for="(src,index) in srcs" :key="index"><img :src="src"></div>

	</div>

  </div>
</template>

<script>
export default {
  name: 'albumCarousel',
  props:{
  	srcs:{
  		type:Array
  	}
  },
  data(){
  	return{
  	  
  	}
  },
  methods:{
  	carousel(){
  	  $(".owl-carousel").owlCarousel({
  	  	loop:true,
  	  	center:true,
  	  	autoWidth:true,
  	  	dots:true,
  	  	navText:["<",">"],
  	  	lazyLoad:false,
  	  	responsive:{
  	  	  0:{
  	  	  	item:1,
  	  	  	margin:2,
  	  	  	nav:false,
  	  	  },
  	  	  1440:{
  	  	  	item:2,
  	  	  	margin:200,
  	  	  	nav:true,
  	  	  }
  	  	},
  	  });
  	  //console.log("!");
  	}
  },
  mounted(){
  	this.carousel();
  },
  beforeUpdate(){
  	$(".owl-carousel").trigger("destroy.owl.carousel");
  },
  updated(){
  	this.carousel();
  	$(".owl-carousel").removeClass("owl-hidden");//hack a bug
  }
}
</script>

<style>
  .albumCarousel .owl-dots{
  	text-align: center;
  	position:fixed;
  	top:95vh;
  	left:0;
  	width:100%;
  }
  .albumCarousel .owl-dot{
  	display:inline-block;
  	zoom:1;
  	margin:auto 6px;
  }
  .albumCarousel .owl-dot>span{
  	background:#D6D6D6;
  	width:10px;
  	height:10px;
  	display:block;
  	border-radius:50%;
  }
  .albumCarousel .owl-dot.active>span{
  	background:#869791;
  }
  .albumCarousel .owl-prev,.albumCarousel .owl-next{
  	width:100px;
  	height:100px;
  	border-radius:50%;
  	position:fixed;
  	top:calc(50vh - 50px);
  	background-color:#000;
  	color:#fff;
  	opacity:.1;
  	font-size:50px;
  	line-height:100px;
  }
  .albumCarousel .owl-prev:hover,.albumCarousel .owl-next:hover{
  	opacity:.6;
  }
  .albumCarousel .owl-prev{
  	left:5vw;
  }
  .albumCarousel .owl-next{
  	right:5vw;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #X{
  	width:50px;
  	height:50px;
  	border-radius:50%;
  	position:fixed;
  	top:2vh;
  	right:2vw;
  	font-size:25px;
  	line-height:50px;
  	background-color:#000;
  	color:#fff;
  	opacity:.8;
  	z-index:101;
  }
  #X:hover{
  	cursor:pointer;
  }
  .albumCarousel{
	position: fixed;
	top:0;
	left: 0;
	width:100vw;
	height:100vh;
	background-color:rgba(0,0,0,.85);
	z-index: 100;
  }
  .owl-item div{
  	width:60vw;
  	height:100vh;
  }
  @media (max-width:1440px){
  	.owl-item div{
  		width:99vw;
  	}
  }
  img{
  	border-radius:5px;
  	position: absolute;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	margin:auto;
  	max-width:100%;
  	max-height:99%;
  	width:auto !important;
  	height:auto;
  	vertical-align:middle;
  }
</style>