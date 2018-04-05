import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router/dist/vue-router.esm";
import Question from "./sample/Question.vue";
import Home from "./sample/Home.vue";
import Vuex from "vuex/dist/vuex.esm";
import Congratulations from "./sample/Congratulations.vue";
import AnswersStore from "./components/answers/answers-store";

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: "/", component: Home, name: "home"},
    {path: "/question/:question_id", component: Question, name: "question"},
    {path: "/congratulations", component: Congratulations, name: "congratulations"}
];

const router = new VueRouter({routes});
let store = new Vuex.Store(AnswersStore);
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
