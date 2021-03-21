const button = document.querySelector(".run");

function run() {
    fetch('https://codexweb.netlify.app/.netlify/functions/enforceCode', {
	method: 'POST',
	body: JSON.stringify({
		code: 'print("hello")',
		language: 'python',
		input: ""
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
    }).catch(function (error) {
	    console.warn('Something went wrong.', error);
    });
}

button.onclick = run;