<script setup>
import { storeToRefs } from "pinia";
import { useAnimeStore } from "../stores/anime";
import { onMounted } from "vue";

const { animeNow } = storeToRefs(useAnimeStore());
const { getAnimeNow } = useAnimeStore();

onMounted(() => {
  getAnimeNow();
});
</script>

<template>
  <div class="anime-list-container d-flex overflow-auto p-2 gap-4">
    <div
      class="anime-list flex-shrink-0"
      v-for="anime in animeNow"
      :key="anime.mal_id"
    >
      <div class="card anime-card" :title="anime.title">
        <div class="image bg-primary">
          <img
            :src="anime.images.jpg.image_url"
            :alt="anime.title"
            class="card-img-top"
          />
        </div>
        <div class="card-body p-0">
          <h5 class="card-title text-truncate">{{ anime.title }}</h5>
          <p class="card-text rating">
            ⭐ {{ anime.score ? anime.score : "N/A" }}/10
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.anime-list-container::-webkit-scrollbar {
  display: none;
}

.anime-card {
  width: 200px;
  border: none;
  background-color: transparent;
  text-align: left;
  box-sizing: border-box;
}

.anime-card .image {
  height: 300px;
  overflow: hidden;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.anime-card .image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease;
}

.anime-card .image:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.anime-card .card-title {
  font-size: 1.2rem;
  color: #333;
}

.anime-card .rating {
  font-size: 0.9rem;
  margin: 0;
}
</style>
