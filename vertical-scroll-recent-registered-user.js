	

function scrollVSRRU() {
	objVSRRU.scrollTop = objVSRRU.scrollTop + 1;
	vsrru_scrollPos++;
	if ((vsrru_scrollPos%vsrru_heightOfElm) == 0) {
		vsrru_numScrolls--;
		if (vsrru_numScrolls == 0) {
			objVSRRU.scrollTop = '0';
			vsrruContent();
		} else {
			if (vsrru_scrollOn == 'true') {
				vsrruContent();
			}
		}
	} else {
		setTimeout("scrollVSRRU();", 10);
	}
}

var vsrruNum = 0;
/*
Creates amount to show + 1 for the scrolling ability to work
scrollTop is set to top position after each creation
Otherwise the scrolling cannot happen
*/
function vsrruContent() {
	var tmp_vsrru = '';

	w_vsrru = vsrruNum - parseInt(vsrru_numberOfElm);
	if (w_vsrru < 0) {
		w_vsrru = 0;
	} else {
		w_vsrru = w_vsrru%vsrru.length;
	}
	
	// Show amount of vsrru
	var elementsTmp_vsrru = parseInt(vsrru_numberOfElm) + 1;
	for (i_vsrru = 0; i_vsrru < elementsTmp_vsrru; i_vsrru++) {
		
		tmp_vsrru += vsrru[w_vsrru%vsrru.length];
		w_vsrru++;
	}

	objVSRRU.innerHTML 	= tmp_vsrru;
	
	vsrruNum 			= w_vsrru;
	vsrru_numScrolls 	= vsrru.length;
	objVSRRU.scrollTop 	= '0';
	// start scrolling
	setTimeout("scrollVSRRU();", 2000);
}

