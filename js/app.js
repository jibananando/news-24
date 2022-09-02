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
        <span class="px-2">${menu.category_name}</span>
        `;
        menuContainer.appendChild(menuDiv);
    });
}

loadMenu();