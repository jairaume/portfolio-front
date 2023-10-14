<template>
  <main ref="rootEl" id="rootEl" class="bg-black -mt-28">
    <section aria-labelledby="job_title" ref="heroSection" class="relative bg-grey-50 h-[clamp(600px,_80vh,_1000px)]">
      <div class="p-4 xs:p-6 s:px-8 m:px-12 max-w-[1400px] mx-auto h-full">
        <div ref="heroContent" class="relative z-10 py-8 pt-32 xs:pt-12 h-full">
          <div class="relative h-full flex flex-col items-center justify-around py-6">
            <div class="relative text-white text-center px-8">
              <h4 id="job_title" class="text-h4 text-white">
                <span class="text-orange-100">Jérôme Rascle</span>
                <span class="font-light"> – {{ $t('pages.home.job_title') }}.</span>
              </h4>
              <h1 class="text-h1">
                <span class="font-light text-grey-50">{{ $t('pages.home.catch_phrase') }}&nbsp;</span>
                <span ref="heroAnnotate">{{ $t('pages.home.catch_phrase_underline') }}</span>
              </h1>

              <div class="absolute my-12 s:my-20 left-20 s:left-8 bottom-full m-0">
                <MouseLooker :active="!isOutsideHero">
                  <p class="-rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">;</p>
                </MouseLooker>
              </div>
              <div class="absolute my-12 s:my-20 left-12 s:left-24 top-full m-0">
                <MouseLooker :active="!isOutsideHero">
                  <p class="rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">{</p>
                </MouseLooker>
              </div>
              <div class="absolute my-12 s:my-20 right-20 s:right-8 bottom-full m-0">
                <MouseLooker :active="!isOutsideHero">
                  <p class="rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">&lt;</p>
                </MouseLooker>
              </div>
              <div class="absolute my-12 s:my-20 right-12 s:right-24 top-full m-0">
                <MouseLooker :active="!isOutsideHero">
                  <p class="rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">/</p>
                </MouseLooker>
              </div>
            </div>

            <div class="mx-auto s:absolute s:bottom-0 w-full h-fit s:left-1/2 s:-translate-x-1/2 my-8">
              <div class="relative w-fit mx-auto grid s:grid-cols-2 justify-center gap-8">
                <nuxt-link :title="$t('common.more_projects')" :to="localePath('/projects')" class="btn btn-orange-100 w-fit h-full mx-auto">
                  <p>{{$t('common.more_projects')}}</p>
                  <i class="icon icon-arrow"/>
                </nuxt-link>
                <nuxt-link :title="$t('common.contact_me')" :to="localePath('/contact')" class="btn btn-black w-fit h-full mx-auto space-x-2">
                  <p><span class="font-light">{{ $t('common.available') }}</span> {{ $t('common.now') }}</p>
                  <span class="bg-green-400 ring-4 ring-green-400/50 rounded-full p-1.5"></span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref="heroBoxCtn" class="z-0 absolute w-full h-full top-0 left-1/2 -translate-x-1/2 p-4 xs:p-6 s:px-8 m:px-12 max-w-[1400px]">
        <div ref="heroBox" class="bg-black rounded-big w-full h-full"></div>
      </div>
    </section>

    <section aria-label="Presentation" ref="revealText" id="reveal-text" class="bg-gradient-to-b from-grey-700 to-black py-24 xs:py-32 m:py-40 min-h-[300vh] responsive-padding-x max-w-screen">
      <div class="responsive-layout sticky top-24 m:top-32">
        <div class="relative xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-0 m:px-layout-l-c-1-g-1 space-y-12">
          <div class="relative overflow-hidden">
            <h3 class="text-grey-100 text-h4">{{ $t('pages.home.hi_im') }}</h3>
            <h1 id="reveal-text-content" class="text-big-title text-orange-100 reveal-text leading-tight">Jérôme Rascle</h1>
            <h3 id="reveal-text-paragraph" class="whitespace-pre-line text-white font-bold text-h3 leading-normal reveal-text-vertical">
              {{ $t('pages.home.p1_reveal') }}
            </h3>
            <div class="absolute z-0 w-2/3 h-2/3 blur-3xl bg-orange-100/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <nuxt-link :title="$t('common.more_about')" :to="localePath('/about')" class="btn btn-orange-100 w-fit">
            <p>{{ $t('common.more_about') }}</p>
            <i class="icon icon-arrow"/>
          </nuxt-link>
          <div class="absolute bottom-0 right-0">
            <MouseLooker :active="!isOutside">
              <p class="rotate-90 font-monument text-[15vw] m:text-9xl text-orange-100">&lt;</p>
            </MouseLooker>
          </div>

        </div>
      </div>
    </section>

    <section aria-label="Projects" class="bg-grey-900 py-20 overflow-hidden">
      <div class="responsive-layout">
        <div ref="projects" class="projects_wrapper will-change-transform flex space-x-8 px-8">
          <nuxt-link v-for="(project, i) in featured_projects" :key="i" :title="project.project.title" :to="localePath('/projects/'+project.project.slug)" class="group relative p-8 shadow-custom-ondark rounded-big overflow-hidden min-w-[clamp(300px,_50vw,_700px)] min-h-[clamp(250px,_40vh,_800px)]">
            <div class="absolute w-full h-full top-0 left-0">
              <nuxt-picture :src="project.project.thumbnail_image"
                            alt="Projects – Grangette"
                            class="w-full h-full rounded-big"
                            :img-attrs="{class: 'absolute left-0 top-0 h-full w-full object-cover object-center'}"
              />
            </div>
            <div class="absolute w-full bottom-0 left-0 p-4">
              <div :style="{backgroundColor: project.project.color}"
                  class="relative isolate overflow-hidden bg-grey-500 rounded-btn text-white flex justify-between items-center px-2
              after:absolute after:-z-10 after:w-full after:h-full after:left-0 after:top-0 after:bg-gradient-to-r after:from-black/95 after:to-black/50">
                <h4 class="text-cta py-1 px-2 font-light">{{ project.project.title }}</h4>
                <i class="icon icon-arrow"></i>
              </div>
            </div>
          </nuxt-link>
        </div>

        <nuxt-link :title="$t('common.more_projects2')" :to="localePath('/projects')" class="btn btn-white m-12 w-fit mx-auto">
          <p>{{ $t('common.more_projects2') }}</p>
          <i class="icon icon-arrow"/>
        </nuxt-link>
      </div>
    </section>

    <section :aria-label="$t('pages.home.title2') + ' & ' + $t('pages.home.title3')" class="py-20 pb-72 bg-gradient-to-b from-black to-grey-700 text-white responsive-padding-x">
      <div class="grid m:grid-cols-2 responsive-layout gap-16 xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-1 m:px-0">
        <div class="gap-y-12 flex flex-col justify-between">
          <h1 class="text-big-title text-center xs:text-left">{{ $t('pages.home.title2') }}</h1>

          <div class="grid gap-4 xs:grid-cols-2">

            <template v-for="(experience, i) in featured_experiences" :key="i">
              <h4 class="text-monument-h3 text-orange-100 font-light pt-2 col-start-1">
                {{ new Date(experience.experience.start_date).toLocaleDateString(locale, {month: 'long', year: 'numeric'}) }}
                &nbsp;–&nbsp;
                {{ experience.experience.end_date ? new Date(experience.experience.end_date).toLocaleDateString(locale, {month: 'long', year: 'numeric'}) : $t('common.now') }}
              </h4>
              <div class="xs:col-start-2">
                <h4 class="text-h4 font-medium">
                  {{ experience.experience["position_"+locale] }}&nbsp;· <span class="font-black">{{ experience.experience.company }}</span>
                </h4>
                <p class="text-grey-100 font-light max-layout-xs-c-1-g-1 xs:max-layout-s-c-5-g-5 s:max-layout-m-c-3-g-3 m:max-layout-l-c-2-g-3">
                  {{
                    experience.experience["description_"+locale]
                  }}
                </p>
              </div>
            </template>

          </div>

          <div @click="downloadResume" role="button" :title="$t('common.resume')" class="btn btn-white w-fit mx-auto group">
            <p>{{ $t('common.resume') }}</p>
            <div class="flex items-center">
              <i class="icon icon-arrow rotate-90 scale-x-75 duration-100 group-hover:translate-y-1"/>
            </div>
          </div>

        </div>
        <div class="gap-y-8 flex flex-col justify-between">
          <h1 class="text-big-title text-center xs:text-left">
            {{ $t('pages.home.title3') }}
            <span class="text-xs font-light"> {{ $t('pages.home.subtitle3') }} </span>
          </h1>

          <div class="grid gap-8 group">
            <div v-for="skill in skills" :key="skill.id" class="border-2 border-orange-100 rounded-full py-1 px-2 rotate-3 group-hover:-rotate-3 odd:-rotate-3 odd:group-hover:rotate-3 duration-300 text-center">
              <h4 class="text-h3 py-1 px-2 font-light">{{ skill.skill['skill_name_'+locale] }}</h4>
            </div>
          </div>

          <nuxt-link :title="$t('common.more_about2')" :to="localePath('/about')" class="btn btn-orange-100 w-fit mx-auto group">
            <p>{{ $t('common.more_about2') }}</p>
            <i class="icon icon-arrow duration-100 group-hover:translate-x-1"/>
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {annotate} from "rough-notation";

const {roundPaths} = useRoundedAnnotations()

const supabase = useSupabaseClient()
const {downloadResume} = useDownloadResume()

const rootEl = ref()
const {$gsap, $Draggable} = useNuxtApp();
const {locale} = useI18n()
let ctx: gsap.Context;

const heroSection = ref<HTMLElement|null>(null);
const {isOutside: isOutsideHero} = useMouseInElement(heroSection)
const heroBoxCtn = ref<HTMLElement|null>(null);
const heroBox = ref<HTMLElement|null>(null);
const heroContent = ref<HTMLElement|null>(null);
const heroAnnotate = ref<HTMLElement|null>(null);

const revealText = ref<HTMLElement|null>(null);
const {isOutside} = useMouseInElement(revealText)

const projects = ref<HTMLElement|null>(null);

const { data: featured_projects } = await useAsyncData('featured_projects', async () => {
  const { data, error } = await supabase.from('featured_projects')
      .select('id, project (id,title,color,slug,thumbnail_image)')
      .range(0,6)
  if(error) console.error(error)
  return data
})

const { data: featured_experiences } = await useAsyncData('featured_experiences', async () => {
  const { data, error } = await supabase.from('featured_experiences')
      .select('id, experience (*)')
      .range(0,1)
  if(error) console.error(error)
  return data
})

const { data: skills } = await useAsyncData('skill', async () => {
  const selectString = 'id, skill (skill_name_' + locale.value + ')'
  const { data, error } = await supabase.from('featured_skills').select(selectString).range(0,3)
  if(error) console.error(error)
  return data
})

onMounted(()=> {
    ctx = $gsap.context(()=> {
      $gsap.fromTo(heroBoxCtn.value,{maxWidth:"1400px"},{
        padding:0,
        maxWidth: "100vw",
        scrollTrigger: {
          trigger: heroBox.value,
          scrub: 1,
          start: "75% center",
          endTrigger: revealText.value,
          end: "top 10%",
        }
      })
      $gsap.to(heroBox.value,{
        borderRadius:0,
        background: "rgb(30,30,30)",
        scrollTrigger: {
          trigger: heroBox.value,
          scrub: 1,
          start: "75% center",
          endTrigger: revealText.value,
          end: "top 10%",
        }
      })

      $gsap.fromTo("#reveal-text-content",{backgroundPositionX: "100%"}, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#reveal-text-content",
          scrub: 1,
          start: "top center",
          endTrigger: "#reveal-text-paragraph",
          end: "top 25%"
        }
      });

      $gsap.fromTo("#reveal-text-paragraph",{backgroundPositionY: "100%"}, {
        backgroundPositionY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#reveal-text-paragraph",
          scrub: 1,
          start: "top 25%",
          endTrigger: "#reveal-text",
          end: "85% bottom"
        }
      });

      // Projects section
      let mm = $gsap.matchMedia();
      mm.add("(max-width: 1023px)", () => {
        $gsap.from(".projects_wrapper", {x: 0})

        const draggable = $Draggable.create('.projects_wrapper', {
          type: "x",
          edgeResistance: .2,
          bounds: {
            minX: -1500,
            maxX: 0
          }
        });

        return () => {
          draggable[0].kill()
        }
      });

      mm.add("(min-width: 1024px)", () => {

        const heroAnnotation = annotate(heroAnnotate.value as HTMLElement, {
          type: 'underline',
          multiline:true,
          color:"rgba(237, 112, 45, .5)",
          strokeWidth: 8,
        })
        heroAnnotation.show()
        roundPaths()

        $gsap.set(heroContent.value,{transformOrigin:"top"})
        $gsap.to(heroContent.value,{
          opacity:0,
          top: -100,
          scrollTrigger: {
            trigger: heroBox.value,
            scrub: 1,
            start: "75% center",
            endTrigger: revealText.value,
            end: "top 10%",
          }
        })

        $gsap.fromTo(".projects_wrapper", {x: 0}, {
          xPercent: -120,
          ease: "power",
          scrollTrigger: {
            trigger: projects.value,
            pin: true,
            scrub: 1,
            start: "center center",
            end: "+=100%",
            invalidateOnRefresh: true,
          }
        });
      })
    }, rootEl.value)
})

onUnmounted(() => {
  ctx.revert()
})

const {public: {siteUrl}} = useRuntimeConfig();

useSeoMeta({
  title: 'Jérôme Rascle',
  ogTitle: 'Jérôme Rascle',
  ogSiteName: 'Jérôme Rascle',
  twitterCard: 'summary',
})

const i18n = useLocaleHead()
useHead({htmlAttrs: {lang: i18n.value.htmlAttrs!.lang}})
</script>

<style scoped>
.reveal-text {
  @apply bg-gradient-to-r bg-right-top from-40% via-[49%] to-50% from-orange-100 via-orange-300 to-grey-500 bg-clip-text text-transparent;
  background-size: 200% 100%;
}

.reveal-text-vertical {
  @apply bg-gradient-to-b bg-bottom from-40% via-[49%] to-50% from-grey-50 via-white to-grey-500 bg-clip-text text-transparent;
  background-size: 100% 200%;
}

.projects_wrapper{
  & > * {
    @apply duration-1000;
  }
  &:hover > a:not(:hover) {
    @apply brightness-50 duration-500;
  }
}

svg.rough-annotation path{
  border-radius: 4px;
}
</style>