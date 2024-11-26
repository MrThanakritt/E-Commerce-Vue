<script setup>
import { reactive } from 'vue'

import UserLayout from '@/layouts/UserLayout.vue'

const FormData = [
    {
        name: 'Email address',
        field: 'email'
    },
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Address',
        field: 'address'
    },
    {
        name: 'Note',
        field: 'note'
    }
]

const userFormData = reactive(
    {
        email: '',
        name: '',
        address: '',
        note: ''
    }
)  

</script>

<template>
    <UserLayout>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200 p-8">

                <!--checkoutInput-->
                <label v-for="form in FormData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-model="userFormData[form.field]" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </label>
            </section>
            <!--checkoutInput-->

            <section class="flex-auto w-32 bg-slate-200">
                Summary
            </section>
        </div>
    </UserLayout>
</template>