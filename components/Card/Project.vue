<template>
  <nuxt-link v-if="project" :title="$t('common.see_more')+' – '+ project.title" :to="localePath('/projects/'+project.slug)">
    <article ref="projectCard"
        class="relative rounded-big overflow-hidden hover:shadow-custom-ondark bg-grey-300 h-[min(800px,66vh)] max-h-[1200px]
                  group cursor-pointer duration-300 border-2 border-black/50 hover:border-transparent" :style="{backgroundColor: project.color}"
    >
      <div ref="element" class="absolute top-0 left-0 w-full h-full">
        <nuxt-img
            loading="lazy"
            :src="project.thumbnail_image"
            :alt="project.title"
            class="h-full w-full object-cover group-hover:blur brightness-75 group-hover:opacity-75 duration-500">
        </nuxt-img>
      </div>
      <div class="absolute w-full z-30 h-fit top-0 left-0 flex flex-col items-end py-6 px-6 s:px-12 text-shadow gap-y-2">
        <h1 class="text-big-title">{{ project.title }}</h1>
        <h2 class="font-light backdrop-blur-sm rounded-full ring-2 ring-white ring-opacity-25 px-2" >
          {{ new Date(project.created_at).toLocaleDateString(localeCodes, {year:"numeric", month: "long"}) }}
        </h2>
        <h2 v-if="project.company" class="text-cta font-light text-shadow">
          {{ $t('common.collab.'+project.collaboration_type) }} <span class="font-bold">{{ project.company }}</span>
        </h2>
        <h2 v-else class="text-cta text-shadow font-bold">{{ $t('common.collab.personal') }}</h2>
      </div>
      <div class="absolute w-fit h-fit bottom-0 left-0 p-6 duration-300 text-left opacity-0 blur group-hover:opacity-100 group-hover:blur-none">
        <p class="max-w-[75%]">{{ project['description_'+locale].slice(0,100) + '...' }}</p>
      </div>
      <div class="absolute w-fit h-fit bottom-0 right-0 p-6 duration-500">
        <div
            class="bg-black/50 backdrop-blur border-2 border-grey-500 s:border-transparent text-white s:text-white/75 s:group-hover:text-white group-hover:bg-grey-700/50 s:hover:border-grey-500 duration-300 rounded-full p-4 flex items-center gap-4 s:gap-0 s:group-hover:gap-4"
        >
          <p class="w-[8ch] s:w-0 s:group-hover:w-[8ch] text-center whitespace-nowrap overflow-hidden duration-300">
            {{ $t('common.see_more') }}</p>
          <i class="icon icon-arrow -rotate-45"></i>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script setup lang="ts">
import { localeCodes } from "#build/i18n.options.mjs";
import type {Project} from "~/types";

const props = defineProps<{
  project: Project,
  width: number,
  height: number,
}>()

const {$gsap} = useNuxtApp()
const { locale } = useI18n()


const projectCard = ref<HTMLElement|null>(null)
const element = ref<HTMLElement|null>(null)

let mapWidth: (value: number) => number, mapHeight: (value: number) => number;

function setMaps() {
  mapWidth = $gsap.utils.mapRange(0, props.width, -50, 50);
  mapHeight = $gsap.utils.mapRange(0, props.height, -50, 50);
}
setMaps()
watch(()=>props, setMaps)

function moveElem(e: MouseEvent) {
  e.preventDefault();
  $gsap.to(element.value!, {
    duration: 3,
    x: -mapWidth(e.x) / 2,
    y: -mapHeight(e.y) / 2,
    rotation: mapWidth(e.x) / 100,
    scale: 1.2,
    ease: "power3",
  });
}

function resetElem() {
  $gsap.killTweensOf(element.value!);

  $gsap.to(element.value!, {
    duration: 2,
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    ease: "power3",
  });
}

function initItems() {
  let mm = $gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    projectCard.value?.addEventListener("mousemove", moveElem);
    projectCard.value?.addEventListener("mouseleave", resetElem);

    return () => {
      projectCard.value?.removeEventListener("mousemove", moveElem);
      projectCard.value?.removeEventListener("mouseleave", resetElem);
    }
  });
}

onMounted( () => {
  initItems();
});

onBeforeUnmount(() => {
  projectCard.value?.removeEventListener("mousemove", moveElem);
  projectCard.value?.removeEventListener("mouseleave", resetElem);
});
</script>