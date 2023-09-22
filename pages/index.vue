<template>
  <main ref="rootEl" id="rootEl" class="bg-black">

    <section ref="hero" id="hero" aria-labelledby="position" class="relative responsive-layout s:max-h-screen">
      <div
          class="relative min-h-[600px] s:min-h-[825px] m:min-h-[1000px] p-8 xs:pb-8 s:px-12 ">
        <div class="absolute w-full h-full top-0 left-0 z-0 pt-0 px-8 py-12" id="grey-box">
          <div class="bg-grey-50 w-full h-full rounded-big"></div>
        </div>
        <div id="grey-box-content" class="responsive-padding-x pb-8 py-20 s:py-12 m:py-32 z-10 flex flex-col justify-around s:justify-center gap-8 xs:gap-20">
          <div class="space-y-6 z-10">
            <h3 class="text-h3">Hi, I'm <span class="text-orange-200">Jérôme Rascle</span>,</h3>
            <h1 id="position" class="text-huge-title xs:max-layout-s-c-6-g-5 s:max-w-none">Full-Stack Developer</h1>
            <p class="text-grey-300 xs:max-layout-s-c-8-g-8 s:max-layout-m-c-7-g-7 m:max-layout-l-c-5-g-4">Proident
              veniam officia do occaecat commodo quis. Proident nostrud id dolor irure eiusmod. Nisi ipsum qui velit
              Lorem cupidatat sunt aliquip est.
            </p>
          </div>
          <div
              class="flex flex-col items-center justify-end gap-6 xs:flex-wrap xs:flex-row xs:justify-between s:justify-start z-10">
            <nuxt-link to="/contact" class="btn btn-orange-100 w-fit">
              <p>Contact me</p>
              <i class="icon icon-mail"/>
            </nuxt-link>
            <nuxt-link to="/" class="btn btn-black w-fit">
              <p class="font-light">Available <span class="font-bold">now</span></p>
              <span class="bg-green-400 rounded-full w-4 h-4 ring-[3px] ring-green-400/50"></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section ref="revealText" id="reveal-text" class="bg-grey-700 py-24 xs:py-32 m:py-40 min-h-[200vh] responsive-padding-x">
      <div class="responsive-layout sticky top-24">
        <div class="relative xs:px-layout-s-c-2-g-1 s:px-layout-m-c-1-g-2 m:px-layout-l-c-2-g-1 space-y-12">
          <div class="">
            <h3 class="text-white text-h3">My name is</h3>
            <h1 id="reveal-text-content" class="text-huge-title text-orange-100 reveal-text leading-tight">Jérôme</h1>
            <h3 id="reveal-text-paragraph" class="text-white font-bold text-h3 leading-normal reveal-text-vertical">
              I’m a French software engineer who majored in software development in 2024 at ISEN Lille.
              <br>
              Since then, I have worked for multiple companies, helping them achieve their digital journey.
            </h3>
          </div>
          <nuxt-link to="/" class="btn btn-orange-100 w-fit">
            <p>More about me</p>
            <i class="icon icon-arrow"/>
          </nuxt-link>
          <div class="absolute bottom-0 right-0 w-12 h-12 s:w-32 s:h-32">
            <MouseLooker :active="!isOutside">
              <nuxt-img src="/images/svg/circonflexe.svg" class="w-full h-full object-fit !-rotate-45 s:!rotate-0" alt=""/>
            </MouseLooker>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-grey-900 py-32 min-h-screen overflow-hidden">
      <div class="responsive-layout">
        <div ref="projects" class="projects_wrapper will-change-transform flex space-x-8 px-8">
            <nuxt-link v-for="i in 4" :key="i" to="/projects/la-grangette" class="group relative p-8 shadow-custom-ondark rounded-big overflow-hidden min-w-[clamp(300px,_50vw,_700px)] min-h-[clamp(250px,_40vh,_800px)]">
            <div class="absolute w-full h-full top-0 left-0">
              <nuxt-picture src="/images/projects/grangette.png"
                            alt="Projects – Grangette"
                            class="w-full h-full rounded-big"
                            :img-attrs="{class: 'absolute left-0 top-0 h-full w-full object-cover object-center'}"
              />
            </div>
            <div class="absolute w-full bottom-0 left-0 p-4">
              <div class="bg-teal-900 rounded-btn text-white flex justify-between items-center px-2">
                <h4 class="text-cta py-1 px-2 font-light">La Grangette</h4>
                <i class="icon icon-arrow"></i>
              </div>
            </div>
          </nuxt-link>
        </div>

        <nuxt-link to="/" class="btn btn-white m-12 w-fit mx-auto">
          <p>View all projects</p>
          <i class="icon icon-arrow"/>
        </nuxt-link>
      </div>
    </section>

    <section class="py-32 pb-72 bg-grey-50 text-black responsive-padding-x">
      <div class="grid m:grid-cols-2 responsive-layout gap-16 xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-1 m:px-0">
        <div class="space-y-12">
          <h1 class="text-big-title text-center xs:text-left">Experiences</h1>

          <div class="grid gap-4 xs:grid-cols-2">

              <h4 class="text-monument-h3 text-orange-200 font-light pt-2 col-start-1"> May 2019 – August 2023</h4>
              <div class="xs:col-start-2">
                <h4 class="text-h4 font-medium">Software Engineer&nbsp;· <span class="font-black">Apple</span></h4>
                <p class="text-grey-300 font-light max-layout-xs-c-1-g-1 xs:max-layout-s-c-5-g-5 s:max-layout-m-c-3-g-3 m:max-layout-l-c-2-g-3">
                  Enim mollit sint cillum sint deserunt velit deserunt. Ad quis et sint esse non sint duis sit do dolore eu et ullamco in. Reprehenderit deserunt velit amet cillum. Non occaecat incididunt adipisicing aute dolore cupidatat enim pariatur est
                </p>
              </div>

              <h4 class="text-monument-h3 text-orange-200 font-light pt-2 col-start-1"> 2019 – 2023</h4>
              <div class="xs:col-start-2">
                <h4 class="text-h4 font-medium">Intern Developer&nbsp;· <span class="font-black">Google</span></h4>
                <p class="text-grey-300 font-light max-layout-xs-c-1-g-1 xs:max-layout-s-c-5-g-5 s:max-layout-m-c-3-g-3 m:max-layout-l-c-2-g-3">
                  Enim mollit sint cillum sint deserunt velit deserunt. Ad quis et sint esse non sint duis sit do dolore eu et ullamco in. Reprehenderit deserunt velit amet cillum.
                </p>
              </div>

          </div>

          <nuxt-link to="/" class="btn btn-black w-fit mx-auto">
            <p>View my full resume</p>
            <i class="icon icon-arrow"/>
          </nuxt-link>

        </div>
        <div class="space-y-12">
          <h1 class="text-big-title text-center xs:text-left">
            Skills
            <span class="text-xs font-light">All of them</span>
          </h1>

          <div class="grid gap-8">
            <div v-for="i in 4" :key="i" class="bg-orange-100 rounded-btn text-white flex justify-between items-center py-2 px-4 odd:flex-row-reverse shadow-xl">
              <h4 class="text-h3 py-1 px-2 font-light">Front-end</h4>
              <i class="icon icon-arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
