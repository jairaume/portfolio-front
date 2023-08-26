<template>
  <main class="bg-black">

    <section aria-labelledby="position" class="relative s:max-h-screen">
      <div
          class="relative min-h-[600px] s:min-h-[825px] m:min-h-[1000px] p-8  xs:pb-8 s:px-12 ">
        <div class="absolute w-full h-full top-0 left-0 z-0 px-8 py-12" id="grey-box">
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
            <nuxt-link to="/" class="btn btn-orange-100 w-fit">
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

    <section id="reveal-text" class="bg-grey-700 py-24 xs:py-32 m:py-40 min-h-[200vh] responsive-padding-x">
      <div class="responsive-layout sticky top-24">
        <div class="xs:px-layout-s-c-2-g-1 s:px-layout-m-c-1-g-2 m:px-layout-l-c-2-g-1 space-y-12">
          <div class="space-y-4">
            <h3 class="text-white text-h3">My name is</h3>
            <h1 id="reveal-text-content" class="text-monument-h1 text-orange-100 reveal-text leading-loose">Jérôme</h1>
            <h3 id="reveal-text-paragraph" class="text-white text-h3 leading-normal reveal-text-vertical">
              I’m a French software engineer who majored in software development in 2024 at ISEN Lille.
              <br>
              Since then, I have worked for multiple companies, helping them achieve their digital journey.
            </h3>
          </div>
          <nuxt-link to="/" class="btn btn-orange-100 w-fit">
            <span>More about me</span>
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="bg-grey-50 py-80">
    </section>

  </main>
</template>

<script setup lang="ts">
const {$gsap} = useNuxtApp();

const heroScrollPositions = {
  trigger:"#grey-box",
  start:"25% top",
  endTrigger:"#reveal-text",
  end:"top 25%",
}

onMounted(()=>{
  $gsap.to(["#grey-box","#grey-box div"],{
    scrollTrigger:{
      scrub:1,
      markers:true,
      ...heroScrollPositions
    },
    padding:0,
    borderRadius:0,
    backgroundColor:"rgb(30,30,30)",
  })

  $gsap.to("#grey-box-content", {
    scrollTrigger: {
      scrub:2,
      ...heroScrollPositions
    },
    opacity:0,
  })


  $gsap.to("#reveal-text-content", {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#reveal-text-content",
      markers: true,
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
      markers: true,
      scrub: 1,
      start: "10% center",
      endTrigger: "#reveal-text",
      end: "85% bottom"
    }
  });

})

</script>

<style scoped>
.reveal-text {
  @apply bg-gradient-to-r bg-right-top from-50% to-50% from-orange-100 to-grey-300 bg-clip-text text-transparent;
  background-size: 200% 100%;
}

.reveal-text-vertical {
  @apply bg-gradient-to-b bg-bottom from-50% to-50% from-white to-grey-300 bg-clip-text text-transparent;
  background-size: 100% 200%;
}
</style>