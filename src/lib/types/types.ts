import {Collection, Size, Color, Status} from '@lib/enum'

export interface Product {
  id: string
  staticImage: string
  hoverImage: string  
  imageList: string[]
  itemName: string
  description: string
  size: Size[]
  color: Color[]
  productInfo: string[]
  status: Status | ''
  price: string
}

export type Category = Collection.SIGNATURE_COLLECTIONS | Collection.BOUQUETS | Collection.VASES | Collection.BOXES | Collection.DRIED_FLOWERS | ''