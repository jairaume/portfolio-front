<template>
  <div ref="element">
    <slot/>
  </div>
</template>

<script setup lang="ts">
const {$gsap} = useNuxtApp()
const element = ref<HTMLElement | null>()
const {x, y, elementPositionX:originX, elementPositionY:originY} = useMouseInElement(element);

const {breakpoints} = useDefaultBreakpoints()
const screenSmall = breakpoints.smaller('m')

const { isMobile } = useDevice();

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

const distance = computed<number>(()=>{
  return Math.sqrt(Math.pow(x.value - trueOrigin.value.x,2) + Math.pow(y.value - trueOrigin.value.y,2))
})


watch([x, y], () => {
    if (props.active && !isMobile && !screenSmall.value) {
      $gsap.to(element.value as HTMLElement, {
        rotation: lookingAngle.value + "_short",
        scale: $gsap.utils.clamp(.5, 1.5, 1 + distance.value/1000),
        translateX: $gsap.utils.clamp(-50, 50, (x.value - trueOrigin.value.x)/10),
        translateY: $gsap.utils.clamp(-50, 50, (y.value - trueOrigin.value.y)/10),
        duration: 2,
        ease: "power3",
      })
    }
})

onBeforeUnmount(()=>{
  $gsap.globalTimeline.clear();
})
</script>