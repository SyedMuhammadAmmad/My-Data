
	function add(a,b){
		return a/1 + b/1;
	}
	// $("#input1").click(function(){
	// 	inpt1=$("#input1").val(1)

	// });
	// 	$("#input2").click(function(){
	// 	inpt2=$("#input2").val(2)
	// });
	
	$(".result").click(function(){
		inp = $("#input1").val();
		inp1 = $("#input2").val();
		$('#input3').val(add(inp,inp1));
	});
	// 	<input type="text" id="input1"  name=""><br>
	// <input type="text" id="input2"  name=""><br>
	// <!-- <button onclick="myFunction()">1</button -->
	// <input type="text" id="input3" name=""><br>
	// <button class="result">add</button>
