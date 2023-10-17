<template>
  <main v-if="projectData" ref="rootEl" class="text-white pb-52 -mt-32 pt-20 min-h-screen bg-grey-700 overflow-hidden space-y-48">
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
            <div class="swiper-pagination" v-show="projectData.slider_images && projectData.slider_images.length > 0"></div>
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
                  <p class="border border-white rounded-md w-fit px-2 filter brightness-200 saturate-100 text-center"
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

    <section v-if="other_projects && other_projects.length === 2" class="responsive-padding-x pb-12 s:pb-0">
      <div class="responsive-layout">
        <div class="xs:px-layout-s-c-1-g-0 text-center space-y-8">

          <h4 ref="viewOthers" class="text-h4 w-fit mx-auto">{{ $t('common.other_projects') }}</h4>

          <div class="grid s:grid-cols-2 gap-8">
            <nuxt-link v-for="(other_project , o) in other_projects" :key="o"
                :title="other_project.title"
                :to="localePath('/projects/'+other_project.slug)"
                class="otherProject group relative p-8 shadow-custom-ondark rounded-big overflow-hidden h-32"
            >
              <div class="absolute w-full h-full top-0 left-0">
                <nuxt-picture :src="other_project.thumbnail_image"
                              alt="Projects – Grangette"
                              class="w-full h-full rounded-big"
                              :img-attrs="{class: 'absolute left-0 top-0 h-full w-full object-cover object-center'}"
                />
              </div>
              <div class="otherProjectName absolute w-full bottom-0 left-0 p-4">
                <div :style="{backgroundColor: other_project.color}"
                     class="relative isolate overflow-hidden bg-grey-500 rounded-btn text-white flex justify-between items-center px-2
                after:absolute after:-z-10 after:w-full after:h-full after:left-0 after:top-0 after:bg-gradient-to-r after:from-black/95 after:to-black/50">
                  <h4 class="text-cta py-1 px-2 font-light">{{ other_project.title }}</h4>
                  <i class="icon icon-arrow duration-300"></i>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import 'swiper/css';
import type {Project} from "types";
import {annotate} from "rough-notation";

const supabase = useSupabaseClient()
const {$gsap} = useNuxtApp()
const {t, locale } = useI18n()

const rootEl = ref<HTMLElement>()
const route = useRoute()
const project = route.params.project
const projectSwiperElement = ref<HTMLElement>()
const projectSwiper = ref<Swiper>()

const viewOthers = ref<HTMLElement|null>(null)

const { data: projectData } = await useAsyncData('project', async () => {
  const { data, error } = await supabase.from('project')
      .select()
      .eq('slug', project)
      .eq('status', 'published')
      .single()
  if(error) console.error(error)
  return data as unknown as Project
})

const { data: other_projects } = await useAsyncData('other_projects', async () => {
  const { data, error } = await supabase.from('random_project')
      .select('id, title, slug, thumbnail_image, color')
      .range(0,1)
      .eq('status', 'published')
      .neq('slug',project)
  if(error) console.error(error)
  return data as unknown as Project[]
})


onMounted(()=> {
  setTimeout(()=> {
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
      autoplay: {
        delay: 3000,
      },
      speed: 800,
      effect: 'coverflow',
      coverflowEffect: {
        depth: 50,
        rotate: 0,
        scale: 0.8,
      },
      spaceBetween: 50,
      mousewheel: {
        forceToAxis: true,
      },
    })
    const viewOthersAnnotate = annotate(viewOthers.value as HTMLElement, {
      type: 'highlight',
      multiline:true,
      color: projectData.value?.color || '#ffffff',
    })
    $gsap.from(viewOthers.value as HTMLElement, {
      scrollTrigger: {
        trigger: viewOthers.value as HTMLElement,
        start: 'top 75%',
        end: 'bottom center',
        scrub: 2,
        onEnter: () => {
          viewOthersAnnotate.show()
        },
        onLeaveBack: () => {
          viewOthersAnnotate.hide()
        }
      },
    })
  }, 1000)
})

const {public: {siteUrl}} = useRuntimeConfig();

useSeoMeta({
  title: "Jérôme Rascle - "+projectData.value.title,
  ogTitle: "Jérôme Rascle - "+projectData.value.title,
  ogSiteName: 'Jérôme Rascle',
  ogDescription: projectData.value["description_"+locale.value],
  ogUrl: siteUrl,
})

useHead({htmlAttrs: {lang: locale.value}})
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

  a.btn::before {
    box-shadow: 0 0 50px 40px v-bind(projectData.color) !important;
    filter:brightness(75%) saturate(50%);
  }

  :deep(.swiper-pagination-bullet) {
    background: v-bind(projectData.color) !important;
    opacity: .3;
    filter: brightness(200%) saturate(100%);
  }
  :deep(.swiper-pagination-bullet-active) {
    opacity: 1;
  }
  :deep(.swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active)) {
    opacity: .5;
  }

  a.otherProject:first-child div.otherProjectName {
    &:hover div i{
      @apply s:translate-x-2
    }
    & div{
      @apply s:flex-row-reverse s:after:bg-gradient-to-l;
      & i{
        @apply s:rotate-180;
      }
    }
  }

  a.otherProject:last-child div.otherProjectName {
    &:hover div i{
      @apply s:-translate-x-2
    }
  }

</style>