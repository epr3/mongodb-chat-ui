<template>
  <div class="hero is-fullheight is-medium is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="card is-rounded">
            <div class="card-content">
              <h2 class="title has-text-black">Login</h2>
              <b-input type="email" v-model="email" placeholder="Email"/>
              <b-input type="password" v-model="password" placeholder="Password"/>
              <div class="control">
                <a @click="$router.push('/register')">
                  Create an account?
                </a>
              </div>
              <div class="control">
                <b-button text="Login" @click="loginAction" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import BInput from '../components/Input.vue';
import BButton from '../components/Button.vue';
export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  components: {
    BInput,
    BButton
  },
  methods: {
    ...mapActions('user', ['login']),
    loginAction() {
      const { email, password } = this;
      this.login({ email, password });
    }
  }
};
</script>
