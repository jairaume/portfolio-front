<template>
  <LanguageSwitch class="fixed bottom-4 left-0 z-50"/>
  <main class="text-white h-screen responsive-padding-x py-32 text-center flex flex-col justify-center">

    <div class="absolute z-0 top-1/2 left-1/2 bg-orange-100 opacity-10 rounded-full w-2/3 h-3/4 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

    <section class="relative responsive-layout">
      <div class="grid gap-y-4">
        <h2 class="text-h1 text-orange-100">{{ $t('common.error.404') }}</h2>
        <h3 class="text-h4 font-light">
          {{ $t('common.error.not_found') }}
        </h3>
        <nuxt-link :to="localePath('/')" class="btn btn-orange-100 w-fit mx-auto">
          <i class="icon icon-arrow rotate-180"></i>
          <p>{{ $t('common.error.go_home') }}</p>
        </nuxt-link>
      </div>

      <div class="absolute my-12 s:my-20 left-20 s:left-8 bottom-full m-0">
        <MouseLooker :active="true">
          <p class="-rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">;</p>
        </MouseLooker>
      </div>
      <div class="absolute my-12 s:my-20 left-12 s:left-24 top-full m-0">
        <MouseLooker :active="true">
          <p class="rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">{</p>
        </MouseLooker>
      </div>
      <div class="absolute my-12 s:my-20 right-20 s:right-8 bottom-full m-0">
        <MouseLooker :active="true">
          <p class="rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">&lt;</p>
        </MouseLooker>
      </div>
      <div class="absolute my-12 s:my-20 right-12 s:right-24 top-full m-0">
        <MouseLooker :active="true">
          <p class="rotate-90 font-monument text-[8vw] m:text-7xl text-orange-100">/</p>
        </MouseLooker>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">

useSeoMeta({
  title: '404 Error',
  description: 'The page you\'re trying to reach does not exist.',
})
</script>