<template>
  <div class="home">
    <!-- <button @click="getArticles">请求全部数据</button> -->
    <!-- <button @click="getArticle">请求单条数据</button> -->
    <button @click="createArticle">创建单条数据</button>
    <ul>
      <router-link tag="li"
                   v-for="item in articles"
                   :key="item._id"
                   :to="{name: 'article', params:{id: item._id}}">{{item.title}} </router-link>
    </ul>
    <img alt="Vue logo"
         src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.getArticles()
  },
  methods: {
    async getArticles () {
      let data = await this.$api.user.getArticles()
      this.articles = data
    },
    async createArticle () {
      let params = {
        name: 'test',
        author: 'liuiui'
      }
      let data = await this.$api.user.createArticle(params)
      console.log(data)
    }
  }
}
</script>
