/*
 * @Author: 常培
 * @Date: 2019-08-11 21:17:40
 * @LastEditTime: 2019-08-11 23:47:36
 * @Description: block
 */
import { Iblock } from './Type.ts'
const blockConfig = [
  {
    name: 'flat',
    label: '横条',
    width: 4,
    data(center: number){
      return [
        [0, center],
        [0, center + 1],
        [0, center + 2],
        [0, center + 3]
      ]
    }
  },
  {
    name: 'vertical',
    label: '竖条',
    width: 1,
    data(center: number) {
      return [
        [0, center],
        [1, center],
        [2, center],
        [3, center]
      ]
    }
  },
  {
    name: 'square',
    label: '方块',
    width: 2,
    data(center: number) {
      return [
        [0, center],
        [0, center + 1],
        [1, center],
        [1, center + 1]
      ]
    }
  },
  {
    name: 'downT',
    label: '倒T',
    width: 3,
    data(center: number) {
      return [
        [0, center + 1],
        [1, center],
        [1, center + 1],
        [1, center + 2]
      ]
    }
  },
  {
    name: 'back7',
    label: '反7',
    width: 2,
    data(center: number) {
      return [
        [0, center],
        [0, center + 1],
        [1, center],
        [2, center]
      ]
    }
  },
  {
    name: 'upright7',
    label: '正7',
    width: 2,
    data(center: number) {
      return [
        [0, center],
        [0, center + 1],
        [1, center + 1],
        [2, center + 1]
      ]
    }    
  },
  {
    name: 'zShape',
    label: 'z形',
    width: 3,
    data(center: number) {
      return [
        [0, center],
        [0, center + 1],
        [1, center + 1],
        [1, center + 2]
      ]
    }
  }
]

class Block implements Iblock {
  name: string
  label: string
  width: number
  data: Array<Array<number>>
  constructor(x: number){
    const index: number = parseInt((Math.random() * 7) as unknown as string)
    const block = blockConfig[index]
    const center = Math.floor((x - block.width) / 2)
    this.name = block.name
    this.label = block.label
    this.width = block.width
    this.data = block.data(center)
  }
}
export default Block