// import function to register Swiper custom elements
import {register} from 'swiper/element/bundle';
// register Swiper custom elements
import 'swiper/css';

export default defineNuxtPlugin(nuxtApp => {
    register();
});
