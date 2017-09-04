<template>
  <div class="albumCarousel" @click="$emit('close')">
    
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
  	log(msg){
  		console.log(msg);
  	},
  	carousel(){
  	  $(".owl-carousel").owlCarousel({
  	  	loop:true,
  	  	center:true,
  	  	autoWidth:false,
  	  	nav:false,
  	  	responsive:{
  	  	  0:{
  	  	  	item:1
  	  	  },
  	  	  1440:{
  	  	  	item:2
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .albumCarousel{
	position: fixed;
	top:0;
	left: 0;
	width:100vw;
	height:100vh;
	background-color:rgba(0,0,0,.85);
	z-index: 100;
  }
  .owl-item{
  	min-width:60vw;
  }
  /*img{
  	height: auto;
  	width:100%;
  	max-width:100%;
  	position: absolute;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	margin: auto;
  }
  .row>div{
  	width:55vw;
  	height:100vh;
  	position:absolute;
  }
  .middle{
  	left:20vw;
  }
  .left{
  	left:-50vw;
  }
  .right{
  	left:95vw;
  }*/
</style>