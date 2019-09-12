<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <vHeader msg="Welcome to Your Vue.js App"></vHeader>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import vHeader from "@/components/vheader.vue";

export default {
  name: 'home',
  components: {
    HelloWorld,
    vHeader
  }
}
</script>
