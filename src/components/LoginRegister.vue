<template>
    <div>
        <q-form @submit="submitForm">
            <q-input v-if="tab==='register'"
              dense
              class="q-pb-md"
              outlined
              v-model="formData.name"
              required
              label="Name" />
            <q-input
              dense
              class="q-pb-md"
              type="email"
              outlined
              v-model="formData.email"
              required
              label="Email" />
            <q-input
              dense
              class="q-pb-md"
              type="password"
              outlined
              v-model="formData.password"
              required
              label="Password" />
            <div class="row justify-center">
                <q-btn 
                dense
                color="primary"
                type="submit"
                :label="tab" />
            </div>
        </q-form>


    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    computed: {
    ...mapState('store', ['tab']),
    },
    methods: {
        ...mapActions('store', ['registeUser', 'loginUser']),
        submitForm() {
            if(this.tab === 'login') {
                this.loginUser(this.formData);
            } else {
              this.registeUser(this.formData);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>