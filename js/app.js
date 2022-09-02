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
const loadCardDetail = async (code) => {

    const url = `https://openapi.programming-hero.com/api/news/category/0${code}`
    const res = await fetch(url);
    const data = await res.json();
    displayCardDetail(data.data);
}
const displayCardDetail = (cards) => {
    const displayCard = document.getElementById('card-fields');
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
        <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${card.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.details}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
        `;
        displayCard.appendChild(cardDiv);
    })
}

loadMenu();