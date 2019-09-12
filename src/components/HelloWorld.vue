<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="content">
      <p>{{msg}}</p>
      <router-link to="/about">{{msg}}</router-link>
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
    getAjax() {
      axios
        .post("/archives/listUI", { SFZH: "330722186210240003" })
        .then(res => {
          console.log(res);
        });
    }
  },
  mounted() {
    this.getAjax();
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
