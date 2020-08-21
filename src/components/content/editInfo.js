import React from 'react'
import '../../css/editinfo.scss'
import { Divider, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons'
import Colorcomponent from '../common/color_component'
import { iconList } from '../../data/app_data'
class Editinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editColor: ""
        }
    }
    render() {
        return (
            <div className='edit_box'>
                <div className='edit_title'>编辑标签
                    <CloseOutlined className='edit-icons' onClick={this.closeEdit_module} />
                </div>
                <Divider />
                <input className='edit-input' placeholder='请输入标签名' />
                <Colorcomponent getEdit_color={this.getEdit_color} defaultColor={this.props.tagInfo.color} />
                <div className='edit-btns'>
                    <Button danger onClick={this.swRemove_module}>删除</Button>
                    <Button type='primary' onClick={this.submitInfo}>完成</Button>
                </div>
            </div>
        )
    }
    //提交修改后的数据
    submitInfo = () => {
        let newTag_data = {
            id: this.props.tagInfo.id,
            tagName: document.querySelector('.edit-input').value,
            color: this.state.editColor ? this.state.editColor : this.props.tagInfo.color
        }
        let edit_index = ''
        iconList.filter((el, index) => {
            if (el.id === newTag_data.id) {
                edit_index = index
            }
        })
        iconList.splice(edit_index, 1, newTag_data)
        this.closeEdit_module()
        this.props.update_tag(newTag_data)
    }
    //获取修改后的颜色
    getEdit_color = (val) => {
        this.setState({
            editColor: val
        })
    }
    //关闭当前模块
    closeEdit_module = () => {
        this.props.setEdit_module(false)
    }
    componentDidMount() {
        document.querySelector('.edit-input').value = this.props.tagInfo.tagName
    }

    //切换到删除模块
    swRemove_module = () => {
        this.closeEdit_module()
        this.props.setRemove_module(true)
    }
}
let newTag_list = []
export { newTag_list }

export default Editinfo