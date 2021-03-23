const button = document.querySelector(".run");
const editor = document.querySelector(".editor");
const output = document.querySelector(".output");

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

button.onclick = run;