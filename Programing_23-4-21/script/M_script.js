
window.onload = function()
{
	class rest
	{
		constructor(img, name, web)
		{
			this.img = img;
			this.name = name;
			this.web = web;
		}
	}

	const mc = new rest('img/mc.png', "McDonald's", "shop_detail/mc_rest_d.html")
	const kfc = new rest('img/kfc.png', "KFC", "shop_detail/kfc_rest_d.html")
	const subway = new rest('img/subway.png', "Subway", "shop_detail/subway_rest_d.html")
	const pizzahut = new rest('img/pizzahut.png', "Pizza Hut", "shop_detail/pizzahut_rest_d.html")
	const burgerking = new rest('img/burgerking.png', "Burger King", "shop_detail/burgerking_rest_d.html")

	var rest_arr = [mc, kfc, subway, pizzahut, burgerking]

	var box_pointer = 0;

	function init() 
	{
		var temp1 = box_pointer%5;
		box1_img.src = rest_arr[temp1].img;
		box1_name.innerHTML = rest_arr[temp1].name;
	
		var temp2 = (box_pointer+1)%5;
		box2_img.src = rest_arr[temp2].img;
		box2_name.innerHTML = rest_arr[temp2].name;
	
		var temp3 = (box_pointer+2)%5;
		box3_img.src = rest_arr[temp3].img;
		box3_name.innerHTML = rest_arr[temp3].name;

		var temp4 = (box_pointer+3)%5;
		box4_img.src = rest_arr[temp4].img;
		box4_name.innerHTML = rest_arr[temp4].name;	
	}	

	forward.onclick = function()
	{
		box_pointer ++;
		if (box_pointer == rest_arr.length)
		{
			box_pointer = 0;
		}	
		init();
	}

	back.onclick = function()
	{
		box_pointer --;
		if (box_pointer == -1)
		{
		box_pointer = rest_arr.length-1;
		}	
		init();
	}
	
	box1_img.onclick = function()
	{
		var temp = box_pointer%5;
		document.location.href = rest_arr[temp].web;
	}
	
	box2_img.onclick = function()
	{
		var temp = (box_pointer+1)%5;
		document.location.href = rest_arr[temp].web;
	}
	
	box3_img.onclick = function()
	{
		var temp = (box_pointer+2)%5;
		document.location.href = rest_arr[temp].web;
	}
	
	box4_img.onclick = function()
	{
		var temp = (box_pointer+3)%5;
		document.location.href = rest_arr[temp].web;
	}
	
	init();
}