const json_example = '{"result":true, "count":42, "liste":["eins","zwei","drei"]}';

var incoming_json =  JSON.parse(json_example);

//Make Console interactable
var keypress = require('keypress');
const prompt = require('prompt');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
  
// listen for the "keypress" event
console.log("Press u to start the client") 
process.stdin.on('keypress', function (ch, key) {
     
    if (key && key.ctrl && key.name == 'c') {
        process.exit();
    }else{
        if(key.name == 'u'){
            console.clear();
            update_table();
        }
        if(key.name == 'n'){
            console.clear();
            send_ticket();
        }
    }
});



function update_table(){
    console.log("press key 'n' for a new ticket and 'u' to update the messages") 
    incoming_json.liste.forEach(element => {
        console.log(element); 
    });
}

function send_ticket(){
    console.log("Input the ticket id and then press enter")
    process.stdin.pause();
    prompt.start();
    prompt.get(['username', 'email'], function (err, result) {
        if (err) { return err; }
        console.log('Command-line input received:');
        console.log('  Username: ' + result.username);
        console.log('  Email: ' + result.email);
    });
}


process.stdin.setRawMode(true);
process.stdin.resume();
