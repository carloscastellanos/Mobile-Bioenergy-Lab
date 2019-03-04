autowatch=1; // js object should watch this file and reload it if it changes

var margin=2;
//var midHPadding=50;
//var pWinSizeOrig = this.patcher.wind.size; // the original patcher window size (w, h)

function adjPresRect() {
	p = this.patcher; // get a patcher object
	attr = "presentation_rect"; // we're going to adjust the presentation rect
	var r = new Array();
	p.presentation(1);
	p.fullscreen(1); // take window fullscreen
	pWinSize = this.patcher.wind.size; // the current patcher window size (w, h)
	
	//for(var i=0; i< arguments.length; i++) {
	//	obj = this.patcher.getnamed(arguments[i]); // the object
		
	//}
	
	//sound
	obj = this.patcher.getnamed(arguments[0]);
	//width  = obj.getattr(attr)[2] - obj.getattr(attr)[0];
	//height = obj.getattr(attr)[3] - obj.getattr(attr)[1];
	r[0] = margin; //left
	r[1] = margin; //top
	r[2] = (pWinSize[0]) - margin; // width, center it
	r[3] = (pWinSize[1]/2) - (margin * 2); // height
	obj.message(attr, r);
	
	//voltage
	obj = this.patcher.getnamed(arguments[1]);
	//width  = obj.getattr(attr)[2] - obj.getattr(attr)[0];
	//height = obj.getattr(attr)[3] - obj.getattr(attr)[1];
	r[0] = margin; //left
	r[1] = (pWinSize[1]/2) + margin; // top
	r[2] = (pWinSize[0]) - margin; // width, center it
	r[3] = (pWinSize[1]/2) - (margin * 2); // height
	obj.message(attr, r);
	
	return true;
}

function fullScreen(val) {
	p = this.patcher;
	if(val>=1) {
		p.fullscreen(1);
	} else {
		p.fullscreen(0);
	}
}

function presentationMode(val) {
	p = this.patcher;
	if(val>=1) {
		p.presentation(1);
	} else {
		p.presentation(0);
	}
}


// ================================================================

function moveIt(objName, x, y)
{
	obj = this.patcher.getnamed(objName)
	var width,height;
	var r = new Array();
	width  = obj.rect[2] - obj.rect[0];
	height = obj.rect[3] - obj.rect[1];
	r[0] = x;
	r[1] = y;
	r[2] = x+width;
	r[3] = y+height;
	
	obj.rect = r;
	
	return true;
}
moveIt.local=1; // make private
