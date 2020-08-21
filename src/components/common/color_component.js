import React from 'react'
import colorList from '../../data/color_data'
import '../../css/color_cop.scss'
import { CheckOutlined } from '@ant-design/icons'
class Colorcomponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            select_color: ''
        }
    }
    render() {
        let color_lis = colorList.map(el => {
            return (
                <li style={{ background: el.color }} key={el.id} onClick={(e) => this.selectColor(el)}>
                    <CheckOutlined className={this.state.select_color === el.color ? 'color-icons' : 'hide'} />
                </li>
            )
        })
        return (
            <ul ccd lassName='color_box'>
                {color_lis}
            </ul>
        )
    }
    //选择颜色
    selectColor = (el) => {
        this.setState({
            select_color: el.color
        })
        if (this.props.getColor) {
            this.props.getColor(el.color)
        }
        if(this.props.getEdit_color) {
            this.props.getEdit_color(el.color)
        }
    }
    componentDidMount(){
        if(this.props.defaultColor){
            this.setState({
                select_color:this.props.defaultColor
            })
        }
    }
}

export default Colorcomponent