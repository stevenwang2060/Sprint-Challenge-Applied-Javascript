// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

function cardMaker(content) {

    const cardDiv = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardAuthorImgDiv = document.createElement('div');
    const cardAuthorImg = document.createElement('img');
    const cardBy = document.createElement('span');

    cardDiv.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardAuthorImgDiv.classList.add('img-container');

    cardHeadline.textContent = content.headline;
    cardAuthorImg.src = content.authorPhoto;
    cardBy.textContent = `By ${content.authorName}`;

    cardDiv.appendChild(cardHeadline);
    cardDiv.appendChild(cardAuthor);
    cardAuthor.appendChild(cardAuthorImgDiv);
    cardAuthorImgDiv.appendChild(cardAuthorImg);
    cardAuthor.appendChild(cardBy);

    return cardDiv
};

const cardsEntryPoint = document.querySelector('.cards-container');

// Axios sending a GET request to the API to create article cards.
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);

        const topicArray = Object.values(response.data.articles)
        topicArray.forEach(topic => {
            console.log("topic", topic)
            const articleArray = Object.values(topic)
            articleArray.forEach(info => {
                cardsEntryPoint.appendChild(cardMaker(info))
            })
        })

            .catch(error => {
                console.log("The data was not returned", error);
            })
    });