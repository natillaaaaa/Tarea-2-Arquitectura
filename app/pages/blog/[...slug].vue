<script setup>
const route = useRoute()

const { data: article } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado' })
}

const { data: surround } = await useAsyncData(`surround-${route.path}`, () => {
  return queryCollectionItemSurroundings('blog', route.path)
    .where('category', '=', article.value?.category)
    .order('date', 'DESC')
})
</script>

<template>
  <article class="container">
    <p class="breadcrumb">
      <NuxtLink to="/blog">Inicio</NuxtLink> /
      <NuxtLink :to="`/blog/${article.category}`" class="capitalize">{{ article.category }}</NuxtLink>
    </p>

    <img v-if="article.image" :src="article.image" alt="" class="cover-hero" />

    <h1>{{ article.title }}</h1>
    <p class="post-date">{{ new Date(article.date).toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
    <p>{{ article.description }}</p>

    <ContentRenderer :value="article" />

    <Author :author="article.author" />

    <PrevNext :prev="surround?.[0]" :next="surround?.[1]" />
  </article>
</template>
