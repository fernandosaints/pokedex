<template>
  <v-app dark>
    <!-- <v-app-bar fixed app>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar> -->
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Pokédex',
    }
  },
}
</script>

<style>
html {
  overflow-y: auto;
}
</style>