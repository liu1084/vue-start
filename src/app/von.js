/**
 * Created by jim on 2017/5/25.
 *
 */
var app = new Vue({
	el: '#app',
	data: function(){
		return {
			todos: [
				{id: 1, text: 'java'},
				{id: 2, text: 'javascript'},
				{id: 3, text: '设计模式'}
			]
		}
	},
	methods: {
		remove: function(id){
			var _todos = this.todos;
			for (var i = 0; i < _todos.length; i++){
				if (id == _todos[i].id){
					_todos.splice(i,  1);
				}
			}
		},
		add: function(){
			var newTodo = {id: Math.random(), text: new Date().getTime()};
			this.todos.push(newTodo);
		},
		reverseText: function(id){
			for (var i = 0; i < this.todos.length; i++){
				if (id == this.todos[i].id){
					var text = this.todos[i].text + ""; //因为这里的时间戳是数字,没有reverse()方法,所以需要把它转换为字符串
					this.todos[i].text = text.split('').reverse().join('');
				}
			}
		}
	}
});