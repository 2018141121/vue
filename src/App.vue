<!--项目页面最后展示的组件-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//export default命令，为模块指定默认输出。
export default {
  name: 'app',
  //指定 name 选项的另一个好处是便于调试 可以不写
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



