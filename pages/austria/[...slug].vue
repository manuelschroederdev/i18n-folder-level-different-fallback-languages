<script setup>
const slug = await getSlug()
const processedSlug = await getProcessedSlug()
const language = (await getLanguage(slug)) || 'de-at'

const story = await useAsyncStoryblok(`austria/${processedSlug}`, {
  version: 'draft',
  language: language,
  fallback_lang: 'de',
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
