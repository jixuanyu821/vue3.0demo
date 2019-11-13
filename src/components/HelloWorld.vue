<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="content">
      <p>{{msg}}</p>
      <router-link to="/about">{{msg}}</router-link>
      <div @click="$router.push({name:'child'})">router</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
  },
  mounted() {
    axios.get('/').then((res)=>{
      // eslint-disable-next-line no-console
      console.log(res)
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color: red;
h3 {
  margin: 40px 0 0;
}
.content {
  p {
    color: $color;
  }
}
</style>
