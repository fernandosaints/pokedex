<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-btn :disabled="id == 1" @click="id--;$nuxt.refresh()">BACK</v-btn>
      <v-btn @click="id++;$nuxt.refresh()">NEXT</v-btn>
      <v-row class="ma-auto">
        <h4>{{ id }}</h4>
        <h4 class="ml-2">{{ name }}</h4>
        <v-text-field v-model="id" class="ml-5" placeholder="Buscar" solo></v-text-field>
        <v-btn @click="updateId(id)">Buscar</v-btn>
      </v-row>
      <v-img :src="artwork"></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      id: 1,
      name: '',
      artwork: '',
    }
  },
  async fetch() {
    await this.$axios
      .$get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .then((response) => {
        this.name = response.name
        this.artwork = response.sprites.other['official-artwork'].front_default
      })
  },
  methods: {
    updateId(id) {
      this.id = id;
      this.$nuxt.refresh()
    }
  }
}
</script>
