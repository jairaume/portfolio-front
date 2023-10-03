<template>
  <footer class="relative -mt-32 z-30 rounded-t-big bg-black text-white pt-12 s:pt-24 grid gap-6 xs:gap-12 s:gap-20">
    <button @click="scrollToTop" class="absolute right-4 s:right-8 bottom-full m-4 s:bottom-8 flex flex-col gap-2 items-center group">
      <span  class=" border border-white/50 s:hover:border-white rounded-full p-3">
        <i class="icon icon-arrow -rotate-90 flex items-center s:group-hover:-translate-y-2 duration-300"></i>
      </span>
      <span class="text-xs text-center w-2/3 opacity-75 s:group-hover:opacity-100 duration-300 pointer-events-none">Scroll back to top</span>
    </button>

    <div class="responsive-padding-x">
      <div class="responsive-layout">
        <div class="xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-0">
          <div class="flex flex-col s:flex-row s:items-center s:justify-around gap-12">
            <div class="s:max-layout-m-c-5-g-4 m:max-layout-l-c-4-g-3">
              <h1 class="text-big-title">Thinking of a project&nbsp;?</h1>
              <nuxt-link class="text-orange-100 text-cta inline-flex items-center gap-6 group" to="/contact">
                <p>Let's discuss it</p>
                <i class="icon-arrow icon group-hover:translate-x-1/2 duration-300 ease-out"></i>
              </nuxt-link>
            </div>

            <div class="flex justify-between s:items-center s:justify-evenly gap-8">
              <nav>
                <ul class="grid gap-2">
                  <li>
                    <nuxt-link to="/" class="text-cta font-medium rounded-md px-2 py-1 hover:bg-grey-500 hover:text-orange-100 duration-300">
                      home
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/about" class="text-cta font-medium rounded-md px-2 py-1 hover:bg-grey-500 hover:text-orange-100 duration-300">
                      about
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/projects" class="text-cta font-medium rounded-md px-2 py-1 hover:bg-grey-500 hover:text-orange-100 duration-300">
                      projects
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contact" class="text-cta font-medium rounded-md px-2 py-1 hover:bg-grey-500 hover:text-orange-100 duration-300">
                      contact
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
              <div class="text-white grid gap-2">
                <nuxt-link class="p-2 rounded-md hover:bg-grey-500 hover:text-orange-100 duration-300 flex items-center" to="https://www.linkedin.com/in/jeromerascle" target="_blank" rel="noopener nofollow">
                  <i class="icon icon-linkedin"></i>
                </nuxt-link>
                <nuxt-link class="p-2 rounded-md hover:bg-grey-500 hover:text-orange-100 duration-300 flex items-center" to="https://www.github.com/jairaume" target="_blank" rel="noopener nofollow">
                  <i class="icon icon-github"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="text-center text-xs text-grey-100 py-2">
      2023 <span class="text-orange-100">|</span> Jérôme Rascle © <span class="text-orange-100">|</span> All Rights Reserved.
    </p>

  </footer>
</template>

<script setup lang="ts">
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
nav a.router-link-exact-active{
  @apply text-orange-100;
}
</style>