const button = document.getElementById("sendData");
button.addEventListener('click', sendData)

function sendData() {
	var url = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
	url += '?' + $.param({
	  'api-key': "52bc4883412c4bfa80b5c8f0c1d917b0",
	  'published_date': "2017-12-12"
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  (result.results.lists).forEach(list => {
			console.log(
				`Display name: ${list.display_name}\nAmount of books in list: ${(list.books).length}`
			);
	  });
	}).fail(function(err) {
	  throw err;
	});
}