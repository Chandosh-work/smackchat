<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
           v-go-back.single
          icon="arrow_back"
          label="Back"
          flat
          dense
          />
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

          <!-- <q-btn
          v-if="!userDetails.userId"
          to="/auth"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          flat
          no-caps
          dense
          label="Login"
          /> -->
          <q-btn
           v-if="userDetails.userId"
          @click="logoutUser"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          flat
          no-caps
          dense>
            Logout<br>{{userDetails.name}}
          </q-btn>
        

      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data () {
    return {
 
    }
  },
  computed: {
    ...mapState('store', ['userDetails', 'users', 'tab']),
    title() {
        const currentPath = this.$route.fullPath;
        if(currentPath === "/") {
          return 'Smack Chat';
        } else if(currentPath.includes('/chat')) {
            return this.users[this.$route.params.otherUserId].name;
        } else if(currentPath === '/auth'){
            return this.tab=== 'login' ? 'Login': 'Register';
        }
    },
  }, 
  methods: {
    ...mapActions('store', ['logoutUser'])
  }
}
</script>

<style lang="scss" scoped>
  .q-toolbar {
    .q-btn {
      line-height: 1.2;
    }
  }
</style>