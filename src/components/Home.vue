<template>
    <div id="home">
        <div class="banner"
        :style="banner"
    >
    <h1>Welcome to <br />Foodie!</h1>
    <br /><br /><router-link class="btn btn-warning fs-2" to="/menu">Order Now</router-link>
    <br /><br /><router-link class="btn btn-warning fs-2" to="/products">Add New Products</router-link>
    </div>
        
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            banner: {
                backgroundImage: `url(${require('../assets/background.jpg')})`,
                backgroundRepeat: "no-repeat"
            }
        }
    }
  }
</script>

<style scoped>
.banner {
    width: 80%;
    height: 90%;
    position: absolute;
}
h1 {
    font-size: 100px;
    color: white;
}
</style>