const loadMenu = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayMenu(data.data.news_category);
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
    const res = await fetch(url)
    const data = await res.json()
    displayCardDetail(data.data)
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
    displayCard.textContent = '';
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
        <div class="m-4 row g-0">
                    <div class="col-md-4">
                        <img src="${card.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text text-truncate">${card.details}</p>
                            <div class="card-footer d-flex justi justify-content-evenly ">
                            <img src="${card.author.img}" style="width: 50px;" class="rounded-circle img-fluid m-2" alt="...">
                            <h6>${card.author.name}<h6>
                            <p><span>view: <span>${card.total_view}<p>
                            </div>
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