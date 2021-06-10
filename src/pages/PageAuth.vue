<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
        <q-tabs
          @click="setSelectedTab(selectedTab)"
          v-model="selectedTab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator>
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="selectedTab" animated>
          <q-tab-panel name="login">
            <login-register  />
          </q-tab-panel>

          <q-tab-panel name="register">
            <login-register />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data () {
    return {
      selectedTab: ''
    }
  }, 
  created() {
    this.selectedTab = this.tab;
  },
  components: {
    'login-register': require('components/LoginRegister.vue').default
  },
  computed: {
    ...mapState('store',['tab'])
  },
  methods: {
     ...mapActions('store',['setSelectedTab'])
  }
}
</script>
