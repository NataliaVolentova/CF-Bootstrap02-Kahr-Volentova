var dataObject = JSON.parse(data);
console.table(dataObject);

for (let i = 0; i < dataObject.length; i++) {
    $("#v-pills-tabContent").after(`
    <div class="tab-pane fade " id="v-pills-movie${dataObject[i].id}" role="tabpanel" aria-labelledby="v-pills-movie${dataObject[i].id}-tab">
    <p>${dataObject[i].name}</p>
    <p>${dataObject[i].director}</p>
    <p>${dataObject[i].description}</p>
    <img src="${dataObject[i].img} "width="250px"
    </div>
    `)


}