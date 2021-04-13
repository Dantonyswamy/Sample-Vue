<template>
  <div class="profile">
    <h1>This is an Profile page</h1>
    <h4>{{ $route.params.id }}</h4>
    <!-- to see the parameters set to the profile route -->
    <router-link :to="{ name: 'Profile', params: { id: '456'}, query: {plan: 'private'}}">To Profile page</router-link>
    <br />
    <button @click="gotoInfo">Nested Info-Programatic</button>
    <!-- <router-link :to="{ name: 'Info', params: { id: '3'}}">Info Route</router-link> -->
    <h5>{{$route.query}}</h5>  <!-- Query params, to pull info or put info in different routes -->
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
// import Button from '../components/Button.vue'
// @ is an alias to /src

export default {
  methods: {
    gotoInfo () {
      this.$router.push({ name: 'Info', params: { id: '3' } })
    }
  },
  mounted () {
    console.log(this.$route.params.id)
  },
  watch: {
    $route (to, from) {
      console.log('to', to)
      console.log('from', from)
    }
  },
  name: 'Profile' // creating a view name for 'profile'
//  components: { Button }
}
</script>
