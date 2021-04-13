<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button></Button>
    <button @click="gotoNext">NEXT</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'

export default {
  name: 'About', // creating a view name for 'about'
  components: {
    Button // register sub components, button
  },
  methods: {
    gotoNext () {
      this.$route.push({ path: 'profile' })
    }
  }
}
</script>
