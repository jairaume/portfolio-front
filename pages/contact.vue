<template>
  <main data-cursor="-inverse" class="pb-52 pt-12 text-white min-h-[80vh] bg-gradient-to-b from-black to-grey-700 overflow-hidden">
    <section class="relative responsive-padding-x">
      <div class="responsive-layout">
        <div class="py-32 space-y-32 m:space-y-40">

          <div class="relative">
            <h1 class="text-cta font-light">Contact me <span class="font-bold">here</span> !</h1>
            <Marquee>
              <template v-for="i in 2" :key="i">
                <nuxt-link class="text-big-title px-4" to="mailto:rasclejerome@gmail.com">rasclejerome@gmail.com</nuxt-link>
                <span class="text-big-title px-4">·</span>
              </template>
            </Marquee>
            <div class="absolute w-20 h-20 s:w-32 s:h-32 bottom-full left-3/4 rotate-180">
              <nuxt-img src="/images/svg/drawn-arrow.svg" class="w-full h-full object-fit duration-300"></nuxt-img>
            </div>
          </div>

          <div class="relative">
            <h1 class="text-cta font-light">And here are my <span class="font-bold">professional socials</span> !</h1>
            <Marquee>
              <template v-for="i in 2" :key="i">
                <nuxt-link class="text-big-title px-4" to="https://github.com/jairaume">GitHub</nuxt-link>
                <span class="text-big-title px-4">·</span>
                <nuxt-link class="text-big-title px-4" to="https://linkedin.com/in/jeromerascle">LinkedIn</nuxt-link>
                <span class="text-big-title px-4">·</span>
              </template>
            </Marquee>
            <div class="absolute w-8 h-8 s:w-12 s:h-12 top-full left-1/2 mt-8">
              <nuxt-img src="/images/svg/drawn-cursor.svg" class="w-full h-full object-fit duration-300"></nuxt-img>
            </div>
          </div>

        </div>
      </div>

      <div class="absolute top-0 left-0 m-8 w-20 h-20 m:w-32 m:h-32">
        <MouseLooker :active="true">
          <nuxt-img src="/images/svg/superieur.svg" class="w-full h-full object-fit -rotate-90"></nuxt-img>
        </MouseLooker>
      </div>
      <div class="absolute bottom-0 left-0 m-8 w-12 h-12 m:w-20 m:h-20">
        <MouseLooker :active="true">
          <nuxt-img src="/images/svg/slash.svg" class="w-full h-full object-fit"></nuxt-img>
        </MouseLooker>
      </div>
      <div class="absolute bottom-0 right-0 m-8 w-20 h-20 m:w-32 m:h-32 m:pt-12">
        <MouseLooker :active="true">
          <nuxt-img src="/images/svg/superieur.svg" class="w-full h-full object-fit -rotate-90"></nuxt-img>
        </MouseLooker>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
a{
  @apply s:hover:text-orange-100 s:hover:-translate-y-1 duration-500;
}
</style>