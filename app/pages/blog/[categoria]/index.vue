<script setup>
const route = useRoute()

const { data: posts } = await useAsyncData(`categoria-${route.params.categoria}`, () => {
  return queryCollection('blog')
    .where('category', '=', route.params.categoria)
    .order('date', 'DESC')
    .select('path', 'title', 'description', 'date', 'image')
    .all()
})
</script>

<template>
  <div class="container">
    <p class="breadcrumb"><NuxtLink to="/blog">Inicio</NuxtLink> / <span class="capitalize">{{ route.params.categoria }}</span></p>
    <h1 class="capitalize">{{ route.params.categoria }}</h1>

    <ul class="post-list">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path">
          <img v-if="post.image" :src="post.image" alt="" class="cover-thumb" />
          <div>
            <h2>{{ post.title }}</h2>
            <p class="post-date">{{ new Date(post.date).toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
            <p>{{ post.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <p v-if="!posts || !posts.length">Todavía no hay noticias en esta categoría.</p>
  </div>
</template>
