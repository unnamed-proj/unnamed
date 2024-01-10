import Vuex from 'vuex';


const store = new Vuex.Store({
    state: {
        AccountStatus: false,
        AccountData: {},
    },
    mutations: {
        setAccountStatus(state, data:boolean) {
            state.AccountStatus = data;
        },
        setAccountData(state, data:JSON) {
            state.AccountData = data;
        },
    },
});

export default store;