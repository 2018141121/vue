<template>
  <!--  所有的元素必须在<div>根节点下-->
  <div>
    <h1>个人信息</h1>
    <span>id:</span> {{ $route.params.id }}
  </div>

</template>

<script>
export default {
  props: ["id"],
  name: "Profile",

  //相当于拦截器
  // beforeRouteEnter: (to, from, next) => {
  //   console.log("准备进入个人信息页");//加载数据
  //   next(vm => {
  //     vm.getData()//进入路由之前拿到数据
  //   });
  // },
  //
  // beforeRouteLeave: (to, from, next) => {
  //   console.log("准备离开个人信息页");
  //   next();
  // },
  //
  // methods: {
  //   getData: function () {
  //     this.axios({
  //       method: "get",
  //       url: "http://localhost:8080/static/mock/data.json"
  //     }).then(function (response) {
  //       console.log(response)
  //     })
  //   }
  // }

}
</script>

<style scoped>

</style>

