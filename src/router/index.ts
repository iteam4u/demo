import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/pages/Button.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'frontpage'
        },
        {
            path: '/button',
            name: 'button',
            component: Button
        },
        {
            path: '*',
            redirect: { name: '' }
        }
    ]
});
