export default {
  shopping(state,item){
    const productInCart = state.shoppingCart.find((product) => product.id === item.id);
    if (!productInCart) {
      state.shoppingCart.push({ ...item, count: 1 });
    } else {
      productInCart.count++;
    }
  },
  delete(state,id){
    state.shoppingCart = state.shoppingCart.filter((item) => item.id !== id);

  },

  addCount(state, id) {
    const productInCart = state.shoppingCart.find((product) => product.id === id);
    productInCart.count++;
  },

  reduceQtyt(state, id) {
    const productInCart = state.shoppingCart.find((product) => product.id === id);
    if (productInCart.count > 1) {
      productInCart.count--;
    } else {
      state.shoppingCart.splice(state.shoppingCart.indexOf(productInCart, 1));
    }
  },

  cardShow(state,payload){
    state.cardShows=payload
  },

  searchText(state,payload){

    state.searchTexts=payload
  },
  categories(state,payload){

    state.categories=payload
  },
  detail(state,payload){

    state.detail=payload
  },
  shoppingCartRemove(state){
    state.shoppingCart=[]
  },

  cardPlus(state, payload) {
    payload.count++;
  },
  cardreduce(state, payload) {

    if (payload.count > 1) {
      payload.count--;
    }
  },


}
