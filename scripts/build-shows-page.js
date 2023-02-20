

const concertList={
    date:["Mon Sept 06 2021 ","Tue Sept 21 2021","Fri Oct 15 2021","Sat Nov 06 2021","Fri Nov 26 2021","Wed Dec 15 2021 "],
    venue:["Ronald Lane ","Pier 3 East","View Lounge ","Hyatt Agency ","Moscow Center","Press Club"],
    location:["San Francisco, CA","San Francisco, CA","San Francisco, CA","San Francisco, CA","San Francisco, CA","San Francisco, CA"]
}

function displayConcert(concertList){
    for(let i=0;i<concertList.date.length;i++){
        const listEl=document.querySelector(".concerts__list");
        const ticketEl=document.createElement("div");
        ticketEl.classList.add("concerts__list-ticket");

        //date section
        const dateEl=document.createElement("div");
        dateEl.classList.add("concerts__list-section");
        const datetitleEl=document.createElement("p");
        datetitleEl.classList.add("concerts__list-subtitle")
        datetitleEl.innerHTML="DATE";
        const dateContentEl=document.createElement("p");
        dateContentEl.classList.add("concerts__list-content");
        dateContentEl.classList.add("concerts__list-bold");
        dateContentEl.innerHTML=concertList.date[i];
        dateEl.appendChild(datetitleEl);
        dateEl.appendChild(dateContentEl);


        //VENUE section
        const venueEl=document.createElement("div");
        venueEl.classList.add("concerts__list-section");

        const venuetitleEl=document.createElement("p");
        venuetitleEl.classList.add("concerts__list-subtitle");
        venuetitleEl.innerHTML="VENUE";

        const venueContentEl=document.createElement("p");
        venueContentEl.classList.add("concerts__list-content");
        venueContentEl.innerHTML=concertList.venue[i];

        venueEl.appendChild(venuetitleEl);
        venueEl.appendChild(venueContentEl);

        //Location section
        const locationEl=document.createElement("div");
        locationEl.classList.add("concerts__list-section");

        const locationtitleEl=document.createElement("p");
        locationtitleEl.classList.add("concerts__list-subtitle");
        locationtitleEl.innerHTML="LOCATION";

        const locationContentEl=document.createElement("p");
        locationContentEl.classList.add("concerts__list-content");
        locationContentEl.innerHTML=concertList.location[i];

        locationEl.appendChild(locationtitleEl);
        locationEl.appendChild(locationContentEl);

        //button

        const buttonBoxEl=document.createElement("div");
        buttonBoxEl.classList.add("concerts__list-button");
        const buttonEl=document.createElement("button");
        buttonEl.innerHTML="BUY TICKETS";
        buttonBoxEl.appendChild(buttonEl);


        //append child

        ticketEl.appendChild(dateEl);
        ticketEl.appendChild(venueEl);
        ticketEl.appendChild(locationEl);
        ticketEl.appendChild(buttonBoxEl);

        //divider
        const divEl=document.createElement("hr");
        divEl.classList.add("concerts__list-divider");

        //final append

        listEl.append(ticketEl);
        listEl.append(divEl);
    }
}
displayConcert(concertList);

const ticketClickEl=document.querySelectorAll(".concerts__list-ticket");
const copyticketEl=ticketClickEl;
console.log(ticketClickEl[0]);
ticketClickEl.forEach((ticket) =>{
    console.log(ticket);
    ticket.addEventListener("click",(event) =>{
        console.log(event);
        ticket.classList.add("concerts__list-selected");
    for(let i =0;i<ticketClickEl.length;i++){
        if (ticketClickEl[i].classList.contains("concerts__list-selected") && ticketClickEl[i] !== ticket){
            console.log("it's selected");
            ticketClickEl[i].classList.remove("concerts__list-selected")
            console.log("it has been removed");
        }
        console.log(copyticketEl[i]);
    }


    })
})


















