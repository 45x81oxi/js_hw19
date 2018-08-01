// Init UI
const ui = new UI();
// Api key
const apiKey = "9c27b0f722b84da5a08312d2b125351b";
// Init Auth
const auth = new Auth();
// Init Favorite news
const news = new FavoriteNews();
// Init news store
const newsStore = NewsStore.getInstance();


// Init elements
const logout = document.querySelector('.logout');
const newsContainer = document.querySelector('.news-container');


// All events
window.addEventListener("load", onLoad);
logout.addEventListener("click", onLogout);
newsContainer.addEventListener("click", onRemoveFavorite);


function onLoad(e) {
    // получить избранные новости
    news.getFavoriteNews()
        .then(favoriteNews => {
            if (favoriteNews.docs.length) {
                favoriteNews.forEach((doc) => {
                    // выводим в разметку
                    ui.addFavoriteNews(doc.data(), doc.id);
                    // анимация вывода новостей
                    let arrayNews = document.querySelectorAll('.col.s12.m6');
                    showAnimationElement(arrayNews);
                });
            }
            // вывод сообщения если новостей нет
            else ui.showInfo('No Selected News!');
        })
        .catch(err => {
            console.log(err);
        })
}

function onLogout() {
    auth.logout()
        .then(() => window.location = "login.html")
        .catch(err => console.log(err));
}


function onRemoveFavorite(e) {
    if (e.target.classList.contains("remove-favorite")) {
        const id = e.target.dataset.id;
        news.removeFavoriteNews(id)
            .then(() => {
                //удаляем из разметки
                e.target.closest('.col').remove();

                // вывод сообщения об удалении новости
                M.toast({html: 'The news was deleted!', classes: 'red', displayLength: 2000});
                //применяем анимацию для сообщений
                let arrayNews = document.querySelectorAll('.toast');
                showAnimationElement(arrayNews);
                setTimeout(function () {
                    showAnimationElement(arrayNews, 1)
                }, 500);

                // вывод сообщения если новостей нет
                if (!document.querySelectorAll(".remove-favorite").length)
                    ui.showInfo('No Selected News!');

            })
            .catch(err => console.log(err));
    }

}


