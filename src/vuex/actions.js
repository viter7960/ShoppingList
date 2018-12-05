import { CHANGE_TITLE, POPULATE_SHOPPING_LIST } from './mutation_types'
import api from '../api'
import getters from './getters'

export default {
  changeTitle: (store, data) => {
    store.commit(CHANGE_TITLE, data)
    store.dispatch('updateList', data.id)
  },

  populateShoppingLists: ({ commit }) => {
    api.fetchShoppingLists().then(response => {
      commit(POPULATE_SHOPPING_LIST, response.data)
    })
  },

  updateShoppingLists: (data) => {
    api.updateShoppingList(data)
  },

  updateList: (store, id) => {
    let shoppingList = getters.getListById(store.state, id)
    api.updateShoppingList(shoppingList)
  },

  createShoppingList: (store, list) => {
    api.addNewShoppingList(list).then(response => {
      store.dispatch('populateShoppingLists')
    })
  },

  deleteShoppingList: (store, id) => {
    api.deleteShoppingList(id).then(response => {
      store.dispatch('populateShoppingLists')
    })
  }
}
