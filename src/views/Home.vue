<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search title.."/>
        
  </div>
    <div v-for="(listItems, index) in myJson">
     <div class="row justify-content-center">

      <Post v-for="item in filterPost(listItems)" :title="item.title.rendered" :excerpt="item.excerpt.rendered" :date="item.date" :id="item.id" :link="sites[index]"/> 
    </div>
    </div>

  </div>
</template>
<script>
import Post from '../components/Post.vue'

// @ is an alias to /src
export default{
  name:'home',
created(){
  this.apiCall()
},
data() {
  return {
  sites: ['http://www.madeinblue.com/wp-json/wp/v2/posts', 'https://www.laura-massis.com/wp-json/wp/v2/posts'],
  myJson: [],
  search: ''
  }
},
components: {
  Post: Post
 },
methods: {
      filterPost: function(listItems) {
        const vm = this;
       return listItems.filter(item => {
        
        return item.title.rendered.toLowerCase().includes(vm.search.toLowerCase())
      })
      },
     apiCall: async function() {
       const vm = this
       
        for(var i= 0; i < this.sites.length; i++)
        {
         const response = await fetch(this.sites[i]);
         this.myJson.push( await response.json());
        }
      
   }}
}

  

</script>
