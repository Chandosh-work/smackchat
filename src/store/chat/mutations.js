import Vue from 'vue';

export function setUserDetails(state, payload) {
    state.userDetails = payload;
}

export function addUser(state, payload) {
    Vue.set(state.users, payload.userId, payload.userDetails);
}

export function updateUser(state, payload) {
    Object.assign(state.users[payload.userId], payload.userDetails) ;
}

export function addMessage(state, payload) {
    Vue.set(state.messages, payload.messageId, payload.messageDetails);
}

export function clearMessages(state, payload) {
    state.messages = {};
}

export function setTab(state, payload) {
    state.tab = payload;
}

