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
    let data =await fetch(`https://dummyjson.com/products/search?q=${payload}`,{method:'GET'})
    const res=await data.json()
    console.log(res)
    commit('searchText',res.products)
  },
  async categories({ commit }, payload) {
    let data =await fetch(`https://dummyjson.com/products/category/${payload}`,{method:'GET'})
    const res=await data.json()
    console.log(res)
    commit('categories',res.products)
  },

}
