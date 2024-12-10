<template>
  <NuxtLink v-if="card" :to="`/resume/${card.id}`">
    <div class="vak-item">
      <div class="vak-top">
        <div class="vak-info">
          <div class="vak-title-top">
            <h3 class="vak-title">
              {{ card.patronymic ? card.patronymic : "" }} {{ card.first_name }}
              {{ card.last_name }}
              <img src="assets/img/vak/icon.svg" alt="image" />
            </h3>
            <img src="assets/img/vak/logo.png" alt="image" class="vak-logo" />
          </div>

          <div class="vak-dop">
            <NuxtLink to="/" class="vak-dop-link">
              <img src="assets/img/vak/city.svg" alt="image" />
              <span>{{ card.patronymic ? card.patronymic : "" }}</span>
            </NuxtLink>
            <!-- <NuxtLink to="/" class="vak-dop-link">
              <img src="assets/img/vak/ship.svg" alt="image" />
              <span>{{ card.vacancies.ship_name }}</span>
            </NuxtLink> -->
          </div>
        </div>
      </div>
      <!-- <div class="vak-bottom">
        <div class="vak-bottom-item">
          <div class="vak-subtitle">Зарплата:</div>
          <div class="vak-text">{{ card.vacancies.salary }}</div>
        </div>
        <div class="vak-bottom-item">
          <div class="vak-subtitle">Дата посадки:</div>
          <div class="vak-text">{{ card.vacancies.date_of_departure }}</div>
        </div>
        <div class="vak-bottom-item">
          <div class="vak-subtitle">Длит-ть контракта:</div>
          <div class="vak-text">{{ card.vacancies.contract_duration }}</div>
        </div>
      </div> -->
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  card: {
    first_name: "",
    id: "",
    last_name: "",
    patronymic: "",
  },
});
</script>

<style lang="scss" scoped></style>
