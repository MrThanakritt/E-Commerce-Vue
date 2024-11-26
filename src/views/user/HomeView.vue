<script setup>
import { useRouter } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import Product from '@/components/Product.vue';

import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'

const router = useRouter()
const productStore = useProductStore()
const CartStore = useCartStore()

const addToCart = (product) => {
    CartStore.addToCart(product)
    router.push({ name: 'cart' })
}

</script>

<template>
    <UserLayout>
        <div class="hero bg-base-200 h-96">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">DRAGON SHOP</h1>
                    <p class="py-6">
                        is first e-commerce
                    </p>
                </div>
            </div>
        </div>


        <!-- product shelf -->
        <product 
        :products="productStore.list"
        :addToCart="addToCart"
        ></product>
        
    </UserLayout>
</template>
