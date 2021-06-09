/*!
* Start Bootstrap - Coming Soon v6.0.0 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let urlApi = "https://robsonalves-dev-br-srvapp.azurewebsites.net";

async function people() {

    await fetch(`${urlApi}/api/peoples`)
        .then(response => {
            if (!response.ok)
                throw new Error(`Status: ${response.status}, StatusText: ${response.statusText}`);                
            return response;
        })
        .then(response => response.json())
        .then(people => {
            $("#nickname").html(`${people.nickname}`);
            $("#descriptionEmail").html(`${people.email}`);
        })
        .catch(error => {
            console.log(`${error.message}`);
        });
}

people();


async function socialMedias() {

    await fetch(`${urlApi}/api/socialmedia`)
        .then(response => {
            if (!response.ok)
                throw new Error(`Status: ${response.status}, StatusText: ${response.statusText}`);                
            return response;
        })
        .then(response => response.json())
        .then(socialMedia => {
            $("#linkedin").attr("href",`${socialMedia.linkedIn}`);
            $("#github").attr("href",`${socialMedia.github}`);
            $("#discord").attr("href",`${socialMedia.discord}`);
            $("#emailCall").attr("href",`mailto:${socialMedia.email}?subject=Mail from RobsonDev`);
        })
        .catch(error => {
            console.log(`${error.message}`);
        });

}


socialMedias();