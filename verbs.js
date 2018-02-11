var listOfVerbs = [
	// meaning, group, masu, te, dict, nai, ta, kanji
	['arrive', 1, 'tsukimasu', 'tsuite', 'tsuku', 'tsukanai', 'tsuita', '着きます'],
	['borrow', 2, 'karimasu', 'karite', 'kariru', 'karinai', 'karita', '借ります'],
	['buy', 1, 'kaimasu', 'katte', 'kau', 'kawanai', 'katta', '買います'],
	['call', 2, 'kakemasu', 'kakete', 'kakeru', 'kakenai', 'kaketa', ''],
	['close', 2, 'shimemasu', 'shimete', 'shimeru', 'shimenai', 'shimeta', '閉めます'],
	['come', 3, 'kimasu', 'kite', 'kuru', 'konai', 'kita', '来ます'],
	['cut', 1, 'kirimasu', 'kitte', 'kiru', 'kiranai', 'kitta', '切ります'],
	['deliver', 2, 'todokemasu', 'todokete', 'todokeru', 'todokenai', 'todoketa', '届けます'],
	['do', 3, 'shimasu', 'shite', 'suru', 'shinai', 'shita', ''],
	['drink', 1, 'nomimasu', 'nonde', 'nomu', 'nomanai', 'nonda', '飲みます'],
	['eat', 2, 'tabemasu', 'tabete', 'taberu', 'tabenai', 'tabeta', '食べます'],
	['enter', 1, 'hairimasu', 'haitte', 'hairu', 'hairanai', 'haitta', '入ります'],
	['exist (object)', 1, 'arimasu', 'atte', 'aru', 'nai', 'atta', ''],
	['exist (people)', 2, 'imasu', 'ite', 'iru', 'inai', 'itta', ''],
	['finish', 1, 'owarimasu', 'owatte', 'owaru', 'owaranai', 'owatta', '終わります'],
	['get off', 2, 'orimasu', 'orite', 'oriru', 'orinai', 'orita', '降ります'],
	['get on', 1, 'norimasu', 'notte', 'noru', 'noranai', 'notta', '乗ります'],
	['give', '2', 'agemasu', 'agete', 'ageru', 'agenai', 'ageta', ''],
	['go ', '1', 'ikimasu', 'itte', 'iku', 'ikanai', 'itta', '行きます'],
	['go out', '2', 'demasu', 'dete', 'deru', 'denai', 'deta', '出ます'],
	['return', '1', 'kaerimasu', 'kaette', 'kaeru', 'kaeranai', 'kaetta', '帰ります'],
	['have (shower)', '2', 'abimasu', 'abite', 'abiru', 'abanai', 'abita', '浴びます'],
	['learn', '1', 'naraimasu', 'naratte', 'narau', 'narawanai', 'naratta', '習います'],
	['lend', '1', 'kashimasu', 'kashite', 'kasu', 'kasanai', 'kashita', '貸します'],
	['listen', '1', 'kikimasu', 'kiite', 'kiku', 'kikanai', 'kiita', '聞きます'],
	['meet', '1', 'aimasu', 'atte', 'au', 'awanai', 'atta', '会います'],
	['open', '2', 'akemasu', 'akete', 'akeru', 'akanai', 'aketa', '開けます'],
	['put (things)', '1', 'okimasu', 'oite', 'oku', 'okanai', 'oita', '置きます'],
	['read', '1', 'yomimasu', 'yonde', 'yomu', 'yomanai', 'yonda', '読みます'],
	['receive', '1', 'moraimasu', 'moratte', 'morau', 'morawanai', 'moratta', '貰います'],
	['rest', '1', 'yasumimasu', 'yasunde', 'yasumu', 'yasumanai', 'yasunda', '休mimasu'],
	['see', '2', 'mimasu', 'mite', 'miru', 'minai', 'mita', '見ます'],
	['send', '1', 'okurimasu', 'okutte', 'okuru', 'okuranai', 'okutta', '送ります'],
	['sing', '1', 'utarimasu', 'utatte', 'utau', 'utaranai', 'utatta', '歌rimasu'],
	['sleep', '2', 'nemasu', 'nete', 'neru', 'nenai', 'neta', '寝ます'],
	['understand', '1', 'wakarimasu', 'wakatte', 'wakaru', 'wakaranai', 'wakatta', '分かります'],
	['speak', '2', 'hanashimasu', 'hanashite', 'hanasu', 'hanasanai', 'hanashita', '話します'],
	['stand up', '1', 'tachimasu', 'tatte', 'tatsu', 'tatanai', 'tatta', '立ちます'],
	['study', '1', 'benkyoushimasu', 'benkyoshite', 'benkyousuru', 'benkyoushinai', 'benkyoshita', '勉強します'],
	['swim', '1', 'oyogimasu', 'oyoide', 'oyogu', 'oyoganai', 'oyoida', '泳ぎます'],
	['switch off', '1', 'keshimasu', 'keshite', 'kesu', 'kesanai', 'keshita', '消します'],
	['switch on', '2', 'tsukemasu', 'tsukete', 'tsukeru', 'tsukenai', 'tsuketa', '点けます'],
	['take', '1', 'torimasu', 'totte', 'toru', 'toranai', 'totta', '取ります'],
	['teach', '2', 'oshiemasu', 'oshiete', 'oshieru', 'oshienai', 'oshieta', '教えます'],
	['turn', '1', 'magarimasu', 'magatte', 'magaru', 'magaranai', 'magatta', '曲がります'],
	['wait', '1', 'machimasu', 'matte', 'matsu', 'matanai', 'matta', '待ちます'],
	['wake up', '2', 'okimasu', 'okite', 'okiru', 'okinai', 'okita', '起きます'],
	['walk', '1', 'arukimasu', 'aruite', 'aruku', 'arukanai', 'aruita', '歩きます'],
	['wear', '2', 'kimasu', 'kite', 'kiru', 'kinai', 'kita', '着ます'],
	['work', '1', 'hatarakimasu', 'hataraite', 'hataraku', 'hatarakanai', 'hataraita', '働kimasu'],
	['write', '1', 'kakimasu', 'kaite', 'kaku', 'kakanai', 'kaita', '書きます'],
];

