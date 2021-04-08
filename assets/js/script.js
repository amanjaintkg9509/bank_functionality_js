var amount = 200000;
var transactions = [];
document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
function submit(){
    let action = document.getElementById('action').value;
    let new_amount = document.getElementById('amount').value;
    let interest_rate = document.getElementById('interest').value;
    if(action == 'Credit'){
        if(!isNaN(parseFloat(new_amount)) && parseFloat(new_amount) <= amount){
            amount = amount + parseFloat(new_amount);
            document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
            transactions.push({'action':'Credit','availbale_balance':amount});
            console.log({transactions});
            return
        }

        alert('Please Enter vaild Amount');
        return
    }
    if(action == 'Debit'){
        if(!isNaN(parseFloat(new_amount)) && parseFloat(new_amount) <= amount){
            amount = amount - parseFloat(new_amount);
            document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
            transactions.push({'action':'Debit','availbale_balance':amount});
            console.log({transactions});
            return
        }

        alert('Please Enter vaild Amount');
        return
    }
    if(action == 'Interest'){
        if(!isNaN(parseFloat(interest_rate))){
            amount = amount+(amount*parseFloat(interest_rate)/100);
            document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
            transactions.push({'action':'Interest','availbale_balance':amount,'rate_int':interest_rate});
            console.log({transactions});
            return
        }

        alert('Please Enter vaild Interest rate');
        return
    }

    alert('Please select correct action.');
        return
}




