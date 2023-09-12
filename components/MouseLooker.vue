<template>
  <div ref="element">
    <slot/>
  </div>
</template>

<script setup lang="ts">
const {$gsap} = useNuxtApp()
const element = ref<HTMLElement | null>()
const {x, y, elementPositionX:originX, elementPositionY:originY} = useMouseInElement(element);
const {breakpoints} = useDefaultBreakpoints();

const screenSmall = breakpoints.smaller('s')

const props = defineProps<{ active: boolean }>()

const trueOrigin = computed<{x:number,y:number}>(()=>{
  return {
    x: originX.value + (element.value?.offsetWidth ?? 0)/2,
    y: originY.value + (element.value?.offsetHeight ?? 0)/2,
  }
})

const lookingAngle = computed<number>(()=>{
  return (Math.atan2(x.value - trueOrigin.value.x,-(y.value - trueOrigin.value.y)))*(180/Math.PI)
})


watch([x, y], () => {
    if (props.active && !screenSmall.value) {
      $gsap.to(element.value as HTMLElement, {
        rotation: lookingAngle.value + "_short",
        duration: 2,
        ease: "power3",
      })
    }
})

onBeforeUnmount(()=>{
  $gsap.globalTimeline.clear();
})
</script>