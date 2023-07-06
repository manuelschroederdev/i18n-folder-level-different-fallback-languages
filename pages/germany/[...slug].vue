<script setup>
const slug = await getSlug()
const processedSlug = await getProcessedSlug()
const language = (await getLanguage(slug)) || 'de'

const story = await useAsyncStoryblok(`germany/${processedSlug}`, {
  version: 'draft',
  language: language,
  fallback_lang: 'en',
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
