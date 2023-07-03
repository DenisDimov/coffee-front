import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Replenishment from './views/Replenishment.vue'
import Personal from './views/Personal.vue'
import Transaction from './views/Transaction.vue'

const routes = [
    { path: '/', name: 'test', component: Home },
    { path: '/register', name: 'Register', component: Register },
    { path: '/replenishment', name: 'balance', component: Replenishment },
    { path: '/personal', name: 'lk', component: Personal },
    { path: '/transaction', name: 'transaction', component: Transaction },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
createApp(App).use(router).use(ElementPlus).mount('#app')
// Make sure to _use_ the router instance to make the
// whole app router-aware.
