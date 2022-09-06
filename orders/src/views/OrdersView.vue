<template>
  <main>
    <h2 class="order-header">
      Мои заказы <span class="header-gray">{{ this.products.length }}</span>
    </h2>
    <div class="order-block">
      <div
        class="wrapper"
        v-for="(item, index) in this.products"
        :key="item.id"
      >
        <order-card :item="{ item }" :idx="index" />
      </div>
    </div>
  </main>
</template>

<script>
import OrderCard from "../components/OrderCard.vue";
export default {
  components: { OrderCard },
  data() {
    return {
      products: this.$store.state.all,
    };
  },
  mounted() {
    if (history.length < 3) {
      this.$store.dispatch("getAllProducts", this.$route.params.id);
    }
    this.products = this.$store.state.all;
  },
};
</script>
<style>
.order-header {
  font-size: 22px;
  font-weight: 600;
  margin-top: 10vh;
  margin-left: 30px;
}
.order-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.wrapper {
  width: 400px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-gray {
  color: #b1b1b1;
}
</style>
