<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">Profile</h1>
        <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{{name}}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{email}}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    this.getUser().then(res => {
      this.name = res.user.name
      this.email = res.user.email
      return res
    })
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    getUser () {
      return axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
      }
      ).then(res => {
        // console.log(res.data)
        return res.data
      })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
