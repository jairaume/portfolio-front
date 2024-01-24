<template>
  <header id="menu" class="w-full z-50 sticky top-0 text-white">
    <nav class="relative responsive-padding-x py-8 flex items-center justify-between m:justify-center m:gap-6 drop-shadow s:mr-2 backdrop-blur-md">
      <nuxt-link :title="$t('common.home')" :to="localePath('/')" class="text-cta px-8 hidden m:block">
        {{ $t('common.home') }}
      </nuxt-link>
      <nuxt-link :title="$t('common.about')" :to="localePath('/about')" class="text-cta px-8 hidden m:block">
        {{ $t('common.about') }}
      </nuxt-link>
      <nuxt-link :title="$t('common.home')"
          :to="localePath('/')"
          class="text-monument-menu text-orange-100 w-fit px-8 s:mx-[1ch] s:mr-[2ch]"
          :class="{ 'text-white': route.fullPath.includes('projects/')}"
      >
        <h1 class="relative w-fit">
          Jerome
          <span id="rightAccent" class="absolute w-[1ch] rotate-180">&lt;</span>
          <span id="slashMenu" class="absolute w-[1ch]">/</span>
          <span id="leftAccent" class="absolute w-[1ch] right-full">&lt;</span>
        </h1>
      </nuxt-link>
      <nuxt-link :title="$t('common.projects')" :to="localePath('/projects')" class="text-cta px-8 hidden m:block">
        {{ $t('common.projects') }}
      </nuxt-link>
      <nuxt-link :title="$t('common.contact')" :to="localePath('/contact')" class="text-cta btn btn-black px-4 py-1 hidden m:block">
        {{ $t('common.contact') }}
      </nuxt-link>

      <div class="absolute right-0 mx-8">
        <button title="Open navigation menu" class="text-cta px-3 py-1 border border-white rounded-lg duration-300 m:hidden"
                :class="{'bg-white text-grey-500': expanded}" aria-controls="overlay"
                @click="toggleMenu"
        >
          menu
        </button>
        <Transition name="slide">
          <div v-show="expanded" id="overlay" class="absolute top-full right-0 w-screen h-full text-right py-3">
            <nav>
              <ul class="w-full pr-1 space-y-2 flex flex-col items-end" @click="toggleMenu">
                <li>
                  <nuxt-link :title="$t('common.home')" :to="localePath('/')" class="text-cta border rounded-full border-white/25 py-1 px-3 bg-black/10 shadow">
                    {{ $t('common.home') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :title="$t('common.about')" :to="localePath('/about')" class="text-cta border rounded-full border-white/25 py-1 px-3 bg-black/10 shadow">
                    {{ $t('common.about') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :title="$t('common.projects')" :to="localePath('/projects')" class="text-cta border rounded-full border-white/25 py-1 px-3 bg-black/10 shadow">
                    {{ $t('common.projects') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :title="$t('common.contact')" :to="localePath('/contact')" class="text-cta border rounded-full border-white/25 py-1 px-3 flex items-center gap-2 bg-black/10 shadow">
                    {{ $t('common.contact') }}
                    <i class="icon icon-mail bg-white"></i>
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </Transition>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">

const {$gsap} = useNuxtApp()
const route = useRoute()
const expanded = ref(false)

const {breakpoints} = useDefaultBreakpoints()
const sm = breakpoints.smaller('m')
const {y} = useWindowScroll()
const scrolled = computed(()=>y.value > 20)

watch(sm, (val)=>{
  if(!val){
    expanded.value = false
  }
})
function toggleMenu(){
  expanded.value = !expanded.value;
}



function moveToBasePositions(){
  $gsap.to('#rightAccent', {
    ...timings,
    ...basePositions.rightAccent,
  })
  $gsap.to('#leftAccent', {
    ...timings,
    ...basePositions.leftAccent,
  })
  $gsap.to('#slashMenu', {
    ...timings,
    ...basePositions.slashMenu,
  })
}

function moveToEndPositions(){
  $gsap.to('#rightAccent', {
    ...timings,
    ...endPositions.rightAccent,
  })
  $gsap.to('#leftAccent', {
    ...timings,
    ...endPositions.leftAccent,
  })
  $gsap.to('#slashMenu', {
    ...timings,
    ...endPositions.slashMenu,
  })
}

const timings = {
  duration: 0.5,
  ease: "power2.inOut"
}
const basePositions = {
  rightAccent: {
    rotate: 180,
    scaleX: 1,
    x: "1ch",
    y: 0
  },
  leftAccent: {
    rotate: 0,
    scaleX: 1,
    x: 0,
    y: 0
  },
  slashMenu: {
    rotate: 0,
    rotateY: 0,
    scaleX: 1,
    scaleY: 1,
    skewY: 0,
    x: 0,
    y: 0
  }
}

const endPositions = {
  rightAccent: {
    rotate: 90,
    scaleX: 0.3,
    x: '-3.97ch',
    y: '-0.55ch'
  },
  leftAccent: {
    rotate: 90,
    scaleX: 0.3,
    x: '4.12ch',
    y: '-0.55ch'
  },
  slashMenu: {
    rotate: 100,
    rotateY:180,
    scaleX: 0.55,
    scaleY: 0.5,
    skewY: 10,
    x: '-5.9ch',
    y: '-0.65ch'
  }
}

watch(scrolled, (val)=>{
  if(val){
    moveToEndPositions()
  }
  else {
    moveToBasePositions()
  }
})
onMounted(()=> {
  moveToBasePositions();
})

</script>

<style scoped>
header a.router-link-active:not(.text-monument-menu, .btn) {
  @apply text-orange-100 duration-300;
}
header a.router-link-active.btn {
  @apply ring-2 ring-orange-100 bg-orange-100/25;
}

header a:not(.btn, .text-monument-menu, .router-link-active) {
  @apply bg-gradient-to-r bg-right-top from-40% via-40% to-50% from-orange-100 via-orange-300 to-white bg-clip-text text-transparent hover:bg-left-top duration-500;
  background-size: 230% 100%;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(200%);
}
</style>