export default {
    namespaced: true,
    state: {
        search_condition:[],
        disease_list:[]
    },
    mutations: {
        search_condition: (state: any, search_condition: any[]) => {
            // console.log(1111111111111,search_condition);
            state.search_condition = search_condition
        },
        disease_list: (state: any, disease_list: any[]) => {
            state.disease_list = disease_list
        }
    },
    actions: {
    },
}