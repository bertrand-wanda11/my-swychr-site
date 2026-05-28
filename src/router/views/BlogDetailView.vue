<template>
  <div class="blog-post-container" v-if="article">
    <!-- Banner Image -->
    <img :src="article.image.url" alt="Article Banner" class="banner-img" />
    
    <!-- Title -->
    <h1>{{ article.title }}</h1>
    <p class="meta">Published on: {{ article.publishedDate }} | Read time: {{ article.readTime }}</p>
    
    <!-- Body Content -->
    <div class="content" v-html="article.content.html"></div>
  </div>
  <div v-else class="loading">
    <p>Loading article details...</p>
  </div>
</template>

<script>
export default {
  name: 'BlogDetailView',
  data() {
    return {
      article: null
    };
  },
  mounted() {
    this.fetchArticleData();
  },
  methods: {
    async fetchArticleData() {
      // 1. Grab the slug directly out of the browser URL bar
      const currentSlug = this.$route.params.slug;
      
      // 2. Fetch data from your Hygraph API Endpoint
      const endpoint = "https://eu-west-2.cdn.hygraph.com/content/cmpp80hgg017m07waow6ie7iw/master"; 
      const query = `
        query GetArticleBySlug($slug: String!) {
          article(where: { slug: $slug }) {
            title
            publishedDate
            readTime
            content { html }
            image { url }
          }
        }
      `;
      
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, variables: { slug: currentSlug } })
        });
        const result = await response.json();
        this.article = result.data.article;
      } catch (error) {
        console.error("Error pulling article from Hygraph:", error);
      }
    }
  }
}
</script>

<style scoped>
.blog-post-container { max-width: 800px; margin: 0 auto; padding: 2rem; }
.banner-img { width: 100%; height: auto; border-radius: 8px; }
h1 { margin-top: 1.5rem; font-size: 2.5rem; }
.meta { color: #666; font-style: italic; }
.content { margin-top: 2rem; line-height: 1.8; font-size: 1.1rem; }
</style>