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
				{id: 3, text: '设计模式'},
			]
		};
	}
});