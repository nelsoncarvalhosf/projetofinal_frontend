<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">
          Gerenciador de Eventos - Admin
        </h1>
      </div>
    </div>
  </div>
</template>


<script>
const guard = function(to, from, next) {
  // check for valid auth token
  axios.get('/api/checkAuthToken').then(response => {
      // Token is valid, so continue
      next();
  }).catch(error => {
      // There was an error so redirect
      window.location.href = "/login";
  })
};
export default {

}
</script>
