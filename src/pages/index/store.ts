import Vuex from 'vuex';


const store = new Vuex.Store({
    state: {
        count: 0, // 一个示例状态,
        AccountStatus: false,
        AccountData: {},
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        setAccountStatus(state, data:boolean) {
            state.AccountStatus = data;
        },
        setAccountData(state, data:JSON) {
            state.AccountData = data;
        },
    },
});

export default store;