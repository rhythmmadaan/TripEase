let button = document.querySelector("#generate-btn");

if(button){

button.addEventListener("click", function(){

    let destination = document.querySelector("input[type='text']").value;
    let days = Number(document.querySelector("input[type='number']").value);
    let budget = document.querySelector("input[placeholder='Your budget']").value;
    let style = document.querySelector("select").value;

    let itinerary = document.querySelector("#itinerary");

    itinerary.innerHTML = "";

    let activities = [];

    if(style === "Adventure"){
        activities = [
            "Visit adventure spots and try exciting activities.",
            "Go trekking and explore scenic viewpoints.",
            "Enjoy outdoor experiences and local attractions."
        ];
    }
    else if(style === "Relaxation"){
        activities = [
            "Relax at peaceful locations and enjoy nature.",
            "Explore cafes, lakes and calm surroundings.",
            "Spend time at relaxing spots and enjoy local food."
        ];
    }
    else if(style === "Luxury"){
        activities = [
            "Check into premium hotels and explore luxury places.",
            "Enjoy fine dining and exclusive experiences.",
            "Visit premium attractions and shopping areas."
        ];
    }
    else if(style === "Backpacking"){
        activities = [
            "Explore local streets and budget-friendly places.",
            "Try local food and visit hidden gems.",
            "Travel around using affordable options."
        ];
    }


    for(let i = 1; i <= days; i++){

        itinerary.innerHTML += `
        <div class="day-card">

            <h3>Day ${i}</h3>

            <p>
            📍 Destination: ${destination}<br>
            🎯 Activity: ${activities[(i-1) % activities.length]}<br>
            💰 Budget: ₹${budget}<br>
            🎒 Travel Style: ${style}
            </p>

        </div>
        `;

    }

});

}


// Expense Tracker Functionality

let expenseButton = document.querySelector("#add-expense");


if(expenseButton){

    let expenses = [];
    let budget = 0;


    expenseButton.addEventListener("click", function(){


        let name = document.querySelector("input[placeholder='Expense name']").value;

        let amount = Number(document.querySelector("input[placeholder='Amount']").value);

        let category = document.querySelector(".expense-box select").value;

        let budgetInput = Number(document.querySelector("#travel-budget").value);



        if(name === "" || amount <= 0){

            alert("Please enter expense details");

            return;

        }



        if(budgetInput > 0){

            budget = budgetInput;

        }



        expenses.push({

            name:name,
            amount:amount,
            category:category

        });



        updateExpenses();



        document.querySelector("input[placeholder='Expense name']").value = "";

        document.querySelector("input[placeholder='Amount']").value = "";

        document.querySelector("#travel-budget").value = "";


    });



    function updateExpenses(){

        let expenseList = document.querySelector("#expense-list");

        expenseList.innerHTML = "";

        let total = 0;



        expenses.forEach(function(expense,index){


            total += expense.amount;



            expenseList.innerHTML += `

            <div class="expense-card">

                <h3>${expense.category}</h3>

                <p>
                📝 ${expense.name}<br>
                💰 ₹${expense.amount}
                </p>

                <button class="delete-expense" data-index="${index}">
                    Delete
                </button>

            </div>

            `;


        });



        document.querySelector("#total-expense").innerText = total;

        document.querySelector("#total-budget").innerText = budget;

        document.querySelector("#remaining-budget").innerText = budget - total;


    }



    document.addEventListener("click", function(e){


        if(e.target.classList.contains("delete-expense")){


            let index = e.target.getAttribute("data-index");


            expenses.splice(index,1);


            updateExpenses();


        }


    });


}