<template>
  <header ref="rootEl" id="menu" class="w-full z-50 sticky top-0 text-white">
    <nav class="relative responsive-padding-x py-8 flex items-center justify-between s:gap-2 s:justify-center m:gap-6 drop-shadow">
      <nuxt-link to="/" class="text-cta px-8 hidden s:block">home</nuxt-link>
      <nuxt-link to="/about" class="text-cta px-8 hidden s:block">about</nuxt-link>
      <nuxt-link
          to="/"
          class="text-monument-menu text-orange-100 w-fit px-8 s:mx-[1ch] s:mr-[2ch]"
          :class="{ 'text-white': route.fullPath.includes('projects/')}"
      >
        <h1 class="relative w-fit">
          Jerome
          <span id="rightAccent" class="absolute w-[1ch] rotate-180">&lt;</span>
          <span id="slashMenu" class="absolute w-[1ch]">/</span>
          <span id="leftAccent" class="absolute w-[1ch] right-full">&lt;</span>
        </h1>
      </nuxt-link>
      <nuxt-link to="/projects" class="text-cta px-8 hidden s:block">projects</nuxt-link>
      <nuxt-link to="/contact" class="text-cta text-black btn btn-white px-4 py-1 border hidden s:block">contact</nuxt-link>
      <div class="relative">
        <button class="text-cta px-3 py-1 border border-white rounded-lg duration-300 s:hidden" :class="{'bg-white text-grey-500': expanded}" aria-controls="overlay" @click="toggleMenu">menu</button>
        <Transition name="slide">
          <div v-show="expanded" id="overlay" class="absolute top-full right-0 w-full h-full text-right py-3">
            <nav>
              <ul class="pr-1 space-y-2 flex flex-col items-end" @click="toggleMenu">
                <li>
                  <nuxt-link to="/" class="text-cta border rounded-full border-white/25 py-1 px-3 bg-black/10 shadow">home</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about" class="text-cta border rounded-full border-white/25 py-1 px-3 bg-black/10 shadow">about</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/projects" class="text-cta border rounded-full border-white/25 py-1 px-3 bg-black/10 shadow">projects</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact" class="text-cta border rounded-full border-white/25 py-1 px-3 flex items-center gap-2 bg-black/10 shadow">
                    contact
                    <i class="icon icon-mail"></i>
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </Transition>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const {$gsap, $ScrollTrigger} = useNuxtApp()
const rootEl = ref<HTMLElement>()
const route = useRoute()
const expanded = ref(false)

const {breakpoints} = useDefaultBreakpoints()
const sm = breakpoints.smaller('s')
watch(sm, (val)=>{
  console.log(val)
  if(!val){
    expanded.value = false
  }
})
const timings = {
  duration: 0.5,
  ease: "power2.inOut"
}
const basePositions = {
  rightAccent: {
    rotate: 180,
    scaleX: 1,
    x: "1ch",
    y: 0
  },
  leftAccent: {
    rotate: 0,
    scaleX: 1,
    x: 0,
    y: 0
  },
  slashMenu: {
    rotate: 0,
    rotateY: 0,
    scaleX: 1,
    scaleY: 1,
    skewY: 0,
    x: 0,
    y: 0
  }
}

const endPositions = {
  rightAccent: {
    rotate: 90,
    scaleX: 0.3,
    x: '-3.97ch',
    y: '-0.55ch'
  },
  leftAccent: {
    rotate: 90,
    scaleX: 0.3,
    x: '4.12ch',
    y: '-0.55ch'
  },
  slashMenu: {
    rotate: 100,
    rotateY:180,
    scaleX: 0.55,
    scaleY: 0.5,
    skewY: 10,
    x: '-5.9ch',
    y: '-0.65ch'
  }
}

const headerScrollTrigger = {
  trigger: "header",
  start: "center top",
  end: "bottom top",
  scrub:1
}

function toggleMenu(){
  expanded.value = !expanded.value;
}

useSafeOnMounted(rootEl, ()=>{
  $gsap.fromTo('#rightAccent', {
    ...timings,
    ...basePositions.rightAccent,
  },{
    ...timings,
    ...endPositions.rightAccent,
    scrollTrigger: headerScrollTrigger
  })
  $gsap.fromTo('#leftAccent', {
    ...timings,
    ...basePositions.leftAccent
  },{
    ...timings,
    ...endPositions.leftAccent,
    scrollTrigger: headerScrollTrigger
  })
  $gsap.fromTo('#slashMenu', {
    ...timings,
    ...basePositions.slashMenu
  },{
    ...timings,
    ...endPositions.slashMenu,
    scrollTrigger: headerScrollTrigger
  })
})

onBeforeUnmount(()=>{
  $ScrollTrigger.killAll()
  $gsap.globalTimeline.clear();
})

</script>

<style scoped>
header a.router-link-exact-active {
  @apply text-orange-100 duration-300;
}
header a {
  @apply hover:text-orange-100 duration-300;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(200%);
}
</style>