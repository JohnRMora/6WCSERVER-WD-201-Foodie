<template>
    <div id="menu">
        <h1> Menu </h1> <hr style="height:10px;border-width:0;color:gray;background-color:white; width: 30%">

        <div class="row">
            <div class="col-4" v-for="menu in menus" :key="menu._id">
                <img :src="menu.image" style="width: 250px;">
                <h2>{{ menu.name }}</h2>
                <p>P{{ menu.price }}</p>
                <a class="btn btn-warning fs-5" @click.prevent="addToCart(menu)">Add to Cart</a>          
            </div>
        </div>
        <br /><br /><router-link class="btn btn-warning fs-2" to="/cart">Go to Cart</router-link>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'menu',
    data () {
        return {
            menus: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api/products';
        axios.get(apiURL).then(res => {
                this.menus = res.data;
        }).catch(error => {
            console.log(error)
        });
    },
    methods: {
        addToCart(menu){
            let rawCart = localStorage.getItem("cart");
            console.log(rawCart, menu)
            let cart = rawCart !== null ? JSON.parse(rawCart) : {}
            menu.qty = 1
            if(cart[menu._id] === undefined) cart[menu._id] = menu
            // console.log(cart)
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
}

</script>

<style scoped>
h1 {
    font-size: 100px;
    color: white;
}
.col-4 {
  background-color: white;
  padding: 5px;
  margin: 80px 10px 50px 10px;
  width: 420px;
  height: 400px;
  border: black;
  border-width: 3px;
  border-style: solid;
  text-align: center;
}
</style>