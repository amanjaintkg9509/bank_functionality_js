# Requirement:-
* Create an account with opening balance amount with 2500INR (min).
* Person should be able to see updated amount after credit.
* Debit can be done with minimum 2500INR remaining and show updated amount and at max 50K at a time and min at 500INR at a time.
* Penality will be charged on user if balance amount remains less than 2500INR.
* If user debit amount after 2500INR less than he witll charged 50INR per txn.
* Person should also be able to calculate quaterly interest at the rate of 2.5% (per annum).

# Pseudo Code:-

* 1. check selected action  
* 1.1 if action is not changed then show alert 'Please select correct action'.  
* 1.2 if action is selected credit then go to credit section, and perform operation.  
* 1.3 if action is selected debit then go to debit section, and perform operation.  
* 1.4 if action is selected interest then go to interest section, and perform operation.

* 2. credit section   
* 2.1 check input amount value is exist or not ?  
* 2.1.1 if not exist so hit a alert msg.  
* 2.2. last amount balance and add new input amount using add arithematic operator and show on top using document.getElementById.  
* 2.2.1 entry in an array, fields like action, new balance. 

* 3. debit section   
* 3.1 check input amount value is exist or not, debit amount less than or equal to current balance amount and check min debit amount 500INR?  
* 3.1.1 if codition is false so hit a alert msg.  
* 3.2 check debit amount is greaterthan or less than from (current balance -  opening amount). if greaterthan so no penality otherwise 50INR penality with txn amount, with check amount is exist or not in current account balance.
* 3.3. last amount balance and subtract new input amount(with or without penality) using subtract arithematic operator and show on top current new balance using document.getElementById.  
* 3.2.1 entry in an array, fields like action, new balance.  

* 4. Interest section   
* 4.1 check interest rate percentage vaild or not otherwise show alert?  
* 4.2. calculate interest based on current balance and input interest rate  and show on top using document.getElementById.  
* 4.2.1 entry in an array, fields like action, new balance, interest rate. 
