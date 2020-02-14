// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsContainer = document.querySelector('.topics');

// Axios sending a GET request to the address.
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response.data.topics);
        // Creates tabs with data from the request.
        response.data.topics.forEach(item => {
            const newTab = document.createElement('div');
            newTab.classList.add('tab');
            newTab.textContent = item;
            topicsContainer.appendChild(newTab);
        })
    })
    .catch(error => {
        console.log('Tabs has an error: ' + error);
    })