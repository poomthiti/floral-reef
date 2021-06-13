import {FlowerImageList} from './imageData'

type size = 'S' | 'M' | 'L' | 'XL'

interface Product {
  staticImage: string
  hoverImage: string  
  imageList: string[]
  itemName: string
  description: string
  size: size[]
  color: string[]
  productInfo: string[]
  status: 'Best Seller' | 'New in' | ''
  price: string
}

interface Data {
  category: string
  products: Product[]
}

export const flowerData: Data[] = [
  {
    category: 'Signature Collections',
    products: [
      {
        staticImage: FlowerImageList.SKU1[0],
        hoverImage: FlowerImageList.SKU1[1],
        imageList: FlowerImageList.SKU1,
        itemName: ,
        description: ,
        size: ['S','M'],
        color: ,
        productInfo: ,
        status: '',
        price: ,
      },
    ]
  },
  {
    category: 'Bouquets',
    products: []
  },
  {
    category: 'Vases',
    products: []
  },
  {
    category: 'Boxes',
    products: []
  },
  {
    category: 'Dried Flowers',
    products: []
  },
]