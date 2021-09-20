<template>
  <!--  所有的元素必须在<div>根节点下-->
  <div>
    <h1>个人信息</h1>
    <!--    接收数据-->
    <span>id:</span> {{ $route.params.id }}
    <p>{{ ms }}</p>
  </div>


</template>

<script>
import axios from "axios";

export default {
  //这个可以进行组件内的数据传递
  // props: ["id"],
  name: "Profile",
  data() {
    return {
      ms: "数据"
    }
  },

  // //相当于拦截器
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


  //创建一个方法，绑定后台数据，通过axios来异步请求
  methods: {
    getData() {
      axios.get('http://localhost:8082/mock/data.json').then(response => (this.ms = response.data));
    },
    created() {
      this.getData();
    }
  }
}

</script>

<style scoped>

</style>

