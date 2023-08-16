import handleArr from "./index"

let reducer = (state = {...handleArr.state},action:{type:string,val:any}) => {
  let newState = JSON.parse(JSON.stringify(state))
  console.log('执行了reducer')

  switch (action.type) {
    case handleArr.push:
      handleArr.actions.push(newState,action)
      break;
    default:
      break;
  }

  return newState

}

export default reducer