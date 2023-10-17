<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const {public: {socialImage}} = useRuntimeConfig();

useServerSeoMeta({
  title: 'Jérôme Rascle',
  ogTitle: 'Jérôme Rascle',
  ogSiteName: 'Jérôme Rascle',
  ogImage: socialImage,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageType: 'image/jpeg',
  twitterCard: 'summary',
})
</script>