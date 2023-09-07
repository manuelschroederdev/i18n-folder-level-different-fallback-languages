<script setup>
defineProps({ language: String, fallback_lang: String })
</script>

<template>
  <header
    class="rounded-md shadow-lg container max-w-xl py-3 px-6 top-3 left-1/2 -translate-x-1/2 fixed border-[#50b0ae] border bg-opacity-50 text-sm"
  >
    You're viewing the <span class="text-[#50b0ae] font-bold">{{ language }}</span> version of this story. The defined
    fallback language is <span class="text-[#50b0ae] font-bold">{{ fallback_lang }}</span
    >.
  </header>
</template>
