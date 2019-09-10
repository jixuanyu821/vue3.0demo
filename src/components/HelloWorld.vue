<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="content">
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color:red;
h3 {
  margin: 40px 0 0;
}
.content{
  p{
    color: $color
  }
}
</style>
