export default {
  state: {
    arr:[10,20,30]
  },
  actions: {
    push(newState:{arr:number[]},action:{type:string,val:number}) {
      newState.arr.push(action.val)
    }
  },
  push:"push",
}