
// Select Students
// Divide total array by required pagination (later allow input)
let studentListing 		= document.querySelectorAll( ".student-item" );
let studentListDivide  	= Math.ceil ( studentListing.length / 10 );

function showPage( pages, listings ) {

	// Start and End Pages to create a range
	let startPage 	= pages * 10;
	let endPage 	= ( startPage + 10 );

	//loop through array show in range - hide if outside
	for ( let i = 0; i < listings.length; i++ ) {
		if ( i > startPage && i < endPage ) {
		    listings[i].style.display = "block";
		}
		else {
			listings[i].style.display = "none";
		}
	}
 }

function appendPageLinks( pages ) {

	//selelct list parent element
	const studentListContainer = document.querySelector( ".student-list" );
	const paginationLink =  document.getElementsByTagName('a');

	//build pagination element
	let paginationOuput = '<div class="pagination"><ul>';
		for ( let i = 0; i < pages; i++ ) {
			paginationOuput += '<li><a href="#">' + ( i + 1 ) + '</a></li>';
		}
	paginationOuput += '</ul></div>';

	//add pagination below the student list ul
	studentListContainer.insertAdjacentHTML( 'afterend', paginationOuput );
	
	for ( let i = 0; i < paginationLink.length; i++ ) {

		paginationLink[i].addEventListener("click", function(event) {
			let curPage = this.text - 1;
			this.classList.add( "active" );
			showPage( curPage, studentListing );
		    event.preventDefault();
		});

	}

}

showPage( 0, studentListing );
appendPageLinks( studentListDivide );