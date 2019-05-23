
	/* Pega a referência ID dos inputs */
	var textbox = document.getElementById('textbox');
	var button = document.getElementById('button');

	/* pega a referência ID dos outputs */
	var filme = document.getElementById('filme');
	var titulo = document.getElementById('title');
	var ano = document.getElementById('ano');
	var tempo = document.getElementById('tempo');
	var genero = document.getElementById('genero');
	var autor = document.getElementById('autor');
	var diretor = document.getElementById('diretor');
	var site = document.getElementById('site');
	var banner = document.getElementById('banner');

	/* Chama a função busca no evento click no botão */
	button.addEventListener("click", display);

	/* Função que deixa visível o container com informações do filme */
	function display() {
		filme.style.visibility = "visible";
		busca();
	}

	/* Função que faz a busca na API */
	function busca() {
		$.getJSON('https://www.omdbapi.com/?t=' + encodeURI(textbox.value) + "&apikey=676bc3a8").then(function(response){
			console.log(response);
			insere(response);
		});
	}

	/* Função que insere os dados recebidos da API no html */
	function insere(dados) {
		titulo.textContent = (dados.Title != "N/A" && dados.Title != null)? dados.Title: "Infelizmente não temos essa informação :(";
		ano.textContent = (dados.Year != "N/A" && dados.Year != null)? dados.Year: "Infelizmente não temos essa informação :(";
		tempo.textContent = (dados.Runtime != "N/A" && dados.Runtime != null)? dados.Runtime: "Infelizmente não temos essa informação :(";
		genero.textContent = (dados.Genre != "N/A" && dados.Genre != null)? dados.Genre: "Infelizmente não temos essa informação :(";
		autor.textContent = (dados.Writer != "N/A" && dados.Writer != null)? dados.Writer: "Infelizmente não temos essa informação :(";
		diretor.textContent = (dados.Director != "N/A" && dados.Director != null)? dados.Director: "Infelizmente não temos essa informação :(";
		banner.src = (dados.Poster != "N/A" && dados.Poster != null)? dados.Poster: "source/img_not_found.png";
		if (dados.Website != "N/A" && dados.Website != null) {
			site.textContent = dados.Website;
			site.href = dados.Website;
		}else 
			site.textContent = "Infelizmente não temos essa informação :(";
	}
