<template>
  <div class="bg-black max-w-screen">
    <LanguageSwitch class="fixed bottom-4 left-0 z-50"/>
    <TheMenu/>
    <slot/>
    <TheFooter/>
  </div>
</template>

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