<template>
  <main ref="rootEl" id="rootEl" class="bg-black -mt-28">
    <section class="relative bg-gradient-to-b from-white to-orange-100 h-[clamp(650px,_80vh,_1000px)]">
      <div class="p-4 xs:p-6 s:px-8 m:px-12 max-w-[1400px] mx-auto h-full">
        <div ref="heroContent" class="relative z-10 py-8 h-full">
          <div class="relative h-full flex flex-col items-center justify-around">
            <div class="relative text-white text-center">
              <h3 class="text-h4 text-white">
                <span class="text-orange-100">Jérôme Rascle</span>
                <span class="font-light"> – Freelance Software Engineer.</span>
              </h3>
              <h1 class="text-h1">
                <span class="font-light text-grey-50">Crafting </span>
                <span ref="heroAnnotate">ambitious ideas</span>
              </h1>

              <div class="absolute my-8 s:my-12 left-12 s:left-0 bottom-full m-0 w-10 h-10 s:w-20 s:h-20">
                <MouseLooker :active="true">
                  <nuxt-img src="/images/svg/point-virgule.svg" class="w-full h-full object-fit -rotate-90"></nuxt-img>
                </MouseLooker>
              </div>
              <div class="absolute my-8 s:my-12 left-12 s:left-0 top-full m-0 w-5 h-5 s:w-10 s:h-10">
                <MouseLooker :active="true">
                  <nuxt-img src="/images/svg/accolade.svg" class="w-full h-full object-fit rotate-90"></nuxt-img>
                </MouseLooker>
              </div>
              <div class="absolute my-8 s:my-12 right-12 s:right-0 bottom-full m-0 w-10 h-10 s:w-20 s:h-20">
                <MouseLooker :active="true">
                  <nuxt-img src="/images/svg/superieur.svg" class="w-full h-full object-fit -rotate-90"></nuxt-img>
                </MouseLooker>
              </div>
              <div class="absolute my-8 s:my-12 right-12 s:right-0 top-full m-0 w-5 h-5 s:w-10 s:h-10">
                <MouseLooker :active="true">
                  <nuxt-img src="/images/svg/slash.svg" class="w-full h-full object-fit -rotate-90"></nuxt-img>
                </MouseLooker>
              </div>
            </div>

            <div class="absolute bottom-0 w-full h-fit left-0 flex flex-col s:flex-row items-center justify-center gap-8 my-8">
              <nuxt-link to="/projects" class="btn btn-orange-100 w-fit">
                <p>My works</p>
                <i class="icon icon-arrow"/>
              </nuxt-link>
              <div class="btn btn-black w-fit">
                <p>Available <b>now</b></p>
                <span class="bg-green-400 ring-4 ring-green-400/50 rounded-full p-1.5"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref="heroBoxCtn" class="z-0 absolute w-full h-full top-0 left-1/2 -translate-x-1/2 p-4 xs:p-6 s:px-8 m:px-12 max-w-[1400px]">
        <div ref="heroBox" class="bg-black rounded-big w-full h-full"></div>
      </div>
    </section>

    <section ref="revealText" id="reveal-text" class="bg-gradient-to-b from-grey-700 to-black py-24 xs:py-32 m:py-40 min-h-[300vh] responsive-padding-x">
      <div class="responsive-layout sticky top-24 m:top-32">
        <div class="relative xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-0 m:px-layout-l-c-2-g-1 space-y-12">
          <div class="relative">
            <h3 class="text-grey-100 text-h3">My name is</h3>
            <h1 id="reveal-text-content" class="text-big-title text-orange-100 reveal-text leading-tight">Jérôme</h1>
            <h3 id="reveal-text-paragraph" class="text-white font-bold text-h3 leading-normal reveal-text-vertical">
              I’m a French software engineer who majored in software development in 2024 at ISEN Lille.
              <br>
              Since then, I have worked for multiple companies, helping them achieve their digital journey.
            </h3>
            <div class="absolute z-0 w-2/3 h-2/3 blur-3xl bg-orange-100/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <nuxt-link to="/about" class="btn btn-orange-100 w-fit">
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

        <nuxt-link to="/projects" class="btn btn-white m-12 w-fit mx-auto">
          <p>View all projects</p>
          <i class="icon icon-arrow"/>
        </nuxt-link>
      </div>
    </section>

    <section class="py-32 pb-72 bg-gradient-to-b from-black to-grey-700 text-white responsive-padding-x">
      <div class="grid m:grid-cols-2 responsive-layout gap-16 xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-1 m:px-0">
        <div class="gap-y-12 flex flex-col justify-between">
          <h1 class="text-big-title text-center xs:text-left">Experiences</h1>

          <div class="grid gap-4 xs:grid-cols-2">

              <h4 class="text-monument-h3 text-orange-100 font-light pt-2 col-start-1"> May 2019 – August 2023</h4>
              <div class="xs:col-start-2">
                <h4 class="text-h4 font-medium">Software Engineer&nbsp;· <span class="font-black">Apple</span></h4>
                <p class="text-grey-100 font-light max-layout-xs-c-1-g-1 xs:max-layout-s-c-5-g-5 s:max-layout-m-c-3-g-3 m:max-layout-l-c-2-g-3">
                  Enim mollit sint cillum sint deserunt velit deserunt. Ad quis et sint esse non sint duis sit do dolore eu et ullamco in. Reprehenderit deserunt velit amet cillum. Non occaecat incididunt adipisicing aute dolore cupidatat enim pariatur est
                </p>
              </div>

              <h4 class="text-monument-h3 text-orange-100 font-light pt-2 col-start-1"> 2019 – 2023</h4>
              <div class="xs:col-start-2">
                <h4 class="text-h4 font-medium">Intern Developer&nbsp;· <span class="font-black">Google</span></h4>
                <p class="text-grey-100 font-light max-layout-xs-c-1-g-1 xs:max-layout-s-c-5-g-5 s:max-layout-m-c-3-g-3 m:max-layout-l-c-2-g-3">
                  Enim mollit sint cillum sint deserunt velit deserunt. Ad quis et sint esse non sint duis sit do dolore eu et ullamco in. Reprehenderit deserunt velit amet cillum.
                </p>
              </div>

          </div>

          <nuxt-link to="/" class="btn btn-white w-fit mx-auto group">
            <p>Get my full resume</p>
            <div class="flex items-center">
              <i class="icon icon-arrow rotate-90 scale-x-75 duration-100 group-hover:translate-y-1"/>
            </div>
          </nuxt-link>

        </div>
        <div class="gap-y-8 flex flex-col justify-between">
          <h1 class="text-big-title text-center xs:text-left">
            Skills
            <span class="text-xs font-light">Some of them ;)</span>
          </h1>

          <div class="grid gap-8 group">
            <div v-for="i in 4" :key="i" class="border-2 border-orange-100 rounded-full py-1 px-2 rotate-3 group-hover:-rotate-3 odd:-rotate-3 odd:group-hover:rotate-3 duration-300 text-center">
              <h4 class="text-h3 py-1 px-2 font-light">Front-end</h4>
            </div>
          </div>

          <nuxt-link to="/about" class="btn btn-orange-100 w-fit mx-auto group">
            <p>Get to know me</p>
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

const rootEl = ref()
const {$gsap, $Draggable} = useNuxtApp();
let ctx: gsap.Context;

const heroBoxCtn = ref<HTMLElement|null>(null);
const heroBox = ref<HTMLElement|null>(null);
const heroContent = ref<HTMLElement|null>(null);
const heroAnnotate = ref<HTMLElement|null>(null);

const revealText = ref<HTMLElement|null>(null);
const {isOutside} = useMouseInElement(revealText)

const projects = ref<HTMLElement|null>(null);

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
      $gsap.set(heroContent.value,{transformOrigin:"top"})
      $gsap.to(heroContent.value,{
        opacity:0,
        scale:.6,
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
        multiline:true,
        color:"rgba(237, 112, 45, .5)",
        strokeWidth: 8,
      })
      heroAnnotation.show()
      roundPaths()


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