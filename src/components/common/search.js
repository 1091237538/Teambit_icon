import React from 'react'
import '../../css/searchicon.scss'
import { PlusCircleOutlined } from '@ant-design/icons'
class Searchicon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '123'
        }
    }
    render() {
        return (
            <div className='icon-search'>
                <input placeholder="搜索标签" className='input-control' onInput={(e) => this.setInput(e)}  />
                <PlusCircleOutlined className='icons' />
            </div>
        )
    }
    //监听输入内容改变创建模块状态
    setInput = (e) => {
        if (this.props.addstate !== true) {   //避免重复触发改变状态
            this.props.setModule(true)
        }
        this.props.getInput(e.target.value)
    }
}
export default Searchicon