/*
 * @Author: 常培
 * @Date: 2019-08-11 15:00:17
 * @LastEditTime: 2019-08-14 21:05:39
 * @Description: Canvas.ts
 */
import { Istructure} from './Type.ts'
class Canvas {
  readonly x: number
  readonly y: number
  structure: Istructure = []
  fallData: Istructure = []
  constructor(x: number, y: number) { // 构造函数
    this.x = x
    this.y = y
    this.fallData = []
    console.log('画布初始化')
  }
  initStructure(blockList: Array<Array<number>>): void {
    this.structure = []
    const aaa = this.fallData.concat(blockList)
    for (let i = 0; i < this.y; i++){
      let row = []
      for (let j = 0; j < this.x; j++) {
        let status = aaa.some(item => item[0] === i && item[1] === j)
        status ? row.push(1) : row.push(0)
      }
      this.structure.push(row)
    }
    this.renderCanvas()
  }
  renderCanvas(): void {
    const Wrap: any = document.querySelector('#tetris-canvas')
    const DIV = document.createElement('div')
    this.structure.map((row: number[]) => {
      const P = document.createElement('p')
      row.map((item: number) => {
        const I = document.createElement('i')
        if (item === 1) I.className = 'block'
        P.appendChild(I)
      })
      DIV.appendChild(P)
    })
    Wrap.innerHTML = ''
    Wrap.appendChild(DIV)
  }
}
export default Canvas

