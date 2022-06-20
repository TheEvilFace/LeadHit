<template>
  <v-app-bar dark color="#162130">
    <v-container class="d-flex justify-center">
      <h2>
        LeadHit
      </h2>
    </v-container>
    <v-btn @click="logout" style="position: absolute; right: 30px" icon> <v-icon >mdi-exit-run</v-icon></v-btn>

  </v-app-bar>
</template>

<script>
import { mapMutations} from 'vuex';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  methods:{
    ...mapMutations(['REMOVE_TOKEN']),
    logout(){
      this.REMOVE_TOKEN();
      location.reload();
    }
  }
}
</script>

<style scoped>

</style>