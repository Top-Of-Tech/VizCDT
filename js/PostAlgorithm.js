function overlayToggle() {
    var x = document.getElementById("overlay");
    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
        x.style.opacity = "0";
    } else {
        x.style.visibility = "visible";
        x.style.opacity = "1";
    }
}

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBMKrjXsTQfLSQ8hsvkMI3h4dG5LOyotlM",
authDomain: "visualize-1555b.firebaseapp.com",
projectId: "visualize-1555b",
storageBucket: "visualize-1555b.appspot.com",
messagingSenderId: "940227136617",
appId: "1:940227136617:web:e49a24fee86f0cace3a6f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const uploader = document.getElementById("uploader");
const fileButton = document.getElementById("fileButton");
const submitButton = document.getElementById("submit");
const algoname = document.getElementById("algoname");
const desc = document.getElementById("desc");

submitButton.addEventListener("click", function() {
    //Get file
    var file = fileButton.files[0];

    //Create a storage ref
    var storageRef = firebase.storage().ref("AlgoSubmitions/" + algoname.value + ".zip");

    //Upload file
    var task = storageRef.put(file);

    //Update progress bar
    task.on("state_changed",
    
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },

        function error(err) {

        },

        function complete() {
            document.getElementById("complete").style.display = "inline";

            Email.send({
            SecureToken : "0ed586fd-2fef-4771-a8f5-2920edc3b16b",
            To : 'visalgorithm@gmail.com',
            From : "visalgorithm@gmail.com",
            Subject : "Algorithm Submition",
            Body : `<strong>The algorithm name is:</strong> <br> ${algoname.value} <br> <br> <strong>File location:</strong> shorturl.at/xzKMO <br> <br> <strong>Explanation:</strong> <br> ${desc.value}`
            }).then(
            
            );
        }

    );
});

function nospaces(t){
    if(t.value.match(/\s/g)){
        t.value=t.value.replace(/\s/g,'');
    }
}