<template>
 <div id="app">
  <button v-on:click="add(10)">click me</button>
  <button v-on:click="remove(5)">click me</button>
  <button v-on:click="num++">click me</button>
  <button v-on:click="num--">click me</button>
  <span>{{num}}</span>
</div>
</template>
<script>
export default {
  data () {
      return {
         {src: '../../../static/lyk-coffee-red-mathine4.png'},
       {src: '../../../static/lyk-coffee-red-mathine5.png'}
        num: 0,
      message: '6',
      data: {
        name: '',
        gender: '',
        interest: [],
        identity: ''
      },
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
      }
    },
    methods: {
      add (inc) {
        this.num += inc
     },
      remove (dec) {
        this.num -= dec
      }
    }
  }
</script>

<style>

</style>
