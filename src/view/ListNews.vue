<template>
  <div>
    <h2>List of News</h2>
    <div v-for="news in newsList" :key="news.id">
      <card-item :news="news" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardItem from '../components/CardItem.vue';

export default {
  name: "ListNews",
  components: {
    CardItem
  },
  data() {
    return {
      newsList: [],
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const response = await axios.get("http://localhost:8080/api/news", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Menggunakan token yang telah disimpan setelah login
          },
        });
        this.newsList = response.data;
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    },
  },
};
</script>
