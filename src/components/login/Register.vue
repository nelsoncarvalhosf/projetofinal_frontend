<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-wight-normal">Cadastre-se</h1>
          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" v-model="name" class="form-control" name="name" placeholder="Entre aqui com o nome...">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Entre aqui com o email...">
          </div>
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Entre aqui com a senha...">
          </div>
           <button class="btn btn-lg btn-primary btn-block">Cadastrar</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import router from '../../router'
import EventBus from '../EventBus'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods:{
    register(){
      axios.post('api/register',{
        name: this.name,
        email: this.email,
        password: this.password
      })
      .then((res) => {
        console.log(res)
        router.push({name: 'Login'})
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
