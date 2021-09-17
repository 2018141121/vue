<template>
  <div>
    <h1>用户列表</h1>
   <span>id:</span> {{ idd }}
  </div>

</template>

<script>
export default {
  //相当于使用这个去绑定组件，然后组件获得前端传进来的值，再输出在这个页面上面
  props: ['idd'],
  name: "List"
}
</script>

<style scoped>

</style>