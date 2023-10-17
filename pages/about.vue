<template>
<main ref="rootEl" class="text-white overflow-hidden">
  <section :aria-label="$t('pages.about.hi_im') + ' Jérôme Rascle'" class="py-32">
    <div class="responsive-padding-x">
      <div class="responsive-layout">
        <div class="xs:px-layout-s-c-1-g-1 s:px-layout-m-c-2-g-1 m:px-layout-l-c-1-g-1">
          <div class="grid m:grid-cols-2 gap-8">

            <div class="aspect-square relative xs:max-layout-s-c-6-g-5 m:order-last s:max-layout-m-c-4-g-3 m:max-layout-l-c-3-g-3">
              <nuxt-img preload src="/images/jerome.jpeg" alt="Picture of Jérôme Rascle" class="absolute w-full h-full top-0 left-0 object-cover rounded shadow-custom-ondark"/>
            </div>

            <div class="text-white flex flex-col gap-2">
              <h4 class="text-h4">{{ $t('pages.about.hi_im') }}</h4>
              <h1 class="text-h1 text-grey-500 leading-none">
                <span ref="prenom" class="reveal-text">Jérôme </span>
                <span ref="nom" class="reveal-text">Rascle</span></h1>
              <p class="whitespace-pre-line xs:max-layout-s-c-8-g-7 s:max-layout-m-c-5-g-4 m:max-layout-l-c-3-g-2">
                {{ $t('pages.about.p1') }}
              </p>
              <div class="grid gap-4 mt-8">
                <p class="text-orange-100">{{ $t('pages.about.philosophy') }}</p>
                <nuxt-link :title="$t('common.contact_me')" :to="localePath('/contact')" class="btn btn-white w-fit">
                  <p>{{ $t('common.contact_me') }}</p>
                  <i class="icon icon-mail"></i>
                </nuxt-link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section aria-labelledby="experiences" class="pt-12 pb-20 s:py-32 responsive-padding-x">
    <div class="responsive-layout space-y-8">
      <h1 id="experiences" class="text-big-title text-center">{{ $t('pages.about.title2') }}</h1>
      <div class="relative grid gap-y-24 py-[25%] xs:py-[20%] s:py-[15%] m:py-[10%] s:px-layout-m-c-1-g-1 m:px-layout-l-c-1-g-1">
        <div ref="line" class="absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 flex flex-col gap-4">
          <span class="line-section line-section-1"></span>
          <span class="line-section line-section-2"></span>
          <span class="line-section line-section-3"></span>
          <span class="line-section line-section-main"></span>
        </div>

        <Experience
            v-for="(experience, i) in experiences"
            :experience="experience"
            :key="experience.id"
            :left="i % 2 === 0"
        />

      </div>


      <div @click="downloadResume" role="button" :title="$t('common.resume')" class="!mt-12 btn btn-white w-fit mx-auto group">
        <p>{{ $t('common.resume') }}</p>
        <div class="flex items-center">
          <i class="icon icon-arrow rotate-90 scale-x-75 duration-100 group-hover:translate-y-1"/>
        </div>
      </div>
    </div>
  </section>

  <section aria-labelledby="skills" class="py-12 responsive-padding-x">
    <div class="responsive-layout space-y-6">
        <h1 id="skills" class="text-big-title">{{ $t('pages.about.title3') }}</h1>
      <div class="relative px-layout-xs-c-0-g-1 xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-0 m:px-layout-l-c-1-g-0">
        <ul class="grid gap-12">
          <li :id="'skill_'+skill['skill_name_'+locale]" v-for="skill in all_skills" :key="skill.id" class="flex flex-col gap-2 s:items-start relative pb-6
            after:absolute last:after:hidden after:w-5/6 after:h-1 after:rounded-full after:bg-white/10 after:-bottom-4 after:left-1/2 after:-translate-x-1/2
          ">
            <div class="text-center text-cta shrink-0">
              <h4 class="w-fit mx-auto border border-white rounded-md py-1 px-2 my-2">{{ skill["skill_name_"+locale] }}</h4>
            </div>
            <div class="max-w-[800px] text-grey-50">
              <p class="whitespace-pre-line">{{ skill["description_"+locale] }}</p>
            </div>
          </li>
        </ul>
          <div class="absolute z-0 w-2/3 s:w-1/2 h-3/4 s:h-1/2 blur-3xl bg-orange-100/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

    </div>
  </section>

  <section aria-label="Hobbies" id="hobbies" class="relative py-32 s:py-40 responsive-padding-x">
    <div class="responsive-layout">
      <div class="px-layout-xs-c-0-g-1 xs:px-layout-s-c-2-g-1 s:px-layout-m-c-2-g-1 m:px-layout-l-c-1-g-2">
        <h3 class="text-h3 font-light leading-normal">
          {{ $t('pages.about.p4.intro') }} <span ref="movieAnnotate">{{ $t('pages.about.p4.hobby1') }}</span>{{ $t('pages.about.p4.or') }}<span ref="surfAnnotate">{{ $t('pages.about.p4.hobby2') }}</span>{{ $t('pages.about.p4.or2') }}<span ref="drumsAnnotate" class="relative littleArrow">{{$t('pages.about.p4.hobby3')}}</span>&nbsp;!
        </h3>
      </div>
    </div>
    <nuxt-img loading="lazy" src="/images/emoji/popcorn.png" alt="Emoji of a popcorn bucket" class="movie absolute top-32 right-4 w-16 h-16 xs:right-8 s:w-24 s:h-24 s:right-16 m:w-24 m:h-24 m:right-32"></nuxt-img>
    <nuxt-img loading="lazy" src="/images/emoji/surf.png" alt="Emoji of a man surfing" class="surf absolute top-1/2 left-4 w-16 h-16 xs:left-8 s:w-24 s:h-24 s:left-10 m:w-24 m:h-24 m:left-24"></nuxt-img>
    <nuxt-img loading="lazy" src="/images/emoji/drum.png" alt="Emoji of a drum" class="drum absolute bottom-20 right-16 w-16 h-16 xs:right-20 s:w-24 s:h-24 s:right-32 m:w-24 m:h-24 m:right-80"></nuxt-img>
  </section>

  <section aria-labelledby="otherStuff" id="hobbyCards" class="py-32 pb-72 responsive-padding-x relative h-screen bg-gradient-to-b from-black to-grey-700">
    <div class="responsive-layout">
      <div class="px-layout-xs-c-0-g-1 xs:px-layout-s-c-2-g-1 s:px-layout-m-c-2-g-1 m:px-layout-l-c-2-g-2">
        <div>
          <h4 id="otherStuff" ref="otherAnnotate" class="text-h4 text-white text-center w-fit mx-auto">
            {{ $t('pages.about.other_stuff') }}
          </h4>
        </div>
        <ul class="mt-44">
          <li v-for="(hobby, i) in hobbies" :key="i"
              class="hobby group absolute top-1/2 left-1/2">
            <div class="relative rounded-btn overflow-hidden shadow-custom-ondark hover:scale-105 duration-300">
              <div class=" w-full h-full">
                <div class="absolute will-change-transform bottom-0 left-0 w-full p-4 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                  <p class="bg-black/50 backdrop-blur border border-black/25 shadow-xl text-white text-center px-4 py-2 rounded-full w-fit mx-auto">
                    {{ hobby["description_"+locale] }}</p>
                </div>
                <nuxt-img loading="lazy"
                          :src="hobby.image+'?cache='+(new Date()).getTime()+'&metadata=false'"
                          :alt="hobby['description_'+locale]"
                          class="w-full h-full max-h-[min(50vh,_600px)] object-cover"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</main>
