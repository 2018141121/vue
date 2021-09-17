import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'
import axios from 'axios'


Vue.config.productionTip = false

Vue.use(ElementUI, VueAxios, axios)

new Vue({
    render: h => h(App), //跳到视图的展示vue
    router,
}).$mount('#app') //=== el:"#app",也就是挂载到id为app的标签里面

