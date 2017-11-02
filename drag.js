


$(function(){

	$('div').css({width:'100px',height:'100px',background:'red'})

	$('#box').click(function(){
		$(this).css({background:'lightblue'});
	})

	function drag(id) {
		var obj = document.getElementById(id);
		obj.onmousedown = function(){
			var disX = 0;
			var disY = 0;
		}
	}

})