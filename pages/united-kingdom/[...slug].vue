<script setup>
const slug = await getSlug()
const language = await getLanguage(slug)

const story = await useAsyncStoryblok(`united-kingdom/${slug.join('/')}`, {
  version: 'draft',
  language: language,
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
