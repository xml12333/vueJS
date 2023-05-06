<script >
import Post from "./components/Post.vue";
export default {
  name: "App",
  data() {
    return {
      article_list: [],
    };
  },
  components: {
    Post,
  },
  methods: {
    getArticle() {
      const article_titles = [
        "Article1",
        "Article2",
        "Article3",
        "Article4",
        "Article5",
        "Article6",
        "Article7",
        "Article8",
        "Article4",
        "Article5",
        "Article6",
        "Article7",
        "Article8",
      ];
      const article = [];
      for (let i = 0; i < 10; i++) {
        article.push({
          title:
            article_titles[Math.floor(Math.random() * article_titles.length)],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit natus facilis eius animi tempora qui eligendi pariatur minus quas repellendus perspiciatis earum eaque id, repudiandae repellat deleniti esse vero veniam nam doloremque, aut explicabo.",
        });
      }
      return article;
    },
    handleScroll() {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 50
      ) {
        this.article_list = [...this.article_list, ...this.getArticle()];
      }
    },
  },
  mounted() {
    this.article_list = this.getArticle();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <div>
    <header>
      <h1>Infinite Feed</h1>
    </header>
    <main>
      <Post v-for="(article, i) in article_list" :key="i" :article="article" />
    </main>
  </div>
</template>


