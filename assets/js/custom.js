
$(".basic").spectrum();
$(".basic-background").spectrum({
	preferredFormat: "hex",
	showInput: true,
	showPalette: true,
	color: 'rgb(245, 6, 3)',
	palette: [
		['rgb(22, 2, 3)', 'rgb(10, 2, 0)', 'rgb(103, 86, 42)', 'rgb(255, 255, 255)'],
		['rgb(251, 177, 18)', 'rgb(200, 169, 78)', 'rgb(192,192,192)', 'rgb(242, 33, 3)'],
		['rgb(245, 6, 3)', 'rgb(0, 0, 0)', 'rgb(39, 59, 190)', 'rgb(252, 8, 10)'],
	],
	chooseText: "Set Color"
});

$(".basic-background").on('move.spectrum', function (e, tinyColor) {
	var hexVal_back = tinyColor.toHexString();
	var color_back = document.getElementById('resumepanel');
	color_back.style.backgroundColor = hexVal_back;
});

$(".basic-menutext").spectrum({
	preferredFormat: "hex",
	showInput: true,
	showPalette: true,
	color: 'rgb(255, 255, 255)',
	palette: [
		['rgb(22, 2, 3)', 'rgb(10, 2, 0)', 'rgb(103, 86, 42)', 'rgb(255, 255, 255)'],
		['rgb(251, 177, 18)', 'rgb(200, 169, 78)', 'rgb(192,192,192)', 'rgb(242, 33, 3)'],
		['rgb(245, 6, 3)', 'rgb(0, 0, 0)', 'rgb(39, 59, 190)', 'rgb(252, 8, 10)'],
	],
	chooseText: "Set Color"
});

$(".basic-menutext").on('move.spectrum', function (e, tinyColor) {
	var hexVals_menu = tinyColor.toHexString();
	var color_menu = document.getElementById('menu-text');
	color_menu.style.color = hexVals_menu;
	var hexVals_menu_1 = tinyColor.toHexString();
	var color_menu_1 = document.getElementById('menu-texts');
	color_menu_1.style.color = hexVals_menu_1;
});

$(".basic-name").spectrum({
	preferredFormat: "hex",
	showInput: true,
	showPalette: true,
	color: 'rgb(255, 255, 255)',
	palette: [
		['rgb(22, 2, 3)', 'rgb(10, 2, 0)', 'rgb(103, 86, 42)', 'rgb(255, 255, 255)'],
		['rgb(251, 177, 18)', 'rgb(200, 169, 78)', 'rgb(192,192,192)', 'rgb(242, 33, 3)'],
		['rgb(245, 6, 3)', 'rgb(0, 0, 0)', 'rgb(39, 59, 190)', 'rgb(252, 8, 10)'],
	],
	chooseText: "Set Color"
});

$(".basic-name").on('move.spectrum', function (e, tinyColor) {
	var hexVals_name = tinyColor.toHexString();
	var color_name = document.getElementById('name-color');
	color_name.style.color = hexVals_name;
});

$(".basic-designation").spectrum({
	preferredFormat: "hex",
	showInput: true,
	showPalette: true,
	color: 'rgb(255, 255, 255)',
	palette: [
		['rgb(22, 2, 3)', 'rgb(10, 2, 0)', 'rgb(103, 86, 42)', 'rgb(255, 255, 255)'],
		['rgb(251, 177, 18)', 'rgb(200, 169, 78)', 'rgb(192,192,192)', 'rgb(242, 33, 3)'],
		['rgb(245, 6, 3)', 'rgb(0, 0, 0)', 'rgb(39, 59, 190)', 'rgb(252, 8, 10)'],
	],
	chooseText: "Set Color"
});

$(".basic-designation").on('move.spectrum', function (e, tinyColor) {
	var hexVals_designation = tinyColor.toHexString();
	var color_designation = document.getElementById('designation-color');
	color_designation.style.color = hexVals_designation;
});

$(".basic-contact").spectrum({
	preferredFormat: "hex",
	showInput: true,
	showPalette: true,
	color: 'rgb(255, 255, 255)',
	palette: [
		['rgb(22, 2, 3)', 'rgb(10, 2, 0)', 'rgb(103, 86, 42)', 'rgb(255, 255, 255)'],
		['rgb(251, 177, 18)', 'rgb(200, 169, 78)', 'rgb(192,192,192)', 'rgb(242, 33, 3)'],
		['rgb(245, 6, 3)', 'rgb(0, 0, 0)', 'rgb(39, 59, 190)', 'rgb(252, 8, 10)'],
	],
	chooseText: "Set Color"
});

$(".basic-contact").on('move.spectrum', function (e, tinyColor) {
	var hexVals_contact = tinyColor.toHexString();
	var color_contact = document.getElementById('contact-button');
	color_contact.style.backgroundColor = hexVals_contact;
});

$(".basic-buttontext").spectrum({
	preferredFormat: "hex",
	showInput: true,
	showPalette: true,
	color: 'rgb(245, 6, 3)',
	palette: [
		['rgb(22, 2, 3)', 'rgb(10, 2, 0)', 'rgb(103, 86, 42)', 'rgb(255, 255, 255)'],
		['rgb(251, 177, 18)', 'rgb(200, 169, 78)', 'rgb(192,192,192)', 'rgb(242, 33, 3)'],
		['rgb(245, 6, 3)', 'rgb(0, 0, 0)', 'rgb(39, 59, 190)', 'rgb(252, 8, 10)'],
	],
	chooseText: "Set Color"
});

$(".basic-buttontext").on('move.spectrum', function (e, tinyColor) {
	var hexVals_contact_text = tinyColor.toHexString();
	var color_contact_text = document.getElementById('contact-text');
	color_contact_text.style.color = hexVals_contact_text;
});



function openTitle(evt, titleName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(titleName).style.display = "block";
  evt.currentTarget.className += " active";
}