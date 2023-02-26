
function convertDate(dateList){
    for(let i =0;i<dateList.length;i++){
        var date = new Date(parseInt(dateList[i].date)).toDateString();
        dateList[i].date=date;
        
    }
    return dateList;
}


function createShowList(data){
        const result=[];
        for(let i =0;i<data.length;i++){
            result[i]={
                date:data[i].date,
                venue:data[i].place,
                location:data[i].location
            };
            // result[i].date=data[i].date;
            // result[i].venue=data[i].place;
            // result[i].location=data[i].location;

        }
        return result;


}
axios
.get("https://project-1-api.herokuapp.com/showdates?api_key=61cbfe75-df6b-4055-802c-ea7aff07d946")
.then((response)=>{
    const showList=createShowList(response.data);
    convertDate(showList);
    displayConcert(showList);

})



function displayConcert(concertList){
    for(let i=0;i<concertList.length;i++){
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
        dateContentEl.innerHTML=concertList[i].date;
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
        venueContentEl.innerHTML=concertList[i].venue;

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
        locationContentEl.innerHTML=concertList[i].location;

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
// displayConcert(concertListO);

const ticketClickEl=document.querySelectorAll(".concerts__list-ticket");
const copyticketEl=ticketClickEl;
ticketClickEl.forEach((ticket) =>{
    ticket.addEventListener("click",(event) =>{
        ticket.classList.add("concerts__list-selected");
    for(let i =0;i<ticketClickEl.length;i++){
        if (ticketClickEl[i].classList.contains("concerts__list-selected") && ticketClickEl[i] !== ticket){
            ticketClickEl[i].classList.remove("concerts__list-selected")
        }
    }


    })
})


















