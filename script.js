class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }

    exibirInformacoes() {
        return `${this.titulo} - ${this.autor} (${this.anoPublicacao}) [${this.genero}]`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        this.atualizarLista();
    }

    removerLivro(indice) {
        this.livros.splice(indice, 1);
        this.atualizarLista();
    }

    atualizarLista() {
        const lista = document.getElementById('bookList');
        lista.innerHTML = '';
        this.livros.forEach((livro, index) => {
            const li = document.createElement('li');
            li.textContent = livro.exibirInformacoes();

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.className = 'remove-btn';
            removeButton.onclick = () => this.removerLivro(index);

            li.appendChild(removeButton);
            lista.appendChild(li);
        });
    }
}

const biblioteca = new Biblioteca();

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    const genero = document.getElementById('genero').value;

    const livro = new Livro(titulo, autor, ano, genero);
    biblioteca.adicionarLivro(livro);


    this.reset();
});
