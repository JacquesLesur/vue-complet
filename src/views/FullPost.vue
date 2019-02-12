<template>
  <div class="FullPost">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="row justify-content-center">
        <div class="row">
        <div class="jumbotron">
            <h1 class="display-4">{{myJson.title.rendered}}</h1>
            <a v-bind:href="myJson.link">Lien</a>

            <hr class="my-4">
            <p v-html="myJson.excerpt.rendered">{{myJson.excerpt.rendered}}</p>
        </div>
        </div>
    </div>
    <router-link to="/"><a href="#" class="btn btn-warning">Back</a></router-link>

  </div>
</template>
<script>
import Post from '../components/Post.vue'
// @ is an alias to /src
export default{
  name:'FullPost',
created(){
  this.apiCall()
},
data() {
  return {
  myJson: ""
  }
},
components: {
  Post: Post
 },
methods: {
     apiCall: async function() {
     const response = await fetch(this.$route.params.link+'/'+ this.$route.params.id);
      this.myJson = await response.json(); 
   }}
}

  

</script>
