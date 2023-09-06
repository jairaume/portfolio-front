<template>
  <main class="text-white h-screen responsive-padding-x py-32 text-center flex flex-col justify-center">
    <section class="responsive-layout">
      <div class="grid gap-y-4">
        <h2 class="text-h1 text-orange-100">404 Error</h2>
        <h3 class="text-h4 font-light">
          The page you're trying to reach does not exist.
        </h3>
        <nuxt-link to="/" class="btn btn-orange-100 w-fit mx-auto">
          <i class="icon icon-arrow rotate-180"></i>
          <p>Back to safety</p>
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '404 Error',
  description: 'The page you\'re trying to reach does not exist.',
})
</script>