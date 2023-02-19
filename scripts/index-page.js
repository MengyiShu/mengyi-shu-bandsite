const commentList={
        name:["Connor Walton","Emilie Beach","Miles Acosta"],
        timestamp:["02/17/2021","01/09/2021","12/20/2020"],
        comment:["This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."]

}




const formEl=document.querySelector(".comment__form");
console.log(formEl);
formEl.addEventListener("submit",(event) =>{
    event.preventDefault();
    //constreuct new commentList
    const list={};
    list.name=[];
    list.timestamp=[];
    list.comment=[];
    // How do we access the user input
    let nameValue = event.target.name.value;
    list.name.unshift(nameValue);
    commentList.name.unshift(nameValue);
    console.log("nameValue: ", nameValue);
    let commentValue = event.target.comment.value;
    console.log("commentValue: ", commentValue);
    list.comment.unshift(commentValue);
    commentList.comment.unshift(commentValue);

    let timeValue=new Date().toLocaleDateString();
    list.timestamp.unshift(timeValue);
    commentList.timestamp.unshift(timeValue);
    console.log(list);
    var div = document.querySelector('.display');
    while(div.firstChild){    
        div.removeChild(div.firstChild);
    }
    displayComment(commentList);

    formEl.reset();


    //display comment



    
})


function displayComment(commentList) {
    console.log(commentList.name.length);
    for(let i=0;i<commentList.name.length;i++){
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
        nameEl.innerHTML=commentList.name[i];
        const contentEl=document.createElement("p");
        contentEl.classList.add("display__text-content");
        contentEl.innerHTML=commentList.comment[i];
        const timeEl=document.createElement("p");
        timeEl.classList.add("display__timestamp");
        timeEl.innerHTML=commentList.timestamp[i]
        // const d=new Date();
        // console.log(d.toLocaleDateString());
        textEl.appendChild(nameEl);
        textEl.appendChild(contentEl);
        sectionEl.appendChild(img);
        sectionEl.appendChild(textEl);
        sectionEl.append(timeEl);
        displayEl.appendChild(divider);
        displayEl.appendChild(sectionEl);
        }
    }
    displayComment(commentList);




            //     <hr class="display__divider">
            // <div class="display__section">
            // <img class="display__avatar"src="" alt="">
            // <div class="display__text">
            //     <p class="display__text-name">Connor Walton</p>
            //     <p class="display__text-content">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work
            //     deserves reverence. Let us appreciate this for what it is and what it contains.</p>
            // </div>
            // <p class="display__timestamp">02/17/2021</p>
            // </div>




