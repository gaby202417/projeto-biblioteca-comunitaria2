const books = [
  {
    imgSrc: 'img/livro1.jpg' , 
    title: ' A hipotese do amor',
    author: 'Ali Hazelwood',
    description: 'um livro muito interessante.',
    resume: "Olive Smith, aluna do doutorado em Biologia da Universidade Stanford, acredita na ciência – não em algo incontrolável como o amor. Depois de sair algumas vezes com Jeremy, ela percebe que sua melhor amiga gosta dele e decide juntá-los. Para mostrar que está feliz com essa escolha, Olive precisa ser convincente: afinal, cientistas exigem provas.Sem muitas opções, ela resolve inventar um namoro de mentira e, num momento de pânico, beija o primeiro homem que vê pela frente.",
  },
  {
    imgSrc: 'img/livro2.jpg',
    title: 'Verity',
    author: 'Collen hoover',
    description: 'um livro muito interessante.',
    resume: "   Verity Crawford é a autora best-seller por trás de uma série de sucesso. Ela está no auge de sua carreira, aclamada pela crítica e pelo público, no entanto, um súbito e terrível acidente acaba interrompendo suas atividades, deixando-a sem condições de concluir a história... E é nessa complexa circunstância que surge Lowen Ashleigh, uma escritora à beira da falência convidada a escrever, sob um pseudônimo, os três livros restantes da já consolidada série.",
  },
  {
    imgSrc: 'img/livro3.jpg',
    title: 'A paciente silenciosa',
    author: 'Alex Michaelides',
    description: 'um livro muito interessante.',
    resume: " Alicia Berenson escreve um diário para colocar suas ideias em ordem. Ele é tanto uma válvula de escape quanto uma forma de provar ao seu adorado marido que está bem. Ela não consegue suportar conviver com a ideia de que está deixando Gabriel preocupado, de que está lhe causando algum mal.Alicia Berenson tinha 33 anos quando matou seu marido com cinco tiros. E nunca mais disse uma palavra.O psicoterapeuta forense Theo Faber está convencido de que é capaz de tratar Alicia, depois de tantos outros falharem. E, se ela falar, ele será capaz de ouvir a verdade?",
  },
  {
    imgSrc: 'img/livro4.jpg',
    title: 'As mil partes do meu coração',
    author: 'Collen hoover',
    description: 'um livro muito interessante.',
    resume: "Para Merit Voss, a cerca branca ao redor da sua casa é a única coisa normal quando o assunto é sua família, peculiar e cheia de segredos. Eles moram em uma antiga igreja, batizada de Dólar Voss. A mãe, curada de um câncer, mora no porão, e o pai e o restante da família, no andar de cima. Isso inclui sua nova esposa, a ex-enfermeira da ex-mulher, o pequeno Moby, fruto desse relacionamento, o irmão mais velho, Utah, e a gêmea idêntica de Merit, Honor. E, como se a casa não tivesse cheia o bastante, ainda chegam o excêntrico Luck e o misterioso Sagan. Mas Merit sente que é o oposto de todos ali.Além de colecionar troféus que não ganhou, Merit também coleciona segredos que sua família insiste em manter. E começa a acreditar que não seria uma grande perda se um dia ela desaparecesse. Mas, antes disso, a garota decide que é hora de revelar todas as verdades e obrigá-los a enfim encarar o que aconteceu.Mas seu plano não sai como o esperado e ela deve decidir se pode dar uma segunda chance não apenas à sua família, mas também a si mesma. As mil partes do meu coração mostra que nunca é tarde para perdoar e que não existe família perfeita, por mais branca que seja a cerca.",
  },
  {
    imgSrc: 'img/livro5.jpg',
    title: 'Todas as suas imperfeições',
    author: 'Collen hoover',
    description: 'um livro muito interessante.',
    resume: "Quando a dança começa, a sincronia é perfeita, os passos seguem o ritmo, as mãos não se soltam, os olhos jamais se deixam. Mas a música pode acabar a qualquer momento... É possível valsar no silêncio? Quinn e Graham se conhecem no pior dia de suas vidas; ela chega mais cedo de uma viagem para surpreender o noivo, ele testemunha a traição da namorada. E é assim que ambos acabam no corredor de um prédio, trocando confidências, biscoitos da sorte e palavras de conforto. Fim da dança... se o destino não tivesse outros planos para os dois.",
  },
  {
    imgSrc: 'img/livro6.jpg',
    title: 'A razão do amor',
    author: 'Ali Hazelwood',
    description: 'um livro muito interessante.',
    resume: "A carreira de Bee Königswasser está indo de mal a pior. Quando surge um processo seletivo para liderar um projeto de neuroengenharia da Nasa, ela se faz a pergunta que sempre guiou sua vida: o que Marie Curie faria? Participaria, é claro. Depois de conquistar a vaga, Bee descobre que precisará trabalhar com Levi Ward – um desafio que a mãe da física moderna nunca precisou enfrentar.",
  },
  {
    imgSrc: 'img/livro7.jpg',
    title: ' A rainha vermelha',
    author: 'Victoria Averyad',
    description: 'um livro muito interessante.',
    resume: "O mundo de Mare Barrow é dividido pelo sangue: vermelho ou prateado. Mare e sua família são vermelhos: plebeus, humildes, destinados a servir uma elite prateada cujos poderes sobrenaturais os tornam quase deuses.Mare rouba o que pode para ajudar sua família a sobreviver e não tem esperanças de escapar do vilarejo miserável onde mora. Entretanto, numa reviravolta do destino, ela consegue um emprego no palácio real, onde, em frente ao rei e a toda a nobreza, descobre que tem um poder misterioso… Mas como isso seria possível, se seu sangue é vermelho?Em meio às intrigas dos nobres prateados, as ações da garota vão desencadear uma dança violenta e fatal, que colocará príncipe contra príncipe - e Mare contra seu próprio coração.",
  },
  {
    imgSrc: 'img/livro8.jpg',
    title: 'Espada de vidro',
    author: 'Victoria Averyad',
    description: 'um livro muito interessante.',
    resume: "No segundo volume da série A Rainha Vermelha, a rebelião do povo de sangue vermelho contra a poderosa elite de sangue prateado continua a se fortalecer. Mare Barrow, a principal arma dos rebeldes, agora tenta encontrar outros sanguenovos como ela: pessoas de sangue vermelho, mas com poderes extraordinários.O sangue de Mare Barrow é vermelho, da mesma cor da população comum, mas sua habilidade de controlar a eletricidade a torna tão poderosa quanto os membros da elite de sangue prateado. Depois que essa revelação foi feita em rede nacional, Mare se transformou numa arma perigosa que a corte real quer esconder e controlar.",
  },
  {
    imgSrc: 'img/livro9.jpg',
    title: 'Corte de espinho e rosas',
    author: 'Sarah J. Maas',
    description: 'um livro muito interessante.',
    resume: "Ela roubou uma vida. Agora deve pagar com o coração.Nesse misto de A Bela e A Fera e Game of Thrones, Sarah J. Maas cria um universo repleto de ação, intrigas e romance. Depois de anos sendo escravizados pelas fadas, os humanos conseguiram se libertar e coexistem com os seres místicos. Cerca de cinco séculos após a guerra que definiu o futuro das espécies, Feyre, filha de um casal de mercadores, é forçada a se tornar uma caçadora para ajudar a família. Após matar uma fada zoomórfica transformada em lobo, uma criatura bestial surge exigindo uma reparação. Arrastada para uma terra mágica e traiçoeira — que ela só conhecia através de lendas —, a jovem descobre que seu captor não é um animal, mas Tamlin, senhor da Corte Feérica da Primavera. À medida que ela descobre mais sobre este mundo onde a magia impera, seus sentimentos por Tamlin passam da mais pura hostilidade até uma paixão avassaladora. Enquanto isso, uma sinistra e antiga sombra avança sobre o mundo das fadas e Feyre deve provar seu amor para detê-la... ou Tamlin e seu povo estarão condenados.",
  },
  {
    imgSrc: 'img/livro10.jpg',
    title: 'Cortes de asas e ruinas',
    author: 'Sarah J. Maas',
    description: 'um livro muito interessante.',
    resume: "Ela roubou uma vida. Agora deve pagar com o coração.Nesse misto de A Bela e A Fera e Game of Thrones, Sarah J. Maas cria um universo repleto de ação, intrigas e romance. Depois de anos sendo escravizados pelas fadas, os humanos conseguiram se libertar e coexistem com os seres místicos. Cerca de cinco séculos após a guerra que definiu o futuro das espécies, Feyre, filha de um casal de mercadores, é forçada a se tornar uma caçadora para ajudar a família. Após matar uma fada zoomórfica transformada em lobo, uma criatura bestial surge exigindo uma reparação. ",
  },
  {
    imgSrc: 'img/livro11.jpg',
    title: 'Corte de gelo e estrelas',
    author: 'Sarah J. Maas',
    description: 'um livro muito interessante.',
    resume: "Feyre, Rhys e seu círculo íntimo de amigos ainda estão ocupados reconstruindo a Corte Noturna e tentando manter a paz, conquistada a base de muito esforço e perdas pessoais, após a queda da muralha.Mas o Solstício de Inverno finalmente está próximo e, com isso, um alívio merecido. Compras, festas, celebração e a promessa de dias tranquilos. A atmosfera festiva não consegue, entretanto, impedir que as sombras da guerra se aproximem.",
  },
  {
    imgSrc: 'img/livro12.jpg',
    title: 'Corte de chamas prateadas',
    author: 'Sarah J. Maas',
    description: 'um livro muito interessante.',
    resume: "Corte de chamas prateadas é a sedutora e poderosa sequência da aclamada série Corte de espinhos e rosas.Nestha Archeron sempre foi orgulhosa, irritável e lenta em perdoar. Ter sido Feita pelo Caldeirão não tornou sua personalidade mais doce. Mas o que poucos sabem é que, por trás da fachada de força, Nestha carrega uma dor que a está corroendo: o arrependimento por não ter feito nada para ajudar a família quando caíram na pobreza e por não ter sido capaz de salvar o pai...",
  },
  {
    imgSrc: 'img/livro13.jpg',
    title: 'Ate o verão terminar',
    author: 'Collen hoover',
    description: 'um livro muito interessante.',
    resume: "Uma vida de dor e abandono fizeram de Beyah uma pessoa cética, desconfiada e boa em guardar segredos. Mas, até o verão terminar, ela terá que rever tudo o que acredita. Da mesma autora dos sucessos É assim que acaba, Layla e Verity.Filha de uma mãe problemática e um pai ausente, Beyah precisou aprender a se virar sozinha desde pequena. Sua vida foi trilhada com muitas decepeções. Mas ela está prestes a mudar a sua sorte graças a si mesma, e a mais ninguém, por conta da bolsa de estudos que ganhou para estudar em uma boa universidade. Apenas dois curtos meses separam o tão sonhado futuro do passado que tanto deseja deixar para trás.",
  },
  {
    imgSrc: 'img/livro14.jpg',
    title: 'A escolha ',
    author: 'Kiera cass',
    description: 'um livro muito interessante.',
    resume: "AAAAAAAAAA",
  },
  {
    imgSrc: 'img/livro15.jpg',
    title: 'A elite',
    author: 'Kiera cass',
    description: 'um livro muito interessante.',
    resume: "AAAAAAAAAA",

  },
  {
    imgSrc: 'img/livro16.jpg',
    title: 'Uma segunda chance',
    author: 'Collen hoover',
    description: 'um livro muito interessante.',
    resume: "AAAAAAAAAA",
  },
  {
    imgSrc: 'img/17.jpg',
    title: 'Os sete maridos de evellyn hugo',
    author: 'Taylor jenkins reid',
    description: 'um livro muito interessante.',
    resume: "AAAAAAAAAA",
  },
  {
    imgSrc: 'img/18.jpg',
    title: 'Xeque-mate',
    author: 'Ali hazelwood',
    description: 'um livro muito interessante.',
    resume: "AAAAAAAAAA",
  },

];

