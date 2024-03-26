<template>
  <div class="grid grid-cols-2">

    <div v-if="left" class="experience grid px-4 s:px-6 h-fit relative">
      <span class="w-4 h-4 border-4 bg-white border-white shadow rounded-full absolute top-0 right-0 translate-x-1/2 translate-y-1/2"/>
      <div class="s:absolute top-0 s:left-full w-full s:text-left s:pl-8 s:translate-y-2">
        <h2 class="text-monument-h3 text-orange-100 font-light">
          {{ new Date(experience.start_date).toLocaleDateString(locale, {month: 'long', year: 'numeric'}) }}
          &nbsp;–&nbsp;
          {{
            experience.end_date ? new Date(experience.end_date).toLocaleDateString(locale, {
              month: 'long',
              year: 'numeric'
            }) : $t('common.now')
          }}
        </h2>
        <div v-if="experience.company.logo_url" class="py-4 max-w-32 s:py-6">
          <NuxtImg :src="experience.company.logo_url" :alt="experience.company.name + ' logo'"/>
        </div>
      </div>
      <h3 class="text-h4 font-black">
        <span class="font-light">{{ experience["position_" + locale] }}</span> · {{ experience.company.name }}</h3>
      <p class="whitespace-pre-line text-grey-50 text-sm font-light">
        {{
          experience["description_" + locale]
        }}
      </p>
    </div>

    <div v-else class="experience col-start-2 grid px-4 s:px-6 h-fit relative">
      <span class="w-4 h-4 border-4 bg-white border-white shadow rounded-full absolute top-0 left-0 -translate-x-1/2 translate-y-1/2"/>
      <div class="s:absolute top-0 s:right-full w-full s:text-right s:pr-8 s:translate-y-2">
        <h2 class="text-monument-h3 text-orange-100 font-light">
          {{ new Date(experience.start_date).toLocaleDateString(locale, {month: 'long', year: 'numeric'}) }}
          &nbsp;–&nbsp;
          {{
            experience.end_date ? new Date(experience.end_date).toLocaleDateString(locale, {
              month: 'long',
              year: 'numeric'
            }) : $t('common.now')
          }}
        </h2>
        <div v-if="experience.company.logo_url" class="py-4 max-w-32 s:py-6 s:ml-auto">
          <NuxtImg :src="experience.company.logo_url" :alt="experience.company.name + ' logo'"/>
        </div>
      </div>
      <h3 class="text-h4 font-black">
        <span class="font-light">{{ experience["position_" + locale] }}</span> · {{ experience.company.name }}</h3>
      <p class="whitespace-pre-line text-grey-50 text-sm font-light">
        {{
          experience["description_" + locale]
        }}
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {Experience} from "types";

const {locale} = useI18n()

defineProps<{
  left: boolean
  experience: Experience
}>()
</script>

<style scoped>
.experience.active > span {
  @apply border-orange-100;
}
</style>