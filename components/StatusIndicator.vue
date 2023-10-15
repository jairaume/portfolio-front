<template>
  <nuxt-link v-if="availability" :title="$t('common.contact_me')" :to="localePath('/contact')" class="btn btn-black w-fit h-full mx-auto space-x-2">
    <p><span class="font-light">{{ $t('common.currently') }}</span> {{ availability["currently_"+locale] }}</p>
    <span
        :class="{
            'bg-green-400': availability.available,
            'bg-red-400': !availability.available,
            'ring-4 ring-green-400/50': availability.available,
            'ring-4 ring-red-400/50': !availability.available,
        }"
        class="rounded-full p-1.5"
    />
  </nuxt-link>
</template>

<script setup lang="ts">
import type {Availability} from "types";

const supabase = useSupabaseClient()
const {locale} = useI18n()

const { data: availability } = await useAsyncData('availability', async () => {
  const { data, error } = await supabase.from('availability')
      .select()
      .single()
  if(error) console.error(error)
  return data as unknown as Availability
})
</script>