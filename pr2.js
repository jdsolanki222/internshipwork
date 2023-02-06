function getval() {

    let val = document.getElementById('getid').value;
    const arr1 = val.split("");
    let len = val.length;
    let count = 0;
    const tb1=document.getElementById('getid');
    console.log(len);
    let t1="";
    if (len == 0) {
        document.getElementById('output').innerHTML = "enter some value mate..."; 
        tb1.style.border='3px solid red';
        tb1.classList.add('error');
        count++;
    }

    for (const i in val) {

        if (arr1[i] == " ") {
            document.getElementById('output').innerHTML = "error Blank space detected...";
            tb1.style.border='3px solid red';
            tb1.classList.add('error');
            count++;
            break;

        }
        else if (!Number(arr1[i]) && arr1[i]!=0) {
            document.getElementById('output').innerHTML = "error Character detected...";
            tb1.style.border='3px solid red';
            tb1.classList.add('error');
            count++;
            break;

        }

    }
    if (count == 0) {

        document.getElementById('output').innerHTML = "valid number:" + val;
        tb1.style.border='5px solid blue';
    }


}
