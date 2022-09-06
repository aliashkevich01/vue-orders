<template>
  <section class="delivery-info">
    <delivery-icon />
    <p>{{ props.date }}</p>
    <p>{{ props.interval }}</p>
    <arrow-icon />
  </section>
</template>
<script setup>
const props = defineProps({
  date: String,
  interval: String,
});
</script>
<script>
import DeliveryIcon from "../components/DeliveryIcon.vue";
import ArrowIcon from "../components/ArrowIcon.vue";
export default {
  components: { DeliveryIcon, ArrowIcon },
};
</script>
<style scoped>
.delivery-info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
