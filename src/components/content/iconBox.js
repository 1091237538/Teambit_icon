import React from 'react'
import '../../css/iconbox.scss'
import Selecticon from './selecticon'
import Searchicon from '../common/search'
import Addicon from './addicon'
import Editinfo from './editInfo'
import Removeicon from './removeicon'
class Iconbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addState: false,
            editState: false,
            removeState: false,
            inputInfo: "",
            tagInfo: ""
        }
    }
    render() {
        if (this.state.addState) {    //进入添加模块
            return (
                <div className='icon_box' style={{ display: this.props.active_keys }}>
                    <Searchicon setModule={this.setModule} addstate={this.state.addState} getInput={this.getInput} />
                    <Addicon setTagmenu={this.props.setTagmenu} textInfo={this.state.inputInfo} setModule={this.setModule} />
                </div>
            )
        } else if (this.state.editState) {   //进入修改模块
            return (
                <div className='icon_box' style={{ display: this.props.active_keys }}>
                    <Editinfo setEdit_module={this.setEdit_module} tagInfo={this.state.tagInfo} update_tag={this.props.update_tag} setRemove_module={this.setRemove_module}/>
                </div>
            )
        } else if (this.state.removeState) {
            return (
                <div className='icon_box' style={{ display: this.props.active_keys }}>
                    <Removeicon setRemove_module={this.setRemove_module} removeInfo = {this.state.tagInfo} update_removeTag={this.props.update_removeTag}/>
                </div>
            )
        } else {
            return (    //进入选择模块
                <div className='icon_box' style={{ display: this.props.active_keys }}>
                    <Searchicon setModule={this.setModule} addstate={this.state.addState} getInput={this.getInput} />
                    <Selecticon selectIcon={this.props.getSelect} newData={this.props.newTags} setEdit_module={this.setEdit_module} getEdit_info={this.getEdit_info} />
                </div>
            )
        }
    }

    //改变添加模块状态
    setModule = (val) => {
        this.setState({
            addState: val
        })
    }
    //改变修改模块状态
    setEdit_module = (val) => {
        this.setState({
            editState: val
        })
    }
    //改变删除模块状态
    setRemove_module = (val) => {
        this.setState({
            removeState: val
        })
    }
    //获取输入框信息
    getInput = (val) => {
        this.setState({
            inputInfo: val
        })
    }
    //获取需要修改的信息
    getEdit_info = (val) => {
        this.setState({
            tagInfo: val
        })
    }
}

export default Iconbox