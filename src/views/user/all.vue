<template>

  <el-table :data="tableData" stripe style="width: 100%">

    <el-table-column prop="id" label="id" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="password" label="密码"></el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [
        {
          id: '2016-05-02',
          name: '王小虎',
          password: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: '2016-05-02',
          name: '王小虎',
          password: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: '2016-05-02',
          name: '王小虎',
          password: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: '2016-05-02',
          name: '王小虎',
          password: '上海市普陀区金沙江路 1518 弄',
        },
      ],
    }
  },
  methods: {
    // getUser() {axios.get('http://localhost:8081/mybatis_plus/user/allUser').then(response => (this.tableData = response.data))}
    getUser() {axios.get('/mybatis_plus/user/allUser').then(response => (this.tableData = response.data))}
  },
  created() {
    this.getUser();
  }
}
</script>


<style scoped>

</style>
unable to access 'https://github.com/2018141121/vue/': OpenSSL SSL_read: Connection was reset, errno 10054