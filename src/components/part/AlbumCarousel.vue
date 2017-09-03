<template>
  <div class="albumCarousel" @click.self="$emit('close')">
    
	<div class="row">
	  
	  <div class="left"><img :src="srcs[index-1]"></div>
	  <div class="middle"><img :src="srcs[index]"></div>
	  <div class="right"><img :src="srcs[index+1]"></div>

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
  	  index:0,
  	}
  },
  methods:{
  	log(msg){
  		console.log(msg);
  	}
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
  img{
  	width:100%;
  	position: absolute;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	margin: auto;
  }
  .row>div{
  	width:60vw;
  	height:100vh;
  	position:fixed;
  }
  .middle{
  	left:20vw;
  }
  .left{
  	left:-55vw;
  }
  .right{
  	left:95vw;
  }
</style>