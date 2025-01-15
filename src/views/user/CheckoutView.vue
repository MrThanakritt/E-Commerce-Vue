<script setup>
import { reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'

import { useCartStore } from '@/stores/user/cart'


const FormData = [
    {
        name: 'EMAIL ADDRESS',
        field: 'email'
    },
    {
        name: 'ชื่อ-นามสกุล',
        field: 'name'
    },
    {
        name: 'ที่อยู่',
        field: 'address'
    },
    {
        name: 'ข้อมูลติดต่อเพิ่มเติม',
        field: 'note'
    }
]
const router = useRouter()
const cartStore = useCartStore()

const userFormData = reactive(
    {
        email: '',
        name: '',
        address: '',
        note: ''
    }
)

const payment = () => {
    cartStore.placeorder(userFormData)
    router.push({ name: 'success'})
}

</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4">CHECKOUT </h1>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200 p-8">

                <!--checkoutInput-->
                <div v-for="form in FormData" class="form-control w-full">
                    <label class="label">
                        <span class="label-text">{{ form.name }}</span>
                </label>
                <input v-model="userFormData[form.field]" type="text" placeholder=""
                    class="input input-bordered w-full" />
        </div>
        <button @click="payment" class="btn btn-neutral w-full mt-5">ชำระเงิน</button>
        </section>
        <!--checkoutInput-->

        <section class="flex-auto w-32 bg-slate-200 px-2">
            <div v-for="item in cartStore.items" class="flex bg-white m-8 py-5">
                <div class="flex-1"><img class="w-full p-10" :src="item.imageUrl"></div>
                <div class="flex-1">
                    <div class="flex flex-col justify-between h-full">
                        <div>
                            <div> <b>{{ item.name }}</b>  </div>
                            <div>จำนวนสินค้า : {{ item.quantity }} </div>
                        </div>
                        <RouterLink :to="{ name: 'card'}">Edit</RouterLink>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="p-4">
                <div><b>ORDER SUMMARY</b></div>
                <div class="flex justify-between">
                    <div>ราคาสินค้าทั้งหมด</div>
                    <div>{{ cartStore.summaryPrice }}</div>
                </div>
                <div class="flex justify-between">
                    <div>ค่าส่ง</div>
                    <div>0 (ฟรีค่าจัดส่ง)</div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between p-4 mb-4">
                    <div>ราคารวมสินค้าและค่าจัดส่งทั้งหมด</div>
                    <div>{{ cartStore.summaryPrice }}</div>
                </div>
        </section>
        </div>
    </UserLayout>
</template>