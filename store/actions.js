export default {
  shoppingCart({commit},payload){
    commit('shopping',payload)
  },
  addQty({ commit }, id) {
    commit("addCount", id);
  },
  reduceQty({ commit }, id) {
    commit("reduceQtyt", id);
  },
  removeItemFromCart({ commit }, id) {
    commit("delete", id);
  },

  async searchAction({ commit }, payload) {


    this.$axios.get(`https://dummyjson.com/products/search?q=${payload}`).then(res=>{

      commit('searchText',res.data.products)
    })



  },
  async categories({ commit }, payload) {
   await this.$axios.get(`https://dummyjson.com/products/category/${payload}`).then(res=>{
      commit('categories',res.data.products)
    })

  }



}
