<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/site/Navbar'

export default {
  name: 'App',
  components:{
    'Navbar': Navbar
  }
}
</script>
