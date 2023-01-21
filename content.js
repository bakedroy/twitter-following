function waitForElement(querySelector, timeout){
	return new Promise((resolve, reject)=>{
		var timer = false;
		if (document.querySelectorAll(querySelector).length) return resolve();
		const observer = new MutationObserver(()=>{
			if (document.querySelectorAll(querySelector).length){
				observer.disconnect();
				if (timer !== false) clearTimeout(timer);
				return resolve();
			}
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
		if (timeout) timer = setTimeout(()=>{
			observer.disconnect();
			reject();
		}, timeout);
	});
}

console.log("loaded");

waitForElement('[href="/home"][role="tab"][aria-selected="false"]', 1000).then(()=> {
	var a = document.querySelectorAll('[href="/home"][role="tab"][aria-selected="false"]');
	if (a.length > 0) a[0].click(); 
});
