//We use modules to ensure that data in each of them is neatly separated so that other developers may understand the code.

//module for budget; immediately invoked function expression to control budget portion
const budgetController = (function() {
    let totalBudget, totalExpense, totalIncome, fullExpList;

    totalBudget = 0;
    totalExpense = 0;
    totalIncome = 0;
    fullExpList = [];

    /*console.log('a '+typeof totalBudget);
    console.log('b '+typeof totalExpense);
    console.log('c '+typeof totalIncome);*/

    const data = {
        allItems: {
            exp: [],
            inc: []
        }
    }


    //function constructor for expenses
    const Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    //function constructor for income
    const Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }


    return {
        addItem: function(type, desc, val) {
            let newItem, ID;

            //the ID of this element will be equal to the length of the expense or income array - 1, since it is 0 based. This is because deleted items in the middle will retain their IDs after deletion.

            if(data.allItems[type].length <= 0) {
                //if the length of exp is 0, the ID is 0; or, if it's an inc, and the length of inc is 0, ID is 0.
                ID = 0;
            } else {
                //else add 1 to the ID to make the new ID
                ID = data.allItems[type][data.allItems[type].length - 1].id;
            }
            

            //create new item of type expense or income, and push it into its respective array
            val = parseFloat(val).toFixed(2);
            if(type === 'exp') {
                newItem = new Expense(ID, desc, val);
                fullExpList.push(newItem.id);
            } else if(type === 'inc') {
                newItem = new Income(ID, desc, val);
            } else {
                alert('invalid type');
            }

            //access allItems property of data object, and add newItem to the appropriate property (in this case, 'inc' or 'exp' array)
            data.allItems[type].push(newItem);

            return newItem;
        },

        delItem: function(type, id) {
            let ids, index;

            console.log(`TYPE: ${type}`);

            //the map function has access to all attributes of each element of the array of the given type (exp or inc), and loops over each element. In this case, we want to return the IDs and store them to a new array called "ids".
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            //find the index within the new "ids" array of the original id that is passed in
            index = ids.indexOf(id);

            console.log(`IDs: ${ids}`);
            //console.log(`INDEX: ${index}`);

            //remove the index from the array
            if(index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        },

        calculate: function(type, amt, id, transaction) {
            amt = eval(amt);
            
            let pvsBudget, removeAmt;
            
            pvsBudget = totalBudget;

            if(transaction === 'add') {
                if(type === 'exp' && (totalBudget - amt) < 0) {
                    alert("Insufficient funds.");
                } else if(type === 'exp'){
                    totalBudget -= amt;
                    totalExpense += amt;
                }else if(type === 'inc') {
                    totalBudget += amt;
                    totalIncome += amt;
                }
            } else if(transaction === 'remove') {
                console.log(`typeeeee: ${type}`);
                console.log(`id: ${id}`);
                
                removeAmt = parseFloat(document.getElementById(`${type}__iv-${id}`).textContent.replace(/,/g,''));
                /*removeAmt = removeAmt.replace(/,/g,'');
                removeAmt = parseFloat(removeAmt);*/

                console.log(`RA: ${removeAmt}`);

                //TYPE IS AUTOMATICALLY SET TO LAST ONE ADDED. FIX THIS NEXT.******
                console.log(`TYPEY TYPE: ${type}`);
                if(type === 'exp') {
                    totalBudget += removeAmt;
                    totalExpense -= removeAmt;
                } else if(type === 'inc') {
                    console.log(`totalBudget pre calculation: ${totalBudget}`);
                    totalBudget -= removeAmt;
                    console.log(`totalBudget post calculation: ${totalBudget}`);
                    totalIncome -= removeAmt;
                }
            }

            return {
                expenses: totalExpense.toFixed(2),
                income: totalIncome.toFixed(2),
                budget: totalBudget.toFixed(2),
                fullExp: fullExpList,
                hasFunds: function() {
                    let result = false;
                    console.log(`Prev budget: ${pvsBudget}`);
                    console.log(`New budget: ${totalBudget}`);
                    
                    if(type === 'inc' || (type === 'exp' && (pvsBudget - amt) >= 0)) {
                        result = true;
                    } 

                    return result;
                }
            }
        },

        calcPercentages: function(expenses, income, fullExp) {
            let expensePct, incomePct, itemAmt, itemPct, pctArr, expVal, expAmt;

            incomePct = 0;

            pctArr = [];

            if(income > 0 || income > expenses) {
                expensePct = Math.round((expenses/income)*100);

                for(let i = 0; i < fullExp.length; i++) {
                    expVal = document.getElementById(`exp__iv-${i}`);

                    if(expVal !== null) {
                        itemAmt = expVal.textContent;
                        console.log(`OLD ITEM AMT: ${itemAmt}`);
                        expAmt = itemAmt.replace(/,/g,'');
                        console.log(`NEW ITEM AMT: ${itemAmt}`);
                        itemPct = Math.round((parseFloat(expAmt) / income)*100);
                        pctArr.push(itemPct);
                    }
                }
            } else {
                expensePct = 'N/A';
                for(let j = 0; j < fullExp.length; j++) {
                    itemPct = 'N/A';
                    pctArr.push(itemPct);
                }
            }
        
            return {
                expPct: expensePct,
                incPct: incomePct,
                pctArray: pctArr
            }
        },

        setMonth: function() {
            let today, month, year, months;

            today = new Date();
            month = today.getMonth();
            year = today.getFullYear();

            months = ['January','February','March','April','May','June','July','August','September','October','November','December']; 

            return `${months[month]} ${year}`;

            // originally used a switch, but this is cleaner.
        },

        testing: function() {
            console.log(data);
        }
    }

})();



