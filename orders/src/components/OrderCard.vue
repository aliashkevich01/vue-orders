<template>
  <div class="wrapper-top" @click="handleClick" v-bind:id="props.idx">
    <order-head
      :date="delivery.date"
      :packageName="props.item.item.packageName"
      :calories="props.item.item.packageCalories"
    />
    <div class="main-info">
      <div class="left-block">
        <p>
          {{ new Date(Date.parse(delivery.date)).getDate() }}
        </p>
        {{ MONTHS[new Date(Date.parse(delivery.date)).getMonth()].slice(0, 3) }}
      </div>
      <div class="right-block">
        <p>
          Ближайший день доставки - в
          <span class="blue">{{
            DAYS[new Date(Date.parse(delivery.date)).getDay()]
          }}</span>
        </p>
        <p>{{ delivery.interval }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const delivery = props.item.item.deliveries[0];
import { MONTHS, DAYS } from "../constants/index.js";
import OrderHead from "./OrderHead.vue";
const props = defineProps({
  item: Object,
  idx: Number,
});
</script>
<script>
export default {
  methods: {
    handleClick() {
      this.$router.push(`/order/${this.idx}`);
    },
  },
};
</script>

<style scoped>
.wrapper-top {
  cursor: pointer;
}
.card-header {
  font-weight: 700;
  font-size: 35px;
}
.top,
.main-info {
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
.calories-text {
  font-weight: 700;
  font-size: 13.8133px;
  line-height: 16px;
}
.left-block {
  background-color: #1e6fb9;
  max-width: 60px;
  padding: 20px 12px;
  text-align: center;
  color: #fff;
  border-radius: 4px;
}
.blue {
  color: #1e6fb9;
}
</style>
