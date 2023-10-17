<template>
  <div class="flex hover:-translate-x-[7.5%] duration-[4s] ease-out group">
    <div v-for="j in 2" :key="j" class="flex will-change-transform animate-scroll w-fit group-hover:pause">
      <slot/>
    </div>
  </div>
</template>

<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translate(-100%);
  }
}
</style>