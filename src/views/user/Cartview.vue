<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import Close from '@/components/icons/Close.vue'
import { useCartStore } from '@/stores/user/cart'

const cardStore = useCartStore()
</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4">shopping class</h1>

        <!-- Cart -->
        <div class="flex">
            <div class="flex-auto w-64 bg-base-200 p-4">
                <div v-if="cardStore.items.length === 0">
                    Card is Empty
                </div>
                <div v-else v-for="(item, index) in cardStore.items" class="flex">
                    <div class="flex-1">
                        <img class="w-full p-10"
                            src="https://fastly.picsum.photos/id/919/200/200.jpg?hmac=jtDR0R0QNk8D4_SfAICLM_dNLuspq3B3nTWyOSYcQis">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div class="relative grid grid-cols-2">
                                    <div>
                                        <div><b>{{ item.name }}</b></div>
                                        <div>{{ item.about }}</div>
                                        <div>{{ item.price }}</div>
                                    </div>
                                    <div>
                                        <select v-model="item.quantity" class="w-1/2 p-4">
                                            <option v-for="quantity in [1, 2, 3, 4, 5]">
                                                {{ quantity }}
                                            </option>
                                        </select>
                                    </div>
                                    <div @click="cardStore.removeItemInCart(index)" class="absolute top-0 right-0">
                                        <Close></Close>
                                    </div>
                                </div>
                            </div>
                            <div><b>In stock</b></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Summary -->
            <div class="flex-auto w-32 bg-slate-200 p-4">
                <div class="text-xl font-bold">Order Summary</div>
                <div class="my-4 divide-y divide-black">
                    <div class="flex justify-between py-4">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cardStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between py-4">
                        <div>ค่าส่ง</div>
                        <div>0</div>
                    </div>
                    <div class="flex justify-between py-4">
                        <div>ราคารวมทั้งหมด</div>
                        <div>{{ cardStore.summaryPrice }}</div>
                    </div>
                </div>

            </div>
        </div>

    </UserLayout>
</template>