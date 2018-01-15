<template>
  <div>
    <div class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
        aria-hidden="true">&times;</span></button>
      <strong><a href="https://codingthesmartway.com/courses/complete-javascript/" target="_blank">[ONLINE COURSE] - The
        Complete JavaScript Course: Build a Real-World Project</a></strong> +++ Master JavaScript with the most complete
      JavaScript course on the market! Includes projects, challenges, final exam, ES6 +++ You will gain a deep and true
      understanding of how JavaScript works behind the scenes. +++
    </div>
    <h1>JS Axios Demo
      <small>by CodingTheSmartWay.com</small>
    </h1>
    <div class="jumbotron-fluid">
      <h1>Welcome To Axios</h1>
      <h4>This applications uses Axios. Axios is a Promise-based HTTP client for JavaScript which can be used in your
        front-end application and in your Node.js backend. </h4>
    </div>
    <div class="card">
      <div class="card-header">GET Request</div>
      <div class="card-body">
        <button class="btn btn-primary" @click="getData">Get Todos</button>
        <!--<button class="btn btn-warning" @onclick="clearOutput">Clear</button>-->
        <p>Response: {{ counter }}</p>

        <!--<ul v-if="Activities && Activities.length">-->
          <!--<li v-for="error of Activities">-->
            <!--{{error.message}}-->
          <!--</li>-->
        <!--</ul>-->
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "endpoints",
    data() {
      return {
        postBody: '',
        errors: [],
        counter: 0
      }
    },
    methods: {
      // Pushes posts to the server when called.
      getData() {
        let headers = new Headers()
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8080')
        console.info('hhh')
        axios.get(`http://localhost:4567/api/grpc-greeting`, {headers: headers})
          .then(response => {
          })
          .catch(e => {
            this.errors.push(e)
          })
        // async / await version (postPost() becomes async postPost())
        //
        // try {
        //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
        //     body: this.postBody
        //   })
        // } catch (e) {
        //   this.errors.push(e)
        // }
      }
    }
  }
</script>

<style scoped>

</style>
