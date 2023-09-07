<script setup>
const slug = await getSlug()
const processedSlug = await getProcessedSlug()
const language = (await getLanguage(slug)) || 'de-ch'
const fallback_lang = 'de'

const story = await useAsyncStoryblok(`switzerland/${processedSlug}`, {
  version: 'draft',
  language,
  fallback_lang,
})
</script>

<template>
  <LanguageInfo :language="language" :fallback_lang="fallback_lang" />
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
