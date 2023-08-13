<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginItem",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const apiBaseUrl = "http://localhost:8080"; // Ganti dengan URL sesuai dengan backend Anda

      // Panggil endpoint /sanctum/csrf-cookie terlebih dahulu
      axios.get(`${apiBaseUrl}/sanctum/csrf-cookie`).then(() => {
        const formData = {
          email: this.email,
          password: this.password,
        };

        axios
          .post(`${apiBaseUrl}/api/login`, formData)
          .then((response) => {
            if (response.data.access_token) {
              localStorage.setItem("token", response.data.access_token);
              this.$router.push("/home");
            }
          })
          .catch((error) => {
            console.error("Login error:", error);
          });
      });
    },
  },
};
</script>

<style>
/* ... gaya tampilan seperti sebelumnya ... */
</style>
