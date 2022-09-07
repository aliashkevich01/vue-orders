<template>
  <div class="wrapper-top" @click="handleClick" v-bind:id="props.idx">
    <order-head
      :date="firstDelivery.date"
      :packageName="packageName"
      :calories="packageCalories"
    />
    <progress-bar
      :firstDate="firstDelivery.date"
      :lastDate="lastDelivery.date"
    />
    <div class="main-info">
      <div class="left-block">
        <p>
          {{ new Date().getDate() }}
        </p>
        {{ MONTHS[new Date().getMonth()].slice(0, 3) }}
      </div>
      <div class="right-block">
        <p>
          Ближайший день доставки - в
          <span class="blue">{{
            DAYS[new Date(Date.parse(firstDelivery.date)).getDay()]
          }}</span>
        </p>
        <p>{{ lastDelivery.interval }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const { deliveries, packageName, packageCalories } = props.item.item;
const firstDelivery = deliveries[0];
const lastDelivery = deliveries[deliveries.length - 1];
import { MONTHS, DAYS } from "../constants/index.js";
import OrderHead from "./OrderHead.vue";
import ProgressBar from "../components/ProgressBar.vue";
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
  margin: 10px 0;
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
.main-info {
  margin-top: 10px;
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
