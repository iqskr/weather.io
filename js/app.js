

'use strict';

import { fetchData, url } from "./api.js";

import * as module from "./module.js";


/**
 * 
 * @param {NodeList} elements Elements node array
 * @param {string} eventType Event Type e.g.: "click", "mouseover"
 * @param {Function} callback callback function
 */

const addEventOnElement = function(elements, eventType, callback){
    for(const element of elements) element.addEventListener(eventType, callback);
}

/**
 * Toggler search in mobile devices
 */

const search = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelector("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");
addEventOnElement(searchTogglers, "click", toggleSearch);

/**
 * SEARCH INTEGRATION
 */

const searchField = document.querySelector("[data-search-field]");
const searchResult = document.querySelector("[data-search-result]");

let searchTimeout = null;
const searchTimeoutDuration = 500;

searchField.addEventListener("input", function(){

    searchTimeout ?? clearTimeout(searchTimeout);

    if(!searchField.value){
        searchResult.classList.remove("active");
        searchResult.innerHTML="";
        searchField.classList.remove("searching");
    }else{
        searchField.classList.add("searching");
    }

    if(searchField.value){
        searchTimeout = setTimeout(() => {
            fetchData(url.geo(searchField.value),function(locations){
                searchField.classList.remove("searching");
                searchResult.classList.add("active");
                searchResult.innerHTML = `
                    <ul class="view-list" data-search-list>
                            
                            <li class="view-item">
                                <span class="m-icon">location_on</span>

                                <div>
                                    <p class="item-title">London</p>

                                    <p class="label-2 item-subtitle">State of London, GB</p>
                                </div>
                                <a href="#" class="item-link has-state" data-search-toggler>

                                </a>
                            </li>
                        </ul>
                `;

                const items = [];
            });
        }, searchTimeoutDuration);
    }
});