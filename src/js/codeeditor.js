const button = document.querySelector(".run");
const output = document.querySelector(".output");
const input = document.querySelector(".input-box");
const input_text = document.querySelector(".input");
const input_bg = document.querySelector(".input-bg");
const submit = document.querySelector(".submit");
const keywords = ['False', 'None', 'True', 'and', ' as ', 'assert', 'async', 'await', 'break', 'class',
				'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if',
				'import', 'is', 'lambda', 'nonlocal', 'not', 'pass', 'raise', 'return', 'try',
				'while', 'with', 'yield', ' in ', ' or ']
let editor = document.querySelector(".editor");
let customArea = document.querySelector(".custom-area");
let backdrop = document.querySelector(".backdrop");



editor.addEventListener("input", function()
{
	let string = editor.value;
	let res = string.replace(/[a-zA-Z_]+\(["a-zA-Z0-9 !@#$%^&*+-_=\(\).,;:'\[\]]*\)/gi, function (x) {
		let statement = x.split("(");
		console.log(statement);
	let beginning = `<span style="color: #0077B3;">${statement[0]}</span>`;
	statement.splice(0, 1);
	console.log(statement);
 	statement = "(" + statement.join("(");
	beginning += statement;
	return beginning;
	});
	res = res.replace(/\(|\)/gi, function (x) {
		return `<span style="color: white;">${x}</span>`;
	});

	for (i = 0; i < keywords.length; i++) {
       res = res.replace(keywords[i], `<span style='color: #BF00E6;'>${keywords[i]}</span>`);
    }

	res = res.replace(/"[a-zA-Z0-9.,/"!@#$%^&*' ]*"/gi, function (x) {
		return `<span style="color: #008040;">${x}</span>`;
	});
	

	customArea.innerHTML = res;
});

editor.addEventListener("scroll", function()
{
    backdrop.scrollTop = editor.scrollTop;
});

function display() {
	input.classList.add("show");
	input_bg.classList.add("show");
	submit.onclick = function() {
		run(input_text.value);
	};
}

async function run(input_) {
    const response = fetch('https://emkc.org/api/v1/piston/execute', {
	method: 'POST',
	body: JSON.stringify({
        language: 'python3',
		source: editor.value,
		stdin: input_,
		args: []
	}),
	headers: {
		'Content-type': 'application/json'
	}
	});

	let data = await response;
	let json_data = await data.json();
	console.log(json_data);
	output.textContent = json_data["output"];
	input.classList.remove("show");
	input_bg.classList.remove("show");
	input_text.value = "";
	
}

editor.addEventListener('keydown', function(e) {
	if (e.key == 'Tab') {
	  e.preventDefault();
	  var start = this.selectionStart;
	  var end = this.selectionEnd;
  
	  // set textarea value to: text before caret + tab + text after caret
	  this.value = this.value.substring(0, start) +
		"\t" + this.value.substring(end);
  
	 this.selectionStart =
	this.selectionEnd = start + 1;
	}
  });

button.onclick = display;