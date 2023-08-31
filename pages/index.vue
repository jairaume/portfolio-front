<template>
  <main id="rootEl" class="bg-black">

    <section ref="hero" id="hero" aria-labelledby="position" class="relative responsive-layout s:max-h-screen">
      <div
          class="relative min-h-[600px] s:min-h-[825px] m:min-h-[1000px] p-8  xs:pb-8 s:px-12 ">
        <div class="absolute w-full h-full top-0 left-0 z-0 px-8 py-12" id="grey-box">
          <div class="bg-grey-50 w-full h-full rounded-big"></div>
        </div>
        <div id="grey-box-content" class="responsive-padding-x pb-8 py-20 s:py-12 m:py-32 z-10 flex flex-col justify-around s:justify-center gap-8 xs:gap-20">
          <div class="space-y-6 z-10">
            <h3 class="text-h3">Hi, I'm <span class="text-orange-200">Jérôme Rascle</span>,</h3>
            <h1 id="position" class="text-huge-title xs:max-layout-s-c-6-g-5 s:max-w-none">Full-Stack Developer</h1>
            <p class="text-grey-300 xs:max-layout-s-c-8-g-8 s:max-layout-m-c-7-g-7 m:max-layout-l-c-5-g-4">Proident
              veniam officia do occaecat commodo quis. Proident nostrud id dolor irure eiusmod. Nisi ipsum qui velit
              Lorem cupidatat sunt aliquip est.
            </p>
          </div>
          <div
              class="flex flex-col items-center justify-end gap-6 xs:flex-wrap xs:flex-row xs:justify-between s:justify-start z-10">
            <nuxt-link to="/" class="btn btn-orange-100 w-fit">
              <p>Contact me</p>
              <i class="icon icon-mail"/>
            </nuxt-link>
            <nuxt-link to="/" class="btn btn-black w-fit">
              <p class="font-light">Available <span class="font-bold">now</span></p>
              <span class="bg-green-400 rounded-full w-4 h-4 ring-[3px] ring-green-400/50"></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section ref="revealText" id="reveal-text" class="bg-grey-700 py-24 xs:py-32 m:py-40 min-h-[200vh] responsive-padding-x">
      <div class="responsive-layout sticky top-24">
        <div class="relative xs:px-layout-s-c-2-g-1 s:px-layout-m-c-1-g-2 m:px-layout-l-c-2-g-1 space-y-12">
          <div class="space-y-4">
            <h3 class="text-white text-h3">My name is</h3>
            <h1 id="reveal-text-content" class="text-monument-h1 text-orange-100 reveal-text leading-loose">Jérôme</h1>
            <h3 id="reveal-text-paragraph" class="text-white font-bold text-h3 leading-normal reveal-text-vertical">
              I’m a French software engineer who majored in software development in 2024 at ISEN Lille.
              <br>
              Since then, I have worked for multiple companies, helping them achieve their digital journey.
            </h3>
          </div>
          <nuxt-link to="/" class="btn btn-orange-100 w-fit">
            <p>More about me</p>
            <i class="icon icon-arrow"/>
          </nuxt-link>
          <nuxt-img ref="circonflexe" id="circonflexe-follow" src="/images/svg/circonflexe.svg" class="absolute bottom-0 right-0 w-32 h-32" alt=""/>
        </div>
      </div>
    </section>

    <section class="bg-grey-900 py-80 responsive-layout min-h-screen">
      <div class="projects_wrapper will-change-transform flex space-x-8">
        <article v-for="i in 4" :key="i" class="cursor-pointer group relative p-8 bg-teal-900 shadow-custom-ondark rounded-big overflow-hidden min-w-[clamp(300px,_50vw,_700px)] min-h-[clamp(250px,_40vh,_800px)]">
          <div class="absolute w-full h-full top-0 left-0">
            <nuxt-picture src="/images/projects/grangette.png"
                          alt="Projects – Grangette"
                          class="w-full h-full rounded-big"
                          :img-attrs="{class: 'absolute left-0 top-0 h-full w-full object-cover object-center'}"
            />
          </div>
          <div class="absolute w-full bottom-0 left-0 p-4">
            <div class="bg-teal-900 rounded-btn text-white flex justify-between items-center px-2">
              <h4 class="text-cta py-1 px-2 font-light">La Grangette</h4>
              <i class="icon icon-arrow"></i>
            </div>
          </div>
        </article>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