</template>

<script setup lang="ts">
import type {Experience, Skill, Hobby} from "~/types";
import {annotate} from "rough-notation";
import {useDownloadResume} from "~/composables/useDownloadResume";

const rootEl = ref()
const supabase = useSupabaseClient()
const {downloadResume} = useDownloadResume()

const prenom = ref<HTMLElement|null>(null)
const nom = ref<HTMLElement|null>(null)

const movieAnnotate = ref<HTMLElement>()
const surfAnnotate = ref<HTMLElement>()
const drumsAnnotate = ref<HTMLElement>()

const otherAnnotate = ref<HTMLElement>()

const {$gsap, $Draggable} = useNuxtApp()
const {t, locale} = useI18n()
let ctx: gsap.Context;

const experiencesLoaded = ref(false)
const hobbiesLoaded = ref(false)

const revealNameTo: gsap.TweenVars = {
  backgroundPositionX:0,
  duration:1,
  ease: 'power2.in',
}

const hobbiesScrollTrigger = {
  trigger: '#hobbies',
  start: 'top 75%',
  end: 'center center',
  scrub: 1
}

const { data: experiences } = await useAsyncData('experiences', async () => {
  const { data, error } = await supabase.from('experience')
      .select()
      .eq('status', 'published')
  if(error) console.error(error)
  return data as unknown as Experience
})

