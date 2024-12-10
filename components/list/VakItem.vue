<template>
  <NuxtLink
    v-if="card && card.company_info"
    :to="`/company/${card.company_info.id}/vacancy/${card.vacancies.id}`"
  >
    <div class="vak-item">
      <div class="vak-top">
        <div class="vak-info">
          <div class="vak-title-top">
            <h3 class="vak-title">
              {{ card.vacancies.position }}
              <img src="assets/img/vak/icon.svg" alt="image" />
            </h3>
            <img src="assets/img/vak/logo.png" alt="image" class="vak-logo" />
          </div>

          <div class="vak-dop">
            <NuxtLink to="/" class="vak-dop-link">
              <img src="assets/img/vak/city.svg" alt="image" /><span>{{
                card.company_info.company_name
              }}</span>
            </NuxtLink>
            <NuxtLink to="/" class="vak-dop-link">
              <img src="assets/img/vak/ship.svg" alt="image" />
              <span>{{ card.vacancies.ship_name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="vak-bottom">
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
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  card: {
    company_info: {
      company_name: "",
    },
    vacancies: {
      contract_duration: "",
      date_of_departure: "",
      id: "",
      position: "",
      salary: "",
      ship_name: "",
    },
  },
});
</script>

<style lang="scss" scoped></style>
