
<template>
  
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"v-html="title">{{title}}</h5>
    <h5 class="card-title">Publié le: {{ date | moment("DD-MM-YY") }}</h5>
    <h5 class="card-title">Il y a: {{ date | moment("from", true)  }}</h5>
    <p class="card-text" v-html="excerpt">{{excerpt}}</p>
    <router-link :to="{ name: 'FullPost', params: { id: this.id , link: this.link} }"><a href="#" class="btn btn-primary">Post</a></router-link>
    
  </div>
</div>
</template>

<script>
export default {
  name: 'Post',
  created(){
  //this.dateCalc()
},
methods: {
    // dateCalc: function(){
    //     this.date = moment(this.date,"DD-MM-YYYY");

    // }
},
    
  props: {
    title: String,
    excerpt: String,
    date: String,
    id: 0,
    link: String
  }
  
}
</script>