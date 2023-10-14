<template>
  <article
      class="relative rounded-big overflow-hidden hover:shadow-custom-ondark bg-grey-300 h-[min(800px,66vh)] max-h-[1200px]
                 group cursor-pointer duration-300"
  >
    <div class="absolute top-0 left-0 w-full h-full">
      <nuxt-img
          loading="lazy"
          :src="project.thumbnail_image"
          :alt="project.title"
          class="h-full w-full object-cover s:group-hover:scale-105 duration-500">
      </nuxt-img>
    </div>
    <div class="absolute w-full h-fit top-0 left-0 flex flex-col items-end py-6 px-6 s:px-12 s:mix-blend-difference drop-shadow-xl">
      <h1 class="text-big-title">{{ project.title }}</h1>
      <h2 class="text-cta font-light">{{ $t('common.collab.'+project.collaboration_type) }} <span class="font-bold">{{ project.company }}</span></h2>
    </div>
    <div class="absolute w-fit h-fit bottom-0 right-0 p-6 duration-300">
      <nuxt-link
          :title="$t('common.see_more')+' – '+ project.title"
          :to="localePath('/projects/'+project.slug)"
          class="bg-black/50 backdrop-blur border border-grey-500 s:border-transparent text-white s:text-white/75 s:group-hover:text-white group-hover:bg-grey-700/50 s:hover:border-grey-500 duration-300 rounded-full p-4 flex items-center gap-4 s:gap-0 s:group-hover:gap-4"
      >
        <p class="w-[8ch] s:w-0 s:group-hover:w-[8ch] text-center whitespace-nowrap overflow-hidden duration-300">
          {{ $t('common.see_more') }}</p>
        <i class="icon icon-arrow -rotate-45"></i>
      </nuxt-link>
    </div>
  </article>
</template>

<script setup lang="ts">
import {Project} from "~/types";

defineProps<{
  project: Project
}>()
</script>