<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from '../https'
export default {
  created(){
    axios.fetchPost('http://localhost:8888/').then((res)=>{
      // eslint-disable-next-line no-console
      console.log(res)
    })
  }
}
</script>