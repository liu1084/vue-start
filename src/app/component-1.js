/**
 * Created by jim on 2017/5/25.
 *
 */

//var Roster = function(){};
//Roster.constructor = new Vue({});
//Roster.prototype = {
//	template: '<ul><li v-for="m in message"><button v-on:click="handleClick(m)">{{m}}</button></li></ul>',
//	props: ['message'],
//	methods: {
//		handleClick: function(m){
//			console.log(m);
//		}
//	}
//};

var component2 = {
	template: '<ul><li v-for="m in message"><button v-on:click="handleClick(m)">{{m}}</button></li></ul>',
	props: ['message'],
	methods: {
		handleClick: function(m){
			console.log(m);
		}
	}
};

var component1 = Vue.extend({
	data: function(){
		return {
			message: [0, 1]
		};
	},
	components: {
		'roster': component2
	},
	template: '<roster v-bind:message="message"></roster>'
});

var vm = new component1({
	el: '#app'
});

Vue.component('global-component', component1);