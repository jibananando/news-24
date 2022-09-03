const loadMenu = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMenu(data.data.news_category);
    }
    catch (error) {
        console.log(error)
    }
}
const displayMenu = menubar => {
    const menuContainer = document.getElementById('menu-container');
    menubar.forEach(menu => {
        // console.log(menu);
        const menuDiv = document.createElement('div');
        // menuDiv.classList.add('nav');
        menuDiv.innerHTML = `
        <span onclick="loadCardDetail(${menu.category_id})" class="px-2">${menu.category_name}</span>
        `;
        menuContainer.appendChild(menuDiv);
    });

}
//spinner


const loadCardDetail = async (code) => {

    const url = `https://openapi.programming-hero.com/api/news/category/0${code}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        displayCardDetail(data.data)
    }
    catch (error) {
        console.log(error)
    }
    // Start spiner
    toggleSpiner(true);
}
const displayCardDetail = (cards) => {
    const displayCard = document.getElementById('card-fields');
    const textAlart = document.getElementById('no-data');
    if (cards.length === 0) {
        textAlart.classList.remove('d-none');
    }
    else {
        textAlart.classList.add('d-none')
    }
    const itemViwer = cards.length;
    //console.log(len);
    const itemViwerField = document.getElementById('item-viewer');
    itemViwerField.innerHTML = `
    <p  class=" p-4 ms-5 mt-3 me-5 fs-5"> The category have ${itemViwer} items</p>
    `;
    displayCard.textContent = '';
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
        <div class="m-4 row g-0">
                    <div class="col-md-2">
                        <img src="${card.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text text-truncate">${card.details}</p>
                            <div class="card-footer d-flex justi justify-content-evenly ">
                            <img src="${card.author.img}" style="width: 50px;" class="rounded-circle img-fluid m-2" alt="...">
                            <h6>${card.author.name ? card.author.name : 'Author name not found'}<h6>
                            <p><span>view: <span>${card.total_view ? card.total_view : 'hidden'}<p>
                            </div>
                            <div class="d-grid gap-2"><button class="btn btn-outline-primary" type="button">Details</button></div>

                        </div>
                    </div>
                </div>
        `;
        displayCard.appendChild(cardDiv);

    });
    // stop spiner
    toggleSpiner(false);

}

// const toggleSpiner = isLoading => {
//     const loaderSection = document.getElementById('loader');
//     if (isLoading === true) {
//         console.log('run');
//         loaderSection.classList.remove('d-none');
//     }
//     else {
//         console.log('not run');
//         loaderSection.classList.add('d-none');
//     }
// }

loadMenu();