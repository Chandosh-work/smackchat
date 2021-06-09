<template>
  <q-page 
    ref="pageChat" 
    class="flex column page-chat">
     <q-banner v-if="!users[$route.params.otherUserId].online"
      class="text-center bg-grey-4 fixed-top">
       {{users[$route.params.otherUserId].name}} is offline.
    </q-banner>
    <div
    :class="{'invisible': !showMessages}"
     class="col q-pa-md column justify-end">
     <q-chat-message 
        v-for="(message, key) in messages"
        :key="key"
        :name="message.from === 'me' ? userDetails.name :  users[$route.params.otherUserId].name"
        :text="[message.text]"
        :bgColor="message.from == 'me' ? 'white' : 'light-green-2'"
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
              dense
              ref="newMessage"
              @keyup.enter="sendMessage">

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
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      newMessage: '',
      showMessages: false
    }
  },
  computed: {
    ...mapState('store', ['messages', 'userDetails', 'users']),
    
  },
  methods: {
    ...mapActions('store', ['firebaseGetMessages', 'firebaseStopGettingMessages', 'firebaseSendMessage']),
     sendMessage() {
        this.firebaseSendMessage({
         message: {
          text: this.newMessage,
          from: 'me'
         },
         otherUserId: this.$route.params.otherUserId
        })
        this.clearMessage();
     },
     clearMessage() {
      this.newMessage = '';
      this.$refs.newMessage.focus();
     },
     scrollToBottom() {
       let pageChat = this.$refs.pageChat.$el;
       setTimeout(() => {
         window.scrollTo(0, pageChat.scrollHeight)
       }, 20);
       
     }
  },
  watch: {
    messages: function(val) {
      if(Object.keys(val).length) {
        this.scrollToBottom();
        setTimeout(()=> {
          this.showMessages = true;
        }, 200)
      }
    }
  },
  mounted() {
     this.firebaseGetMessages(this.$route.params.otherUserId)
  },
  destroyed() {
    this.firebaseStopGettingMessages();
  }
}
</script>

<style lang="scss" scoped>
  .page-chat {
    background-color: #e2dfd5;
    &:after {
      content: '';
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 0;
      opacity: 0.1;
      background-image:radial-gradient(circle at 100% 150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 0    150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, white 10%, silver 10%, silver 23%, white 23%, white 30%, silver 30%, silver 43%, white 43%, white 50%, silver 50%, silver 63%, white 63%, white 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent), radial-gradient(circle at 0    50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent);
      background-size: 100px 50px;
    }
    .q-banner {
      top: 50px;
      z-index: 2;
      opacity: 0.8;
    }
  }
</style>
