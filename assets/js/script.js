
/**Requirement:-
* Create an account with opening balance amount with 2500INR (min).
* Person should be able to see updated amount after credit.
* Debit can be done with minimum 2500INR remaining and show updated amount and at max 50K at a time and min at 500INR at a time.
* Penality will be charged on user if balance amount remains less than 2500INR.
* If user debit amount after 2500INR less than he witll charged 50INR per txn.
* Person should also be able to calculate quaterly interest at the rate of 2.5% (per annum).
*/

//   Pseudo code
//   * 1. check selected action  * 1.1 if action is not changed then show alert 'Please select correct action'.  * 1.2 if action is selected credit then go to credit section, and perform operation.  * 1.3 if action is selected debit then go to debit section, and perform operation.  * 1.4 if action is selected interest then go to interest section, and perform operation.  *   * 2. credit section   * 2.1 check input amount value is exist or not ?  * 2.1.1 if not exist so hit a alert msg.  * 2.2. last amount balance and add new input amount using add arithematic operator and show on top using document.getElementById.  * 2.2.1 entry in an array, fields like action, new balance.  *   * 3. debit section   * 3.1 check input amount value is exist or not  and debit amount less than or equal to current balance amount?  * 3.1.1 if codition is false so hit a alert msg.  * 3.2. last amount balance and subtract new input amount using subtract arithematic operator and show on top using document.getElementById.  * 3.2.1 entry in an array, fields like action, new balance.  *   * 4. Interest section   * 4.1 check interest rate percentage vaild or not otherwise show alert?  * 4.2. calculate interest based on current balance and input interest rate  and show on top using document.getElementById.  * 4.2.1 entry in an array, fields like action, new balance, interest rate. 



var openning_amount = 2500;
var amount = openning_amount;
var transactions = [];
document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
function submit(){
    let action = document.getElementById('action').value;
    let new_amount = document.getElementById('amount').value;
    let interest_rate = document.getElementById('interest').value;
    if(action == 'Credit'){
        if(!isNaN(parseFloat(new_amount)) && (parseFloat(new_amount) <= 50000 && parseFloat(new_amount) >= 500)){
            amount = amount + parseFloat(new_amount);
            document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
            transactions.push({'action':'Credit','availbale_balance':amount});
            alert('Your Tnx successfully! Thank You');
            document.getElementById('amount').value = '';
            return
        }

        alert('Please Enter vaild Amount, min Amount 500rs, max Amount 50000rs');
        return
    }
    if(action == 'Debit'){
        if(!isNaN(parseFloat(new_amount)) && parseFloat(new_amount) <= amount && parseFloat(new_amount) >= 500){
            if(parseFloat(new_amount) <= (amount - openning_amount)){
                amount = amount - parseFloat(new_amount);
                document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
                transactions.push({'action':'Debit','availbale_balance':amount,'amount':(parseFloat(new_amount)-50)});
                transactions.push({'action':'Penality','availbale_balance':amount,'amount':50});
                console.log({transactions});
                alert('Your Tnx successfully! Thank You');
                document.getElementById('amount').value = '';
                return;
            }else{
                var confirm_msg = confirm("Your current balance is low, if you debit so 50rs penality on per txn.");
                if (confirm_msg == true) {
                    new_amount = parseFloat(new_amount) + 50;
                    if(parseFloat(new_amount) <= amount){
                        amount = amount - parseFloat(new_amount);
                        document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
                        transactions.push({'action':'Debit','availbale_balance':amount,'amount':(parseFloat(new_amount)-50)});
                        transactions.push({'action':'Penality','availbale_balance':amount,'amount':50});
                        console.log({transactions});
                        alert('Your Tnx successfully! Thank You');
                        document.getElementById('amount').value = '';
                        return;
                    } 
                    alert('Current balance is not sufficient!');
                    return
                } else {
                    alert('Your Tnx has been failed!');
                    return
                }
            } 
        }

        alert('Please Enter vaild Amount');
        return
    }
    if(action == 'Interest'){
        if(!isNaN(parseFloat(interest_rate))){
            amount = amount+((amount*parseFloat(interest_rate)/100)/4);
            document.getElementById('avl-bal').innerHTML = '<b>'+amount+'</b>';
            transactions.push({'action':'Interest','availbale_balance':amount,'rate_int':interest_rate});
            console.log({transactions});
            alert('Congratulations, you get some interest on your money!')
            return
        }

        alert('Please Enter vaild Interest rate');
        return
    }

    alert('Please select correct action.');
        return
}




