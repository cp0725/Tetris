/*
 * @Author: 常培
 * @Date: 2019-08-11 22:33:41
 * @LastEditTime: 2019-08-16 22:51:09
 * @Description: 
 */
import Canvas from './canvas.ts'
import block from './block.ts'
import { Iblock } from './Type.ts'

class GameTetris extends Canvas{
  fallData: any
  [x: string]: any
  block: Iblock
  constructor(x: number, y: number) {
    super(x, y)
    this.bindEvent()
    this.newBlock()
    this.lower()
  }
  newBlock(): void {
    this.block = new block(this.x)
    this.initStructure(this.block.data)
    console.log( this.block )
  }
  lower(): void {
    setInterval((_e: any) => {
      this.block.data.map((item: number[]) => {
        item[0] = item[0] + 1
      })
      this.inspectCollision() // 检查碰撞
      this.initStructure(this.block.data) // 渲染画布
    }, 300)
  }
  bindEvent(): void {
    window.onkeydown = evt => {
      switch (evt.keyCode) {
        case 37:
          this.blockMove('x', -1, '左')
          break
        case 38:
          this.blockMove('y', 1, '上')
          break
        case 39:
          this.blockMove('x', 1, '右')
          break
        case 40:
          this.blockMove('y', -1, '下')
          break
      }
    }
  }
  blockMove(direction: 'x' | 'y', step: number, explain: string): void {
    this.block.data.map((item: number[]) => {
      item[1] = item[1] + step
    })
  }
  inspectCollision(): void {
    const bottomStatus: boolean = this.block.data.some((item: number[]) => item[0] + 1 === this.y)
    const meetStatus: boolean = this.fallData.some((item: number[]) => {
      return this.block.data.some((i: number[]) => {
        return i[0] + 1 === item[0] && i[1] === item[1]
      })
    })

    if (bottomStatus || meetStatus){
      this.fallData = this.fallData.concat(this.block.data)
      this.block = new block(this.x)
    }
  }
  
}
// 开始绑定事件
export default GameTetris