import React from 'react'
import '../../css/addicon.scss'
import { Button } from 'antd';
import Colorcomponent from '../common/color_component'
import { iconList } from '../../data/app_data'
class Addicon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colorInfo: " "
        }
    }
    render() {
        return (
            <div className='addicon_box'>
                <Colorcomponent getColor={this.getColor_info} />
                <Button type="primary" className='addbtn' onClick={this.addTag}>创建</Button>
            </div>
        )
    }
    //创建tag标签
    addTag = () => {
        let id = Math.floor(Math.random()*10+4)
        let newTag_data = {
            id,
            tagName: this.props.textInfo,
            color: this.state.colorInfo
        }
        this.props.setTagmenu(newTag_data)
        this.props.setModule(false)
        document.getElementsByClassName('input-control')[0].value = ''
        iconList.push(newTag_data)
    }
    //获取颜色信息
    getColor_info = (val) => {
        this.setState({
            colorInfo: val
        })
    }
}


export default Addicon