// Sliding Menu
var menu_state = false;
		
		function slide(){
			if(menu_state === false){
				MenuOpen();
			} else {
				MenuClose();
			}
		}
		
		function MenuOpen() {
			document.querySelector("#sliding").style.left = "10px";
			menu_state = true;
		}
		
		function MenuClose() {
			document.querySelector("#sliding").style.left = "-200px";
			menu_state = false;
		}