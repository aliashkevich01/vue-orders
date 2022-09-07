<script setup>
import { MONTHS } from "../constants/index.js";
const props = defineProps({
  date: String,
  packageName: String,
  calories: String,
});
</script>

<template>
  <div class="top">
    <h2 class="card-header">
      {{
        new Date(Date.parse(date)) > new Date()
          ? MONTHS[new Date(Date.parse(date)).getMonth()]
          : "Доставлено"
      }}
    </h2>
    <div class="top-info">
      <p class="gray">{{ props.packageName }}</p>
      <p class="calories-text">{{ props.calories }}</p>
    </div>
  </div>
</template>

<style scoped>
.card-header {
  font-weight: 700;
  font-size: 35px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 25px;
}
.gray {
  color: #b1b1b1;
  font-size: 9.75059px;
  line-height: 16px;
}
</style>
