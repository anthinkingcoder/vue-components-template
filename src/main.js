import Demo from './components/Demo.vue';
const install = function (Vue) {
  Vue.component('demo', Demo);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Demo
}

export {
  Demo
}

