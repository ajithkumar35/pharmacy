
function flip_display(filter)
{
	console.log(filter.value + " set to " + filter.checked);

	if(filter.checked)
	{
		$("." + filter.value).show();
		
		$("#data_count").html($('tr:visible').length - 1);
	}
	else
	{
		$("." + filter.value).hide();
		
		$("#data_count").html($('tr:visible').length - 1);
	}
}