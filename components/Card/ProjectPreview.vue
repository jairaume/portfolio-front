<template>
  <nuxt-link
      :title="project.title"
      :to="localePath('/projects/'+project.slug)"
      class="group relative p-8 shadow-custom-ondark rounded-big overflow-hidden min-w-[clamp(300px,_50vw,_700px)] min-h-[clamp(250px,_40vh,_800px)]"
  >
    <div class="absolute w-full h-full top-0 left-0">
      <nuxt-picture :src="project.thumbnail_image"
                    alt="Projects – Grangette"
                    class="w-full h-full rounded-big"
                    :img-attrs="{class: 'absolute left-0 top-0 h-full w-full object-cover object-center'}"
      />
    </div>
    <div class="absolute w-full bottom-0 left-0 p-4">
      <div :style="{backgroundColor: project.color}"
           class="relative isolate overflow-hidden bg-grey-500 rounded-btn text-white flex justify-between items-center px-2 group/name
              after:absolute after:-z-10 after:w-full after:h-full after:left-0 after:top-0 after:bg-gradient-to-r after:from-black/95 after:to-black/50">
        <h4 class="text-cta py-1 px-2 font-light">{{ project.title }}</h4>
        <i class="icon icon-arrow group-hover/name:-translate-x-2 duration-300"></i>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import {Project} from "types";

const props = defineProps<{
  project: Project
}>()
</script>