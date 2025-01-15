<script setup>
import { ref, onMounted } from 'vue'
import UserLayout from '@/layouts/UserLayout.vue'

const profileImageUrl = ref('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/12in-Vinyl-LP-Record-Angle.jpg/220px-12in-Vinyl-LP-Record-Angle.jpg')

const email = ref('')
const name = ref('')


const handdleFileUpload = (event) => {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            profileImageUrl.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const updateProfile = () => {
    const profileData = {
        ImageUrl: profileImageUrl.value,
        name: name.value,
        email: email.value
    }
    localStorage.setItem('profile-data ', JSON.stringify(profileData))
}

onMounted(() => {
    let profileData = localStorage.getItem('profile-data')
    if (profileData) {
        profileData = JSON.parse(profileData)
        profileImageUrl.value = profileData.ImageUrl
        name.value = profileData.name
        email.value = profileData.email
    }
})


</script>

<template>
    <UserLayout>
        <div class="max-w-6xl mx-auto border border-base-200 shadow-xl p-8 my-8">
            <div class="font-bold text-xl flex flex-col items-center p-4">YOUR PROFILE</div>
            <div class="flex flex-col items-center">
                <div>
                    <div class="avatar flex flex-col items-center mt-2">
                        <div class="ring-primary ring-offset-base-100 w-24 rounded-full">
                            <img :src="profileImageUrl">
                        </div>
                        <input type="file" class="text-xs mt-2 p-2" @change="handdleFileUpload">
                    </div>

                </div>
                <div class="from-control w-full max-w-xl">
                    <label class="label">
                        <span class="label-text font-bold">EMAIL</span>
                    </label>
                    <input v-model="email" type="text" placeholder="example@gmail.com"
                        class="input input-bordered w-full">
                </div>
                <div class="from-control w-full max-w-xl">
                    <label class="label">
                        <span class="label-text font-bold">NAME</span>
                    </label>
                    <input v-model="name" type="text" placeholder="ระบุชื่อความยาวไม่เกิน 8 ตัวอักษร"
                        class="input input-bordered w-full">
                </div>
                <button @click="updateProfile" class="btn btn-neutral w-full max-w-xl mt-6">UPDATE PROFILE</button>
            </div>
        </div>
    </UserLayout>
</template>