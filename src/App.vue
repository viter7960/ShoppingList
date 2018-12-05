<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li v-bind:class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" role="presentation">
        <a v-bind:href="'#' + list.id" v-bind:aria-controls="list.id" role="tab" data-toggle="tab">{{ list.title }}</a>        
      </li>
      <li>
        <a href="#" @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign"></i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div v-bind:class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" class="tab-pane" role="tabpanel" v-bind:id="list.id">
        <shopping-list-component :id="list.id" :items="list.items" @changeTitle="changeTitle({title: list.title, id: id})"></shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>
  import ShoppingListComponent from './components/ShoppingListComponent'
  import store from './vuex/store'
  import _ from 'underscore'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      ShoppingListComponent
    },
    computed: mapGetters({
      shoppinglists: 'getLists'
    }),
    store,
    methods: _.extend({},
    mapActions(['populateShoppingLists', 'createShoppingList']),
      {
        addShoppingList () {
          let shoppingList = {
            title: 'New Shopping List',
            items: []
          }
          this.createShoppingList(shoppingList)
        }
      }),
    mounted () {
      this.populateShoppingLists()
    }
  }
</script>

<style>
  .container {
    width: 40%;
    margin: 20px auto 0px auto;
  }
</style>