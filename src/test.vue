<template>
  <Swiper slides-per-view="auto" :grab-cursor="true" :loop="true">
    <SwiperSlide v-for="item in banners">
      <img :src="item.pic" class="banner-image" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { useBannerStore } from "@/store/banner";
import { storeToRefs } from "pinia";
import "swiper/css";
import { onMounted } from "vue";

const { banners } = storeToRefs(useBannerStore());
const { getBanners } = useBannerStore();
onMounted(() => {
  initData();
});

const initData = () => {
  getBanners();
};
</script>
<style scoped lang="scss">
.banner-image {
  width: 480px;
  height: 150px;
  border-radius: 4px;
}

.swiper-slide {
  width: auto;
  margin-right: 20px;
}
</style>
