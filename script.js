 async function obterDetalhesFilme(movieId) {
        const apiKey = 'SUA_CHAVE_DE_API_AQUI'; // Insira sua chave de API aqui
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    
        try {
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error(`Erro ao buscar detalhes do filme: ${response.statusText}`);
            }
    
            const dadosFilme = await response.json();
            return dadosFilme; // Retorna os detalhes do filme
        } catch (error) {
            console.error(error);
            return null; // Retorna null em caso de erro
        }
    }
    
    const idDoFilme = 550; // ID do filme "Fight Club"
    
    obterDetalhesFilme(idDoFilme)
        .then(detalhes => {
            if (detalhes) {
                document.getElementById("titulo").textContent = detalhes.title;
                document.getElementById("capa").src = `https://image.tmdb.org/t/p/w500${detalhes.poster_path}`;
                document.getElementById("descricao").textContent = detalhes.overview;
                document.getElementById("data-lancamento").textContent = detalhes.release_date;
                document.getElementById("avaliacao").textContent = detalhes.vote_average;
            } else {
                console.log("Não foi possível obter detalhes do filme.");
            }
        });
    