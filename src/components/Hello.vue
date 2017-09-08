<template>
  <div class="hello">
    <div class="container">
      
      <div class="row" style="margin-bottom:2%">
        <div class="column"><h2>欢迎来到Hurry的个人摄影小站（Demo）</h2></div>
      </div>
      
      <div class="row">
        <div class="column">
          <p>
            其实呢，做这个项目的原因是刚把Vue2给学了。既然学了呢，最好还是要做个Demo来巩固一下。再加上本人GayHub（不好意思，口误，是GitHub）上还没有自己的开源项目。
            <br>所以，正如诸位所看到的，这个项目就这么诞生了XD
          </p>
        </div>
      </div>
      
      <div class="row">
        <div class="column">
          <p>
            ps:现在这个项目还没有后台，所以只是一个demo。哪天有空写个？
          </p>
        </div>
      </div>
      
      <div class="row">
        <div class="column">
          <router-link to="/photo" class="button">Let's GO!</router-link>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding-top: 20%;
  padding-bottom: 20%;
}
@media (min-width:1000px){
  .container{
    padding-top: 10%;
    padding-bottom: 10%;
  }
}
@media (min-width:1900px){
  .container{
    /*height:calc( 100vh - 10px );*/
    padding-top: 24vh;
    padding-bottom: 24vh;
  }
}
</style>
