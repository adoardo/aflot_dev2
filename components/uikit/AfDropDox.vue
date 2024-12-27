<template>
  <div class="tag-input" style="margin-top: 10px">
    <div class="tag-input__label">{{ title }}</div>
    <div class="tag-input__list">
      <div class="tag-input__item" v-for="(tag, index) in modelValue" :key="index">
        {{ tag }}
        <button class="tag-input__delete" @click="removeTag(index)">
          <img src="assets/img/resume/close.svg" alt="delete"/>
        </button>
      </div>
      <div class="tag-input__add" @click="toggleDropdown" v-if="canAddMoreTags">
        <span> + </span>
      </div>
      <div v-if="showDropdown" class="dropdown-menu">
        <div class="dm-search" placeholder="Поиск...">
          <input v-model="searchInput" @keyup="getLength"/>
        </div>
        <div
            class="dropdown-item"
            v-for="option in availableOptions"
            :key="option"
            @click="selectOption(option)"
        >
          {{ option }}
        </div>
          <div
          class="dropdown-button"
          @click="showModal = true"
          >
          Другое
        </div>
      </div>
    </div>
    <div class="input-error" v-if="error">
      <span>Пожалуйста, заполните поле</span>
    </div>
  </div>
  <div @click="outsideClick" v-if="showModal" class="other-modal-bg">
    <div  class="other-modal">
        <div class="modal-content">
          <span class="close" @click="showModal = false">&times;</span>
          <input class="modal-input" v-model="inputValue" placeholder="Введите значение" />
  
          <button class="modal-button" @click="inputValue ? handleSubmit(inputValue) : null">Добавить</button>
        </div>
      </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits, ref, computed} from "vue";


const props = defineProps({
  myInput: '',
  modelValue: { 
    type:Array,
    default:[],
  },
  optionsList: { 
    type:Array,
    default:[],
  },
  optionsListIds:  { 
    type:Array,
    default:[],
  },
  title: {
    type: String,
    default: "Должность, которую рассматриваете (выбор из списка)",
  },
  single: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
const showDropdown = ref(false);

const showModal = ref(false)
const inputValue = ref('')

function outsideClick(e) {
  if(e.target.classList.contains('other-modal-bg')) {
    showModal.value = false
  }
}

function handleSubmit(option) {
  const tagValue = props.single ? [option] : [...props.modelValue, option];
  emit("update:modelValue", tagValue);
  inputValue.value = ''
  showModal.value = false
  toggleDropdown()
}

const availableOptions = computed(() =>
    props.optionsList.filter((x) => {
      const p1 = !props.modelValue.includes(x);
      const p2 = x.trim().toLowerCase().includes(searchInput.value.trim().toLowerCase());
      return (p1 && p2);
    })
);
const canAddMoreTags = computed(() => {
  return props.single ? props.modelValue.length === 0 : true;
});

function removeTag(index) {
  const updatedTags = [...props.modelValue];
  updatedTags.splice(index, 1);
  emit("update:modelValue", updatedTags);
}

function toggleDropdown() {
  if (canAddMoreTags.value) {
    showDropdown.value = !showDropdown.value;
  }
}

function selectOption(option) {
  const newModelValue = props.single ? [option] : [...props.modelValue, option];
  emit("update:modelValue", newModelValue);
  showDropdown.value = false;
}

const searchInput = ref('');

function getLength() {
  console.log(searchInput.value);
  //props.optionsList.filter((x) => props.modelValue.includes(searchInput.value)})
}


// $(function(){
//
// });

</script>

<style scoped lang="scss">
.tag-input__list {
  position: relative;
}

.tag-input__delete {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 5px;
}

.dropdown-menu {
  top: calc(100% + 10px);
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 100;
  max-height: 325px;
  overflow: auto;
}

.dropdown-item {
  padding: 8px 10px;
  cursor: pointer;

  &:hover {
    background-color: #3b45a9;
    color: white;
  }
}

.dropdown-button {
  display: inline-block;
  box-shadow: 0px 0px 1px 1px #d5d7ef;
  margin: 10px;
  padding: 3px 5px;
  font-size: 15px;
  text-align: center;
  line-height: 1.6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.custom-tag {
  width: 100%;
  max-width: 300px;

  .tag-input__list {
    font-weight: 400;
    border: none;
    padding: 0;
    font-size: 16px;
    font-family: "Myriad Pro", sans-serif;
  }
}

.tag-input {
  position: relative;
  .input-error {
    position: absolute;
    left: 0px;
    background: #ffdbdb;
    top: 61px;
    width: calc(100% - 20px);
    text-align: center;
    padding: 10px;
    font-size: 14px;
    z-index: 1;
  }
  label {
    text {
      color: rgb(221, 32, 32);
    }
  }
}
.tag-input {
  input {
    border-color: rgb(221, 32, 32);
  }
}
.other-modal {
  position: absolute;
  top: 50%;
  left: 40%;
  width: auto;
  height: auto;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 300px;
  height: 120px;
  text-align: center;
  padding: 20px;
}

.close {
  position: absolute;
  top: 1px;
  right: 1px;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
}

.modal-button {
  margin-top: 10px;
  padding: 1px 5px;
  font-size: 15px;
  width: 30%;
  text-align: center;
  line-height: 1.6;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-input {
  width: 90%;
  height: 30px;
  outline: black;
  padding: 0 8px;
}

.other-modal-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 150;
}
</style>
