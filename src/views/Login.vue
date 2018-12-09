<template>
  <div class="hero is-fullheight is-medium is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="card is-rounded">
            <div class="card-content">
              <h2 class="title has-text-black">Login</h2>
              <b-input
                type="email"
                :value="email"
                placeholder="Email"
              />
              <b-input
                type="password"
                :value="password"
                placeholder="Password"
              />
              <div class="control">
                <b-button text="Login" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>
