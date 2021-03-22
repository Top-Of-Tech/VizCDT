const button = document.querySelector(".run");

function run() {
    fetch('https://emkc.org/api/v1/piston/execute', {
	method: 'POST',
	body: JSON.stringify({
        language: 'python3',
		source: 'print("hello")'
	}),
	headers: {
		'Content-type': 'application/json;'
	}
    }).then(function (response) {
	if (response.ok) {
		return response.json();
	}
	    return Promise.reject(response);
    }).then(function (data) {
	    console.log(data);
    }).catch(function (response) {
	    console.log(response.json())
    });
}

button.onclick = run;