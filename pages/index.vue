<template>
  <main ref="rootEl" id="rootEl" class="bg-black -mt-28 max-w-screen overflow-hidden">
    <section aria-labelledby="job_title" ref="heroSection" class="max-w-[100dvw] overflow-hidden relative bg-gradient-to-b to-black from-grey-500 h-[clamp(600px,_80vh,_1000px)]">
      <div class="p-4 xs:p-6 s:px-8 m:px-12 max-w-[1400px] mx-auto h-full">
        <div ref="heroContent" class="relative z-10 py-8 pt-32 xs:pt-12 h-full">
          <div class="relative h-full flex flex-col items-center justify-center py-6">
            <div class="relative text-white text-center px-8">
              <h1 id="job_title" class="text-h4 text-white">
                <span class="text-orange-100">Jérôme Rascle</span>
                <span class="font-light"> – {{ $t('pages.home.job_title') }}.</span>
              </h1>
              <h2 class="text-h1">
                <span class="font-light text-grey-50">{{ $t('pages.home.catch_phrase') }}&nbsp;</span>
                <span ref="heroAnnotate">{{ $t('pages.home.catch_phrase_underline') }}</span>
              </h2>

              <div class="absolute m-0 my-6 m:my-20 left-12 s:left-8 bottom-full blur s:blur-sm">
                <MouseLooker :active="!isOutsideHero">
                  <p class="-rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">;</p>
                </MouseLooker>
              </div>
              <div class="absolute m-0 my-6 m:my-20 right-12 s:right-8 bottom-full blur s:blur-sm">
                <MouseLooker :active="!isOutsideHero">
                  <p class="rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">&lt;</p>
                </MouseLooker>
              </div>
              <div class="absolute m-0 my-6 m:my-20 left-20 s:left-24 top-[160%] s:top-full blur s:blur-sm">
                <MouseLooker :active="!isOutsideHero">
                  <p class="rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">{</p>
                </MouseLooker>
              </div>
              <div class="absolute m-0 my-6 m:my-20 right-20 s:right-24 top-[160%] s:top-full blur s:blur-sm">
                <MouseLooker :active="!isOutsideHero">
                  <p class="rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">/</p>
                </MouseLooker>
              </div>
            </div>

            <div class="mx-auto s:absolute s:bottom-0 w-full h-fit s:left-1/2 s:-translate-x-1/2 my-8">
              <div class="relative w-fit mx-auto grid s:grid-cols-2 justify-center gap-8">
                <nuxt-link :title="$t('common.more_projects')" :to="$localePath('/projects')" class="btn btn-orange-100 w-fit h-full mx-auto">
                  <p>{{$t('common.more_projects')}}</p>
                  <i class="icon icon-arrow"/>
                </nuxt-link>
                <StatusIndicator/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref="heroBoxCtn" class="z-0 absolute w-full h-full top-2 xs:top-0 left-1/2 -translate-x-1/2 p-4 xs:p-6 s:px-8 m:px-12 max-w-[1400px]">
        <div ref="heroBox" class="relative bg-black shadow-xl rounded-big w-full h-full overflow-hidden">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-orange-100/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>

    <section aria-label="Presentation" ref="revealText" id="reveal-text" class="bg-gradient-to-b from-grey-700 to-black py-20 xs:py-24 m:py-32 min-h-[100vh] responsive-padding-x max-w-[100dvw]">
      <div ref="revealContainer" id="reveal-container">
        <div class="relative xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-0 m:px-layout-l-c-1-g-1 space-y-12">
          <div class="relative isolate">
            <h2 class="text-white text-h4">{{ $t('pages.home.hi_im') }}</h2>
            <h2 id="reveal-text-title" class="text-big-title text-orange-100 reveal-text leading-tight">Jérôme Rascle.</h2>
            <p id="reveal-text-paragraph" class="whitespace-pre-line text-white font-bold text-h3 leading-normal">
              <span>{{ $t('pages.home.p1_reveal') }}</span>
            </p>
            <div class="absolute -z-10 w-2/3 h-2/3 blur-3xl bg-orange-100/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <nuxt-link :title="$t('common.more_about')" :to="$localePath('/about')" class="btn btn-orange-100 w-fit">
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

    <section aria-label="Projects" class="relative bg-grey-900 text-white py-20 w-screen overflow-hidden">
      <div class="responsive-layout">
        <div class="xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-1">
          <h2 class="text-big-title py-8">{{$t('common.more_projects')}}</h2>
        </div>
        <div ref="projects" class="projects_wrapper will-change-transform flex space-x-8 px-8">
          <CardProjectPreview v-for="(project, i) in featured_projects" :key="i" :project="project.project" />
        </div>

        <nuxt-link :title="$t('common.more_projects2')" :to="$localePath('/projects')" class="btn btn-white m-12 w-fit mx-auto">
          <p>{{ $t('common.more_projects2') }}</p>
          <i class="icon icon-arrow"/>
        </nuxt-link>
      </div>
    </section>

    <section :aria-label="$t('pages.home.title2') + ' & ' + $t('pages.home.title3')" class="py-20 pb-72 bg-gradient-to-b from-black to-grey-700 text-white responsive-padding-x max-w-[100dvw] overflow-hidden">
      <div class="grid m:grid-cols-2 responsive-layout gap-16 xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-1 m:px-0">
        <div class="gap-y-12 flex flex-col justify-between">
          <h2 class="text-big-title text-center xs:text-left">{{ $t('pages.home.title2') }}</h2>

          <div class="grid gap-6">

            <template v-for="(experience) in featured_experiences" :key="experience.id">
              <div class="grid s:grid-cols-4">
                <div v-if="experience.experience.company.logo_url" class="py-4 max-w-32 s:p-6 s:my-auto">
                  <NuxtImg :src="experience.experience.company.logo_url" :alt="experience.experience.company.name + ' logo'"/>
                </div>
                <div class="s:col-span-3 s:col-start-2">
                  <h3 class="text-h4 font-light">
                    <span class="font-black">{{ experience.experience.company.name }}</span>
                    &nbsp;·&nbsp;
                    {{ experience.experience["position_"+locale] }}
                  </h3>
                  <h4 class="text-monument-h3 text-orange-100 font-light pt-2">
                    {{ new Date(experience.experience.start_date).toLocaleDateString(locale, {month: 'long', year: 'numeric'}) }}
                    &nbsp;–&nbsp;
                    {{ experience.experience.end_date ? new Date(experience.experience.end_date).toLocaleDateString(locale, {month: 'long', year: 'numeric'}) : $t('common.now') }}
                  </h4>
                  <p class="whitespace-pre-line text-grey-100 font-light">
                    {{
                      experience.experience["description_"+locale]
                    }}
                  </p>
                </div>
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
          <h2 class="relative text-big-title text-center xs:text-left">
            {{ $t('pages.home.title3') }}
            <span class="text-xs font-light absolute top-0 right-0 xs:bottom-0 xs:top-auto xs:right-auto xs:left-0"> {{ $t('pages.home.subtitle3') }} </span>
          </h2>

          <div class="grid gap-8 group">
            <nuxt-link :to="$localePath('/about')+'#skill_'+skill.skill['skill_name_'+locale]" v-for="skill in skills" :key="skill.id" class="border-2 border-orange-100 rounded-full py-1 px-2 rotate-3 s:group-hover:-rotate-3 odd:-rotate-3 s:odd:group-hover:rotate-3 hover:border-white active:scale-95 duration-300 text-center">
              <h3 class="text-h3 py-1 px-2 font-light">{{ skill.skill['skill_name_'+locale] }}</h3>
            </nuxt-link>
          </div>

          <nuxt-link :title="$t('common.more_about2')" :to="$localePath('/about')" class="btn btn-orange-100 w-fit mx-auto group">
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
import type {Featured_Projects, Featured_Experiences, Featured_Skills} from "types";

const {roundPaths} = useRoundedAnnotations()

const supabase = useSupabaseClient()
const {downloadResume} = useDownloadResume()

const rootEl = ref()
const {$gsap, $Draggable} = useNuxtApp();
const {t, locale} = useI18n()
let ctx: gsap.Context;

const heroSection = ref<HTMLElement|null>(null);
const {isOutside: isOutsideHero} = useMouseInElement(heroSection)
const heroBoxCtn = ref<HTMLElement|null>(null);
const heroBox = ref<HTMLElement|null>(null);
const heroContent = ref<HTMLElement|null>(null);
const heroAnnotate = ref<HTMLElement|null>(null);

const revealContainer = ref<HTMLElement|null>(null);
const revealText = ref<HTMLElement|null>(null);
const {isOutside} = useMouseInElement(revealText)

const projects = ref<HTMLElement|null>(null);

const { data: featured_projects } = await useAsyncData('featured_projects', async () => {
  const { data, error } = await supabase.from('featured_projects')
      .select('id, project (id,title,color,slug,thumbnail_image)')
      .limit(5)
  if(error) console.error(error)
  return data as Featured_Projects[]
})

const { data: featured_experiences } = await useAsyncData('featured_experiences', async () => {
  const { data, error } = await supabase.from('featured_experiences')
      .select(`id, experience(company(*),*)`)
      .order('experience(start_date)', {ascending: false})
      .limit(3)
  if(error) console.error(error)
  return data as Featured_Experiences[]
})


const { data: skills } = await useAsyncData('skill', async () => {
  const selectString = 'id, skill (skill_name_' + locale.value + ')'
  const { data, error } = await supabase.from('featured_skills')
      .select(selectString)
      .limit(4)
  if(error) console.error(error)
  return data as unknown as Featured_Skills[]
})

onMounted(()=> {
  ctx = $gsap.context(() => {
    let mm = $gsap.matchMedia();
    mm.add("(max-width: 1099px)", () => {
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

    mm.add("(min-width: 1100px)", () => {
      //HERO SECTION
      $gsap.fromTo(heroBoxCtn.value, {maxWidth: "1400px"}, {
        padding: 0,
        maxWidth: "100vw",
        scrollTrigger: {
          trigger: heroBox.value,
          scrub: 1,
          start: "75% center",
          endTrigger: revealText.value,
          end: "top 10%",
        }
      })
      $gsap.to(heroBox.value, {
        borderRadius: 0,
        background: "rgb(30,30,30)",
        scrollTrigger: {
          trigger: heroBox.value,
          scrub: 1,
          start: "75% center",
          endTrigger: revealText.value,
          end: "top 10%",
        }
      })

      const heroAnnotation = annotate(heroAnnotate.value as HTMLElement, {
        type: 'underline',
        multiline: true,
        color: "rgba(237, 112, 45, .2)",
        strokeWidth: 8,
      })
      heroAnnotation.show()
      roundPaths()

      $gsap.set(heroContent.value, {transformOrigin: "top"})
      $gsap.to(heroContent.value, {
        opacity: 0,
        top: -100,
        scrollTrigger: {
          trigger: heroBox.value,
          scrub: 1,
          start: "75% center",
          endTrigger: revealText.value,
          end: "top 10%",
        }
      })

      //REVEAL TEXT SECTION
      $gsap.set('p#reveal-text-paragraph > span', {
        '--progress': 0,
        backgroundPositionX: 'calc(-400vmax + (var(--progress) * 400vmax)), calc(-400vmax + (var(--progress) * 400vmax)), 0',
        color: 'transparent',
      })

      $gsap.fromTo("#reveal-text-title", {backgroundPositionX: "100%"}, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: '#reveal-text-title',
          scrub: 1,
          start: "top 80%",
          end: 'bottom 75%',
        }
      });

      $gsap.to('p#reveal-text-paragraph > span', {
        '--progress': 1,
        scrollTrigger: {
          trigger: '#reveal-text-title',
          endTrigger: '#reveal-text-paragraph',
          scrub: .5,
          start: 'bottom 75%',
          end: 'bottom 25%',
        }
      })
      $gsap.to('p#reveal-text-paragraph > span', {
        color: 'white',
        scrollTrigger: {
          trigger: '#reveal-text-paragraph',
          scrub: 1,
          start: 'bottom-=10% 75%',
          end: 'bottom+=25% center',
        }
      })

      //PROJECTS SECTION
      $gsap.fromTo(".projects_wrapper", {x: 0}, {
        xPercent: -120,
        ease: "none",
        scrollTrigger: {
          trigger: projects.value,
          pin: true,
          scrub: 2,
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
  title: t("pages.home.meta_title"),
  ogTitle: t("pages.home.meta_title"),
  ogSiteName: 'Jérôme Rascle',
  ogDescription: t("pages.home.meta_description"),
  description: t("pages.home.meta_description"),
  ogUrl: siteUrl,
})

useHead({htmlAttrs: {lang: locale.value}})
</script>

<style scoped>
svg.rough-annotation path{
  border-radius: 4px;
}

.reveal-text {
  @screen m{
    @apply bg-gradient-to-r bg-right-top from-40% via-[49%] to-50% from-orange-100 via-orange-300 to-grey-500 bg-clip-text text-transparent;
    background-size: 200% 100%;
  }
}
p#reveal-text-paragraph > span {
  background-image:
		/* First one is the highlight */
		linear-gradient(90deg, transparent calc(100% - 8ch), transparent calc(100%  - 8ch), white 100%),
  	linear-gradient(90deg, hsl(0 0% 50%),hsl(0 0% 50%)),
    linear-gradient(90deg, hsl(0 0% 50% / 0.15),hsl(0 0% 50% / 0.15));
  background-size:
    400vmax 1lh,
    400vmax 1lh,
    100% 1lh;
  background-repeat: no-repeat;
  background-position-x: 0;
  background-position-y: 100%;
  background-clip: text;
  color: white;
}
</style>