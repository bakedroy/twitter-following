function sleep(waitSec, callbackFunc) {
	var spanedSec = 0;

	var waitFunc = function() {
		spanedSec++;
		if (spanedSec >= waitSec) {
			if (callbackFunc) callbackFunc();
			return;
		}
		clearTimeout(id);
		id = setTimeout(waitFunc, 1000);
	};

	var id = setTimeout(waitFunc, 1000);
}

sleep(1, function() {
	var a = document.querySelectorAll('a[href="/home"]');
	if (a.length > 0) {
		for (var i = 0, l = a.length; i < l; i++) {
			// i = 2: For you
			// i = 3: Following
			if (i == 3) { a
				a[i].click();
				//console.log(a[i]);
			}
		}
	} else {
		console.log('<a href="/home"> not found');
	}
});


//// XXX: only applicable to one element
//if (r.length == 1) {
//  r[0].onload = function() {
//    onLoaded(r[0]);
//  }
//}
//
//// Trigerred if the element(r) is loaded.
//// Do something at here.
//function onLoaded(r) {
//  var f = r.contentDocument.getElementsByTagName('form');
//  const names = ['aite', 'dmy04', 'dmy05']; // change me what u want
//
//  for (var i = 0, l = f.length; i < l; i++) {
//    for (var j = 0, jl = names.length; j < jl; j++) {
//      if (f[i].name == names[j]) {
//        f[i].rel = "opener"; // inherit properties to children
//      }
//    }
//  }
//}
