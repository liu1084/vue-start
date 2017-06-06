/**
 * Created by jim on 2017/5/26.
 *
 */
	var aComponent = {
		template: '<a href="#" :data-user-id="user.id" @click.prevent="edit()">click me</a>',
		props: ['user'],
		methods: {
			edit: function () {
				this.user1.id = 501;
				console.log('edit user:' + this.user1.id + ":" + this.user.id + ":" + this.computeUserId);
			}
		},
		data: function(){
			return {
				user1: Object.assign({}, this.user)
			};
		},
		computed: {
			computeUserId: function(){
				return this.user.id.toString().split('').reverse().join('');
			}
		}
	};
	var vm = new Vue({
		data: function () {
			return {
				//v-html可以渲染msg为纯html,但是无法进行数据绑定和事件触发
				msg: '<a href="#" :data-user="user" @click.prevent="edit()">click me</a>',
				user: {id: 201}
			};
		},
		components: {
			aa: aComponent
		},
		el: '#app'
	});