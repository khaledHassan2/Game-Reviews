// ----------- import
import{Ui} from './Ui.js';
import{Get} from './getdata.js';

// ---------
export async function displayItem(id){
        await getData.getDetails(idCard);
        display.displayDetails();
   
    console.log(`welcom ${id}`);

    // let item =document.querySelector('.item').addEventListener('click',function(e){
    //  rowGames.classList.add('d-none');
    //  rowDetalis.classList.remove('d-none');
    
    // })
}
// ---------

let display=new Ui;
let getData=new Get;
 
(async function(){
    await getData.getGames('mmorpg');
          display.displayGames();
   
 })();


    //  -----------------------------

let MMORPG =document.querySelector('.MMORPG');
MMORPG.addEventListener('click',function(e){
    (async function(){
        await getData.getGames('mmorpg');
         display.displayGames();
        
    })();
    
})

let SHOOTER =document.querySelector('.SHOOTER');
SHOOTER.addEventListener('click',function(e){
    (async function(){
       await getData.getGames('shooter');
       display.displayGames();
    })();
   
})
let PIXSEL =document.querySelector('.PIXSEL');
PIXSEL.addEventListener('click',function(e){
    (async function(){
       await getData.getGames('pixel');
       display.displayGames();
    })();
   
})
let SUPERHERO =document.querySelector('.SUPERHERO');
SUPERHERO.addEventListener('click',function(e){
    (async function(){
       await getData.getGames('superhero');
       display.displayGames();
    })();
   
})
let PERMADEATH =document.querySelector('.PERMADEATH');
PERMADEATH.addEventListener('click',function(e){
    (async function(){
       await getData.getGames('permadeath');
       display.displayGames();
    })();
   
})
let SALING =document.querySelector('.SALING');
SALING.addEventListener('click',function(e){
    (async function(){
       await getData.getGames('sailing');
       display.displayGames();
    })();
   
})

