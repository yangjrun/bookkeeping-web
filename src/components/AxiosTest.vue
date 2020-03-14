<template>
  <div>
    <h2>{{ msg }}</h2>
    <button v-on:click="greet"> 点击触发异步axios</button>
  </div>
</template>

<script>
export default {
  name: "axios",
  data() {
    return {
      msg: "axios"
    };
  },
  methods: {
    greet: function(event){
      var _this = this;
      this.axios.get('http://127.0.0.1:9999/axios/test').then((respone) => {
          _this.msg = respone.data;
       })
    }
  },
  created: function() {

  }
};
</script>