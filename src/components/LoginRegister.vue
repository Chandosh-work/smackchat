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
export default {
    props: ['tab'],
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submitForm() {
            if(this.tab === 'login') {

            } else {
                
            }
            console.log('Hi From Submit');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>