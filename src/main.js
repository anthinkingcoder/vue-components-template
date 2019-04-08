import Demo from './components/Demo.vue';
const install = function (Vue) {
  Vue.component('demo', Demo);
}

export default {
  install,
  Demo
}

export {
  Demo
}

