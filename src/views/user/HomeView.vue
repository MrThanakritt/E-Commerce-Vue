<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import Product from '@/components/Product.vue';

import { useProductStore } from '@/stores/user/product'

const productStore = useProductStore()
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
        <product :products="productStore.list"></product>
        
    </UserLayout>
</template>