import handler from "./index"

let reducer = (state = {...handler.state},action:{type:string,val:any}) => {
  let newState = JSON.parse(JSON.stringify(state))

  // 每次有新方法需要手动配置case进行调用，重复代码过多
  // switch (action.type) {
  //   case handler.add1:
  //     // handler.actions.add1(newState, action)
  //     console.log(action.type)
  //     break;
  //   case handler.add2:
  //     handler.actions.add2(newState,action)
  //     break;
  //   default:
  //     break;
  // }
  // console.log(handler.actions,"-------",action)

  // 优化switch case,实现自动调用函数
  handler.actions[action.type] && handler.actions[action.type](newState, action)
  
  return newState

}

export default reducer


let obj = {
  arr() {

  },
  git() {

  }
}
let arr = Object.keys(obj)
console.log(arr)