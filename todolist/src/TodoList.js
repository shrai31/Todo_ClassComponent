import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      textValue: "", 
      isedit: false ,
      selectedItem: null
    };
  }

  addValue =(e) => {
    this.setState({
      textValue: e.target.value,
    });
    
}
  addItem=(e) => {
    let itemArray = [...this.state.items];
    itemArray.push(this.state.textValue);
    this.setState({
      items: itemArray,
    });
    // console.log("Item", itemArray);
    this._inputElement.value = "";
  }

    
  deleteItem=(x) => {
    let itemArray = [...this.state.items];
    itemArray.splice(x, 1)
    this.setState({
        items: itemArray,
      });
    //   console.log("Item", itemArray);
  }

  updItem=(index) => {
    this.setState({isedit:true , selectedItem :index})
    
  }
  updating=(e)=>{
    const newData=[...this.state.items]
    newData[this.state.selectedItem]=e.target.value;
    this.setState({
      items : newData,
    });
    // this._inputElement.value = "";
  }
  
  updateItem=()=>{
    this.setState({isedit: false})
   
  }


  render() {
    const condition=this.state.isedit;
    return (
      <>
      { !condition ? 
        <div>
          
          <input
            ref={(a) => (this._inputElement = a)}
            onChange={this.addValue}
          ></input>
          <button onClick={()=>this.addItem()}>add</button>
          
        </div>:
          <div>
          <input value={this.state.items[this.state.selectedItem]}
            onChange={this.updating}
          ></input>
          <button onClick={()=>this.updateItem()}>update</button>
          
        </div>
      }
        <div>
          {/* {console.log("this.state.todoEntries", this.state.todoEntries)} */}
          <ul>
            {this.state.items.map((item, index) => (
              <li key={item}>{item} <button onClick={()=>this.deleteItem(index)}>remove</button>
              <button onClick={()=>this.updItem(index)}>Edit</button>
              </li>
     
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default TodoList;
