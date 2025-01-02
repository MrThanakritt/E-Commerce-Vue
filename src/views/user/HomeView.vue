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
    router.push({ name: 'card' }) //card = cart!!  
}
</script>

<template>
    <UserLayout>
        <div class="hero min-h-96"
            style="background-image: url(https://media.timeout.com/images/103329336/1024/576/image.webp);">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">DREAM RECORD</h1>
                    <p class="mb-5">
                        When you're happy, you enjoy the music. <br>
                        But when you're sad, you understand the lyrics.
                    </p>
                </div>
            </div>
        </div>


        <!-- product shelf -->
        <product :products="productStore.list" :addToCart="addToCart"></product>

    </UserLayout>
</template>
