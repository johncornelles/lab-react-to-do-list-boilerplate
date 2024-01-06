import { Component } from 'react'
import './Todo.css'
export default class Todo extends Component {
    constructor(){
        super()
        this.state = {
            currTask: '',
            taskList: []
        }
    }
    handleChange = (e) => {
        this.setState({
            currTask: e.target.value
        })
    }
    add = () => {
        let {currTask, taskList} = this.state
        if (currTask.trim() != ''){
            let updatedArr = [...taskList, currTask]
            this.setState({
                currTask: '',
                taskList: updatedArr
            })
        }
    }
    delete = (index) => {
        let newARrr = this.state.taskList
        newARrr.splice(index, 1)
        this.setState({
            taskList: newARrr
        })
    }
    update = (index, updatedTask) => {
        let newARrr = this.state.taskList
        newARrr[index] = updatedTask
        this.setState({
            taskList: newARrr
        })
    }

  render() {
    const taskList = this.state.taskList
    return (
        <div>
            <input  
            className='input-container'
            type='text'
            value={this.state.currTask} 
            placeholder='Enter tasks for 2024' 
            onChange={this.handleChange}>
            </input>
            <button className='add-btn btn' onClick={this.add}>Add</button>
            <ul className='list'>
                {
                    taskList.map((item, index) => (
                        <li className='list-item' key={index}>
                            {item}
                            <button className='update-btn btn' onClick={() => this.update(index, prompt('Update please'))}>update</button>
                            <button className='delete-btn btn' onClick={() => this.delete(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
  }
}
