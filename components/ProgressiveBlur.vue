<template>
    <div class="absolute h-full w-full">
      <div class="absolute top-0 left-0 inset-0 w-full h-full duration-300" v-for="(blur, index) in blurs" :key="index" :style="active && blur.style"></div>
    </div>
</template>
  
<script setup lang="ts">
const props = defineProps<{active: boolean}>()
  const blurs = [
    { style: { backdropFilter: 'blur(16.6667px)', maskImage: 'linear-gradient(rgba(0, 0, 0) 0%, rgb(0, 0, 0, 0) 20%)', zIndex: 10 } },
    { style: { backdropFilter: 'blur(13.1687px)', maskImage: 'linear-gradient(rgba(0, 0, 0) 10%, rgb(0, 0, 0, 0) 30%)', zIndex: 9 } },
    { style: { backdropFilter: 'blur(10.0823px)', maskImage: 'linear-gradient(rgba(0, 0, 0) 20%, rgb(0, 0, 0, 0) 40%)', zIndex: 8 } },
    { style: { backdropFilter: 'blur(7.40741px)', maskImage: 'linear-gradient(rgba(0, 0, 0) 30%, rgb(0, 0, 0, 0) 50%)', zIndex: 7 } },
    { style: { backdropFilter: 'blur(5.14403px)', maskImage: 'linear-gradient(rgba(0, 0, 0) 40%, rgb(0, 0, 0, 0) 60%)', zIndex: 6 } },
    { style: { backdropFilter: 'blur(3.29218px)', maskImage: 'linear-gradient(rgba(0, 0, 0) 50%, rgb(0, 0, 0, 0) 70%)', zIndex: 5 } },
    { style: { backdropFilter: 'blur(1.85185px)', maskImage: 'linear-gradient(rgba(0, 0, 0) 60%, rgb(0, 0, 0, 0) 80%)', zIndex: 4 } },
    { style: { backdropFilter: 'blur(0.823045px)', maskImage: 'linear-gradient(rgba(0, 0, 0) 70%, rgb(0, 0, 0, 0) 90%)', zIndex: 3 } },
    { style: { backdropFilter: 'blur(0.205761px)', maskImage: 'linear-gradient(rgba(0, 0, 0) 80%, rgb(0, 0, 0, 0) 100%)', zIndex: 2 } },
    { style: { backdropFilter: 'blur(0px)', maskImage: 'linear-gradient(rgba(0, 0, 0) 90%, rgb(0, 0, 0, 0) 100%)', zIndex: 1 } }
  ];
</script>
  