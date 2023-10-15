<template>
  <div class="grid grid-cols-2">

    <div v-if="left" class="experience grid px-4 h-fit relative">
      <span
          class="w-4 h-4 border-4 bg-white border-white shadow rounded-full absolute top-0 right-0 translate-x-1/2 translate-y-1/2"></span>
      <h3 class="text-monument-h3 text-orange-100 text-right font-light s:absolute top-0 s:left-full w-full s:text-left s:pl-8 s:translate-y-1/2">
        {{ new Date(experience.start_date).toLocaleDateString(locale, {month: 'long', year: 'numeric'}) }}
        &nbsp;–&nbsp;
        {{
          experience.end_date ? new Date(experience.end_date).toLocaleDateString(locale, {
            month: 'long',
            year: 'numeric'
          }) : $t('common.now')
        }}
      </h3>
      <h4 class="text-h4">{{ experience["position_" + locale] }} · {{ experience.company }}</h4>
      <p class="text-grey-50 text-sm font-light">
        {{
          experience["description_" + locale]
        }}
      </p>
    </div>

    <div v-else class="experience col-start-2 grid px-4 h-fit relative">
      <span
          class="w-4 h-4 border-4 bg-white border-white shadow rounded-full absolute top-0 left-0 -translate-x-1/2 translate-y-1/2"></span>
      <h3 class="text-monument-h3 text-orange-100 text-left font-light s:absolute top-0 s:right-full w-full s:text-right s:pr-8 s:translate-y-1/2">
        {{ new Date(experience.start_date).toLocaleDateString(locale, {month: 'long', year: 'numeric'}) }}
        &nbsp;–&nbsp;
        {{
          experience.end_date ? new Date(experience.end_date).toLocaleDateString(locale, {
            month: 'long',
            year: 'numeric'
          }) : $t('common.now')
        }}
      </h3>
      <h4 class="text-h4">{{ experience["position_" + locale] }} · {{ experience.company }}</h4>
      <p class="text-grey-50 text-sm font-light">
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