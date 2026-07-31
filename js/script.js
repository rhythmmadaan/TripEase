let button = document.querySelector("#generate-btn");

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