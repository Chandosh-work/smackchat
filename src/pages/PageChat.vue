<template>
  <q-page class="flex column">
     <q-banner class="text-center bg-grey-4">
       User is offline.
    </q-banner>
    <div class="col q-pa-md column justify-end">
     <q-chat-message 
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false">
     </q-chat-message>
     
    </div>
     <q-footer elevated>
        <q-toolbar>
          <q-form class="full-width">
            <q-input
              bg-color="white"
              class="full-width"
              outlined
              rounded
              v-model="newMessage"
              label="Message"
              dense>

              <template v-slot:after>
                <q-btn
                  round
                  dense
                  flat
                  @click="sendMessage"
                  color="white"
                  icon="send">
                </q-btn>
              </template>
            </q-input>
          </q-form>
        </q-toolbar>
      </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: [
        {
          text: 'Hey Jim, how are you?',
          from: 'me'
        },
        {
          text: 'Good  Danny. How are you?',
          from: 'them'
        },
        {
          text: 'Pretty good',
          from: 'me'
        }

      ]
    }
  },
  methods: {
     sendMessage() {
       this.messages.push({
         text: this.newMessage,
         from: 'me'
        });
        this.newMessage = '';
     }
   }
}
</script>
