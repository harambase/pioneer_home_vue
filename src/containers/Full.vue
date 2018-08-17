<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <!--<Sidebar :navItems="itemFilter"/>-->
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
  import {Header as AppHeader, Footer as AppFooter, Breadcrumb} from '../components/'

  export default {
    name: 'full',
    components: {
      AppHeader,
      AppFooter,
      Breadcrumb
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
