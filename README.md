# cashRegister

This is my solution code to FreeCodeCamp's final vanilla JS challange. It is by no means an elegant solution, but it nevertheless works without hardcoding. The function checks if there is enough change present in a cash register to make a sale to a customer, depending on the price of an item and the amount they are paying with. A working output of the function is `{ status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }`, where status means the register is still open and the change is the demominations and dollar value of those denominations, i.e., Quarters X2 in this case. 

Please NOTE that I have redacted the correct return statements from my code to prevent copy and pasting.

## Initial setup

- Locally clone a version to edit on your device.
 `git clone https://github.com/phHank/cashRegister.git`

## Dependencies

- A modern web browser's console, for example, Chrome. 

- Or NodeJS, it worked with v12.6 at the time of writing.
     
## Test the code

- Copy and past the code into the console in your browser.
    - Change the arguments in the function to see if there is enough change in the register to make the sale.
    - The function, `checkCashRegister(price, cash, cid)`, takes three arguments:
        - price: the cost of the item being sold.
        - cash: the amount of money the customer uses to pay for the item.
        - cid: "cash in drawer", an array of arrays, where the first element of the subarray is the denomination, and the second element is the dollar value of that denomiation, for example, `['Penny', 1.01]` means there are 101 pennys in the register.
        - Test different price, cash and cid values to see the different return values. 


- An alternative to using your browser is to run the code in a terminal with NodeJS runtime installed on your device. 
    - cd into the directory containing the file and run `$ node cashRegister.js`

## Potential Improvements

- You could expand on the logic and instead of just returning the value of the change and it's denominations, you could also reduce and return the value left in the cid after a transaction for any following transactions. 
