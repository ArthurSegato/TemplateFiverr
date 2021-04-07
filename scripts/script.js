let serverIp = "patinhos.com";
document.getElementById("server-ip-highlight").textContent=serverIp;
function copyText() {
	var data = [new ClipboardItem({ "text/plain": new Blob([serverIp], { type: "text/plain" }) })];
	navigator.clipboard.write(data).then();
	document.getElementById("server-ip-highlight").textContent="I copied!";
	setTimeout(function() { document.getElementById("server-ip-highlight").textContent=serverIp; }, 1000);
}
let links = document.getElementsByTagName("a");
Array.prototype.forEach.call(links, function(elem, index) {
    let elemAttr = elem.getAttribute("href");
    if (elemAttr && elemAttr.includes("#")) {
        elem.addEventListener("click", function(ev) {
            ev.preventDefault();
            document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        });
    }
});