<template>
  <div v-if="article" class="blog-detail">
    <h1>{{ article.title }}</h1>
    <p>{{ article.publishedDate }} • {{ article.readTime }}</p>
    <img :src="article.image?.url" alt="Featured Image" class="featured-img" />

    <div class="article-body">
      <div v-for="block in article.content" :key="block.id">
        
        <div v-if="block.__typename === 'ArticleParagraph'" v-html="block.paragraphText?.html"></div>
        
        <div v-else-if="block.__typename === 'ArticleImageSection'">
          <img :src="block.image?.url" class="content-section-img" />
        </div>
        
        <div v-else-if="block.__typename === 'ArticleProductCallout'" class="product-callout">
          <h3>{{ block.headline }}</h3>
          <div v-html="block.calloutText?.html"></div>
        </div>

      </div>
    </div>
  </div>
  <div v-else>
    Loading article details...
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
          articles(where: { slug: $slug }) {
            title
            publishedDate
            readTime
            content {
              __typename
              ... on ArticleParagraph {
                id
                paragraphText: text { html }
              }
              ... on ArticleImageSection {
                id
                image { url }
              }
              ... on ArticleProductCallout {
                id
                headline
                calloutText: text { html }
              }
            }
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
    
    // Check if articles array exists and has at least one item
    if (result.data && result.data.articles && result.data.articles.length > 0) {
      this.article = result.data.articles[0];
    } else {
      console.error("No article matched this slug in Hygraph");
    }
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