//module for user interface (UI)
const UIController = (function() {
    //this object exists simply to make it only necessary to update class name changes in one place.    
    const DOMstrings = {
        addType: '.add__type',
        addDesc: '.add__description',
        addVal: '.add__value',
        addBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        incomePct: '.budget__income--percentage',
        expensePct: '.budget__expenses--percentage',
        incomeTot: '.budget__income--value',
        expenseTot: '.budget__expenses--value',
        budgetTot: '.budget__value',
        title: '.budget__title',
        itemContainer: '.container'
    }


    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.addType).value,
                description: document.querySelector(DOMstrings.addDesc).value,
                amount: document.querySelector(DOMstrings.addVal).value
            };
        },

        addListItem: function(obj, type, amt, budget) {
            //create HTML string with placeholder tags
            let element, html;
            
            //make income and expense percentages visible
            //document.querySelector(DOMstrings.incomePct).style.visibility = "visible";
            document.querySelector(DOMstrings.expensePct).style.visibility = "visible";

            /*if(type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp') {
                element = DOMstrings.expenseContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);*/


            //amt = obj.value;

           // console.log(`${budget} - ${amt} = ${budget - amt}`)

            if(type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = `<div class="item clearfix" id="income-${obj.id}">
                <div class="item__description">${obj.description}</div>
                <div class="right clearfix">
                    <div class="item__value">+&nbsp;<div id="inc__iv-${obj.id}">${amt}</div></div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>`;
            
            obj.id++;

            } else if(type === 'exp') {
                element = DOMstrings.expenseContainer;

                html = `<div class="item clearfix" id="expenses-${obj.id}">
                <div class="item__description">${obj.description}</div>
                <div class="right clearfix">
                    <div class="item__value">-&nbsp;<div id="exp__iv-${obj.id}">${amt}</div></div>
                    <div class="item__percentage" id = "item__pct-${obj.id}"></div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>`;
           
            obj.id++;
            }

            document.querySelector(element).insertAdjacentHTML('beforeend', html);
            

            //replace placeholder tags with actual data

            //insert HTML into the DOM
        },

        delListItem: function(selectorID) {
            //traverse up a level in the hierarchy so that we can remove the desired item as a child of its parent

            console.log(`sID: ${selectorID}`);
            let el = document.getElementById(selectorID);

            //removing itself from the parent node as a child
            el.parentNode.removeChild(el);
        },
        
        getDOMstrings: function() {
            //since this is a private module overall, we need this is the best way to enable the items within the DOMstrings object to be accessible anywhere in the program
            return DOMstrings;
        },
        
        updateTotals: function(exp, inc, tot) {
            //possible use floatIt function below
            document.querySelector(DOMstrings.expenseTot).textContent = `- ${exp}`;
            document.querySelector(DOMstrings.incomeTot).textContent = `+ ${inc}`;
            document.querySelector(DOMstrings.budgetTot).textContent = `$ ${tot}`;

            //console.log('totals updated');
        },

        updatePercentages: function(expnPct, incmPct, expPctArr) {
            document.querySelector(DOMstrings.expensePct).textContent = `${expnPct}%`;
            document.querySelector(DOMstrings.incomePct).textContent = `${incmPct}%`;

            for(let j = 0; j < expPctArr.length; j++) {
                document.getElementById(`item__pct-${j}`).textContent = `${expPctArr[j]}%`;
            }
        },

        clearPanel: function() {
            //CLEAR MULTIPLE FIELDS AT ONCE; COULD BE USEFUL IN FUTURE

           //declare and instantiate the variable assigned to querySelectorAll. This syntax stores the items in a list in the variable "fields".
            let fields, fieldArr;

            //select multiple elements by separating
           fields = document.querySelectorAll(`${DOMstrings.addDesc}, ${DOMstrings.addVal}`);
           //document.querySelector().value = ''; 

           //we then convert the list stored in "fields" to an array, and assign that array to variable "fieldArr"
           fieldArr = Array.prototype.slice.call(fields);

           //I prefer to use a for loop to iterate through the array to clear the fields
            for(let z = 0; z < fieldArr.length; z++) {
                fieldArr[z].value = '';
            }

            //moves cursor to description text input box
           fieldArr[0].focus();


           /*can also be done using forEach loop, as seen below
           fieldArr.forEach(function(content, index, array) {
                current.value = '';
           });
           
           document.querySelector(DOMstrings.addDesc).focus();
           */
        },

        displayTitle: function(currMonth) {
            document.querySelector(DOMstrings.title).innerHTML = `Available Budget in <span class="budget__title--month">${currMonth}</span>:`;
        },

        setTheme: function() {
            let fields, button;
            
            fields = document.querySelectorAll(`${DOMstrings.addType}, ${DOMstrings.addDesc}, ${DOMstrings.addVal}`);

            button = document.querySelector(DOMstrings.addBtn);

            let nodeListForEach = (function(list, callback){
                for(let i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            })(fields, function(cur){
                cur.classList.toggle('red-focus');
            });

            button.classList.toggle('red');
            
           /* fields.classList.add('red-focus');

            button.classList.add('red');*/
        },

        highlightOption: function(type) {
            let option;

            option = document.querySelector(`.${type}__title`);

            option.classList.toggle(`${type}__entry`);

            setTimeout(() => {
                option.classList.toggle(`${type}__entry`);
            },216);
        }
    }

})();



