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

p = waitForElement('[href="/home"][role="tab"][aria-selected="false"]', 3000);
p.then(()=> {
	var a = document.querySelectorAll('[href="/home"][role="tab"][aria-selected="false"]');
	if (a.length > 0) {
		a[0].click(); 
		console.log("Then: Success! Following is better than For you!");
	}
});
p.catch(()=> {
	console.log("Catch: failed to detect tab entries");
}
