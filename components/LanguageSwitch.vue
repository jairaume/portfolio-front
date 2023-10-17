<template>
  <div>
    <div class="shadow-xl text-white duration-300 relative hover:translate-x-[8ch]">
      <div class="bg-white border border-white rounded-r-full p-1 w-fit flex items-center">
        <i class="icon icon-language text-black"></i>
      </div>
      <div class="absolute right-full top-1/2 -translate-y-1/2">
        <nuxt-link :title="'Language: '+locale.name" v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)"
            class="language" :class="{ 'active': locale.code == currentLocale}"
        >
          {{ locale.code }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {locale: currentLocale, locales} = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style scoped>
a.language {
  @apply font-bold border border-collapse border-white first:rounded-l-md w-12 p-2 hover:border-orange-100 duration-300 uppercase;
  &.active {
    @apply bg-orange-100/25 border-orange-100;
  }
}
</style>