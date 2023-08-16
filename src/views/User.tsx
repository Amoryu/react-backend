import { useSelector,useDispatch } from 'react-redux'
export default function User() {
  const {arr} = useSelector((state: RootState) => ({
    arr:state.handleArr.arr
  }))
  const dispatch = useDispatch()
  const changeArr = () => {
    dispatch({type:'push',val: 1027})
  }
  return (
    <div>
      User组件
      <p>仓库数据：{arr}</p>
      <button onClick={changeArr}>arr.push</button>
    </div>
  )
}
