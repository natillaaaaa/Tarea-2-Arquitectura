<template>
  <div class="container">
    <h1 class="site-title">Blog Nacional</h1>
    <p class="site-subtitle">Noticias de sucesos, deportes y espectáculos de Costa Rica.</p>

    <div class="search-box">
      <AppSearchInput />
    </div>

    <nav class="categorias">
      <ul>
        <li><NuxtLink to="/blog/sucesos">Sucesos</NuxtLink></li>
        <li><NuxtLink to="/blog/deportes">Deportes</NuxtLink></li>
        <li><NuxtLink to="/blog/espectaculos">Espectáculos</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>