//module for application; budgetController and UIController are the argument utilized to run the anonymous function assigned to controller variable; this module is GLOBAL. It retrieves the input entered by user from the UI Controller, and passes it to the Budget Controller so that item can be added, then receives the item back from the Budget Controller and passes it back to the UI controller so that it can be displayed on the UI.
const controller = (function(budgetCtrl, UICtrl) {
    //retrieve DOMstrings object from the UI module and assign to variable. This allows us to access the properties of the DOMstrings object using dot notation.
    const DOM = UICtrl.getDOMstrings();

    let input, newItem, newBudget, addType, addDescription, addValue, addButton, container, currType, currID;

    addType = document.querySelector(DOM.addType);
    addDescription = document.querySelector(DOM.addDesc);
    addValue = document.querySelector(DOM.addVal);
    addButton = document.querySelector(DOM.addBtn);
    container = document.querySelector(DOM.itemContainer);

    const setEventListeners = function() {
        //EVENT LISTENERS
        addValue.addEventListener('keypress',function(event) {
        
        //with keypress events, the keyCode can be retrieved by pressing that particular key and console.log-ing the event passed in. We access the keyCode property by using the dot notation, as outlined below. I retrieved that the keyCode is 13 for ENTER after using this method. "Which" is used in older browsers for same purpose, which is why we included it here.
        if(event.keyCode === 13 || event.which === 13) {
            addButton.click();
        }
    });

        addButton.addEventListener('click',function() {
            //alert('button has been clicked');

            if(addDescription.value !== '' && addValue.value !== '' && parseFloat(addValue.value) > 0 && (addValue.value.indexOf('.') === addValue.value.length - 3 || addValue.value.indexOf('.') === -1)) {
                
                // 1. Get field input data from the description and amount boxes
                input = UICtrl.getInput();

                // 2. Highlight option
                console.log(`dfadfadsfddfafdssadfsdasfasdsa: ${input.type}`);
                UICtrl.highlightOption(input.type);


                // 9. Clear description and type once submitted
                UICtrl.clearPanel();

             
                // 2. Add item to budget controller
                type = input.type.substring(0,3);
                newItem = budgetCtrl.addItem(type, input.description, input.amount);


                // 3. Calculate the budget
                newBudget = budgetCtrl.calculate(type, input.amount, 'n/a', 'add');

                
                // 4. add comma separator
                let nbExp, nbInc, nbBudget, amtInput;
                nbExp = addCommaSeparator(newBudget.expenses);
                nbInc = addCommaSeparator(newBudget.income);
                nbBudget = addCommaSeparator(newBudget.budget);
                amtInput = addCommaSeparator(input.amount);

                console.log(`nbBudget after method: ${nbBudget}`);

                console.log(`nbExp: ${newBudget.expenses}`);
                console.log(`nbInc: ${newBudget.income}`);
                console.log(`nbBudget: ${newBudget.budget}`);

                // 5. Display the budget on the UI
                console.log(`INCOME: ${newBudget.income}`);
                UICtrl.updateTotals(nbExp, nbInc, nbBudget);
                console.log(`nbBudget after totals updated: ${nbBudget}`);

                // 6. Add item to UI controller
                console.log('hasFunds?: '+newBudget.hasFunds());
                if(input.type === 'inc' || newBudget.hasFunds() == true){
                    UICtrl.addListItem(newItem, type, amtInput, nbBudget);
                }


                // 7. Get percentages
                let pct = budgetCtrl.calcPercentages(newBudget.expenses, newBudget.income, newBudget.fullExp);


                // 8. Add percentages to UI
                /*console.log('exp: '+pct.expPct);
                console.log("inc: "+pct.incPct);*/
                UICtrl.updatePercentages(pct.expPct, pct.incPct, pct.pctArray);


                // 9. Clear description and type once submitted
                UICtrl.clearPanel();

                } else if(addDescription.value === '') {
                    alert('ERROR: Please enter a valid description');
                } else if(addValue.value === '' || parseFloat(addValue.value) <= 0 || (addValue.value.indexOf('.') !== addValue.value.length - 3 && addValue.value.indexOf('.') !== -1)) {
                    alert('ERROR: Please enter a valid amount.');
                }

        }); 
        
        container.addEventListener('click', deleteItem);

        addType.addEventListener('change', UICtrl.setTheme);

        function deleteItem(event) {
            let itemID, splitID, amount;

            itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

            if(itemID) {
                //split itemID into two array elements: "income" or "expense" is the first, while the number ID is the second
                splitID = itemID.split('-');

                currType = splitID[0];
                currID = parseInt(splitID[1]);

                console.log(`currType: ${currType}`);

                currType = currType.slice(0,3);

                console.log(`asdf: ${currType}`);
                console.log(`jkl;: ${currID}`);

                amount = input.amount;

                // Calculate the budget
                console.log(`AMOUNTY AMOUNT: ${amount}`);
                newBudget = budgetCtrl.calculate(currType, amount, currID, 'remove');

                console.log(`newBudget.budget returned from calculate: ${newBudget.budget}`);

                //delete item from array containing items of given type (exp or inc)
                budgetCtrl.delItem(currType, currID);

                //delete item from UI using its ID (#)
                UICtrl.delListItem(itemID);

                // Calculate new percentages
                let pct = budgetCtrl.calcPercentages(newBudget.expenses, newBudget.income, newBudget.fullExp);

                // add comma separators
                let nbE, nbI, nbBud;

                console.log(`newBudget.expenses: ${newBudget.expenses}`);
                
                nbE = addCommaSeparator(newBudget.expenses);
                nbI = addCommaSeparator(newBudget.income);
                nbBud = addCommaSeparator(newBudget.budget);

                console.log(`newBudget.budget returned from adding comma separator: ${nbBud}`);

                // Display the budget on the UI
                UICtrl.updateTotals(nbE, nbI, nbBud);

                // Update percentages on UI
                UICtrl.updatePercentages(pct.expPct, pct.incPct, pct.pctArray);

            }
        }

        function addCommaSeparator(num) {
            let o = [];
            let p = 1;
            let s = '';

            console.log(`num before toString: ${num}`);

            num = num.toString();

            console.log(`num after toString: ${num}`);
            console.log(num.length);
            
            //7 characters long; no decimal; 
            if((num.length > 3 && num.indexOf('.') === -1 && num.indexOf('-') === -1) 
            || (num.length > 4 && num.indexOf('-') !== -1 && num.indexOf('.') === -1)
            || (num.length > 6 && num.indexOf('.') !== -1 && num.indexOf('-') === -1) 
            || (num.length > 8)){
                    
                //length - 3, length -6, length -9, length -12, etc
                for(let q = num.length - 1; q >= 0; q--) {

                    if((p % 3 === 0 && num.indexOf('.') === -1) || (p !== 3 && p % 3 === 0 && num.indexOf('.') !== -1)) {
                        //if num.indexOf('.') !== -1 
                        o.push(`${num[q]},`);
                    } else {
                        o.push(num[q]);
                    }

                    p++;
                }
            
                o = o.join('');

                for(let r = o.length -1; r >= 0; r--) {
                    s += o[r];
                }
            } else {
                s = num;
            }
            

            if(s[0] === ',') {
                s = s.substring(1);
            }

            if(s.indexOf('.') === -1) {
                s += '.00';
            }
            console.log(`WITH COMMAS: ${s}`);
          
            return s;
        }

    }

        return {
            init: function() {
                addDescription.focus();
                setEventListeners();

            // Set date to automatically update with the month
            let date = budgetCtrl.setMonth();


            // Update date on the UI
            console.log(`date: ${date}`);
            UICtrl.displayTitle(date);
            }
    }

})(budgetController, UIController);



controller.init();



function floatIt(q) {
    return parseFloat(q).toFixed(2);
}