<template>
  <main ref="rootEl" class="pb-52 bg-gradient-to-b from-black to-grey-700">

    <section class="text-white text-right">
      <div class="responsive-padding-x">
        <div class="responsive-layout">
          <div class="grid gap-y-12 py-12">
            <div class="relative rounded-big overflow-hidden hover:shadow-custom-ondark bg-teal-900 h-[min(800px,66vh)] max-h-[1200px]
            group cursor-pointer duration-300">
              <div class="absolute top-0 left-0 w-full h-full">
                <nuxt-img src="/images/projects/grangette.png" class="h-full w-full object-cover s:group-hover:scale-105 duration-500"></nuxt-img>
              </div>
              <div class="absolute w-full h-fit top-0 left-0 flex flex-col items-end py-6 px-6 s:px-12 s:mix-blend-difference drop-shadow-xl">
                <h1 class="text-big-title">La Grangette</h1>
                <h2 class="text-cta font-light">Collaboration with <span class="font-bold">Gintlemen</span></h2>
              </div>
              <div class="absolute w-fit h-fit bottom-0 right-0 p-6 duration-300">
                <nuxt-link :to="localePath('/projects/la-grangette')" class="bg-black/50 backdrop-blur border border-grey-500 s:border-transparent text-white s:text-grey-100 s:group-hover:text-white group-hover:bg-grey-700/50 s:hover:border-grey-500 duration-300 rounded-full p-4 flex items-center gap-4 s:gap-0 s:group-hover:gap-4">
                  <p class="w-[8ch] s:w-0 s:group-hover:w-[8ch] text-center whitespace-nowrap overflow-hidden duration-300">
                    {{ $t('common.see_more') }}</p>
                  <i class="icon icon-arrow -rotate-45"></i>
                </nuxt-link>
              </div>
            </div>

            <div class="relative rounded-big overflow-hidden hover:shadow-custom-ondark bg-red-800 h-[min(800px,66vh)] max-h-[1200px]
            group cursor-pointer duration-300">
              <div class="absolute top-0 left-0 w-full h-full">
                <nuxt-img src="/images/projects/lbr.png" class="h-full w-full object-cover object-bottom s:object-center s:group-hover:scale-105 duration-500"></nuxt-img>
              </div>
              <div class="absolute w-full h-fit top-0 left-0 flex flex-col py-6 px-6 s:px-12 s:mix-blend-difference drop-shadow-xl">
                <h1 class="text-big-title">Les Briques Rouges</h1>
                <h2 class="text-cta font-light">While studying at <span class="font-bold">ISEN Lille</span></h2>
              </div>
              <div class="absolute w-fit h-fit bottom-0 right-0 p-6 duration-300">
                <div class="bg-black/50 backdrop-blur border border-grey-500 s:border-transparent text-white s:text-grey-50 s:group-hover:text-white group-hover:bg-grey-700/50 s:hover:border-grey-500 duration-300 rounded-full p-4 flex items-center gap-4 s:gap-0 s:group-hover:gap-4">
                  <p class="w-[8ch] s:w-0 s:group-hover:w-[8ch] text-center whitespace-nowrap overflow-hidden duration-300">{{ $t('common.see_more') }}</p>
                  <i class="icon icon-arrow -rotate-45"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const {public: {siteUrl}} = useRuntimeConfig();

useSeoMeta({
  title: 'Projects',
  description: 'Projects',
})
</script>