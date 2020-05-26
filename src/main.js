import Vue from 'vue';
import App from './App';

new Vue ({
    //el: '#app', -> exact same .$mount(#app)
    render: h => h(App)
}).$mount('#app');

// render: function(h) { // h = createElemnet
//     return h(App);
// }