var React = require('react');
var TodoList = require('TodoList');
var AddToDo = require('AddToDo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },{
          id: 2,
          text: 'Clean the yard'
        },{
          id: 3,
          text: 'Write the code'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
    <div>
      <TodoList todos={todos} />
      <AddToDo onAddTodo={this.handleAddTodo}/>
    </div>
  )
  }
});

module.exports = TodoApp;