const { data: all_skills } = await useAsyncData('all_skills', async () => {
  const { data, error } = await supabase.from('skill').select()
  if(error) console.error(error)
  return data as unknown as Skill;
})

const { data: hobbies } = await useAsyncData('hobbies', async () => {
  const { data, error } = await supabase.from('random_hobby').select()
  if(error) console.error(error)
  return data as unknown as Hobby;
})

watch(experiences, initExperiences)

function initExperiences(){
  if(experiencesLoaded.value) return

  const lineSections = $gsap.utils.toArray('.line-section')
  lineSections.forEach((lineSection) => {
    $gsap.fromTo(lineSection as HTMLElement,{backgroundPositionY:"100%"}, {
      scrollTrigger: {
        trigger: lineSection as HTMLElement,
        start: 'top center',
        end: 'bottom center',
        scrub: .2,
      },
      ease: 'none',
      backgroundPositionY:0
    })
  })

  const experiences = $gsap.utils.toArray('.experience')
  experiences.forEach((experience) => {
    $gsap.fromTo(experience as HTMLElement,{
      opacity: .2,
      y: 50
    }, {
      scrollTrigger: {
        trigger: experience as HTMLElement,
        start: 'top center',
        end: 'center center',
        scrub: 2,
        onEnter: () => {
          experience.classList.add('active')
        },
        onLeaveBack: () => {
          experience.classList.remove('active')
        }
      },
      y:0,
      opacity: 1
    })
  })
}

watch(hobbies, initHobbies)

function initHobbies(){
  if(hobbiesLoaded.value) return

  const hobbies = $gsap.utils.toArray('li.hobby')
  hobbies.forEach((hobby)=>{
    let positions = {
      x: ($gsap.utils.random(-25,25)-50)+"%",
      y: ($gsap.utils.random(-15,15)-50)+"%",
      r: $gsap.utils.random(-10,10),
    }
    $gsap.fromTo(hobby as HTMLElement,{
      translateX:"-50%",
      translateY:"-50%",
      scale:.6,
      rotation: -positions.r,
    }, {
      rotation: positions.r,
      duration:1,
      ease:"power3.out",
      translateX: positions.x,
      translateY: positions.y,
      scale:1,
      scrollTrigger:{
        trigger: hobby as HTMLElement,
        toggleActions: 'play none none reverse',
        start: 'top 80%',
        end: 'bottom center',
      }
    })
    $Draggable.create(hobby as HTMLElement,{
      bounds: document.querySelector('#hobbyCards') as HTMLElement,
      edgeResistance: 0.65,
    })
  })
  hobbiesLoaded.value = true
}

