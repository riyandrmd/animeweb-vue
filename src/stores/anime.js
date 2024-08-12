import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAnimeStore = defineStore('anime', () => {
  const animeNow = reactive([])

  const getAnimeNow = async () => {
    await axios.get('https://api.jikan.moe/v4/seasons/now').then((res) => {
      animeNow.splice(0, animeNow.length, ...res.data.data)
    })
  }

  return { animeNow, getAnimeNow }
})