function insertHeaderCell(row, name) {
	var cell = row.insertCell();
	cell.outerHTML = "<th>" + name + "</th>";
}

function addListofVerbsTableHeader(table) {
	// add header
	var header = table.createTHead();
	var row = header.insertRow(0);
	insertHeaderCell(row, "Meaning");
	insertHeaderCell(row, "Group");
	insertHeaderCell(row, "ます-form");
	insertHeaderCell(row, "て-form");
	insertHeaderCell(row, "dict form");
	insertHeaderCell(row, "ない-form");
	insertHeaderCell(row, "た-form");
	insertHeaderCell(row, "kanji");
}

function emptyListOfVerbs(table) {
	table.innerHTML = "";
}

function displayListOfVerbs() {
	var table = document.getElementById('verbstable');
	
	emptyListOfVerbs(table);
	addListofVerbsTableHeader(table);

	var tbody = table.createTBody();
	for (var i=0; i<listOfVerbs.length; i++) {
		var tr = tbody.insertRow();
		verb = listOfVerbs[i];
		for (var j=0; j<verb.length; j++) {
			var td = tr.insertCell();
			var s = (j <= 1 || j == verb.length-1 ? verb[j] : wanakana.toHiragana(verb[j]));
			td.appendChild(document.createTextNode(s));
		}
	}
}

function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
}

function getNewIndex(listIdxVerbs) {
	while (true) {
		var r = getRandomInt(listOfVerbs.length);
		var found = false;
		for (var i=0; i<listIdxVerbs.length; i++) {
			if (r == listIdxVerbs[i]) {
				found = true;
				break;
			}
		}
		if (!found) {
			return r;
		}
	}
}

function displayElementForQuiz(difficulty, nDisplayed) {
	var display = getRandomInt(2); // display == 0: don't display; 1: display
	if (display == 1) {
		if (difficulty == 0 || (difficulty == 1 && nDisplayed < 2) || (difficulty == 2 && nDisplayed < 1)) {
			display = 1; // we keep this useless statement just so the if condition is more clear
		} else {
			display = 0;
		}
	}
	return display;
}


function startQuiz() {
	var table = document.getElementById('verbstable');

	var difficulty; // 0: easy, 1: medium, 2: hard
	if(document.getElementById('quizeasy').checked) {
		difficulty = 0;
	} else if(document.getElementById('quizmedium').checked) {
		difficulty = 1;
	} else if(document.getElementById('quizhard').checked) {
		difficulty = 2;
	} else {
		console.log("Something went really wrong with the radio buttons for the quiz difficulty...");
		document.write("Something went really wrong with the radio buttons for the quiz difficulty...");
		return;
	}

	emptyListOfVerbs(table);
	addListofVerbsTableHeader(table);

	var nVerbs = document.getElementById("quizlength").value; 
	if (nVerbs <= 0 || nVerbs > listOfVerbs.length) {
		nVerbs = listOfVerbs.length;
	}

	var tbody = table.createTBody();
	var listIdxVerbs = [];
	for (var i=0; i<nVerbs; i++) {
		var tr = tbody.insertRow();

		var n = getNewIndex(listIdxVerbs);
		listIdxVerbs.push(n);
		verb = listOfVerbs[n];

		var nDisplayed = 0;
		var groupDisplayed = false;
		for (var j=0; j<verb.length; j++) {
			var cellContent = "";

			// the only thing displayed is the group, so also display the kanji
			// otherwise we can't fill-in the row
			// also enforce that at least one column will be displayed
			if (j == verb.length-1 && ((groupDisplayed && nDisplayed == 1) || nDisplayed == 0)) {
				cellContent = verb[j];
			} else {
				if (displayElementForQuiz(difficulty, nDisplayed)) {
					if (j == 1) {
						cellContent = verb[j];
						groupDisplayed = true;
					} else {
						cellContent = (j==0 ? verb[j] : wanakana.toHiragana(verb[j]));
					}
					nDisplayed++;
				}
			}

			var td = tr.insertCell();
			var node = null;
			if (cellContent == "") {
				node = document.createElement("input");
				node.setAttribute('type', 'text');

				var len = verb[j].length;
				node.setAttribute('maxlength', len);
				node.setAttribute('length', len);
			} else {
				node = document.createTextNode(cellContent);
			}
			td.appendChild(node);
		}
	}
}

function initScript() {
	document.getElementById("quizlength").defaultValue = listOfVerbs.length; 
}
