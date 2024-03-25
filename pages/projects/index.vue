<template>
  <main ref="rootEl" class="pb-52 bg-gradient-to-b from-black to-grey-700">

    <section aria-label="All my projects" class="text-white text-right">
      <div class="responsive-padding-x">
        <div class="responsive-layout">
          <div class="grid gap-y-6 py-12 max-layout-l-c-7-g-6 mx-auto">
            
            <CardProject v-for="(project, i) in projects" :project="project as Project" :width="width" :height="height" :key="i" />

          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang='ts'>
import type {Project} from "~/types";

const supabase = useSupabaseClient()
const {t, locale} = useI18n()
const {width, height} = useWindowSize()

const { data: projects } = await useAsyncData('projects', async () => {
  const { data, error } = await supabase.from('project')
      .select('id, title, slug, thumbnail_image, collaboration_type, company')
      .range(0,6)
      .eq('status','published')
      .order('created_at', { ascending: false })
  if(error) console.error(error)
  return data as unknown as Project
})

const {public: {siteUrl}} = useRuntimeConfig();

useSeoMeta({
  title: t("pages.projects.meta_title"),
  ogTitle: t("pages.projects.meta_title"),
  ogSiteName: 'Jérôme Rascle',
  ogDescription: t("pages.projects.meta_description"),
  ogUrl: siteUrl,
})

useHead({htmlAttrs: {lang: locale.value}})
</script>