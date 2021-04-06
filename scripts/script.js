let serverIp = "patinhos.com";
document.getElementById("server-ip-highlight").textContent=serverIp;
function copyText() {
	var data = [new ClipboardItem({ "text/plain": new Blob([serverIp], { type: "text/plain" }) })];
	navigator.clipboard.write(data).then();
	document.getElementById("server-ip-highlight").textContent="IP copied!";
	setTimeout(function() { document.getElementById("server-ip-highlight").textContent=serverIp; }, 1000);
}