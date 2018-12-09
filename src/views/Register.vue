<template>
  <div class="hero is-fullheight is-medium is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="card is-rounded">
            <div class="card-content">
              <h2 class="title has-text-black">Register</h2>
              <b-input type="email" v-model="email" placeholder="Email"/>
              <b-input type="password" v-model="password" placeholder="Password"/>
              <b-input type="text" v-model="username" placeholder="Name"/>
              <div class="control">
                <b-button text="Register" @click="registerAction"/>
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
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    username: ''
  }),
  components: {
    BInput,
    BButton
  },
  methods: {
    ...mapActions('user', ['register']),
    registerAction() {
      const { email, password, username } = this;
      this.register({ email, password, name: username });
    }
  }
};
</script>
