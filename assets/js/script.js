/**
 * Pseudo code
 * 1. check selected action
 * 1.1 if action is not changed then show alert 'Please select correct action'.
 * 1.2 if action is selected credit then go to credit section, and perform operation.
 * 1.3 if action is selected debit then go to debit section, and perform operation.
 * 1.4 if action is selected interest then go to interest section, and perform operation.
 * 
 * 2. credit section 
 * 2.1 check input amount value is exist or not ?
 * 2.1.1 if not exist so hit a alert msg.
 * 2.2. last amount balance and add new input amount using add arithematic operator and show on top using document.getElementById.
 * 2.2.1 entry in an array, fields like action, new balance.
 * 3. debit section 
 * 3.1 check input amount value is exist or not  and debit amount lessthan or equalto current balance amount?
 * 3.1.1 if codition is false so hit a alert msg.
 * 3.2. last amount balance and subtract new input amount using subtract arithematic operator and show on top using document.getElementById.
 * 3.2.1 entry in an array, fields like action, new balance.
 * 4. Interest section 
 * 3.1 check interest rate percentage vaild or not otherwise show alert?
 * 3.2. calculate interest based on current balance and input interest rate  and show on top using document.getElementById.
 * 3.2.1 entry in an array, fields like action, new balance, interest rate.
 * 
 */



var amount = 200000;
var transactions = [];
document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
function submit(){
    let action = document.getElementById('action').value;
    let new_amount = document.getElementById('amount').value;
    let interest_rate = document.getElementById('interest').value;
    if(action == 'Credit'){
        if(!isNaN(parseFloat(new_amount))){
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




