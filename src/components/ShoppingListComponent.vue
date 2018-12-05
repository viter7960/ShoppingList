<template>
  <div>
    <shopping-list-title-component :id="id"></shopping-list-title-component>
    <add-item-component :id="id" @add="addItem"></add-item-component>
    <items-component v-bind:items="items" :id="id"></items-component>
    <div class="footer">
      <hr />
      <change-title-component :id="id" v-on:changeTitle="onChangeTitle"></change-title-component>
    </div>
  </div>
</template>

<script>
  import AddItemComponent from './AddItemComponent'
  import ItemsComponent from './ItemsComponent'
  import ChangeTitleComponent from './ChangeTitleComponent'
  import ShoppingListTitleComponent from './ShoppingListTitleComponent'

  export default {
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent,
      ShoppingListTitleComponent
    },
    props: ['id', 'title', 'items'],
    methods: {
      addItem (text) {
        this.items.push({
          text: text,
          checked: false
        })
      },

      onChangeTitle (text) {
        this.$emit('changeTitle', this.id, text)
      }
    }
  }
</script>

<style scoped>
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>