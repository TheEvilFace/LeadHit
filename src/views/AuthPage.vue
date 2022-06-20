<template>
  <v-container fill-height>
    <div class="row justify-center align-center">
      <div class="col-6">
        <v-form
            ref="form"
            class="column text-center"
            lazy-validation
            @submit.prevent="onSubmit"
        >
          <v-text-field
              v-model="urlLink"
              :rules="rules.id"
              label="Id"
              placeholder="Введите ID"
              required
              @input="rmRules"
          ></v-text-field>
          <v-btn
              :disabled="checkUrl"
              color="success"
              class="mr-4"
              type="submit"
          >
            Отправить
          </v-btn>
        </v-form>
      </div>

    </div>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex';
  export default {
    name: 'AuthMain',
    computed:{
      checkUrl(){
        return this.urlLink.length<23
      }
    },
    data(){
      return{
        urlLink: '',
        rules: {},
        blur: false
      }
    },
    methods:{
      ...mapActions(['getAnalytics']),
      // Необходимость в связи с выбранной UI библиотекой
      rmRules(){
        this.rules = {}
      },
      onSubmit() {
        this.rules = {
          id: [v => !!v, v => v.length > 23 || 'Это не ссылка']
        }
        this.$nextTick(() => {
          if(this.$refs.form.validate()) {
            this.getAnalytics().then(()=>{
              this.$router.push('/');
            }).catch(e=>{console.log(e)})
          }
        })
      }
    },
  }
</script>
