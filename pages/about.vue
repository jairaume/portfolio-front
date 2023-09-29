<template>
<main ref="rootEl" class="text-white">
  <section class="py-32">
    <div class="responsive-padding-x">
      <div class="responsive-layout">
        <div class="xs:px-layout-s-c-1-g-1 s:px-layout-m-c-2-g-1 m:px-layout-l-c-2-g-1">
          <div class="grid m:grid-cols-2 gap-8">

            <div class="aspect-square relative xs:max-layout-s-c-6-g-5 m:order-last s:max-layout-m-c-4-g-3 m:max-layout-l-c-3-g-3">
              <nuxt-img src="/images/jerome.jpeg" alt="about" class="absolute w-full h-full top-0 left-0 object-cover rounded shadow-custom-ondark"/>
            </div>

            <div class="text-white flex flex-col gap-2">
              <h4 class="text-h4">My name is</h4>
              <h1 class="text-h1 text-grey-500 leading-none">
                <span ref="prenom" class="reveal-text">Jérôme </span>
                <span ref="nom" class="reveal-text">Rascle</span></h1>
              <p class="xs:max-layout-s-c-8-g-7 s:max-layout-m-c-5-g-4 m:max-layout-l-c-3-g-2">
                Laboris mollit laborum do commodo tempor id laborum. Irure sunt do labore ea dolor voluptate aliqua sint ullamco ut aliquip. Magna ullamco dolor Lorem do. Irure voluptate ad fugiat amet occaecat.
              </p>
              <div class="grid gap-4 mt-8">
                <p class="text-orange-100">Sharing the same phylosophy ?</p>
                <nuxt-link to="/contact" class="btn btn-white w-fit">
                  <p>Let's discuss</p>
                  <i class="icon icon-mail"></i>
                </nuxt-link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pt-12 pb-20 s:py-32 responsive-padding-x">
    <div class="responsive-layout space-y-8">
      <h1 class="text-big-title text-center">Past experiences</h1>
      <div class="relative grid grid-cols-2 gap-y-24 py-[25%] xs:py-[20%] s:py-[15%] m:py-[10%] s:px-layout-m-c-1-g-1 m:px-layout-l-c-2-g-1">
        <div ref="line" class="absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 flex flex-col gap-4">
          <span class="line-section line-section-1"></span>
          <span class="line-section line-section-2"></span>
          <span class="line-section line-section-3"></span>
          <span class="line-section line-section-main"></span>
        </div>

        <div class="experience grid px-4 h-fit relative">
          <span class="w-4 h-4 border-4 bg-white border-white shadow rounded-full absolute top-0 right-0 translate-x-1/2 translate-y-1/2"></span>
          <h3 class="text-monument-h3 text-orange-100 text-right font-light s:absolute top-0 s:left-full s:w-full s:text-left s:px-8 s:translate-y-1/2">2019 – Now</h3>
          <h4 class="text-h4">Front-End Developer · Apple USA</h4>
          <p class="text-grey-50 text-sm font-light">
            Dolore aute cillum veniam anim do. Veniam minim nostrud duis duis
          </p>
        </div>

        <div class="experience grid px-4 h-fit row-start-2 col-start-2 relative">
          <span class="w-4 h-4 border-4 bg-white border-white shadow rounded-full absolute top-0 left-0 -translate-x-1/2 translate-y-1/2"></span>
          <h3 class="text-monument-h3 text-orange-100 text-left font-light s:absolute top-0 s:right-full s:w-full s:text-right s:px-8 s:translate-y-1/2">2019 – Now</h3>
          <h4 class="text-h4">Front-End Developer</h4>
          <p class="text-grey-50 text-sm font-light">
            Dolore aute cillum veniam anim do. Veniam minim nostrud duis duis do duis amet minim dolore sit eu. Nisi esse aliquip labore Lorem aliquip cupidatat dolore commodo.
          </p>
        </div>

      </div>
    </div>
  </section>

  <section class="py-12 responsive-padding-x">
    <div class="responsive-layout space-y-6">
      <h1 class="text-big-title">Skills</h1>
      <div class="relative grid gap-8">
        <div class="flex gap-8" v-for="i in 3" :key="i">
          <div class="text-center shrink-0">
            <h4 class="w-fit mx-auto border border-white rounded-md py-1 px-2 my-2">Web Development</h4>
          </div>
          <div>
            <p>
              Cupidatat sunt officia amet qui duis minim laborum duis consequat consequat tempor. Esse velit do ex eu eu veniam consectetur consectetur. Nulla id laboris deserunt dolore aliquip velit sit. Lorem occaecat ipsum ad ipsum nisi nulla ea excepteur tempor.
            </p>
          </div>
        </div>
        <div class="absolute z-0 w-1/2 h-1/2 blur-3xl bg-orange-100/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

    </div>
  </section>

  <section id="hobbies" class="relative py-32 s:py-40 responsive-padding-x">
    <div class="responsive-layout">
      <div class="px-layout-xs-c-0-g-1 xs:px-layout-s-c-2-g-1 s:px-layout-m-c-2-g-1 m:px-layout-l-c-2-g-2">
        <h3 class="text-h3 font-light leading-normal">
          If I’m not working, I’m probably in a <span ref="movieAnnotate">movie theater</span>, or <span ref="surfAnnotate">surfing</span> the northern french coast or most likely in my basement beating my <span ref="drumsAnnotate" class="relative after:content-[url(/images/svg/drawn-arrow.svg)] after:absolute after:top-[110%] after:left-1/2 after:w-10 after:h-32">drums</span> !
        </h3>
      </div>
    </div>
    <nuxt-img src="/images/emoji/popcorn.png" class="movie absolute top-32 right-4 w-16 h-16 xs:right-8 s:w-24 s:h-24 s:right-16 m:w-24 m:h-24 m:right-32"></nuxt-img>
    <nuxt-img src="/images/emoji/surf.png" class="surf absolute top-1/2 left-4 w-16 h-16 xs:left-8 s:w-24 s:h-24 s:left-10 m:w-24 m:h-24 m:left-24"></nuxt-img>
    <nuxt-img src="/images/emoji/drum.png" class="drum absolute bottom-20 right-16 w-16 h-16 xs:right-20 s:w-24 s:h-24 s:right-32 m:w-24 m:h-24 m:right-80"></nuxt-img>
  </section>

  <section id="hobbyCards" class="py-32 pb-72 responsive-padding-x relative h-screen bg-gradient-to-b from-black to-grey-700">
    <div class="responsive-layout">
      <div class="px-layout-xs-c-0-g-1 xs:px-layout-s-c-2-g-1 s:px-layout-m-c-2-g-1 m:px-layout-l-c-2-g-2">
        <div>
          <h4 ref="otherAnnotate" class="text-h4 text-white text-center w-fit mx-auto">here's other stuff I like...</h4>
        </div>
        <ul class="mt-20">
          <li v-for="i in 10" :key="i"
              class="hobby group absolute w-[min(400px,_50vw)] h-[min(600px,_30vh)] top-1/2 left-1/2 rounded-btn overflow-hidden shadow-custom-ondark">
            <div class="relative w-full h-full">
              <div class="absolute bottom-0 left-0 w-full p-4 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 duration-300">
                <p class="bg-black shadow-xl text-white px-4 py-2 rounded-full">Favorite movie 🎬</p>
              </div>
              <nuxt-img src="https://picsum.photos/600/500" alt="about" class="w-full h-full object-cover" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</main>
