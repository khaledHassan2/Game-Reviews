"use strict";

import{dataGames,detailsData} from './getdata.js'
// import{displayItem} from './index.js'



// --------------------------------- Display games
// displayItem();
// --------------------------------- Display games
// displayItem();
export class Ui {
    // constructor(name) {
    //     this.name = name;

    // }
    async displayGames() {
        let cartona = ``;

        for (let i = 0; i < dataGames.length; i++) {

            cartona +=
                ` <div  class="col-lg-3 ">
                       <div id="${dataGames[i].id}" class="item">
                          <div id="${dataGames[i].id}"  class="card " style="width: 18rem;">
                               <div class="img"><img id="${dataGames[i].id}" src="${dataGames[i].thumbnail}" class="card-1mg-top w-100 mx-auto p-3" alt="thumbnail"></div>
                               <div id="${dataGames[i].id}" class="card-body text-center">
                                   <div id="${dataGames[i].id}" class="d-flex justify-content-between ">
                                       <h5 id="${dataGames[i].id}" class="card-title h6">${dataGames[i].title}</h5>
                                       <h5 id="${dataGames[i].id}"><span id="${dataGames[i].id}" class="badge text-bg-primary">free</span></h5>
                                   </div>
                                   <p id="${dataGames[i].id}" class="card-text text-white-50">${dataGames[i].short_description.split(' ').splice(0, 7)}</p>
                              </div>
                               <div id="${dataGames[i].id}" class="card-footer text-body-secondary d-flex justify-content-between">
                                   <span id="${dataGames[i].id}" class="badge text-bg-secondary">${dataGames[i].genre}</span>
                                   <span id="${dataGames[i].id}" class="badge text-bg-secondary">${dataGames[i].platform}</span>
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
                <i class="fa-solid fa-xmark fa-2x text-white-50"></i>
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
        let row = document.querySelector('.rowDetalis').innerHTML = cartona;
        // console.log(row);
    }
   
  
}




