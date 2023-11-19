<template>
  <div id="layoutContainer" class="bg-black max-w-screen">
    <LanguageSwitch class="fixed bottom-4 left-0 z-50"/>
    <TheMenu/>
    <slot/>
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: (process.env.NUXT_PUBLIC_SITE_URL || "https://rasclejero.me") + route.path,
    },
  ],
}))
</script>

<style>
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-500 ease-in-out ;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0 duration-500;
}
</style>