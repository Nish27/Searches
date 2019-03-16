function seacrhUsingLinearSearch() {
    var userInput = document.getElementById("inputText").value;
    var availableList = [1,2,3,4,5,6,7,8,9,10];
    var index=0;
    var elementFound= false;
    var result;
    while (index < availableList.length) {
        if(userInput==availableList[index]) {
            elementFound=true;
            break;
        }
        index++;
    }
    if(elementFound) {
        result = "Element Found at location :"+index;
    } else {
        result = "Element Not Found in the list";
    }

    document.getElementById("searchedElement").innerHTML = "You searched for : " + userInput;
    document.getElementById("resultSection").style.backgroundColor= "cyan";
    document.getElementById("result").innerHTML = result;
}