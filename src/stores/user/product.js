import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [
    {
      name: 'Night Thoughts',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd2.jpg',
      quantity: 10,
      about: 'Artist : Suede',
      status: 'open',
      price: 3000,
    },
    {
      name: 'Sea of Noise',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd1.jpg',
      quantity: 10,
      about: 'Artist : St Paul and the Broken Bones',
      status: 'open',
      price: 3500,
    },
    {
      name: 'Blackstar',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd6.jpg',
      quantity: 10,
      about: 'Artist : David Bowie',
      status: 'open',
      price: 3000,
    },
    {
      name: 'The Colour in Anything',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd14.jpg',
      quantity: 10,
      about: 'Artist : James Blake',
      status: 'open',
      price: 3300,
    },
    {
      name: 'Nothing’s Real',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd21.jpg',
      quantity: 10,
      about: 'Artist : Shura',
      status: 'open',
      price: 3600,
    },
    {
      name: 'Moon Saloon',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd25.jpg',
      quantity: 10,
      about: 'Artist : Arc Iris',
      status: 'open',
      price: 4000,
    },
    {
      name: 'Moth',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd32.jpg',
      quantity: 10,
      about: 'Artist : Chairlift',
      status: 'open',
      price: 4200,
    },
    {
      name: 'Friends',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd28.jpg',
      quantity: 10,
      about: 'Artist : White Lies',
      status: 'open',
      price: 4400,
    },
    {
      name: 'Under the Sun',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd48.jpg',
      quantity: 10,
      about: 'Artist : Mark Prichard',
      status: 'open',
      price: 4800,
    },
    {
      name: 'Reginald Omas Mamonde IV',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd46.jpg',
      quantity: 10,
      about: 'Artist : Reginald Omas Mamonde IV',
      status: 'open',
      price: 4900,
    },
    {
      name: 'Wildflower',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd42.jpg',
      quantity: 10,
      about: 'Artist : Avalanches',
      status: 'open',
      price: 4200,
    },
    {
      name: 'Pink Floyd’s Wish You Were Here Symphonic',
      imageUrl: 'https://themomentum.co/wp-content/uploads/2016/12/cd38.jpg',
      quantity: 10,
      about: 'Artist : London Orion Orchestra',
      status: 'open',
      price: 4500,
    },
  ]
  }),
  actions: {
    filterProducts(searchText) {
      return this.list.filter(product => product.name.includes(searchText))
    }
  }
})