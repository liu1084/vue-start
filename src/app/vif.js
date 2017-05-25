/**
 * Created by jim on 2017/5/25.
 *
 */
var show = "show me";
var hide = "if seen is not true";
var app = new Vue({
	el: '#app',
	data: function(){
		return {
			seen: true,
			show: show,
			hide: hide
		}
	}
});