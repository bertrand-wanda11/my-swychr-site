<template>
  <div v-if="article" class="blog-container">
    
    <header class="article-header">
      <h1 class="main-title">{{ article.title }}</h1>
      <div class="article-meta">
        <span>{{ article.publishedDate }}</span>
        <span class="divider">•</span>
        <span>{{ article.readTime }}</span>
      </div>
      <div class="featured-image-wrapper">
    <img :src="article.image?.url" alt="Featured Image" class="featured-image" />
</div>
    </header>

    <article class="article-body">
      <div v-for="block in article.content" :key="block.id" class="content-block">
        
        <div v-if="block.__typename === 'ArticleParagraph'" v-html="block.paragraphText?.html" class="paragraph-text"></div>
        
        <div v-else-if="block.__typename === 'ArticleImageSection'" class="inline-image-wrapper">
          <img :src="block.image?.url" class="inline-content-img" />
        </div>
        
        <div v-else-if="block.__typename === 'ArticleProductCallout'" class="question-callout-box">
          <h3 class="section-heading">{{ block.headline }}</h3>
          <div v-html="block.calloutText?.html" class="callout-body-text"></div>
        </div>

      </div>
    </article>

  </div>
  <div v-else class="loading-wrapper">
    <div class="spinner"></div>
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
/* Main Content Wrapper Container */
.blog-container {
  max-width: 680px; /* Golden standard width for optimal reading line-length */
  margin: 0 auto;
  padding: 60px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #2d3748;
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}

/* Header Text Alignments */
.article-header {
  margin-bottom: 40px;
  text-align: left; /* Keep metadata and main title aligned cleanly left */
}

.main-title {
  font-size: 2.6rem;
  font-weight: 800;
  color: #1a202c;
  line-height: 1.25;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

/* Metadata formatting */
.article-meta {
  font-size: 0.95rem;
  color: #718096;
  font-weight: 500;
  margin-bottom: 30px;
}
.divider {
  margin: 0 10px;
  color: #cbd5e0;
}

/* Premium Image Frame Scaling */

.featured-image-wrapper {
  display: flex;
  justify-content: center; /* Centers the image */
  margin: 20px 0;         /* Adds space above and below */
}


.featured-img {
  width: 100%; /* 👈 Change 100% to a small fixed size like this */
  height: auto; /* 👈 Keeps the aspect ratio from breaking */
  object-fit: contain; /* Prevents logo cropping while sizing nicely */
  background-color: #f7fafc; /* Adds subtle frame around transparent imagery */
  display: block;
}

/* Article Body Typography Alignment */
.article-body {
  text-align: left; /* Restores comfortable text line alignment */
}

.content-block {
  margin-bottom: 32px;
}

/* Paragraph spacing rules */
.paragraph-text {
  font-size: 1.15rem;
  color: #2d3748;
  letter-spacing: -0.003em;
}

/* Headings Configuration (Your Questions) */
.section-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  line-height: 1.3;
  margin-top: 40px;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

/* Subtle frame for your questions & answers to keep them distinct */
.question-callout-box {
  background: #ffffff;
  border-left: 4px solid #635bff; /* SwyChr branded color accent line */
  padding: 8px 0 8px 24px;
  margin: 35px 0;
}

.callout-body-text {
  font-size: 1.15rem;
  color: #4a5568;
}

/* Deep selection to safely style rich text raw HTML nodes natively */
:deep(p) {
  margin-bottom: 20px;
}
:deep(a) {
  color: #635bff;
  text-decoration: none;
  font-weight: 600;
}
:deep(a:hover) {
  text-decoration: underline;
}

/* Loading Layout */
.loading-wrapper {
  text-align: center;
  padding: 100px 20px;
  color: #718096;
  font-size: 1.1rem;
}

/* Responsive UI Overrides for Mobile Web Browsers */
@media (max-width: 640px) {
  .main-title {
    font-size: 1.95rem;
  }
  .blog-container {
    padding: 30px 16px;
  }
  .section-heading {
    font-size: 1.35rem;
  }
}
</style>