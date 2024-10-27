const countH1 = document.getElementById("countH1")
let count = 0;

function addOne(){
    count++;
    console.log(count)

    if(count%7 === 0   ||  count.toString().includes('7')  ){

        countH1.innerHTML = "💥";
        alert("you lost 😒😒" + count)

    }else{

        countH1.innerHTML = count;
        
    }

    
}





function boom(){
    count++;
    if(count%7 === 0   ||  count.toString().includes('7')  ){

        countH1.innerHTML = count;

    }else{

        
        alert("you lost 😒😒" + count)
        countH1.innerHTML = "💥";
        count = 0;

    }

}


 