import React from 'react'
import '../../css/selecticon.scss'
import { EditOutlined, CheckOutlined } from '@ant-design/icons'
import { iconList } from '../../data/app_data'
class Selecticon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            iconList: [],
        }
    }
    render() {
        let tagList = this.state.iconList.map((el, index) => {
            return (
                <li key={index}>
                    <span className='circles' style={{ background: el.color }}></span>
                    <span onClick={(e) => this.select(el, e)}>{el.tagName}</span>
                    <EditOutlined className='icons-two' onClick={(e) => this.edit(el)} />
                    <CheckOutlined className={this.props.newData.length > 0 && this.props.newData.includes(el) ? 'icons-three' : 'hide'} />
                </li>
            )
        })
        return (
            <div className='select_box'>
                <ul className='tags'>
                    {tagList}
                </ul>
            </div>
        )
    }
    select = (current_data) => {

        let repeat_keys = this.filter_Tagrepeat(current_data, this.props.newData)
        if (repeat_keys === true) {
            return false
        }
        this.setState({
            random: this.props.newData.push(current_data),
        })
        this.props.selectIcon(this.props.newData)
    }
    componentDidMount() {
        this.setState({
            iconList: iconList,
        })
    }
    //筛选重复选中
    filter_Tagrepeat = (data1, data2) => {
        let repeat_keys = ''
        repeat_keys = data2.some(el => {
            return el.id === data1.id
        })
        return repeat_keys
    }
    //修改数据
    edit = (data) => {
        this.props.setEdit_module(true)  
        this.props.getEdit_info(data)
    }
}

export default Selecticon