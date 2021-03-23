const button = document.querySelector(".run");
const code_writer = document.querySelector(".code-editor");
const output = document.querySelector(".output")

async function run() {
    const response = fetch('https://emkc.org/api/v1/piston/execute', {
	method: 'POST',
	body: JSON.stringify({
        language: 'python3',
		source: code_writer.value,
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