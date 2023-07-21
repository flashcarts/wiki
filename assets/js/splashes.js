if(!sessionStorage.visitCount)
	sessionStorage.visitCount = 1;
else
	sessionStorage.visitCount++;

function getIndex(name, length) {
	const match = decodeURI(window.location.href).match(new RegExp("[?&]" + name + "=(.*?)(?=\&|#|$)"));
	var index;
	if(match && match.length > 1) {
		index = parseInt(match[1]);
	}
	if(isNaN(index))
		index = Math.floor(Math.random() * length);
	return index;
}

const eyes = ['O', 'o', 'U', 'u', '>', '^', '-', 'X', 'T', 'q'];
const mouths = ['w', 'u', 'o', '_', '-', 'x', '///'];
const extras = [['', ''], ['', ''], ['', ''], ['', '-☆'], ['=', '='], ['d', 'b♪']];

function face() {
	const eye = eyes[Math.floor(Math.random() * eyes.length)];
	var mouth;
	do {
		mouth = mouths[Math.floor(Math.random() * mouths.length)];
	} while(mouth.toLowerCase() == eye.toLowerCase());
	const extra = extras[Math.floor(Math.random() * extras.length)];
	
	return extra[0] + eye + mouth + eye + extra[1];
}

const fortunes = [
	"You will be very " + face(),
	"There is a" + Math.round(Math.random() * 100) + "% chance you will be a frog!",
	"The weather today is... Better than yesterday!",
	"The weather today is... Worse than tomorrow.",
	"Avoid sparkly objects, they will be the cause of trouble.",
	"Be wary of windows...",
	"Consult a magic 8 ball, lest you find yourself with too many oranges...",
	"The ballon lies, do not trust it.",
	"Count your grapes, but not in the sight of blueberries.",
	"The bed is good, but the pillow is better.",
	String.fromCharCode(Math.floor(Math.random() * 26 + 0x41)) + " is your friend, but be cautious around " + String.fromCharCode(Math.floor(Math.random() * 26 + 0x41)) + ".",
	"Bright lights may cause your shoes to be uneasy...",
	"The number " + Math.ceil(Math.random() * 9) + " has more to tell you...",
	"Trees may help you find what you need."
];

const splashes = [
	"Hi .o/",
	"Nintendo DSi!",
	"ニンテンドーDSi!",
	"닌텐도 DSi!",
	"30 Pin > Lightning",
	"Kyocera GRATINA 4G! <small>Flip phones are still cool, right?</small>",
	"ピーケー十一",
	"私は日本語を話します！えっと…よくない…",
	"TWL-001 (JPN)をプレイ中",
	"TWL-001 (KOR)をプレイ中",
	"iPod nano 6 is the best smart watch!",
	"メロエッタは私の好きなポケモンです",
	"39",
	"Twemoji are the best emoji",
	"Why does 😜 have a white around the open eye <small>it creeps me out</small>",
	"You've loaded this page " + sessionStorage.visitCount + (sessionStorage.visitCount == 1 ? " time " : " times ") + "this session!",
	"<a href=\"javascript:/*quit_looking_at_the_link...thats_rude...*/!confirm('bwa ha ha! you are hackifyed!')?confirm('what do you mean no? thats rude :pout:')?null:window.open('https://youtu.be/dQw4w9WgXcQ','_self', ''):(document.querySelector('nav').setAttribute('style','background-color:#'+Math.floor(Math.random()*0xFFFFFF|0x808080).toString(16)+'!important;')|document.body.setAttribute('style','background-color:#'+Math.floor(Math.random()*0xFFFFFF|0x808080).toString(16)+'!important;'))\">Click me</a> to get <s>hacked</s> free cool stuff!",
	"<span onmouseover=\"event.target.innerText = face();\" onmouseout=\"event.target.innerText = 'UwU';\">UwU</span>",
	"Error in line " + Math.floor(Math.random() * 1000) + "! Please <a href=\"javascript:'https://pk11.us/report-bug'\" onclick=\"alert('lol hahahahaha');window.open('https://youtu.be/dQw4w9WgXcQ','_self', '')\">report this!</a>",
	"Your fortune today is... <span style='background-color: var(--blockquote-color); border-radius: 3px; padding: 2px 3px; cursor: pointer;' onclick='this.style.backgroundColor = \"#99999940\"; this.style.cursor = \"\"'>" + fortunes[getIndex("fortune", fortunes.length)] + "</span>",
];

document.getElementById("splash").innerHTML = splashes[getIndex("splash", splashes.length)];
