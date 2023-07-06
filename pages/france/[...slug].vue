<script setup>
const slug = await getSlug()
const processedSlug = await getProcessedSlug()
const language = (await getLanguage(slug)) || 'fr'

const story = await useAsyncStoryblok(`france/${processedSlug}`, {
  version: 'draft',
  language: language,
  fallback_lang: 'en',
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
