 function seqGenText(){
    
    var fullTimeStudent = document.getElementById("studentType1");
    if(fullTimeStudent.checked){
        var status = 1
    }
    else{
        var status = 2
    }
    var partTimeStudent = document.getElementById("studentType2");
    var summerStatus =0;
    var summerClass1 = document.getElementById("summerClass1");
    var summerClass2 = document.getElementById("summerClass2");
    if(summerClass1.checked){
        summerStatus = 1;
        if(summerClass2.checked){
            summerStatus = summerStatus + 2;
        }
    }
    else if(summerClass2.checked){
        summerStatus = 2;
    }
    console.log( status+" " + " " + summerStatus + " " +  prefTime.value + "  " );

    displaySequence(status, summerStatus);
}

function displaySequence(status, summerStatus){

    if(status == 1 && summerStatus == 0)
    {
        var seq =  document.getElementById("sequence");
        seq.style.display = "block";
    }
    if(status == 1 && summerStatus == 1)
    {
        var seq =  document.getElementById("sequenceSummer1");
        seq.style.display = "block";
    }
    if(status == 1 && summerStatus == 2)
    {
        var seq =  document.getElementById("sequenceSummer2");
        seq.style.display = "block";
    }
    if(status == 1 && summerStatus == 3)
    {
        var seq =  document.getElementById("sequenceSummer12");
        seq.style.display = "block";
    }


}

