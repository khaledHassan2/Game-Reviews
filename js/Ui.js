"use strict";

import{dataGames,detailsData} from './getdata.js';

import{Get} from './getdata.js';
let getData=new Get;

export class Ui {
    
        // --------------------------------- Display Games

    async displayGames() {
        let cartona = ``;

        for (let i = 0; i < dataGames.length; i++) {

            cartona +=
                `
              <div  class="col-lg-3 col-md-4 col-sm-12">
        <div  class="item">
           <div id="${dataGames[i].id}"  class="card ">
                <div class="img"><img  src="${dataGames[i].thumbnail}" class="card-1mg-top w-100 mx-auto p-3" alt="thumbnail"></div>
                <div  class="card-body text-center">
                    <div  class="d-flex justify-content-between ">
                        <h2  class="card-title h6">${dataGames[i].title}</h2>
                        <h5 ><span  class="badge text-bg-danger">free</span></h5>
                    </div>
                    <p  class="card-text text-white-50">${dataGames[i].short_description.split(' ').splice(0, 7)}</p>
               </div>
                <div  class="card-footer text-body-secondary d-flex justify-content-between">
                <span  class="badge text-bg-secondary">${dataGames[i].genre}</span>
                    <span  class="badge text-bg-secondary">${dataGames[i].platform}</span>
                </div>
           </div>
         </div> 
         </div>`;

                    }

                    document.querySelector('.row').innerHTML = cartona;
                    
                    
                    
                }
        // --------------------------------- Display Details

    async displayDetails() {
        let cartona = ``;

        cartona +=
        `  <div class="d-flex justify-content-between align-items-center">
        <h1 class="my-4">Details Game</h1>
        <i class="fa-solid fa-xmark fa-2x text-danger"></i>
        </div>
        <div class="col-lg-4">
               <div class="item">
               <div><img src="${detailsData.thumbnail}" alt=""></div>
               </div>
               </div>
               
               
               <div class="col-lg-8">
               <div class="item">
                <h2 class="mt-3">Title: ${detailsData.title}</h2>
                <h3 class="h5 mt-3">Category:  <span class="badge text-bg-info">${detailsData.genre}</span></h3>
                <h3 class="h5 mt-3">Platform: <span class="badge text-bg-info">${detailsData.platform}</span></h3>
                <h3 class="h6 mt-3">Status: <span class="badge text-bg-info">${detailsData.status}</span></h3>
                <p class="mt-3">${detailsData.description}</p>
                <button class="btn btn-outline-warning text-white">Show Game</button>
                </div>
                </div>`;
                document.querySelector('.rowDetalis').innerHTML = cartona;
           
            }

        // --------------------------------- Display Card

    async displayCard(){
        let img=document.querySelectorAll('.card');

        for (let y = 0; y < img.length; y++) {
            
            img[y].addEventListener('click',function(e){
               
                let rowGames =document.querySelector('.rowGames');
                let containerGames =document.querySelector('.containerGames');
                let rowDetalis =document.querySelector('.rowDetalis');
                let nav =document.querySelector('nav');

                let loginggg =document.querySelector('.loginggg');
                loginggg.classList.replace('d-none','d-flex');


                 let idCard=img[y].id;
                 
                       (async function(){
         
                               await getData.getDetails(idCard);
                               await ui.displayDetails();

                               loginggg.classList.replace('d-flex','d-none');
                               rowGames.classList.add('d-none');
                               containerGames.classList.add('d-none');
                               nav.classList.add('d-none');
                               rowDetalis.classList.remove('d-none');
                               
                                     let i=document.querySelector('i');
                                     i.addEventListener('click',function(e){
                                        
                                         rowGames.classList.remove('d-none');
                                         containerGames.classList.remove('d-none');
                                         nav.classList.remove('d-none');
                                         rowDetalis.classList.add('d-none');

                                        })
         
         
                       })();
                            
         
                         
                            
                            
         
            });
    
    
            
        }
    }
   
  
}


let ui=new Ui;


