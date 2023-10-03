<template>
  <main ref="rootEl" class="text-white pb-52 -mt-32 pt-20 min-h-screen bg-teal-900 overflow-hidden">
    <section class="responsive-padding-x">
      <div class="responsive-layout pt-12">
        <div class="xs:px-layout-s-c-1-g-1 gap-y-12 flex flex-col s:flex-col-reverse">
            <div ref="projectSwiperElement" class="swiper projectSwiper w-full !overflow-visible">
              <div class="swiper-wrapper">
                <div class="swiper-slide rounded-big overflow-hidden min-h-[50vh] max-h-[min(50vh,600px)] shadow-2xl" v-for="i in 5" :key="i">
                  <nuxt-picture
                      src="/images/projects/grangette.png"
                      loading="lazy"
                      :img-attrs="{
                        class: 'absolute top-0 left-0 h-full w-full object-cover object-center',
                      }"
                  ></nuxt-picture>
                </div>
              </div>
              <!-- If we need pagination -->
              <div class="swiper-pagination"></div>
              <!-- If we need navigation buttons -->
              <div class="absolute w-full top-1/2 -translate-y-1/2 flex justify-between z-50">

                <div class="swiper-button-prev">
                  <i class="icon icon-arrow rotate-180"></i>
                </div>
                <div class="swiper-button-next">
                  <i class="icon icon-arrow"></i>
                </div>
              </div>
            </div>
          <div class="grid gap-12">
            <div>
              <h1 class="text-h1 leading-tight">{{ project }}</h1>
              <h4 class="text-cta font-light">work for <span class="font-bold">Gintlemen</span></h4>
            </div>
            <div class="flex flex-col gap-8 xs:flex-row flex-wrap s:gap-12">
              <div class="max-layout-xs-c-1-g-1 xs:max-layout-s-c-3-g-2 s:max-layout-m-c-2-g-3">
                <h4 class="text-h4">Description</h4>
                <p>
                  Create a website for a luxury vacation stay in Belgium      
                </p>
              </div>
              <div class="grid grid-cols-2 gap-8 s:gap-12">
                <div>
                  <h4 class="text-h4">Type</h4>
                  <p class="border border-white rounded-md w-fit px-2">
                    Web development
                  </p>
                </div>
                <div>
                  <h4 class="text-h4">Technologies</h4>
                  <ul class="list-inside list-disc">
                    <li>Nuxt 3</li>
                    <li>TailwindCSS</li>  
                    <li>GSAP</li>  
                    <li>Swiper</li>  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import 'swiper/css';
import {Navigation, Pagination} from 'swiper/modules';

const rootEl = ref<HTMLElement>()
const route = useRoute()
const project = route.params.project
const projectSwiperElement = ref<HTMLElement>()
const projectSwiper = ref<Swiper>()

onMounted(()=> {
  if(!projectSwiperElement.value) return
    projectSwiper.value = new Swiper(projectSwiperElement.value, {
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 50,
      mousewheel: {
        forceToAxis: true,
      },
  })
})

</script>

<style scoped>
  .swiper-pagination{
    @apply relative text-left;
  }
</style>