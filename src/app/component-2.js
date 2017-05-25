/**
 * Created by jim on 2017/5/25.
 *
 */
var TodoItem = {
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
};

//注册一个全局组件
// Vue.component('todo-item', TodoItem);
var data = {
	todos: [
		{id: 1, text: 'lorem1'},
		{id: 2, text: 'lorem2'}
	]
};
var vm = new Vue({
	data: function () {
		return data;
	},
	components: {
		'todo-item': TodoItem //注册一个本地组件
	},
	beforeMount: function(){
		console.log('before mount 1');
	}
});

vm.beforeMount = function(){
	console.log('before mount 2');
};
vm.$mount(document.getElementById('app'));
//var appOuterHTML = document.getElementById('app').outerHTML;
//console.log(appOuterHTML);
vm.$destroy();
