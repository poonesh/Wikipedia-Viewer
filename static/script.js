document.addEventListener("DOMContentLoaded", function(event){
	document.querySelector(".searchInput").focus();
	document.querySelector(".searchButton").addEventListener("click", function(){
		let wikiPageRequest = new XMLHttpRequest();
		let searchTerm = document.querySelector(".searchInput").value;

		wikiPageRequest.open("GET", `https://en.wikipedia.org/w/api.php?origin=*&action=query&title=${searchTerm}
			&format=json`);

		wikiPageRequest.onload = function(){
			let requestPage = JSON.parse(wikiPageRequest.responseText); 
			console.log(requestPage);
		}
		wikiPageRequest.send();
	});
});