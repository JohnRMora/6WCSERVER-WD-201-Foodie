<template>
    <div id = "order">
        <h1 style="color: white;"> Order </h1> <hr style="height:10px;border-width:0;color:gray;background-color:white; width: 30%">
        <table class="table" width="50%">
            <tr>
                <th>Customer: </th>
                <td>{{ order.customer }}</td>
            </tr>
            <tr>
                <th>Phone:</th>
                <td>{{ order.phone }}</td>
            </tr>
        </table>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cart in order.cart" :key="cart.name">
                    <th scope="row">{{ cart.name }}</th>
                    <td>{{ cart.qty }}</td>
                    <td>{{ cart.price }}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td></td>
                    <td>{{ order.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'order',
    data () {
        return {
            order: {}
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api/order/' + this.$route.params.id;
        axios.get(apiURL).then(res => {
            this.order = res.data;
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>

<style scoped>
table {
    color: white;
}

</style>