import Compo1 from "@/components/Compo1"
import Compo2 from "@/components/Compo2"
// antd样式
import "antd/dist/reset.css"
import { Button } from 'antd'
import { UpCircleFilled } from "@ant-design/icons"
 
export default function App() {
  return (
    <>
      顶级组件
      <Button type="primary">这是一个按钮</Button>
      <UpCircleFilled style={ { fontSize:'40px', color: 'red'}}/>
      <Compo1/>
      <Compo2/>
    </>
  )
}
