const platforms = {
	"Win32": "windows",
	"MacIntel": "macos",
	"MacPPC": "macos"
};

function setTab(tabGroup, tab) {
	var url = window.location.href;
	if(url.match(RegExp("[?&]" + tabGroup + "="))) { // Already has a tab param
		url = url.replace(RegExp("([?&]" + tabGroup + "=)(.*?)(?=\\&|#|$)"), "$1" + tab)
	} else if(url.match(/\?/)) { // Already has other search params
		url = url.replace(/[?&].*?(?=#|$)/, "$&&" + tabGroup + "=" + tab);
	} else { // No search params
		url = url.replace(/(?=#|$)/, "?" + tabGroup + "=" + tab);
	}

	if(url != window.location.href) { // Don't update if not changed
		history.pushState({}, "", encodeURI(url));
		if(typeof updateLanguageAlert != "undefined") updateLanguageAlert(); // Language alert requires modern JS
	}
}

function findTab(tabGroup, tabName) {
	for(j = 0; j < tabGroup.children.length; j++) {
		if(tabGroup.children[j].id.endsWith(tabName)) {
			return tabGroup.children[j];
		}
	}
}

// Open the tabs for the current OS or the one in the URL
const tabContainers = document.getElementsByClassName("tab-container");
for(i = 0; i < tabContainers.length; i++) {
	const tabGroup = tabContainers[i];
	const tabGroupName = tabGroup.dataset["tabGroup"];

	var tab = null;

	// Try get tab from URL
	const urlTab = decodeURI(window.location.href).match(RegExp("[?&]" + tabGroupName + "=(.*?)(?=\\&|#|$)"));
	if(urlTab && urlTab.length > 1)
		tab = findTab(tabGroup, urlTab[1]);

	// Try get tab for OS
	if(!tab)
		tab = findTab(tabGroup, platforms[navigator.platform]);

	// Fall back to "other" tab
	if(!tab)
		tab = findTab(tabGroup, "other");

	// If a tab was found, open it
	if(tab)
		tab.click();
}
