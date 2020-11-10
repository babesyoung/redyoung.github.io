let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Mozilla.jpg') {
      myImage.setAttribute('src', 'images/jixiao.jpg');
    } else {
      myImage.setAttribute('src', 'images/Mozilla.jpg');
    }

    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');
    /*
    function setUserName() {
        let myName = prompt('请输入你的名字。');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Firefox，' + myName;
    }
    */
    
    function setUserName() {
        let myName = prompt('请输入你的名字。');
        if(!myName || myName === null) {
          setUserName();
        } else {
          localStorage.setItem('name', myName);
          myHeading.innerHTML = 'Firefox，' + myName;
        }
    }
    
    if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Firefox，' + storedName;
    }

    myButton.onclick = function() {
        setUserName();
    }

}