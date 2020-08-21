import React from 'react'
import '../../css/control.scss'
import IconBox from './iconBox'
import { CloseCircleOutlined, ArrowDownOutlined } from '@ant-design/icons'

class Control extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            iconBox_keys: true,
            display: 'none',
            tags: []
        }
    }
    render() {
        if (this.state.tags.length <= 0) {
            return (
                <div className='box'>
                    <div><ArrowDownOutlined />点击此处</div>
                    <div className='activeColor' onClick={this.openIcon} >添加标签</div>
                    <IconBox active_keys={this.state.display} getSelect={this.getSelectIcon} newTags={this.state.tags} setTagmenu={this.setTagmenu} update_tag={this.update_tag} update_removeTag={this.update_removeTag}></IconBox>
                </div>
            )
        } else {
            let tagList = this.state.tags.map((el, index) => {
                return (
                    <li key={index} className='tag_style' style={{ background: el.color }}>{el.tagName}
                        <CloseCircleOutlined className='close' onClick={(e) => this.close(el, e)} />
                    </li>
                )
            })
            return (
                <div className='box'>
                    <ul className='tagMenu'>{tagList}</ul>
                    <IconBox active_keys={this.state.display} getSelect={this.getSelectIcon} newTags={this.state.tags} setTagmenu={this.setTagmenu} update_tag={this.update_tag} update_removeTag={this.update_removeTag}></IconBox>
                </div>
            )
        }
    }
    //打开搜索框
    openIcon = () => {
        this.setState({
            iconBox_keys: !this.state.iconBox_keys,
            display: this.state.iconBox_keys ? 'block' : 'none'
        })
    }

    //获取选中的标签
    getSelectIcon = (data) => {
        this.setState({
            tags: data
        })
    }
    //关闭标签
    close = (current_tag) => {
        this.filter_Tagfn(current_tag)
    }

    //筛选标签方法
    filter_Tagfn = (data) => {
        let newArr = this.state.tags.filter(el => {
            if (el.id !== data.id) {
                return el
            }
        })
        this.setState({
            tags: newArr
        })
    }

    //创建一个标签并添加到tag菜单上
    setTagmenu = (val) => {
        this.setState({
            tag: this.state.tags.push(val)
        })
    }
    //更新修改后的tag菜单
    update_tag = (val) => {
        if (this.state.tags.length >= 0) {
            let newTag = this.state.tags.map(el => {
                if (el.id === val.id) {
                    return el = val
                }
                return el
            })
            this.setState({
                tags: newTag
            })
        }
    }
    //更新删除后的tag菜单
    update_removeTag = (val) => {
        if (this.state.tags.length >= 0) {
            let newTag = this.state.tags.filter(el => {
                if (el.id !== val.id) {
                    return el
                }
            })
            console.log(newTag)
            this.setState({
                tags: newTag
            })
        }
    }
}


export default Control