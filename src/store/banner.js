import { defineStore } from "pinia";
import { ref } from "vue";

export const useBannerStore = defineStore("banner", () => {
  const banners = ref([]);

  const getBanners = async () => {
    banners.value = [];
  };

  return {
    banners,
    getBanners,
  };
});
