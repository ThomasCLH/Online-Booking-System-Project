window.onload = function()
{
	class user
	{
		constructor(id, pass)
		{
			this.id = id;
			this.pass = pass;
		}
		
	}

	const user0 = new user("A", "1");
	const user1 = new user("21088958A", "01234");
	const user2 = new user("21151583A", "56789");
	const user3 = new user("21157028A", "98765");
	const user4 = new user("21010368A", "43210");

	var user_arr=[user0, user1, user2, user3, user4];

	B_Login.onclick = function()
	{

		var c_user = document.getElementById('user_id').value;
		var c_pass = document.getElementById('u_pass').value;

		var temp = search(c_user);
		alert(search(c_user));
		if (temp > -1)
		{
			if(check_pass(temp, c_pass))
			{
				alert("The Login is successfully! It will translate to main page automatically.");
				document.location.href = "MainPage.html";
			}
			else
			{
				alert("The Password is wrong!");
			}
		}
		else
		{
			alert("Can not find the UserID!");
		}
	}
	
	function search(user)
	{
		for (i = 0; i < user_arr.length; i++)
		{		
			if(user_arr[i].id == user)
			{
				return i;
			}
		}
		return -1;
	}

	function check_pass(ac_num, pass)
	{
		if (user_arr[ac_num].pass == pass)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}