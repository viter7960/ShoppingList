<template>
  <div class="input-group">
    <input type="text" v-model="newItem" @keyup.enter="addItem"  placeholder="add shopping list item" class="form-control">
    <span class="input-group-btn">
      <button  @click="addItem" class="btn btn-default" type="button">Add!</button>
    </span>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data () {
      return {
        newItem: ''
      }
    },
    methods: {
      addItem () {
        var t = this.newItem.trim()
        if (t) {
          this.$emit('add', this.newItem)
          this.newItem = ''
          this.$store.dispatch('updateList', this.id)
        }
      }
    }
  }
</script>

<style scoped>
</style>
