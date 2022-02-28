const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const releaseDate = document.querySelector('#releaseDate');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e){
    e.preventDefault();

    // Validation
    if(bookName.value == '' && authorName.value == '' && releaseDate.value == '') {
        alert('Please enter your valid info');
    } else {
        const newRow = document.createElement('tr');

        // Creating new book name
        const newBookName = document.createElement('th');
        newBookName.innerHTML = bookName.value;
        newRow.appendChild(newBookName);

        // Creating new author name
        const newAuthorName = document.createElement('th');
        newAuthorName.innerHTML = authorName.value;
        newRow.appendChild(newAuthorName);

        // Creating new book name
        const newReleaseDate = document.createElement('th');
        newReleaseDate.innerHTML = releaseDate.value;
        newRow.appendChild(newReleaseDate);

        bookList.appendChild(newRow);
        
    }
})

