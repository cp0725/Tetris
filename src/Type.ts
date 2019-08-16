/*
 * @Author: 常培
 * @Date: 2019-08-11 23:03:12
 * @LastEditTime: 2019-08-11 23:10:34
 * @Description: block
 */
export interface Istructure {
  [x: string]: any
  [index: number]: Array<number>
}

export interface Iblock {
  name: string
  label: string
  width: number
  data: Array<Array<number>>
}