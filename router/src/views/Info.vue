<template>
  <div>
    <h3>Information, Nested Route component</h3>
    Id:{{$route.params.id}}
  </div>
</template>

<script>
export default {
  // props: {
  //   id: {
  //     type: Number
  //   }
  // }
}
</script>

<style>
</style>

<!-- This info component would be something like : A profile with an id', inside profile,
 to need more info it goes to info component
 -->
