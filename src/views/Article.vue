<template>
  <div>
    {{article.title}}
    {{article.author}}
    <div v-html="article.content"></div>

  </div>
</template>

<script>
import { setTitle } from '../utils'
export default {
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    async getArticle () {
      let params = {
        id: this.$route.params.id
      }
      let data = await this.$api.user.getArticle(params)
      this.article = data
      setTitle(`${this.$route.meta.title} -- ${this.article.title}`)
    }
  }
}
</script>

<style scoped>
</style>
