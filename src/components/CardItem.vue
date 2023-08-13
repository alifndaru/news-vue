<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">{{ news.title }}</h3>
    </div>
    <div class="card-body">
      <p>Description: {{ news.description }}</p>
      <p>Published At: {{ news.created_at }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f5f5f5;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.card-title {
  margin: 0;
}
</style>
