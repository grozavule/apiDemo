const baseURL = `https://swapi.dev/api`;
const characterList = document.querySelector('ul');
axios.get(`${baseURL}/people`)
.then(res => {
    //console.log(res.data.results);
    res.data.results.forEach(person => {
        let listItem = document.createElement('li');
        let {name} = person;
        
        listItem.textContent = person.name;
        characterList.appendChild(listItem);
    })
})
.catch(error => {
    console.log(error);
});