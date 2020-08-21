import React from 'react'
import { Divider, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons'
import '../../css/removeicon.scss'
import { iconList } from '../../data/app_data'
class Removeicon extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='remove_box'>
                <div className='remove_title'>删除标签
                    <CloseOutlined className='remove-icons' onClick={this.closeRemove_module} />
                </div>
                <Divider />
                <div className='tip_text'>
                    确认删除标签?
                </div>
                <Button className='remove-btn' type="primary" danger onClick={this.remove}>删除</Button>
            </div>
        )
    }
    //关闭当前模块
    closeRemove_module = () => {
        this.props.setRemove_module(false)
    }
    //删除
    remove = () => {
        let removeIndex = ''
        iconList.some((el, index) => {
            if (el.id === this.props.removeInfo.id) {
                removeIndex = index
            }
        })
        iconList.splice(removeIndex,1)
        this.props.update_removeTag(this.props.removeInfo)
        this.closeRemove_module()
    }
}

export default Removeicon