const rootEl = ref()
const {$gsap, $Draggable} = useNuxtApp();
let ctx: gsap.Context;

const revealText = ref<HTMLElement|null>(null);
const {isOutside} = useMouseInElement(revealText)

const heroScrollPositions = {
  trigger:"#grey-box",
  start:"25% top",
  endTrigger:"#reveal-text",
  end:"top 15%",
}

const projects = ref<HTMLElement|null>(null);


onMounted(()=> {
    ctx = $gsap.context(()=> {
      $gsap.fromTo(["#grey-box", "#grey-box div"], {
        backgroundColor: '#E1E1E1',
        borderRadius: 30,
        padding: 30,
      }, {
        scrollTrigger: {
          scrub: 1,
          ...heroScrollPositions
        },
        padding: 0,
        borderRadius: 0,
        backgroundColor: "rgb(30,30,30)",
      })

      $gsap.fromTo("#grey-box-content",{opacity:1}, {
        scrollTrigger: {
          scrub: 2,
          ...heroScrollPositions
        },
        opacity: 0,
      })


      $gsap.to("#reveal-text-content", {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#reveal-text-content",
          scrub: 1,
          start: "top center",
          endTrigger: "#reveal-text-paragraph",
          end: "10% center"
        }
      });

      $gsap.to("#reveal-text-paragraph", {
        backgroundPositionY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#reveal-text-paragraph",
          scrub: 1,
          start: "10% center",
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
  ctx.kill()
})

const {public: {siteUrl}} = useRuntimeConfig();

useSeoMeta({
  title: 'Jérôme Rascle',
  ogTitle: 'Jérôme Rascle',
  ogSiteName: 'Jérôme Rascle',
  ogImage: siteUrl + '/social-media.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageType: 'image/jpeg',
  twitterCard: 'summary',
})

</script>

<style scoped>
.reveal-text {
  @apply bg-gradient-to-r bg-right-top from-40% via-50% to-50% from-orange-100 via-orange-800 to-grey-300 bg-clip-text text-transparent;
  background-size: 200% 100%;
}

.reveal-text-vertical {
  @apply bg-gradient-to-b bg-bottom from-40% via-50% to-50% from-grey-100 via-white to-grey-300 bg-clip-text text-transparent;
  background-size: 100% 200%;
}

.projects_wrapper{
  & > * {
    @apply duration-500;
  }
  &:hover > article:not(:hover) {
    @apply brightness-50 duration-200;
  }
}
</style>