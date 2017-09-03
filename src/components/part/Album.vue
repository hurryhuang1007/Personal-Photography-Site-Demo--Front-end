<template>
  <div class="album">
    
	<div class="row">
	  <div class="column column-50 column-offset-25">
	  	<img :src="preview">
	  	<h4>{{title}}</h4>
	  </div>
	</div>

  </div>
</template>

<script>
export default {
  name: 'album',
  props:{
  	title:{
  		type:String,
  		default:"Oops u forget set the title."
  	},
  	preview:{
  		type:String
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
  background-color:#f4f5f6;
  padding:5px 1px;
  border-radius:6px;
  border:2px solid #f4f5f6;
}
</style>