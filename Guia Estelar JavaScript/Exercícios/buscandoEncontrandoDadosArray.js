/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

function contarLivros() {
    const categorys = booksByCategory.length;
    const booksCategory1 = booksByCategory[0].books.length;
    const booksCategory2 = booksByCategory[1].books.length;

    console.log(`Quantidade de Categorias: ${categorys}`)
    console.log(`Quantidade de livros na primeira categoria: ${booksCategory1}`)
    console.log(`Quantidade de livros na segunda categoria: ${booksCategory2}`)

}



function contarAutores() {
    let quantAutores = 0
    let autor = ""
    for (const category of booksByCategory) {
        for (const book of category.books) {
            for (const key in book) {
                if (key == "author") {
                    if (book[key] != autor) {
                        quantAutores++;
                        autor = book[key];
                    }

                }
            }
        }
    }
    console.log(`Quantidade de Autores: ${quantAutores}`)
}

function contarLivrosAutor() {
    let livrosAugustoCury = []
    for (const category of booksByCategory) {
        for (const book of category.books) {
            for (const key in book) {
                if (key == "author") {
                    if (book[key] == "Augusto Cury") {
                        livrosAugustoCury.push(book["title"]);
                    }

                }
            }
        }
    }
    console.log("Livros do Augusto Cury:")
    for (const livro of livrosAugustoCury) {
        console.log(livro)
    }
}

contarLivros()
contarAutores()
contarLivrosAutor()





