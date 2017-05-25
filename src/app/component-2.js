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
	/**
	 * vue的生命周期
	 * beforeCreate: Called synchronously after the instance has just been initialized, before data observation and event/watcher setup.
	 * created: Called synchronously after the instance is created. At this stage, the instance has finished processing the options which means the following have been set up: data observation, computed properties, methods, watch/event callbacks. However, the mounting phase has not been started, and the $el property will not be available yet.
	 * beforeMount: Called right before the mounting begins: the render function is about to be called for the first time.
	 * mounted: Called after the instance has just been mounted where el is replaced by the newly created vm.$el.
	 * beforeUpdate: Called when the data changes, before the virtual DOM is re-rendered and patched.
	 * updated: Called after a data change causes the virtual DOM to be re-rendered and patched.
	 */
	beforeCreate: function(){

	},
	created: function(){},
	beforeMount: function(){
		console.log('before mount 1');
	},
	mounted: function(){},
	beforeUpdate: function(){},
	updated: function(){},
	beforeDestroy: function(){},
	destroyed: function(){}
});

vm.beforeMount = function(){
	console.log('before mount 2');
};
vm.$mount(document.getElementById('app'));
//var appOuterHTML = document.getElementById('app').outerHTML;
//console.log(appOuterHTML);
vm.$destroy();
