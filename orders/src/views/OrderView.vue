<!-- eslint-disable vue/no-unused-components -->
<template>
  <main class="info-main">
    <order-head
      :date="this.products[this.$route.params.id].deliveries[0].date"
      :packageName="this.products[this.$route.params.id].packageName"
      :calories="this.products[this.$route.params.id].packageCalories"
    />
    <progress-bar
      :date="this.products[this.$route.params.id].deliveries[0].date"
    />
    <h4 class="deliveries-header">Доставки</h4>
    <div
      class="deliveries-wrapper"
      v-for="item in this.products[this.$route.params.id].deliveries"
      :key="item.id"
    >
      <delivery-info :date="item.date" :interval="item.interval" />
    </div>
    <div class="ux-block" @click="addOrder">
      <p>Дублировать</p>
      <add-icon />
    </div>
    <div class="ux-block" @click="removeOrder">
      <p>Удалить</p>
      <delete-icon />
    </div>
  </main>
</template>
<script>
import OrderHead from "../components/OrderHead.vue";
import DeliveryInfo from "../components/DeliveryInfo.vue";
import DeleteIcon from "../components/DeleteIcon.vue";
import AddIcon from "../components/AddIcon.vue";
import ProgressBar from "../components/ProgressBar.vue";
export default {
  components: { OrderHead, DeliveryInfo, DeleteIcon, AddIcon, ProgressBar },
  data() {
    return {
      products: this.$store.state.all,
    };
  },
  computed: {
    getList() {
      return this.$store.state.all;
    },
  },
  methods: {
    addOrder() {
      this.products.push(this.products[this.$route.params.id]);
      this.$store.commit("setProducts", this.products);
      this.$router.back();
    },
    removeOrder() {
      const result = [];
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id !== this.products[this.$route.params.id].id) {
          result.push(this.products[i]);
          this.$store.commit("setProducts", result);
        }
      }
      this.$router.back();
    },
  },
  mounted() {
    this.products = this.$store.state.all;
    console.log(this.products);
  },
};
</script>
<style scoped>
.info-main {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 20vh auto;
}
.deliveries-header {
  margin: 30px;
  font-weight: 700;
  font-size: 17px;
  line-height: 100%;
}
.deliveries-wrapper {
  margin: 35px 0;
}
.ux-block {
  background-color: #f5f5f5;
  padding: 17px;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
