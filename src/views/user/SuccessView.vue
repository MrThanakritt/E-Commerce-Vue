<script setup>
import { ref, onMounted } from 'vue';
import UserLayout from '@/layouts/UserLayout.vue'

import { useCartStore } from '@/stores/user/cart';
const cartStore = useCartStore()
const orderData = ref({})

onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.orderNumber) {
        orderData.value = cartStore.checkout
    }
    console.log(cartStore.checkout)
})

</script>

<template>
    <UserLayout>
        <div class="max-w-6xl mx-auto border border-base-200 shadow-xl p-8 my-8">
            <div>
                <div class="text-2xl font-bold">Your order is successful!</div>
                <div>Hi {{ orderData.name }}</div>
                <div>เราจะรีบทำการจัดส่งโดยเร็วที่สุด, เตรียมรอรับสินค้าได้เลย</div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-4 gap-2">
                <div>
                    <div class="font-bold">ORDER DATE</div>
                    <div>{{ orderData.createdDate }}</div>
                </div>
                <div>
                    <div class="font-bold">ORDER NUMBER</div>
                    <div>{{ orderData.orderNumber }}</div>
                </div>
                <div>
                    <div class="font-bold">PAYMENT</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-bold">ADDRESS</div>
                    <div>{{ orderData.address }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="product in orderData.products" class="grid grid-cols-4 gap-2 mb-6 p-4 font-medium items-center">
                <div>
                    <img class="w-44" :src="product.imageUrl">
                </div>
                <div>
                    {{ product.name }}
                </div>
                <div>จำนวน: {{ product.quantity }}</div>
                <div>ราคาสินค้า: {{ product.price * product.quantity }}</div>
            </div>
            <div class="divider"></div>
            <div class="justify-between flex">
                <div>ราคาสินค้าทั้งหมด</div>
                <div>{{ orderData.totalPrice }}</div>
            </div>
            <div class="justify-between flex">
                <div>ค่าจัดส่ง</div>
                <div>0</div>
            </div>
            <div class="divider"></div>
            <div class="justify-between flex">
                <div>ราคาสินค้าและค่าจัดส่งทั้งสิ้น</div>
                <div>{{ orderData.totalPrice }}</div>
            </div>
            <div class="divider"></div>
            <div>ขอบคุณสำหรับการสั่งซื้อ</div>
        </div>
    </UserLayout>
</template>