const home = document.getElementById("home"); 
const guest = document.getElementById("guest"); 
let homeS = 0; 
let guestS = 0; 
function addOne() {
 homeS++;    
 home.textContent = homeS; 
}

function addTwo() {
    homeS += 2;
     home.textContent = homeS; 
}

function addThree() {
    homeS +=3; 
     home.textContent = homeS; 
}

function addOneG() {
    guestS++; 
     guest.textContent = guestS; 
}

function addTwoG() {
    guestS += 2;
    guest.textContent = guestS; 
    
}

function addThreeG() {
    guestS +=3;
    guest.textContent = guestS; 
}