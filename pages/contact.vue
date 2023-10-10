<template>
  <main ref="theSection" class="relative pb-52 -mt-20 s:-mt-32 pt-44 text-white min-h-[80vh] bg-gradient-to-b from-black to-grey-700 overflow-hidden">
    <section class="relative responsive-padding-x">
      <div class="responsive-layout">
        <div class="py-32 space-y-32 m:space-y-40">

          <div class="relative">
            <h1 class="text-cta font-light">{{ $t('pages.contact.contact_me') }} <span class="font-bold">{{ $t('pages.contact.contact_me2') }}</span> !</h1>
            <Marquee>
              <template v-for="i in 2" :key="i">
                <nuxt-link title="e-mail: contact@rasclejero.me" rel="noopener" target="_blank" class="text-big-title px-4" to="mailto:contact@rasclejero.me">
                  contact@rasclejero.me
                </nuxt-link>
                <span class="text-big-title px-4">·</span>
              </template>
            </Marquee>
            <div class="absolute w-20 h-20 s:w-32 s:h-32 bottom-full left-3/4 rotate-180">
              <div class="svg svg-arrow w-full h-full text-orange-100"></div>
            </div>
          </div>

          <div class="relative">
            <h1 class="text-cta font-light">{{ $t('pages.contact.professional_socials')}} <span class="font-bold">{{ $t('pages.contact.professional_socials2')}}</span> !</h1>
            <Marquee>
              <template v-for="i in 2" :key="i">
                <nuxt-link title="GitHub: jairaume" rel="noopener" target="_blank" class="text-big-title px-4" to="https://github.com/jairaume">
                  GitHub
                </nuxt-link>
                <span class="text-big-title px-4">·</span>
                <nuxt-link title="LinkedIn: jeromerascle" rel="noopener" target="_blank" class="text-big-title px-4" to="https://linkedin.com/in/jeromerascle">
                  LinkedIn
                </nuxt-link>
                <span class="text-big-title px-4">·</span>
              </template>
            </Marquee>
            <div class="absolute w-8 h-8 s:w-12 s:h-12 top-full left-1/2 mt-8">
              <div class="svg svg-cursor w-full h-full text-orange-100"></div>
            </div>
          </div>

        </div>
      </div>

      <div class="absolute top-0 left-0 s:left-12">
        <MouseLooker :active="!isOutside">
          <p class="rotate-90 font-monument text-[10vw] m:text-8xl text-orange-100">&lt;</p>
        </MouseLooker>
      </div>
      <div class="absolute bottom-0 left-0 s:left-20">
        <MouseLooker :active="!isOutside">
          <p class="rotate-90 font-monument text-[10vw] m:text-8xl text-orange-100">/</p>
        </MouseLooker>
      </div>
      <div class="absolute bottom-0 right-0 m-8 m:pt-12 s:right-20">
        <MouseLooker :active="!isOutside">
          <p class="rotate-90 font-monument text-[10vw] m:text-8xl text-orange-100">&lt;</p>
        </MouseLooker>
      </div>
    </section>
    <div ref="blur" class="z-0 absolute hidden s:block w-1/2 h-1/2 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-orange-100/10 blur-3xl pointer-events-none"></div>
  </main>
</template>

<script setup lang="ts">
const theSection = ref<HTMLElement | null>(null)
const {$gsap} = useNuxtApp()
const {x, y, isOutside} = useMouseInElement(theSection)

const blur = ref<HTMLElement | null>(null)

watch([x,y],()=>{
  if(blur.value){
    $gsap.to(blur.value, {
      x: x.value,
      y: y.value,
      duration: 1,
      ease: 'power1'
    })
  }
})

onMounted(() => {
})
</script>

<style scoped>
a{
  @apply s:hover:text-orange-100 s:hover:-translate-y-1 duration-500;
}
</style>