const {$gsap, $Draggable} = useNuxtApp();

const revealText = ref<HTMLElement|null>(null);
const circonflexe = ref<HTMLElement|null>(null);
const {isOutside} = useMouseInElement(revealText);
const {x, y, elementPositionX:originX, elementPositionY:originY} = useMouseInElement(circonflexe);

const heroScrollPositions = {
  trigger:"#grey-box",
  start:"25% top",
  endTrigger:"#reveal-text",
  end:"top 15%",
}

const accentOrigin = computed<{x:number, y:number}>(()=>{
  return {
    x: originX.value + (circonflexe.value?.offsetWidth ?? 0)/2,
    y: originY.value + (circonflexe.value?.offsetHeight ?? 0)/2,
  }
})
const accentAngle = computed<number>(() => {
  return (Math.atan2(x.value - accentOrigin.value.x,-(y.value - accentOrigin.value.y)))*(180/Math.PI)
})

watch([x, y], () => {
  if (!isOutside.value) {
    $gsap.to("#circonflexe-follow", {
      rotation: accentAngle.value+"_short",
      duration: 2,
      ease: "power4",
    })
  }
})

/*function initGsapProducts() {
  if (!sectionProducts.value) return;

  const sectionProductsCtx = $gsap.utils.selector(sectionProducts.value);
  const productsWrapper = sectionProductsCtx('.products__wrapper')[0];

  const product = sectionProductsCtx('.product')[0];

  let mm = $gsap.matchMedia();
  let draggable;
  mm.add("(max-width: 1023px)", () => {
    $gsap.set(productsWrapper, {x: 0})

    draggable = $Draggable.create('.products__wrapper', { // use a proxy element
      type: "x",
      inertia: true,
      edgeResistance: .2,
      bounds: {
        minX: -(productsWrapper.offsetWidth - product.offsetWidth),
        maxX: 0
      }
    });

    return () => {
      draggable[0].kill()
    }
  });

  mm.add("(min-width: 1024px)", () => {
    $gsap.set(productsWrapper, {x: 0})

    const el = $gsap.to(productsWrapper, {
      x: () => (-productsWrapper.offsetWidth * 0.7) + 'px',
      ease: "none",
      scrollTrigger: {
        trigger: sectionProducts.value,
        pin: true,
        scrub: 1,
        start: "center center",
        end: () => "+=" + productsWrapper.offsetWidth,
        invalidateOnRefresh: true,
      }
    })
  });

}
*/

onMounted(()=> {

  $gsap.to(["#grey-box", "#grey-box div"], {
    scrollTrigger: {
      scrub: 1,
      ...heroScrollPositions
    },
    padding: 0,
    borderRadius: 0,
    backgroundColor: "rgb(30,30,30)",
  })

  $gsap.to("#grey-box-content", {
    scrollTrigger: {
      scrub: 2,
      ...heroScrollPositions
    },
    opacity: 0,
  })


  $gsap.to("#reveal-text-content", {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#reveal-text-content",
      scrub: 1,
      start: "top center",
      endTrigger: "#reveal-text-paragraph",
      end: "10% center"
    }
  });

  $gsap.to("#reveal-text-paragraph", {
    backgroundPositionY: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#reveal-text-paragraph",
      scrub: 1,
      start: "10% center",
      endTrigger: "#reveal-text",
      end: "85% bottom"
    }
  });
})

</script>

<style scoped>
.reveal-text {
  @apply bg-gradient-to-r bg-right-top from-40% via-50% to-50% from-orange-100 via-orange-800 to-grey-300 bg-clip-text text-transparent;
  background-size: 200% 100%;
}

.reveal-text-vertical {
  @apply bg-gradient-to-b bg-bottom from-40% via-50% to-50% from-grey-100 via-white to-grey-300 bg-clip-text text-transparent;
  background-size: 100% 200%;
}
</style>