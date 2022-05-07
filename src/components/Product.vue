<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h3 class="text-center">Add New Product</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="product.name" required>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="number" class="form-control" v-model="product.price" required>
                </div>
                <div class="form-group">
                    <label>Image</label>
                    <input type="text" class="form-control" v-model="product.image" required>
                </div>
                <div class="form-group">
                    <br /><button class="btn btn-warning" type="submit">Add</button>
                </div>
            </form>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product._id">
                    <th scope="row">
                        <img :src="product.image" />
                    </th>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                product: {
                   name: '',
                   price: '',
                   image: ''
                },
                products: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api/products';
            axios.get(apiURL).then((res) => {
                this.products = res.data
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/products';
                axios.post(apiURL, this.product).then((res) => {
                  this.product = {
                    name: '',
                    price: '',
                    image: ''
                  }
                  this.products.push(res.data)
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>