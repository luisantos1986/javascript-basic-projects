
const toggleBtn = document.querySelector('.btn')
const articlesContainer = document.querySelector('.articles');


toggleBtn.addEventListener('click', () => (
    document.documentElement.classList.toggle('dark-theme')
));

const articlesData = articles.map((articles) =>{
    const {title, date, length, snippet} = articles 
    // format date

    return `<article class="post-info">
    <h2>${title}</h2>
    <div class="post-info">
      <span>${date}</span>
      <span>${length}</span>
      <p>
       ${snippet}
       </p>
    </div>
  </article>`
}).join('')

articlesContainer.innerHTML = articlesData;