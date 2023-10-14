<template>
  <main v-if="projectData" ref="rootEl" class="text-white pb-52 -mt-32 pt-20 min-h-screen bg-grey-700 overflow-hidden">
    <section aria-labelledby="project-title" class="relative responsive-padding-x">

      <div class="responsive-layout pt-12">
        <div class="xs:px-layout-s-c-1-g-1 gap-y-12 flex flex-col s:flex-col-reverse">
          <div ref="projectSwiperElement" class="swiper projectSwiper w-full !overflow-visible">
            <div class="swiper-wrapper">
              <div class="swiper-slide rounded-big overflow-hidden min-h-[50vh] max-h-[min(50vh,600px)] shadow-2xl">
                <nuxt-picture
                    :src="projectData.thumbnail_image"
                    loading="lazy"
                    :alt="'Slide n°' + 1 + ' of project' + projectData.title"
                    :img-attrs="{
                      class: 'absolute top-0 left-0 h-full w-full object-cover object-center',
                    }"
                ></nuxt-picture>
              </div>
              <div v-if="projectData.slider_images && projectData.slider_images.length > 0"
                   v-for="(slider_image, s) in projectData.slider_images" :key="s"
                   class="swiper-slide rounded-big overflow-hidden min-h-[50vh] max-h-[min(50vh,600px)] shadow-2xl">
                <nuxt-picture
                    :src="slider_image"
                    loading="lazy"
                    :alt="'Slide n°' + (s+1) + ' of project' + projectData.title"
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
            <div class="flex justify-between flex-wrap items-center gap-8">
              <div class="">
                <h1 id="project-title" class="text-h1 leading-tight">{{ projectData.title }}</h1>
                <h4 class="text-cta font-light">
                  {{ $t('common.collab.'+projectData.collaboration_type) }} <span class="font-bold filter brightness-200 saturate-100" :style="{color:projectData.color}">
                  {{ projectData.company }}
                </span>
                </h4>
              </div>
              <div>
                <nuxt-link
                    v-if="projectData.link"
                    :title="$t('pages.projects.view_project')"
                    :to="projectData.link"
                    class="btn btn-black w-fit h-full mx-auto"
                    :style="{
                      color: projectData.color,
                      borderColor: projectData.color,
                    }"
                    target="_blank" rel="noopener">
                  <p class="filter brightness-200 saturate-100">{{ $t('pages.projects.view_project')}}</p>
                  <i class="icon icon-arrow -rotate-45 filter brightness-200 saturate-100"></i>
                </nuxt-link>
              </div>
            </div>
            <div class="flex flex-col gap-8 xs:flex-row flex-wrap s:gap-12">
              <div class="max-layout-m-c-8-g-7">
                <h4 class="text-h4">{{ $t('pages.projects.description') }}</h4>
                <p>
                  {{ projectData["description_"+locale]}}
                </p>
              </div>
              <div class="grid grid-cols-2 gap-8 s:gap-12">
                <div>
                  <h4 class="text-h4">{{ $t('pages.projects.type') }}</h4>
                  <p class="border border-white rounded-md w-fit px-2 filter brightness-200 saturate-100"
                     :style="{color: projectData.color, borderColor: projectData.color}"
                  >
                    {{ $t('common.type.' + projectData.type) }}
                  </p>
                </div>
                <div>
                  <h4 class="text-h4">{{ $t('pages.projects.technologies') }}</h4>
                  <ul class="text-grey-50">
                    <li v-for="(tech,t) in projectData.technologies" :key="t">{{ tech }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :style="{backgroundColor: projectData.color}" class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2/3 w-full h-2/3 blur-3xl rounded-full opacity-50 pointer-events-none"></div>

    </section>
  </main>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import 'swiper/css';
import {Navigation, Pagination} from 'swiper/modules';

const supabase = useSupabaseClient()
const { locale } = useI18n()

const rootEl = ref<HTMLElement>()
const route = useRoute()
const project = route.params.project
const projectSwiperElement = ref<HTMLElement>()
const projectSwiper = ref<Swiper>()

const { data: projectData } = await useAsyncData('project', async () => {
  const { data, error } = await supabase.from('project')
      .select()
      .eq('slug', project)
  if(error) console.error(error)
  return data[0]
})

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
  ul li::before {
    content : "\25E6";
    width: 1em;
    transform: scale(2);
    margin-right: 1em;
    color: v-bind(projectData.color);
    filter: brightness(200%) saturate(100%);
  }
</style>