<template>
  <div class="vacancy">
    <div class="vacancy__label-top">
      <div class="vacancy__label">
        <span class="vacancy-label-name"
          >{{ data.first_name }} {{ data.last_name }} {{ data.patronymic }}</span
        >
        <img src="assets/img/responses/fav.png" alt="" />
      </div>
      <div class="vacancy__logo">
        <img src="assets/img/search/man.png" alt="logo" />
      </div>
    </div>
    <div class="vacancy__meta">
      <div class="vacancy__info">
        <div class="vi-item">
          <div class="vi-label">Минимальная зарплата:</div>
          <strong>2000 - 2300 USD</strong>
        </div>
        <div class="vi-item">
          <div class="vi-label">Местонахождение:</div>
          {{ data.country }}, {{ data.region }}
        </div>
        <div class="vi-item" v-if="data.worked.length != 0">
          <div class="vi-label">Работал на судах:</div>
          <template v-if="data.worked.length > 3">
            <span
              v-for="(item, index) in data.worked.slice(0, 3)"
              :key="'worked-' + index"
              >{{ item.worked }}</span
            >
            <span class="res-blue-text" @click="showAllWorked = !showAllWorked"
              >еще {{ data.worked.length - 3 }}</span
            >
            <span v-if="showAllWorked">
              <span
                v-for="(item, index) in data.worked.slice(3)"
                :key="'worked-' + (index + 3)"
                >, {{ item.worked }}</span
              >
            </span>
          </template>
          <template v-else>
            <span v-for="(item, index) in data.worked" :key="'worked-' + index">{{
              item.worked
            }}</span>
          </template>
        </div>
      </div>
    </div>

    <div class="vacancy__buttons">
      <div class="vacancy__button blue">
        <img src="assets/img/dop-page/blue-info.svg" alt="" />Подробнее о моряке
      </div>
      <div class="vacancy__button red">
        <img src="assets/img/responses/more.png" alt="" />Предложить вакансию
      </div>
    </div>

    <div class="vacancy__date new">ищу работу</div>
  </div>
</template>

<script setup>
let showAllWorked = false;
const props = defineProps({
  data: {},
});
</script>

<style lang="scss" scoped></style>
