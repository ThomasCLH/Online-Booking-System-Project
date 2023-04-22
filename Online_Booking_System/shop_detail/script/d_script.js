function info()
{
	document.getElementById('info_c').style.display = 'block';
	document.getElementById('cmt_c').style.display = 'none';
	document.getElementById('book_c').style.display = 'none';
}

function cmt()
{
	document.getElementById('info_c').style.display = 'none';
	document.getElementById('cmt_c').style.display = 'block';
	document.getElementById('book_c').style.display = 'none';
}

function book()
{
	document.getElementById('info_c').style.display = 'none';
	document.getElementById('cmt_c').style.display = 'none';
	document.getElementById('book_c').style.display = 'block';
	document.getElementById('book_f').style.display = 'grid';
	document.getElementById('book_conf').style.display = 'none';
}

function confirmed()
{
	document.getElementById('book_f').style.display = 'none';
	document.getElementById('book_conf').style.display = 'block';
	conf_d.innerHTML="Your booking date is: " + document.getElementById('booking_d').value;
	conf_t.innerHTML="Your booking time is: " + document.getElementById('booking_t').value;
}