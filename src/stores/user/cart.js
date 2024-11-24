import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [{
            name: 'test',
            imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
            quantity: 10,
            about: 'testt',
            status: 'open',
            price: 100,
            quantity: 1
        }]
    }),
    actions: {
        addToCart(productData) {
            this.items.push(productData)
        },
        updateQuantity(index, quantity) {
            this.items[index].quantity = quantity
        },
        removeItemInCart(index) {
            this.items.splice(index, 1)
        }
    }
})