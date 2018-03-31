import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router/dist/vue-router.esm";
import Question from "./sample/Question.vue";
import Home from "./sample/Home.vue";

Vue.use(VueRouter);

const routes = [
    {path: "/", component: Home, name: "home"},
    {path: "/question/:question_id", component: Question, name: "question"}
];

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
