import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [{
      name: 'test',
      imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
      quantity: 10,
      about: 'test',
      status: 'open',
      price: 100,
    },
    {
      name: 'test 123',
      imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
      quantity: 10,
      about: 'recheck',
      status: 'open',
      price: 100,
    }]
  }),
  actions: {
    filterProducts(searchText) {
      return this.list.filter(product => product.name.includes(searchText))
    }
  }
})