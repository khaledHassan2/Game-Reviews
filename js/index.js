"use strict";
// ----------- import

import{Ui} from './Ui.js';
import{Get} from './getdata.js';

let display=new Ui;
let getData=new Get;

let loginggg=document.querySelector('.loginggg');
// ---------
(async function(){

    loginggg.classList.replace('d-none','d-flex');

    // -------------------------- display Home ------

    
    await getData.getGames('mmorpg');
    await display.displayGames();

    loginggg.classList.replace('d-flex','d-none');
    
    // -------------------------- Display Deferant Catogery ------
    
    let a =document.querySelectorAll('a');
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click',function(e){
            for (let y = 0; y < a.length; y++) {
                a[y].classList.remove('active')
                
            }
            a[i].classList.add('active')
            loginggg.classList.replace('d-none','d-flex');
           
            (async function(){
                await getData.getGames(a[i].type);
                await display.displayGames();
                loginggg.classList.replace('d-flex','d-none');
                display.displayCard();
                
            })();
            
        })
        
    }

    //------------------ Display Card Details ----------------
    
    display.displayCard();
})();







