let input_PT = document.getElementById("listTeam1"),
    input_GT = document.getElementById("listTeam2"),
    input_DT = document.getElementById("listTeam3"),
    items = document.querySelectorAll("#Team li"), tab = [];
    // test

/* for (var i = 0; i < items.length; i++) {

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
} */
getPT = () => input_PT.value
getGT = () => input_GT.value
getDT = () => input_DT.value

refreshArray = () => {
    tab.length = 0;
    items = document.querySelectorAll("#Team li");
    for (let i = 0; i < items.length; i++) {
        //console.log(items[i].innerHTML)
        tab.push(items[i].innerHTML);
        let box = items[i].innerHTML.split(" - ");
        tab.push(box[0] +" - "+ box[1])
        console.log(tab)

    }
}

checkArray = (test,box) => {
    // console.log(tab)
    // console.log(tab.includes(test))
    if (tab.includes(test) === true ) {
        return false
    }
    else {
       return (tab.includes(box) === true)?false:true;
    }
}


Add = () => {//function thêm
    if (getDT() !== 'none' && getGT() !== 'none' && getPT() !== 'none') {
        let text = getPT() + " - " + getGT() + " - " + getDT();
        let box = getPT() + " - " + getGT();
        if (checkArray(text,box)) {
            let team = document.getElementById("Team"),
                liNode = document.createElement("li"); //tạo li
           
            liNode.append(text);
            team.appendChild(liNode).innerHTML //bỏ text vào id = Team
            refreshArray();

            liNode.onclick = function () {
                index = tab.indexOf(liNode.innerHTML);
                console.log(liNode.innerHTML + " index = " + index)
                myArray = liNode.innerHTML.split(" - ");
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
    let text = getPT() + " - " + getGT() + " - " + getDT();
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
        refreshArray();
        //items[index].remove()  có thể dùng hàm thay thế    
        alert("Xóa thành công")
    }
    else {
        alert("Hãy chọn Team bạn muốn xóa")
    }
}


// test code