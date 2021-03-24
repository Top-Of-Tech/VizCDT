const button = document.querySelector(".run");
const editor = document.querySelector(".editor");
const output = document.querySelector(".output");

var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.key=="Tab"){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}

function color_code() {
	
}

async function run() {
    const response = fetch('https://emkc.org/api/v1/piston/execute', {
	method: 'POST',
	body: JSON.stringify({
        language: 'python3',
		source: editor.value,
		stdin: "",
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

button.onclick = run;