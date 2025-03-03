<script setup>
import { reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import { useCartStore } from '@/stores/user/cart'

const FormData = [
    { name: 'EMAIL ADDRESS', field: 'email' },
    { name: 'ชื่อ-นามสกุล', field: 'name' },
    { name: 'ที่อยู่', field: 'address' },
    { name: 'ข้อมูลติดต่อเพิ่มเติม', field: 'note' }
]

const router = useRouter()
const cartStore = useCartStore()

const userFormData = reactive({
    email: '',
    name: '',
    address: '',
    note: ''
})

const payment = () => {
    cartStore.placeorder(userFormData)
    router.push({ name: 'success' })
}
</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4 text-center md:text-left">CHECKOUT</h1>

        <div class="flex flex-col md:flex-row gap-4 p-4">
            <!-- Checkout Form -->
            <section class="flex-1 bg-base-200 p-6 rounded-lg shadow-lg">
                <h2 class="text-xl font-bold mb-4">ข้อมูลการจัดส่ง</h2>
                <div v-for="form in FormData" :key="form.field" class="form-control w-full mb-4">
                    <label class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </label>
                    <input v-model="userFormData[form.field]" type="text" class="input input-bordered w-full" />
                </div>
                <button @click="payment" class="btn btn-neutral w-full mt-4">ชำระเงิน</button>
            </section>

            <!-- Order Summary -->
            <section class="w-full md:w-1/3 bg-slate-200 p-6 rounded-lg shadow-lg">
                <h2 class="text-xl font-bold mb-4">รายการสั่งซื้อ</h2>
                
                <div v-for="item in cartStore.items" :key="item.name" class="flex items-center bg-white p-4 rounded-lg shadow mb-4">
                    <div class="w-1/3 p-2">
                        <img class="w-full max-h-20 object-contain" :src="item.imageUrl">
                    </div>
                    <div class="flex-1 p-2">
                        <div class="text-sm font-bold">{{ item.name }}</div>
                        <div class="text-sm text-gray-600">จำนวน: {{ item.quantity }}</div>
                        <RouterLink :to="{ name: 'card' }" class="text-blue-500 text-xs">แก้ไข</RouterLink>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="p-4">
                    <div class="font-bold">ORDER SUMMARY</div>
                    <div class="flex justify-between">
                        <span>ราคาสินค้าทั้งหมด</span>
                        <span>{{ cartStore.summaryPrice }} ฿</span>
                    </div>
                    <div class="flex justify-between">
                        <span>ค่าส่ง</span>
                        <span>0 ฿ (ฟรีค่าจัดส่ง)</span>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="flex justify-between p-4 font-bold">
                    <span>รวมทั้งหมด</span>
                    <span>{{ cartStore.summaryPrice }} ฿</span>
                </div>
            </section>
        </div>
    </UserLayout>
</template>