</template>

<script setup lang="ts">
import {annotate} from "rough-notation";

const rootEl = ref()

const prenom = ref<HTMLElement|null>(null)
const nom = ref<HTMLElement|null>(null)

const movieAnnotate = ref<HTMLElement>()
const surfAnnotate = ref<HTMLElement>()
const drumsAnnotate = ref<HTMLElement>()

const otherAnnotate = ref<HTMLElement>()

const {$gsap, $Draggable} = useNuxtApp()
let ctx: gsap.Context;

const revealNameTo: gsap.TweenVars = {
  backgroundPositionX:0,
  duration:1,
  ease: 'power2.in',
}

const hobbiesScrollTrigger = {
  trigger: '#hobbies',
  start: 'top center',
  end: '75% center',
  scrub: 1
}

onMounted(() => {
  ctx = $gsap.context(()=>{
    const tl = $gsap.timeline()
    tl.to(prenom.value,revealNameTo)
    tl.to(nom.value,{...revealNameTo, ease:"power2.out"},1)

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

    const movieAnnotation = annotate(movieAnnotate.value as HTMLElement, {type: 'underline', multiline:true, color:"#ED702D"})
    const surfAnnotation = annotate(surfAnnotate.value as HTMLElement, {type: 'box', multiline:true, color:"#ED702D"})
    const drumsAnnotation = annotate(drumsAnnotate.value as HTMLElement, {type: 'circle', color:"#ED702D"})

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


    const otherAnnotation = annotate(otherAnnotate.value as HTMLElement, {type: 'highlight', multiline:true, color:"#ED702D"})

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


    const hobbies = $gsap.utils.toArray('li.hobby')
    hobbies.forEach((hobby)=>{
      let positions = {
        x: ($gsap.utils.random(-75,75)-50)+"%",
        y: ($gsap.utils.random(-25,25)-50)+"%",
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
  }, rootEl.value)
})

onUnmounted(() => {
  ctx.revert()
})

const {public: {siteUrl}} = useRuntimeConfig();
const title = 'Jérôme Rascle – About me'
useSeoMeta({
  title: title,
  description: 'Laboris mollit laborum do commodo tempor id laborum. Irure sunt do labore ea dolor voluptate aliqua sint ullamco ut aliquip. Magna ullamco dolor Lorem do. Irure voluptate ad fugiat amet occaecat.',
  ogTitle: title,
  ogSiteName: title,
  ogUrl: siteUrl + '/about',
  ogImage: siteUrl + '/social-media.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageType: 'image/jpeg',
  twitterCard: 'summary',
})

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

.experience.active > span {
  @apply border-orange-100;
}
</style>