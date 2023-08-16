import { useSelector,useDispatch } from "react-redux"


export default function About() {
  const {num} = useSelector((state: RootState) => ({
    num:state.handleNum.num
  }))
  const dispatch = useDispatch()
  const changeNum = () => {
    // dispatch({type:'add1'})
    dispatch({type:'add2',val: 10})
  }
  return (
    <div>
      About
      <p>仓库数据：{num}</p>
      <button onClick={changeNum}>num + 1</button>
    </div>
  )
}
