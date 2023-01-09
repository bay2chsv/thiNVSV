var input_PT = document.getElementById("listTeam1"),
    input_GT = document.getElementById("listTeam2"),
    input_DT = document.getElementById("listTeam3"),
    items = document.querySelectorAll("#Team li"), tab = [];

for (var i = 0; i < items.length; i++) {

    tab.push(items[i].innerHTML);//put text of items -> tab[]
    console.log(items[i].innerHTML)//log for checking what we're putting in
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + " index = " + index)
        myArray = this.innerHTML.split(" - ");
        //console.log(myArray)
        input_PT.value = myArray[0]
        input_GT.value = myArray[1]
        input_DT.value = myArray[2]
    }
}


getPT = () => {
    var valuePT = input_PT.value;
    console.log(valuePT);
    return valuePT
}
getGT = () => {
    var valueGT = input_GT.value;
    console.log(valueGT);
    return valueGT
}
getDT = () => {
    var valueDT = input_DT.value;
    console.log(valueDT);
    return valueDT
}
refreshArray = () => {

    tab.length = 0;
    items = document.querySelectorAll("#Team li")
    for (var i = 0; i < items.length; i++) {
        tab.push(items[i].innerHTML);
    }
}

checkArray = (test) => {
    // console.log(tab)
    // console.log(tab.includes(test))
    if (tab.includes(test) === true) {
        return false
    }
    else {
        return true
    }
}


Add = () => {//function thêm
    if (getDT() !== 'none' && getGT() !== 'none' && getPT() !== 'none') {
        var text = getPT() + " - " + getGT() + " - " + getDT();
        if (checkArray(text)) {
            var team = document.getElementById("Team"),
                createLi = document.createElement("li"); //tạo li

            // checkArray(text);
            createLi.append(text);
            team.appendChild(createLi).innerHTML //bỏ text vào id = Team
            refreshArray();

            createLi.onclick = function () {
                index = tab.indexOf(createLi.innerHTML);
                console.log(createLi.innerHTML + " index = " + index)
                myArray = createLi.innerHTML.split(" - ");
                // console.log(myArray)
                input_PT.value = myArray[0]
                input_GT.value = myArray[1]
                input_DT.value = myArray[2]
            }
           // alert("Thêm thành công")
        }
        else{
            alert("không được thêm trùng team")
        }
    }
    else {
        alert("Hãy chọn cho đủ 3 cái");
    }
}



Update = () => {
    var text = getPT() + " - " + getGT() + " - " + getDT();
    if (getDT() !== 'none' && getGT() !== 'none' && getPT() !== 'none') {
        if (checkArray(text)) {
         
            items[index].innerHTML = text;
            //console.log(text);  
             refreshArray();
            alert("Cập nhật thành công")
        }
        else{
            alert("Team bạn vừa cập nhật đã có tồn tại trên team list")
        }
    }
    else {
        alert("Hãy chọn Team bạn muốn sửa");
    }
}

Delete = () => {
    if (getDT() !== 'none' && getGT() !== 'none' && getPT() !== 'none') {

        //console.log(items[index].parentNode )
        //  console.log(items[index])
        items[index].parentNode.removeChild(items[index]);
        //items[index].remove()  có thể dùng hàm thay thế    
        alert("Xóa thành công")
    }
    else {
        alert("Hãy chọn Team bạn muốn xóa")
    }
}


// test code