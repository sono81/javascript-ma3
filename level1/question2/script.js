//Console.log out elements in JSON file

fetch('./author.json')
    .then(response => {
        return response.json()
    })
    .then(data => {

        data.video.forEach((obj, i) => {
            console.log("Id:", obj.id);
            console.log("Name:", obj.name);
            console.log("Url:", obj.url);
            console.log("Author:", obj.author);

        })
        data.video[0].author.data.forEach((obj, i) => {
            console.log("Author Name:", obj.name_author);
            console.log("Url:", obj.url);
            console.log("Type:", obj.type);
        })
    })

    .catch(err => {
        console.log("error");
    })
