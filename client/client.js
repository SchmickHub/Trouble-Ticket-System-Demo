
var data = require('./json_exmp.json');
//var tickets = JSON.parse(data.ticket_list);

update_table(data.ticket_list);



function update_table(tabel_data){
    console.table(tabel_data);
}

function send_ticket(){
    
    
}
