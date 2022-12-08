import React from "react";
import './index.css';

class TodoList extends React.Component { 

    render() {
        return (
            <ol>
                {
                    this.props.items.map(item => (
                        <li key={item.id}>
                            {item.text}
                            <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden"></span> 
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden"></span>
            </button>
            <button type="button" className="btn btn__danger">
              Complete <span className="visually-hidden"></span>
            </button>
          </div>
                        </li>
                    ))
                }
            </ol>
        );
    }
}

class Todo extends React.Component {

    constructor(props) { 
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    render() {
        return (
            <div>
                <h2>TODO</h2>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new todo">what needs to be done?
                    </label>
                    <input id="new todo" onChange={this.handleChange}
                        value={this.state.text} />
                    <button> Add #{this.state.items.length + 1}</button>
                </form>
            </div>
        );
    }

     handleChange(e) {
        this.setState({ text: e.target.value });
    }

     handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length == 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}


export default Todo;
