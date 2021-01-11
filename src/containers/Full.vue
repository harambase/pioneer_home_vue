<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
  import {Header as AppHeader, Footer as AppFooter} from '../components/'

  export default {
    name: 'full',
    components: {
      AppHeader,
      AppFooter
    },
    computed: {
      name() {
        return this.$route.name
      },
      list() {
        return this.$route.matched
      }
    }
  }
</script>
