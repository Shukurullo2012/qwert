
    let name = prompt("Введите ваше имя:") 
    let surname = prompt("Введите вашу фамилию:") 
    let age = prompt("Введите ваш возраст:") 

    document.getElementById("nameOutput").textContent = name.toUpperCase();
    document.getElementById("surnameOutput").textContent = surname.toUpperCase();
    document.getElementById("ageOutput").textContent = age;