onMounted(() => {
  setTimeout(()=> {
    ctx = $gsap.context(()=>{
    const tl = $gsap.timeline()
    tl.to(prenom.value,revealNameTo)
    tl.to(nom.value,{...revealNameTo, ease:"power2.out"},1)

    const movieAnnotation = annotate(movieAnnotate.value as HTMLElement, {type: 'underline', multiline: true, color: "rgba(237, 112, 45, .5)"})
    const surfAnnotation = annotate(surfAnnotate.value as HTMLElement, {type: 'box', multiline: true, color: "rgba(237, 112, 45, .5)"})
    const drumsAnnotation = annotate(drumsAnnotate.value as HTMLElement, {type: 'circle', color: "rgba(237, 112, 45, .5)"})

    $gsap.from(movieAnnotate.value as HTMLElement, {
      scrollTrigger: {
        trigger: movieAnnotate.value as HTMLElement,
        start: 'top 75%',
        end: 'bottom center',
        scrub: 2,
        onEnter: () => {
          movieAnnotation.show()
        },
        onLeaveBack: () => {
          movieAnnotation.hide()
        }
      },
    })

    $gsap.from(surfAnnotate.value as HTMLElement, {
      scrollTrigger: {
        trigger: surfAnnotate.value as HTMLElement,
        start: 'top 75%',
        end: 'bottom center',
        scrub: 2,
        onEnter: () => {
          surfAnnotation.show()
        },
        onLeaveBack: () => {
          surfAnnotation.hide()
        }
      },
    })

    $gsap.from(drumsAnnotate.value as HTMLElement, {
      scrollTrigger: {
        trigger: drumsAnnotate.value as HTMLElement,
        start: 'top 75%',
        end: 'bottom center',
        scrub: 2,
        onEnter: () => {
          drumsAnnotation.show()
        },
        onLeaveBack: () => {
          drumsAnnotation.hide()
        }
      },
    })

    $gsap.fromTo('.movie, .drum', {
      scale: .8,
      rotation: -10,
      x:10
    }, {
      scrollTrigger : hobbiesScrollTrigger,
      ease: 'none',
      scale:1.2,
      rotation: 15,
      x:0
    })

    $gsap.fromTo('.surf', {
      scale: .8,
      rotation: 10,
      x:-10
    }, {
      scrollTrigger : hobbiesScrollTrigger,
      ease: 'none',
      scale:1.2,
      rotation: -15,
      x:0
    })


    const otherAnnotation = annotate(otherAnnotate.value as HTMLElement, {
      type: 'highlight',
      multiline:true,
      color:"rgba(237, 112, 45, .75)"
    })

    $gsap.from(otherAnnotate.value as HTMLElement, {
      scrollTrigger: {
        trigger: otherAnnotate.value as HTMLElement,
        start: 'top 75%',
        end: 'bottom center',
        scrub: 2,
        onEnter: () => {
          otherAnnotation.show()
        },
        onLeaveBack: () => {
          otherAnnotation.hide()
        }
      },
    })

    if(!experiencesLoaded.value) initExperiences()
    if(!hobbiesLoaded.value) initHobbies()

  }, rootEl.value)
  }, 1000)
})

onUnmounted(() => {
  ctx.revert()
})

const {public: {siteUrl}} = useRuntimeConfig();

useSeoMeta({
  title: t("pages.about.meta_title"),
  ogTitle: t("pages.about.meta_title"),
  ogSiteName: 'Jérôme Rascle',
  ogDescription: t("pages.about.meta_description"),
  ogUrl: siteUrl,
})

useHead({htmlAttrs: {lang: locale.value}})
</script>

<style scoped>
.reveal-text {
  @apply bg-gradient-to-r bg-right-top from-40% via-[49%] to-50% from-orange-100 via-orange-300 to-grey-500 bg-clip-text text-transparent;
  background-size: 230% 100%;
}

.line-section{
  @apply bg-grey-300 w-full rounded-full;
  @apply bg-gradient-to-b bg-bottom from-40% via-50% to-50% from-grey-100 via-white to-grey-300 text-transparent;
  background-size: 100% 220%;
  &.line-section-1 {
    @apply h-[1.5%];
  }
  &.line-section-2 {
    @apply h-[3%];
  }
  &.line-section-3 {
    @apply h-[6%];
  }
  &.line-section-main {
    @apply h-full;
  }
}

.littleArrow {
  &:after{
    mask: url('/images/svg/drawn-arrow.svg') no-repeat center;
    -webkit-mask: url('/images/svg/drawn-arrow.svg') no-repeat center;
    mask-size: contain;
  }
  @apply after:absolute after:bg-orange-100/75 after:top-[110%] after:left-1/2 after:w-20 after:h-20;
}
</style>