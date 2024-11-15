<script setup lang="ts">
import 'swiper/css'
</script>

<template>
  <section class="see-also">
    <div class="container">
        <h2>Другие экскурсии на Пхукете</h2>
        <Swiper 
            :spaceBetween="10"
            :slidesPerView="3"
        >
            <SwiperSlide
                v-for="(key, index) in 8"
                class="excursion__item"
            >
                <div class="excursion__item-inner mock-card">
                    Экскурсия {{ index + 1 }}
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
.mock-card {
    width: 200px;
    height: 300px;
    border: 1px solid var(--color-border-lliac-100);
}
</style>