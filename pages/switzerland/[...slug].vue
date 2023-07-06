<script setup>
const slug = await getSlug()
const processedSlug = await getProcessedSlug()
const language = (await getLanguage(slug)) || 'de-ch'

const story = await useAsyncStoryblok(`switzerland/${processedSlug}`, {
  version: 'draft',
  language: language,
  fallback_lang: 'de',
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
