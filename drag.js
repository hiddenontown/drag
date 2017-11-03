


$(function(){

	$('div').css({width:'100px',height:'100px',background:'red'})

	$('#box').click(function(){
		$(this).css({background:'lightblue'});
	})

	function drag(id) {

		var obj = document.getElementById(id);
		var disX = 0;
		var disY = 0;

		obj.onmousedown = function(){

			disX = ev.pageX - obj.offsetLeft;
			disY = ev.pageY - obj.offsetTop;
		}
	}

})