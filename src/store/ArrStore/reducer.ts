import handler from "./index"

let reducer = (state = {...handler.state},action:{type:string,val:any}) => {
  let newState = JSON.parse(JSON.stringify(state))

  // 每次有新方法需要手动配置case进行调用，重复代码过多
  // switch (action.type) {
  //   case handler.push:
  //     handler.actions.push(newState,action)
  //     break;
  //   default:
  //     break;
  // }

  // 优化switch case,实现自动调用函数
  handler.actions[action.type] && handler.actions[action.type](newState, action)
  
  return newState

}

export default reducer