<template>
  <v-app>
    <div>
      <Header></Header>
    </div>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>

</template>

<script>
import Header from './components/header'
export default {
  name: 'App',
  components:{Header},
  data: () => ({
    //
  }),
};
</script>
