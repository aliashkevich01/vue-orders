<template>
  <section class="auth-wrap">
    <h1 class="auth-header">Добро пожаловать!</h1>
    <form class="auth-form" @submit.prevent>
      <auth-input type="text" v-model="userInfo.login" placeholder="Логин" />
      <auth-input
        type="password"
        v-model="userInfo.password"
        placeholder="Пароль"
      />
      <button @click="auth" class="submit-btn">ВОЙТИ</button>
    </form>
  </section>
</template>
<script>
import users from "../../src/clients.json";
import AuthInput from "../components/AuthInput.vue";
export default {
  components: { AuthInput },
  data() {
    return {
      userInfo: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    auth() {
      const clients = JSON.parse(JSON.stringify(users));
      for (let i = 0; i < clients.length; i++) {
        const { login, password, id } = clients[i];
        if (
          login === this.userInfo.login &&
          password === this.userInfo.password
        ) {
          this.$router.push(`/orders/${id}`);
        }
      }
    },
  },
};
</script>

<style>
.auth-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.auth-header {
  font-size: 25px;
  font-weight: bold;
  display: block;
  text-align: center;
  margin-top: 20vh;
}
.auth-form {
  margin: 45px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 12px;
}
.submit-btn {
  width: 100%;
  border-radius: 6px;
}
.submit-btn {
  margin-top: 72px;
  background: #1e6fb9;
  color: #fff;
  padding: 21px;
  border: none;
  cursor: pointer;
}
</style>
