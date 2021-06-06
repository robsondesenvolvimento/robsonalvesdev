/*!
* Start Bootstrap - Coming Soon v6.0.0 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

async function people() {

    await fetch('https://robsonalves-srvapp.azurewebsites.net/api/peoples')
        .then(response => {
            if (!response.ok)
                throw new Error(`Status: ${response.status}, StatusText: ${response.statusText}`);                
            return response;
        })
        .then(response => response.json())
        .then(people => {
            document.getElementById('nickname').innerHTML = people.nickname;
            document.getElementById('descriptionEmail').innerHTML = people.email;
        })
        .catch(error => {
            console.log(`${error.message}`);
        });
}

people();


async function socialMedias() {

    await fetch('https://robsonalves-srvapp.azurewebsites.net/api/socialmedia')
        .then(response => {
            if (!response.ok)
                throw new Error(`Status: ${response.status}, StatusText: ${response.statusText}`);                
            return response;
        })
        .then(response => response.json())
        .then(socialMedia => {
            document.getElementById('linkedin').href = `${socialMedia.linkedIn}`;
            document.getElementById('github').href = `${socialMedia.github}`;
            document.getElementById('discord').href = `${socialMedia.discord}`;
            document.getElementById('emailCall').href = `mailto:${socialMedia.email}?subject=Mail from RobsonDev`;
        })
        .catch(error => {
            console.log(`${error.message}`);
        });

}


socialMedias();