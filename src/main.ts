/*
 * @Author: 常培
 * @Date: 2019-08-11 13:50:43
 * @LastEditTime: 2019-08-11 22:35:19
 * @Description: main.ts
 */

import gameTetris from './gameTetris.ts'
// import Canvas from './canvas.ts'

// const canvas = new Canvas(20, 28)
const GameTetris = new gameTetris(20, 28)


// 热更新
declare const module: any
// module.hot && module.hot.accept()