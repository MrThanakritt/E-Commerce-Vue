<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter} from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import Product from '@/components/Product.vue'

import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'

const router = useRouter()
const route = useRoute()

const productStore = useProductStore()
const cartStore = useCartStore()
const searchText = ref('')

watch(() => route.query.q, (newSearchtext) => {
    searchText.value = newSearchtext
})

const filterProducts = computed(() => {
    return productStore.filterProducts(searchText.value)
})
const addToCart = (product) => {
    cartStore.addToCart(product)
    router.push({ name: 'card' }) //card = cart!!  
}
</script>

<template>
    <UserLayout>
        <div class="text-2xl m-4">Search: <b>{{ serachText }}</b></div>
        <Product :products="filterProducts"
        :addToCart="addToCart"
        ></Product>
    </UserLayout>
</template>