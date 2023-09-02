<template>
<main>
  <section class="py-32">
    <div class="responsive-padding-x">
      <div class="responsive-layout">
        <div class="xs:px-layout-s-c-1-g-1 s:px-layout-m-c-2-g-1 m:px-layout-l-c-2-g-1">
          <div class="grid s:grid-cols-2 gap-8">

            <div class="aspect-square relative xs:max-layout-s-c-6-g-5 s:order-last s:max-layout-m-c-4-g-3 m:max-layout-l-c-3-g-3">
              <nuxt-img src="https://picsum.photos/600/500" alt="about" class="absolute w-full h-full top-0 left-0 object-cover" />
            </div>

            <div class="text-white flex flex-col gap-2">
              <h4 class="text-h4">My name is</h4>
              <h1 class="text-h1 text-orange-100 leading-none">Jérôme Rascle</h1>
              <p class="xs:max-layout-s-c-8-g-7 s:max-layout-m-c-5-g-4 m:max-layout-l-c-3-g-2">
                Laboris mollit laborum do commodo tempor id laborum. Irure sunt do labore ea dolor voluptate aliqua sint ullamco ut aliquip. Magna ullamco dolor Lorem do. Irure voluptate ad fugiat amet occaecat.
              </p>
              <div class="grid gap-4 mt-8">
                <p class="text-orange-100">Sharing the same phylosophy ?</p>
                <nuxt-link to="/" class="btn btn-white w-fit">
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

  <section class="pt-12 pb-20 s:py-32 responsive-padding-x text-white bg-grey-700">
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

        <div class=" experience grid px-4 h-fit row-start-2 col-start-2 relative">
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

  <section class="py-32 s:py-40 responsive-padding-x text-white">
    <div class="responsive-layout">
      <div class="px-layout-xs-c-0-g-1 xs:px-layout-s-c-2-g-1 s:px-layout-m-c-2-g-1 m:px-layout-l-c-2-g-2">
        <h3 class="text-h3 font-light leading-normal">
          If I’m not working, I’m probably in a movie theater, or surfing the northern french coast or most likely in my basement beating my drums !
        </h3>
      </div>
    </div>
  </section>

  <section class="bg-grey-300 py-80"></section>
</main>
</template>

<script setup lang="ts">
const {$gsap} = useNuxtApp()


onMounted(() => {
  const lineSections = $gsap.utils.toArray('.line-section')
  lineSections.forEach((lineSection) => {
    $gsap.to(lineSection as HTMLElement, {
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
    $gsap.from(experience as HTMLElement, {
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
      ease: 'none',
      opacity: .2,
      y: 50
    })
  })
})

</script>

<style scoped>
.line-section{
  @apply bg-grey-300 w-full rounded-full;
  @apply bg-gradient-to-b bg-bottom from-40% via-50% to-50% from-grey-100 via-white to-grey-300 text-transparent;
  background-size: 100% 200%;
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