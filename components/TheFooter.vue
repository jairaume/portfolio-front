<template>
  <footer class="relative -mt-32 z-30 rounded-t-big bg-black text-white pt-12 s:pt-24 grid gap-6 xs:gap-12 s:gap-20">
    <button :title="$t('common.footer.scroll_top')" @click="scrollToTop" class="absolute right-4 s:right-8 bottom-full m-4 s:bottom-8 flex flex-col gap-2 items-center group">
      <span  class=" border border-white/50 s:hover:border-white rounded-full p-3">
        <i class="icon icon-arrow -rotate-90 flex items-center s:group-hover:-translate-y-2 duration-300"></i>
      </span>
      <span class="text-xs text-center w-2/3 opacity-75 s:group-hover:opacity-100 duration-300 pointer-events-none">
        {{ $t('common.footer.scroll_top') }}
      </span>
    </button>

    <div class="responsive-padding-x">
      <div class="responsive-layout">
        <div class="xs:px-layout-s-c-1-g-1 s:px-layout-m-c-1-g-0">
          <div class="flex flex-col s:flex-row s:items-center s:justify-around gap-12">
            <div class="s:max-layout-m-c-5-g-4 m:max-layout-l-c-4-g-2">
              <h1 class="text-big-title">{{ $t('common.footer.cta_projects') }}</h1>
              <nuxt-link :title="$t('common.footer.cta_contact')" class="pushContact text-orange-100 text-cta inline-flex items-center gap-6 group" :to="$localePath('/contact')">
                <p>{{ $t('common.footer.cta_contact') }}</p>
                <i class="icon-arrow icon group-hover:translate-x-1/2 duration-300 ease-out"></i>
              </nuxt-link>
            </div>

            <div class="flex justify-between s:items-center s:justify-evenly gap-8">
              <nav>
                <ul class="grid gap-2 text-right whitespace-nowrap">
                  <li>
                    <nuxt-link :title="$t('common.home')" :to="$localePath('/')" class="text-cta font-medium rounded-md px-2 py-1">
                      {{ $t('common.home') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :title="$t('common.about')" :to="$localePath('/about')" class="text-cta font-medium rounded-md px-2 py-1">
                      {{ $t('common.about') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :title="$t('common.projects')" :to="$localePath('/projects')" class="text-cta font-medium rounded-md px-2 py-1">
                      {{ $t('common.projects') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :title="$t('common.contact')" :to="$localePath('/contact')" class="text-cta font-medium rounded-md px-2 py-1">
                      {{ $t('common.contact') }}
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
              <div class="text-white grid gap-2">
                <nuxt-link :title="$t('common.to_in')" class="p-2 rounded-md flex items-center" to="https://www.linkedin.com/in/jeromerascle" target="_blank" rel="noopener nofollow">
                  <i class="icon icon-linkedin"></i>
                </nuxt-link>
                <nuxt-link :title="$t('common.to_git')" class="p-2 rounded-md flex items-center" to="https://www.github.com/jairaume" target="_blank" rel="noopener nofollow">
                  <i class="icon icon-github"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="text-center text-xs text-grey-100 py-2">
      © {{ $t('common.footer.all_rights_reserved') }} {{ new Date().getFullYear() }} 
      <span class="text-orange-100"> | </span>
      Designed & Made with 🎶 by <span class="font-extrabold">Jérôme Rascle</span>
    </p>

  </footer>
</template>

<script setup lang="ts">
const {$gsap} = useNuxtApp();

function scrollToTop(){
  $gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power3.inOut'});
}
</script>

<style scoped>
nav a.router-link-exact-active{
  @apply text-orange-100;
}

footer a:not(.pushContact) {
  @apply hover:bg-white/10 hover:text-orange-100 duration-300;
}
</style>