// Função para adicionar os livros á página
function addBooksToPage(filteredBooks = books) {
  const bookList = document.querySelector('.book-list');

  bookList.innerHTML = '';

  filteredBooks.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    bookElement.innerHTML = `
        <div class="flex">
          <img src="${book.imgSrc}" alt="">
          <div>
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
            <p>Descrição: ${book.description}</p>
            <a href="detailsBook.html?bookId=${book.title}"><button type = "button">Ver Livro </button></a></button>
          </div>
        </div>
      `;

    bookList.appendChild(bookElement);
  });
}


function viewDataForm() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Constrói a mensagem a ser exibida na tag <p> com id "formMessage"
    const messageText = `Nome: ${name}<br>Email: ${email}<br>Mensagem: ${message}`;

    // Exibe a mensagem dentro do elemento <p id="formMessage">
    formMessage.innerHTML = messageText;

    // Limpar o formulário após exibir a mensagem (opcional)
    form.reset();
  })
}

function searchBooks() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.toLowerCase();

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query)
  );

  addBooksToPage(filteredBooks);
}
// Função para obter o valor dos parâmetros da URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function addDetailsBook() {
  // Obtém o título do livro da Url
  const bookId = getQueryParam('bookId');

  // Encontrar o livro correspondente ao bookId
  const bookData = books.find(book => book.title === bookId);

  // Exibir os detalhes do livro
  if (bookData) {
    document.getElementById('bookImage').src = bookData.imgSrc;
    document.getElementById('bookTitle').textContent = `livro: ${bookData.title}`;
    document.getElementById('bookAuthor').textContent = `Autor: ${bookData.author}`;
    document.getElementById('bookResume').textContent = `resumo: ${bookData.resume}`;
  
    const readBookButton = getElementById('readBookButton');
    readBookButton.href = bookData.pdf;
 } else {
    document.getElementById('bookTitle').textContent = "Livro não encontrado";
  }
}

document.addEventListener('DOMContentLoaded', viewDataForm);
document.addEventListener('DOMContentLoaded', addDetailsBook);
document.addEventListener('DOMContentLoaded', function () {
  addBooksToPage();

  // Adicionar o evento de digitação no campo de pesquisa
  document.getElementById('searchInput').addEventListener('input', searchBooks);
})
