var movie1 = JSON.parse(silent);
var movie2 = JSON.parse(weathering);
var movie3 = JSON.parse(your);
var movie4 = JSON.parse(mononoke);

for (let i = 0; i < movie1.length; i++) {
    document.getElementById("v-pills-home").innerHTML += `
    <p class="name font-weight-bold">${movie1[i].name}</p>
    <p class="director">${movie1[i].director}</p>
    <p class="description">${movie1[i].description}</p>
    <div><img src="${movie1[i].img} "width="250px" class="img-fluid rounded mx-auto d-block"</div>`
}
for (let i = 0; i < movie2.length; i++) {
    document.getElementById("v-pills-profile").innerHTML += `
    <p class="name">${movie2[i].name}</p>
    <p class="director">${movie2[i].director}</p>
    <p class="description">${movie2[i].description}</p>
    <div><img src="${movie2[i].img} "width="250px" class="img"</div>`
}
for (let i = 0; i < movie3.length; i++) {
    document.getElementById("v-pills-messages").innerHTML += `
    <p class="name">${movie3[i].name}</p>
    <p class="director">${movie3[i].director}</p>
    <p class="description">${movie3[i].description}</p>
    <div><img src="${movie3[i].img} "width="250px" class="img"</div>`
}
for (let i = 0; i < movie4.length; i++) {
    document.getElementById("v-pills-settings").innerHTML += `
    <p class="name">${movie4[i].name}</p>
    <p class="director">${movie4[i].director}</p>
    <p class="description">${movie4[i].description}</p>
    <div><img src="${movie4[i].img} "width="250px" class="img"</div>`
}