$mon = document.getElementById("mon");
$mon.addEventListener("click",mona);
$tue = document.getElementById("tue");
$tue.addEventListener("click",tuea);
$wed = document.getElementById("wed");
$wed.addEventListener("click",weda);
$thu = document.getElementById("thu");
$thu.addEventListener("click",thua);
$fri = document.getElementById("fri");
$fri.addEventListener("click",fria);

let ch1=$mon.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1];
let ch2=$mon.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[3];
console.log(ch2);
function mona(){
    document.getElementById("mon").style.color="Black";
    ch1.childNodes[1].innerHTML="1. Chicken Tikka Masala";
    ch1.childNodes[3].innerHTML="2. Lamm Rogan Josh";
    ch1.childNodes[5].innerHTML="3. Biff Khusboo";
    ch1.childNodes[7].innerHTML="4. Rakor Curry";
    ch1.childNodes[9].innerHTML="5. Palak Ponir";
    ch1.childNodes[11].innerHTML="6. Veg Kolapuri";
    ch1.childNodes[13].innerHTML="Nan: 10 Kr, Vitlök Nan 15 Kr";
    ch2.childNodes[1].innerHTML="7. Chicken Tikka Sizlar";
    ch2.childNodes[3].innerHTML="8. Vitlok Sizlar";
    ch2.childNodes[5].innerHTML="9. Goan Masala Chicken/Lamm/Biff";
    ch2.childNodes[7].innerHTML="10. Palak Gost Lamm";
    ch2.childNodes[9].innerHTML="Ingår i lunch Ris, Sallad, Dryck, Kaffe Ingar";

};
mona();
function tuea(){
    document.getElementById("tue").style.color="Black";
    ch1.childNodes[1].innerHTML="1. Chicken Tikka Masala (mild)";
    ch1.childNodes[3].innerHTML="2. Chicken Sambal (Medium)";
    ch1.childNodes[5].innerHTML="3. Lamm Curry (medium)";
    ch1.childNodes[7].innerHTML="4. Biff Vindalo (medium/stark)";
    ch1.childNodes[9].innerHTML="5. Palak Ponir (mild)";
    ch1.childNodes[11].innerHTML="6. Mix Veg Gryta (lite stark)";
    ch1.childNodes[13].innerHTML="Nan: 10 Kr, Vitlök Nan 15 Kr";
    ch2.childNodes[1].innerHTML="7. Chicken Tikka Sizlar File";
    ch2.childNodes[3].innerHTML="8. Garlic Chicken Sizlar";
    ch2.childNodes[5].innerHTML="9. Korma Chickem/Lamm";
    ch2.childNodes[7].innerHTML="10. Rakor Spenat";
    ch2.childNodes[9].innerHTML="Ingår i lunch Ris, Sallad, Dryck, Kaffe Ingar";
};
tuea();
function weda(){
    document.getElementById("wed").style.color="Black";
    ch1.childNodes[1].innerHTML="1. Chicken Tikka Masala (mild)";
    ch1.childNodes[3].innerHTML="2. Chicken Curry (medium)";
    ch1.childNodes[5].innerHTML="3. Lamm Korai (medium)";
    ch1.childNodes[7].innerHTML="4. Biff Spenat (medium/stark)";
    ch1.childNodes[9].innerHTML="5. Palak Ponir (mild)";
    ch1.childNodes[11].innerHTML="6. Mix Veg Gryta (lite stark)";
    ch1.childNodes[13].innerHTML="Nan: 10 Kr, Vitlök Nan 15 Kr";
    ch2.childNodes[1].innerHTML="7. Chicken Tikka Sizlar File";
    ch2.childNodes[3].innerHTML="8. Garlic Chicken Sizlar";
    ch2.childNodes[5].innerHTML="9. Korma Chickem/Lamm";
    ch2.childNodes[7].innerHTML="10. Rakor Spenat";
    ch2.childNodes[9].innerHTML="Ingår i lunch Ris, Sallad, Dryck, Kaffe Ingar";
};
weda();
function thua(){
    document.getElementById("thu").style.color="Black";
    ch1.childNodes[1].innerHTML="1. Chicken Tikka Masala (mild)";
    ch1.childNodes[3].innerHTML="2. Chicken Balti (medium)";
    ch1.childNodes[5].innerHTML="3. Lamm Kashmiri (medium)";
    ch1.childNodes[7].innerHTML="4. Beef Curry Masala (strong)";
    ch1.childNodes[9].innerHTML="5. Palak Ponir (mild)";
    ch1.childNodes[11].innerHTML="6. Lentil gryta (a little strong)";
    ch1.childNodes[13].innerHTML="Nan: 10 Kr, Vitlök Nan 15 Kr";
    ch2.childNodes[1].innerHTML="7. Chicken Tikka Sizlar File";
    ch2.childNodes[3].innerHTML="8. Garlic Chicken Sizlar";
    ch2.childNodes[5].innerHTML="9. Korma Chickem/Lamm";
    ch2.childNodes[7].innerHTML="10. Rakor Spenat";
    ch2.childNodes[9].innerHTML="Ingår i lunch Ris, Sallad, Dryck, Kaffe Ingar";
};
thua();
function fria(){
    document.getElementById("fri").style.color="Black";
    ch1.childNodes[1].innerHTML="1. Chicken Tikka Masala (mild)";
    ch1.childNodes[3].innerHTML="2. Chicken Jhal Frez (medium)";
    ch1.childNodes[5].innerHTML="3. Lamb mattress (medium)";
    ch1.childNodes[7].innerHTML="4. Beef Vindalo (medium / strong)";
    ch1.childNodes[9].innerHTML="5. Palak Ponir (mild)";
    ch1.childNodes[11].innerHTML="6. Mix Veg (a little strong)";
    ch1.childNodes[13].innerHTML="Nan: 10 Kr, Vitlök Nan 15 Kr";
    ch2.childNodes[1].innerHTML="7. Chicken Tikka Sizlar File";
    ch2.childNodes[3].innerHTML="8. Garlic Chicken Sizlar";
    ch2.childNodes[5].innerHTML="9. Korma Chickem/Lamm";
    ch2.childNodes[7].innerHTML="10. Rakor Spenat";
    ch2.childNodes[9].innerHTML="Ingår i lunch Ris, Sallad, Dryck, Kaffe Ingar";
};
fria();
