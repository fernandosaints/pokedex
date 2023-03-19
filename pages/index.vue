<template>
  <v-row
    class="ma-auto"
    justify="center"
    align="center"
    :style="{ 'background-color': bgColor, height: '100%' }"
  >
    <v-col cols="12" sm="8" md="6">
      <v-btn
        :disabled="id == 1"
        @click="
          id--
          $nuxt.refresh()
        "
        >BACK</v-btn
      >
      <v-btn
        @click="
          id++
          $nuxt.refresh()
        "
        >NEXT</v-btn
      >
      <v-row class="ma-auto">
        <h4>#{{ idCopy | zerosBefore }}</h4>
        <h4 class="ml-2">{{ name }}</h4>
        <v-card class="ml-2" :color="type1" width="50" height="50">
          <h4 class="ml-2">{{ type1 }}</h4>
        </v-card>
        <v-card
          v-if="type2 != ''"
          class="ml-2"
          :color="type2"
          width="50"
          height="50"
        >
          <h4 v-if="type2 != ''" class="ml-2">{{ type2 }}</h4>
        </v-card>
        <!-- <v-card class="ml-2" :color="bgColor" width="50" height="50"></v-card> -->
        <v-text-field
          v-model="search"
          class="ml-5"
          placeholder="Buscar"
          solo
          @keyup.enter="updateId(search)"
        ></v-text-field>
        <v-btn @click="updateId(search)">Buscar</v-btn>
      </v-row>
      <v-img :src="artwork" style="width: 50%; height: 50%"></v-img>
    </v-col>
    <!-- <v-col cols="12" sm="12" md="4"></v-col> -->
  </v-row>
</template>

<script>
import * as Vibrant from 'node-vibrant'
export default {
  name: 'IndexPage',
  filters: {
    zerosBefore: function (value) {
      if (!value) return ''
      value = value.toString()
      return ('000' + value).slice(-4)
    },
  },
  data() {
    return {
      id: 1,
      idCopy: 1,
      search: '',
      name: '',
      type1: '',
      type2: '',
      artwork: '',
      bgColor: '',
    }
  },
  async fetch() {
    await this.$axios
      .$get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .then((response) => {
        // this.$toast.success('Pokémon encontrado!')
        this.id = response.id
        this.idCopy = response.id
        this.name = response.name
        this.artwork = response.sprites.other['official-artwork'].front_default
        this.type1 = response.types[0].type.name
        if (response.types.length > 1) {
          this.type2 = response.types[1].type.name
        } else {
          this.type2 = ''
        }
        const v = new Vibrant(this.artwork)
        v.getPalette().then((palette) => {
          this.bgColor = palette.Muted.hex
        })
      })
      .catch((error) => {
        if (error.response) {
          const code = error.response.status
          const message = error.response.data
          this.id = this.idCopy
          if (message && code) {
            this.$toast.error('Pokémon não encontrado')
          } else if (message) {
            this.$toast.error('Pokémon não encontrado')
          } else {
            this.$toast.error('Ocorreu um erro!')
          }
        }
      })
  },
  methods: {
    updateId(search) {
      if (search !== '') {
        this.id = search
        this.search = ''
        this.$nuxt.refresh()
      }
    },
  },
}
</script>
