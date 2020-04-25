 function seqGenText(){
    
    var fullTimeStudent = document.getElementById("studentType1");
    if(fullTimeStudent.checked){
        var status = "fullTime"
    }
    else{
        var status = "partTime"
    }
    var partTimeStudent = document.getElementById("studentType2");
    var summerStatus ="";
    var summerClass1 = document.getElementById("summerClass1");
    var summerClass2 = document.getElementById("summerClass2");
    if(summerClass1.checked){
        summerStatus = "Summer1";
        if(summerClass2.checked){
            summerStatus = summerStatus + " Summer2";
        }
    }
    else if(summerClass2.checked){
        summerStatus = "Summer2";
    }

    var prefTime = document.getElementById("prefTime");
    var undesTime = document.getElementById("undesTime");
    console.log( status+" " + " " + summerStatus + " " +  prefTime.value + "  " + undesTime.value);
}

