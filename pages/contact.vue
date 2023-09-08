<template>
  <main class="pb-52 pt-12 text-white min-h-screen bg-gradient-to-b from-black to-grey-700">
    <section class="responsive-padding-x">
      <div class="responsive-layout">
        <div class="py-32 space-y-32">

          <div class="relative">
            <h1 class="text-cta font-light">Contact me through my <span class="font-bold">mail</span> !</h1>
            <Marquee>
              <template v-for="i in 2" :key="i">
                <nuxt-link class="text-big-title px-4" to="mailto:rasclejerome@gmail.com">rasclejerome@gmail.com</nuxt-link>
                <span class="text-big-title px-4">·</span>
              </template>
            </Marquee>
          </div>

          <div class="relative">
            <h1 class="text-cta font-light">Or take a look at my <span class="font-bold">socials</span> !</h1>
            <Marquee>
              <template v-for="i in 2" :key="i">
                <nuxt-link class="text-big-title px-4" to="https://github.com/jairaume">GitHub</nuxt-link>
                <span class="text-big-title px-4">·</span>
                <nuxt-link class="text-big-title px-4" to="https://linkedin.com/in/jeromerascle">LinkedIn</nuxt-link>
                <span class="text-big-title px-4">·</span>
              </template>
            </Marquee>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
a{
  @apply hover:text-orange-100 duration-500;
}
</style>