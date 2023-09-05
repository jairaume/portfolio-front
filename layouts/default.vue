<template>
  <div class="bg-black">
    <slot/>
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">
const {public: {siteUrl}} = useRuntimeConfig();

useServerSeoMeta({
  title: 'Jérôme Rascle',
  ogTitle: 'Jérôme Rascle',
  ogSiteName: 'Jérôme Rascle',
  ogImage: siteUrl + '/social-media.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageType: 'image/jpeg',
  twitterCard: 'summary',
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-300 ease-in-out;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0 scale-95;
}

</style>