<template>
    <div>
        <q-form @submit="submitForm">
            <q-input v-if="tab==='register'"
              class="q-pb-md"
              outlined
              v-model="formData.name"
              label="Name" />
            <q-input
              class="q-pb-md"
              type="email"
              outlined
              v-model="formData.email"
              label="Email" />
            <q-input
              class="q-pb-md"
              type="password"
              outlined
              v-model="formData.password"
              label="Password" />
            <div class="row">
                <q-space />
                <q-btn 
                color="primary"
                type="submit"
                :label="tab" />
            </div>
        </q-form>


    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['tab'],
    data() {
        return {
            formData: {
                name: '',
                email: 'chan@test.com',
                password: '123456'
            }
        }
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