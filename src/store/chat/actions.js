import { firebaseAuth, firebaseDb } from 'boot/firebase';

let messagesRef;

export function registeUser({}, payload) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
     .then( response => {
         let userId = firebaseAuth.currentUser.uid;
         firebaseDb.ref('users/' + userId).set({
            name: payload.name,
            email: payload.email,
            online: true 
         });
     })
     .catch(error => {
        console.log(error.message);
    });
}

export function loginUser({}, payload) {
    firebaseAuth.signInWithEmailAndPassword (payload.email, payload.password)
     .then( response => {
        console.log(response);
     })
     .catch(error => {
        console.log(error.message);
     });
}

export function logoutUser({}, payload) {
    firebaseAuth.signOut();
}

export function handleAuthStateChanged({commit, dispatch, state}) {
    firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
        // User is logged In
            let userId = firebaseAuth.currentUser.uid;
            firebaseDb.ref('users/' + userId).once('value', snapshot => {
                let userDetails = snapshot.val();
                commit('setUserDetails', {
                    name: userDetails.name,
                    email: userDetails.email,
                    userId: userId
                });
            });
            dispatch('firebaseUpdateUser', {
                userId: userId,
                updates: {
                    online: true
                }
            });
            if(this.$router.history.current.path !== '/') {
                this.$router.push("/");
            }
            dispatch('firebaseGetUsers');

        } else {
        // User is logged out
            dispatch('firebaseUpdateUser', {
                userId: state.userDetails.userId,
                updates: {
                    online: false
                }
            });
            commit('setUserDetails', {});
        
            if(this.$router.history.current.path !== '/auth') {
                this.$router.replace("/auth");
            }
        }
    });
}

export function firebaseUpdateUser({}, payload) {
    if(payload.userId) {
        firebaseDb.ref('users/' + payload.userId).update(payload.updates);
    }
}

export function firebaseGetUsers({commit}) {
    firebaseDb.ref('users').on('child_added', snapshot => {
        let userDetails = snapshot.val();
        let userId = snapshot.key;
        commit('addUser', {
            userId,
            userDetails
        })
    })
    firebaseDb.ref('users').on('child_changed', snapshot => {
        let userDetails = snapshot.val();
        let userId = snapshot.key;
        commit('updateUser', {
            userId,
            userDetails
        })
    })
}

export function firebaseGetMessages({commit, state}, otherUserId) {
    let userId = state.userDetails.userId;
    messagesRef = firebaseDb.ref('chats/' + userId + '/' + otherUserId);
    messagesRef.on('child_added', snapshot => {
        let messageDetails = snapshot.val();
        let messageId= snapshot.key;
       commit('addMessage', {
            messageId: messageId,
            messageDetails: messageDetails
       });
    })
}

export function firebaseStopGettingMessages({commit}) {
    if(messagesRef) {
        messagesRef.off('child_added');
        commit('clearMessages');
    }
} 

export function firebaseSendMessage({state}, payload) {
    firebaseDb.ref('chats/' + state.userDetails.userId + '/' + 
    payload.otherUserId).push(payload.message);

    payload.message.from= 'them'
    firebaseDb.ref('chats/' + payload.otherUserId + '/' + 
    state.userDetails.userId).push(payload.message);
}

export function setSelectedTab({commit}, payload) {
    console.log('payload :>> ', payload);
    commit('setTab', payload);
}
