<template>
  <v-row
    class="ma-auto"
    align="center"
    justify="center"
    :style="{ 'background-color': bgColor, height: '100%' }"
  >
    <div v-if="$vuetify.breakpoint.mdAndUp" class="pagination-div">
      <v-pagination
        v-model="id"
        :total-visible="10"
        :length="1010"
        color="transparent"
        @input="updateId(id)"
      ></v-pagination>
    </div>
    <v-col
      class="first-column d-flex flex-column"
      cols="12"
      sm="12"
      md="3"
      style="height: 100%"
    >
      <v-container :class="$vuetify.breakpoint.mdAndUp ? 'pt-11 pl-8' : 'pl-2 pt-6'" >
        <h2 class="poke-id">#{{ idCopy | zerosBefore }}</h2>
        <h2 class="poke-name">{{ name }}</h2>
      </v-container>
      <v-container class="size-container">
        <span class="d-block"
          >Height: <span>{{ height | convertSize }}m</span></span
        >
        <span class="d-block"
          >Weight: <span>{{ weight | convertSize }}kg</span></span
        >
      </v-container>
    </v-col>
    <v-col cols="12" sm="12" md="5">
      <v-container>
        <v-img :src="artwork" style="width: 60%; height: 60%"></v-img>
      </v-container>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-container>
        <v-row class="ma-auto">
          <v-card class="pa-2" :color="type1" width="64" height="64">
            <v-img :src="'./icons/' + type1 + '.svg'"></v-img>
          </v-card>
          <v-card
            v-if="type2 != ''"
            class="ml-4 pa-2"
            :color="type2"
            width="64"
            height="64"
          >
            <v-img :src="'./icons/' + type2 + '.svg'" lazy-src=""></v-img>
          </v-card>
        </v-row>
        <h3 class="poke-stats-title my-4">Base stats:</h3>
        <div class="text-left">
          <v-chip> HP: {{ hp }} </v-chip>
          <v-chip> ATTACK: {{ attack }} </v-chip>
          <v-chip> DEFENSE: {{ defense }} </v-chip>
          <v-chip> SP. ATTACK: {{ sp_attack }} </v-chip>
          <v-chip> SP. DEFENSE: {{ sp_defense }} </v-chip>
          <v-chip> SPEED: {{ speed }} </v-chip>
        </div>
      </v-container>
    </v-col>
    <div class="search-field d-flex" style="max-width: 25%">
      <v-text-field
        v-model="search"
        placeholder="Search by name or number"
        filled
        rounded
        dark
        color="white"
        @keyup.enter="updateId(search)"
      ></v-text-field>
      <v-btn class="search-btn" x-large @click="updateId(search)">Go!</v-btn>
    </div>
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
    convertSize: function (value) {
      if (!value) return ''
      value = value / 10
      value = value.toString()
      return value
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
      height: 0,
      weight: 0,
      hp: '',
      attack: '',
      defense: '',
      sp_attack: '',
      sp_defense: '',
      speed: '',
    }
  },
  async fetch() {
    await this.$axios
      .$get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .then((response) => {
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
        this.height = response.height
        this.weight = response.weight
        this.hp = response.stats[0].base_stat
        this.attack = response.stats[1].base_stat
        this.defense = response.stats[2].base_stat
        this.sp_attack = response.stats[3].base_stat
        this.sp_defense = response.stats[4].base_stat
        this.speed = response.stats[5].base_stat
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
            this.$toast.error('Pokémon not found.')
          } else if (message) {
            this.$toast.error('Pokémon not found.')
          } else {
            this.$toast.error('An error has occurred!')
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

<style scoped>
.poke-id {
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 800;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
}
.poke-name {
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 35px;
  font-weight: 800;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  text-transform: capitalize;
}
.poke-stats-title {
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 40px;
  font-weight: 800;
  text-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}
.v-chip {
  background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%) !important;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 13px;
  padding-right: 13px;
  margin-top: 0;
  margin-bottom: 14px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.65);
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  border-radius: 8px;
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
}
.pagination-div {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 20px;
  text-align: center;
}
.size-container {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  margin-left: 60px;
  padding-top: 50px;
}
.size-container span {
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 17px;
  font-weight: 600;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
}
.size-container span span {
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
}
.search-field {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.search-btn {
  background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%) !important;
  color: rgba(0, 0, 0, 0.65);
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  border-radius: 8px;
  text-transform: uppercase;
  box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
}
@media only screen and (max-width: 768px) {
  .size-container {
    margin-bottom: 5px;
    margin-top: 10px;
    margin-left: auto;
    padding-top: 5%;
  }
  .first-column {
    height: auto !important;
  }
  .search-field {
    position: relative;
    max-width: 100% !important;
  }
}
</style>

<style>
html {
  overflow-y: auto;
}
.v-pagination__item,
.v-pagination__navigation,
.v-pagination__more {
  color: white !important;
  background: transparent !important;
  box-shadow: none !important;
  border: 0px;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 17px;
  outline: 0;
}
.v-pagination__navigation .v-icon {
  color: white !important;
}
@media only screen and (max-width: 768px) {

}
</style>
