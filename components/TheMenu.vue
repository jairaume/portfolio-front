<template>
  <header ref="rootEl" id="menu" class="w-full z-50 sticky top-0 overflow-hidden text-white">
    <nav class="responsive-padding-x py-8 flex items-center justify-between s:gap-2 s:justify-center m:gap-6">
      <nuxt-link to="/" class="text-cta px-8 hidden s:block">home</nuxt-link>
      <nuxt-link to="/about" class="text-cta px-8 hidden s:block">about</nuxt-link>
      <nuxt-link to="/" class="text-monument-menu text-orange-100 w-fit px-8 mx-[1ch] mr-[2ch]">
        <h1 class="relative w-fit">
          Jerome
          <span id="rightAccent" class="absolute w-[1ch] rotate-180 drop-shadow">&lt;</span>
          <span id="slashMenu" class="absolute w-[1ch] drop-shadow">/</span>
          <span id="leftAccent" class="absolute w-[1ch] right-full drop-shadow">&lt;</span>
        </h1>
      </nuxt-link>
      <nuxt-link to="/projects" class="text-cta px-8 hidden s:block">projects</nuxt-link>
      <nuxt-link to="/contact" class="text-cta text-black btn btn-white px-4 py-1 border hidden s:block">contact</nuxt-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
const {$gsap} = useNuxtApp()
const rootEl = ref<HTMLElement>()

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
    x: '-3.95ch',
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
  scrub: 2,
}

useSafeOnMounted(rootEl, ()=>{
  /*$gsap.set('#rightAccent', {
    duration: 0.5,
    ...basePositions.rightAccent,
  })
  $gsap.set('#leftAccent', {
    duration: 0.5,
    ...basePositions.leftAccent
  })
  $gsap.set('#slashMenu', {
    duration: 0.5,
    ...basePositions.slashMenu
  })

  $gsap.to('#rightAccent', {
    duration: 0.5,
    ...endPositions.rightAccent,
    scrollTrigger: headerScrollTrigger
  })
  $gsap.to('#leftAccent', {
    duration: 0.5,
    ...endPositions.leftAccent,
    scrollTrigger: headerScrollTrigger
  })
  $gsap.to('#slashMenu', {
    duration: 0.5,
    ...endPositions.slashMenu,
    scrollTrigger: headerScrollTrigger
  })
  */
  $gsap.fromTo('#rightAccent', {
    duration: 0.5,
    ...basePositions.rightAccent,
  },{
    duration: 0.5,
    ...endPositions.rightAccent,
    scrollTrigger: headerScrollTrigger
  })
  $gsap.fromTo('#leftAccent', {
    duration: 0.5,
    ...basePositions.leftAccent
  },{
    duration: 0.5,
    ...endPositions.leftAccent,
    scrollTrigger: headerScrollTrigger
  })
  $gsap.fromTo('#slashMenu', {
    duration: 0.5,
    ...basePositions.slashMenu
  },{
    duration: 0.5,
    ...endPositions.slashMenu,
    scrollTrigger: headerScrollTrigger
  })
})
</script>

<style scoped>
header a.router-link-exact-active{
  @apply text-orange-100;
}
</style>