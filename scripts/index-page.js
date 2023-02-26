//function



function displayComment(commentList) {
    for(let i=0;i<commentList.length;i++){
        const displayEl=document.querySelector(".display");
        const divider=document.createElement("hr");
        divider.classList.add("display__divider");
        const sectionEl=document.createElement("div");
        sectionEl.classList.add("display__section");
        const img=document.createElement("img");
        img.classList.add("display__avatar");
        const textEl=document.createElement("div");
        textEl.classList.add("display__text");
        const nameEl=document.createElement("p");
        nameEl.classList.add("display__text-name");
        nameEl.innerHTML=commentList[i].name;
        const contentEl=document.createElement("p");
        contentEl.classList.add("display__text-content");
        contentEl.innerHTML=commentList[i].comment;
        const timeEl=document.createElement("p");
        timeEl.classList.add("display__timestamp");
        timeEl.innerHTML=commentList[i].timestamp
        textEl.appendChild(nameEl);
        textEl.appendChild(contentEl);
        sectionEl.appendChild(img);
        sectionEl.appendChild(textEl);
        sectionEl.append(timeEl);
        displayEl.appendChild(divider);
        displayEl.appendChild(sectionEl);
        }
    }



function convertDate(dateList){
    for(let i =0;i<dateList.length;i++){
        var date = new Date(dateList[i].timestamp);
        const fdate = date.getFullYear() + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + ("0" + date.getDate()).slice(-2);
        dateList[i].timestamp=fdate;
        
    }
}




function sortDateList(list){
    list.sort((p1, p2) => {
    date1 = p1.timestamp.split('/'), date2 = p2.timestamp.split('/');
    let day1 = parseInt(date1[2]);
    let day2 = parseInt(date2[2]);
    let month1 = parseInt(date1[1]);
    let month2 = parseInt(date2[1]);
    let year1 = parseInt(date1[0]);
    let year2 = parseInt(date2[0]);
    if (year1 !== year2) {
        return year2 - year1;
    } else if (month1 !== month2) {
        return month2 - month1;
    } else {
        return day2 - day1;
    }
});

}



const swapElements = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};   



function createCommentsList(data){
    const result=[];
    for (i = 0;i<data.length;i++){
        result[i]={
            name:data[i].name,
            comment:data[i].comment,
            timestamp:data[i].timestamp

        }
    }
    return result;

}

const url="https://project-1-api.herokuapp.com/comments?api_key=ca095d44-fa02-48fd-8b13-b5f3704f917a";



axios.get(url)
.then((response)=>{
    const commentList=createCommentsList(response.data);
    convertDate(commentList);
    const temtList=commentList.timestamp;
    sortDateList(commentList)
    displayComment(commentList); 
    

    const formEl=document.querySelector(".comment__form");
    formEl.addEventListener("submit",(event) =>{
    event.preventDefault();
    //constreuct new commentList
    const list={};
    // How do we access the user input
    let nameValue = event.target.name.value;
    let commentValue = event.target.comment.value;

    let timeValue=new Date().toLocaleDateString();
    var datearray = timeValue.split("/");

    var newdate = datearray[2] + '/' + datearray[1] + '/' + datearray[0];
    list.name=nameValue;
    list.timestamp=newdate;
    list.comment=commentValue;
    commentList.unshift(list);
            axios.post(url,{
      "name": nameValue,
      "comment": commentValue,
    })

    var div = document.querySelector('.display');
    while(div.firstChild){    
        div.removeChild(div.firstChild);
    }
    sortDateList(commentList);
    displayComment(commentList);

    formEl.reset();





    
})




})








    







