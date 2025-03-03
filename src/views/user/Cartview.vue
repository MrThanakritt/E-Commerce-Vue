<script setup>
import { RouterLink } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import Close from '@/components/icons/Close.vue'
import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}
</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4 text-center md:text-left">CART</h1>

        <!-- Cart -->
        <div class="flex flex-col md:flex-row gap-4 p-4">
            <!-- Left: Cart Items -->
            <div class="flex-1 bg-base-200 p-4 rounded-lg shadow-lg">
                <div v-if="cartStore.items.length === 0" class="text-center p-20 font-bold text-base lg:text-lg">
                    คุณยังไม่มีสินค้าในตะกร้า รีบเลือกสินค้าที่คุณชอบเลย
                </div>
                <div v-else class="space-y-4">
                    <div v-for="(item, index) in cartStore.items" :key="index"
                        class="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md relative">
                        
                        <!-- Product Image -->
                        <div class="w-full md:w-1/3 p-4">
                            <img class="w-full max-h-40 object-contain" :src="item.imageUrl">
                        </div>

                        <!-- Product Details -->
                        <div class="flex-1 p-4 flex flex-col justify-between pr-8"> 
                            <div class="relative">
                                <div class="text-lg font-semibold">
                                    <div><b>{{ item.name }}</b></div>
                                    <div class="text-gray-500 text-sm">{{ item.about }}</div>
                                    <div class="text-red-500 font-bold">{{ item.price }} ฿</div>
                                </div>
                            </div>

                            <!-- ปุ่มลบ (X) -->
                            <div @click="cartStore.removeItemInCart(index)"
                                class="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-red-500">
                                <Close class="w-6 h-6"></Close>
                            </div>

                            <!-- Quantity Select -->
                            <div class="mt-4 flex items-center gap-2">
                                <label class="font-bold text-sm">จำนวน:</label>
                                <select v-model="item.quantity" class="border p-2 rounded w-20"
                                    @change="changeQuantity($event, index)">
                                    <option v-for="quantity in [1, 2, 3, 4, 5]" :key="quantity">
                                        {{ quantity }}
                                    </option>
                                </select>
                            </div>

                            <div class="mt-2 text-green-600 font-bold">IN STOCK</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: Summary -->
            <div class="w-full md:w-1/3 bg-slate-200 p-4 rounded-lg shadow-lg">
                <div class="text-xl font-bold">ORDER SUMMARY</div>
                <div class="my-4 divide-y divide-black">
                    <div class="flex justify-between py-2">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }} ฿</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>ค่าส่ง</div>
                        <div>0 ฿</div>
                    </div>
                    <div class="flex justify-between py-2 font-bold">
                        <div>ราคารวมทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }} ฿</div>
                    </div>
                </div>
                <RouterLink :to="{ name: 'checkout' }" class="btn btn-neutral w-full">
                    ชำระเงิน
                </RouterLink>
            </div>
        </div>
    </UserLayout>
</template>
