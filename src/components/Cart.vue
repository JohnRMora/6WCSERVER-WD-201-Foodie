<template>
    <div id = "cart">
        <h1 style="color: white;"> Cart </h1> <hr style="height:10px;border-width:0;color:gray;background-color:white; width: 30%">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item, inx in cart" :key="inx">
                    <th scope="row">{{ item.name }}</th>
                    <td>{{ item.price }}</td>
                    <td><input type="number" :value="item.qty" name="quantity" @change="updateQty" :id="inx"></td>
                    <td>{{ item.price * item.qty }}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td></td>
                    <td></td>
                    <td>{{ total }}</td>
                </tr>
            </tbody>
        </table>
        <form>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" v-model="customer.name">
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="text" class="form-control" id="phone" placeholder="Phone Number" v-model="customer.phone">
            </div>
            <br />
            <button type="submit" class="btn btn-warning" @click.prevent="placeOrder">Place order</button>
            <router-link class="btn btn-warning" to="/menu">Order More</router-link>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'cart',
    data () {
        return {
            cart: JSON.parse(localStorage.getItem('cart')),
            cart_total: 0,
            customer: {
                name: "",
                phone: ""
            }
        }
    },
    methods: {
        placeOrder() {
            let apiURL = 'http://localhost:4000/api/order';
            axios.post(apiURL, {cart: this.cart, customer: this.customer}).then((res) => {
                localStorage.removeItem('cart')
                this.$router.push('/order/' + res.data._id)
                this.customer = {
                name: "",
                phone: ""
            }
            }).catch(error => {
                console.log(error)
            });
        },
        updateQty(e){
            console.log(e.target.value, e.target.id, this.cart[e.target.id])
            this.cart[e.target.id].qty = e.target.value
        }
    },
    computed: {
        total() {
            let t = 0
            for (let i in this.cart) {
                t += this.cart[i].qty * this.cart[i].price
            }
            return t
        } 
    }
}
</script>

<style scoped>
table {
    color: white;
}

</style>