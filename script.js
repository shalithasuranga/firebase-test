    // Initialize Firebase
    var config = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: ""
      };
      firebase.initializeApp(config);
  
      window.onload = () => {

        document.getElementById('button').onclick = () => {
            showUserAdd();
        }
  
        let showUserAdd = () => {
            let name = prompt("Enter name");
            let userRef = firebase.database().ref('users/');
            userRef.push({
                playerName : name
            });
        }
    
        let showPlayers = (data) => {
            let html = "";  
            for(let user in data.users) {
                html += "<div>" +
                        "<b>Player : </b>" + data.users[user].playerName 
                        "</div>";
            }
            document.getElementById('data').innerHTML = html;
        }
    
        let ref = firebase.database().ref();
    
        ref.on("value", (snap) => {
            let data = snap.val();
            showPlayers(data);
        });


    }