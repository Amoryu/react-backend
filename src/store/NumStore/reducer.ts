import handleNum from "./index"

let reducer = (state = {...handleNum.state},action:{type:string,val:any}) => {
  let newState = JSON.parse(JSON.stringify(state))
  console.log('执行了reducer')

  switch (action.type) {
    case handleNum.add1:
      handleNum.actions.add1(newState, action)
      break;
    case handleNum.add2:
      handleNum.actions.add2(newState,action)
      break;
    default:
      break;
  }

  return newState

}

export default reducer