<script setup>
const searchQuery = ref('')

const { data: sections } = await useAsyncData('search-sections', () => {
  return queryCollectionSearchSections('blog')
})

const results = computed(() => {
  if (!searchQuery.value) return []
  const q = searchQuery.value.toLowerCase()
  return (sections.value || [])
    .filter(section =>
      section.title?.toLowerCase().includes(q) ||
      section.content?.toLowerCase().includes(q)
    )
    .slice(0, 8)
})
</script>

<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar en todas las noticias..."
    />
    <ul v-if="results.length" class="post-list">
      <li v-for="result in results" :key="result.id">
        <NuxtLink :to="result.path" style="padding: 12px 0;">
          <div>
            <h2 style="font-size: 0.95rem;">{{ result.title }}</h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <p v-else-if="searchQuery" style="font-size: 0.9rem;">No se encontraron resultados para "{{ searchQuery }}".</p>
  </div>
</template>
