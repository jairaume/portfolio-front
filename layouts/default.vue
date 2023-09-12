<template>
  <span class="mouse-follower"></span>
  <div class="bg-black">
    <slot/>
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">
import Lenis from '@studio-freight/lenis'
import MouseFollower from "mouse-follower";
import "/assets/css/components/cursor.scss"

let smoother:Lenis

const {width} = useWindowSize()

function initLenis() {
  smoother = new Lenis({
    duration: 1,
    smoothTouch: false
  })

  function raf(time) {
    smoother.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

const cursor = ref()

watch(width,(value)=>{
  if(cursor.value){
    if(value < 1000){
      cursor.value.hide()
    }
    else {
      cursor.value.show()
    }
  }
})

onMounted(() => {
  initLenis()
  cursor.value = new MouseFollower({
    ease: "expo.out",
    speed: .5,
    skewing: 4,
    stateDetection:{
      '-pointer': 'a,button',
    }
  });
})


const {public: {siteUrl}} = useRuntimeConfig();

useServerSeoMeta({
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

<style>
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-500 ease-in-out ;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0 duration-500;
}

</style>