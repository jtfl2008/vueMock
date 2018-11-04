<template>
  <div class="home">
    <button @click="getList">请求数据</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    async getList() {
      let data = await this.$api.user.getList()
      console.log(data)
    }
  },
}
</script>
