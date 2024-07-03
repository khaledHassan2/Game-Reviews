"use strict";
// ----------- import
import{Ui} from './Ui.js';
import{Get} from './getdata.js';

let display=new Ui;
let getData=new Get;
// ---------
(async function(){
    await getData.getGames('mmorpg');
    display.displayGames();
    
})();


//  -----------------------------
let ul =document.querySelector('ul');
ul.addEventListener('click',function(e){
    // console.log( e.target);
    
        (async function(){
            await getData.getGames(e.target.type);
            
            display.displayGames();
        
    
    
        })()
});



let row=document.querySelector('.row');
   row.addEventListener('click',function(e){

   
        let rowGames =document.querySelector('.rowGames');
        let rowDetalis =document.querySelector('.rowDetalis');
        let nav =document.querySelector('nav');
        let idCard=e.target.id;
        console.log(idCard);

              if(idCard !=null ){
        
                   (async function(){
                      await getData.getDetails(e.target.id);
                      display.displayDetails();
                   })();

                    rowGames.classList.add('d-none');
                    nav.classList.add('d-none');
                    rowDetalis.classList.remove('d-none');
                }
                else{
                    console.log('erroe')
                }
              
     

   });


