import handleNum from "./index"

let reducer = (state = {...handleNum.state},action:{type:string,val:any}) => {
  let newState = JSON.parse(JSON.stringify(state))
  console.log('执行了reducer',action.type)

  // 每次有新方法需要手动配置case进行调用，重复代码过多
  // switch (action.type) {
  //   case handleNum.add1:
  //     // handleNum.actions.add1(newState, action)
  //     console.log(action.type)
  //     break;
  //   case handleNum.add2:
  //     handleNum.actions.add2(newState,action)
  //     break;
  //   default:
  //     break;
  // }
  // console.log(handleNum.actions,"-------",action)

  // 优化switch case,实现自动调用函数
  handleNum.actions[action.type] && handleNum.actions[action.type](newState, action)
  
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