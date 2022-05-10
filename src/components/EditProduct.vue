<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h3 class="text-center">Update Product</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="product.name" required>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="double" class="form-control" v-model="product.price" required>
                </div>
                <div class="form-group">
                    <label>Image</label>
                    <input type="text" class="form-control" v-model="product.image">
                </div>
                <div class="form-group">
                    <br /><button class="btn btn-warning" type="submit">Update</button>
                </div>
            </form>
        </div>
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
            let apiURL = `http://localhost:4000/api/edit-products/${this.$route.params.id}`;
            axios.get(apiURL).then((res) => {
                this.products = res.data;
            })
        },
        methods: {
            handleUpdateForm() {
                let apiURL = `http://localhost:4000/api/update-products/${this.$route.params.id}`;
                axios.put(apiURL, this.product).then((res) => {
                    console.log(res)
                    this.$router.push('/products')
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>