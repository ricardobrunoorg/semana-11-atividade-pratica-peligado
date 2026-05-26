const dados = [
{
    id: 1,
    nome: "iPhone 15 Pro",
    preco: 8999.90,
    categoria: "Celulares",
    emEstoque: true,
    imagem: "📱",
    descricao: "O iPhone mais avançado, com chip A17 Pro e câmera de 48 MP.",
    conteudo: "O iPhone 15 Pro é equipado com o revolucionário chip A17 Pro fabricado em processo de 3 nm, entregando desempenho sem precedentes em um smartphone. Sua câmera principal de 48 MP com sensor maior capta fotos com detalhes impressionantes mesmo em ambientes com pouca luz. O design em titânio aeroespacial torna o aparelho mais leve e resistente. Conta com Dynamic Island, porta USB-C com transferência em velocidade USB 3 e Action Button personalizável. Bateria com duração de até 23 horas de reprodução de vídeo.",
    avaliacao: 4.9,
    marca: "Apple",
    garantia: "12 meses",
    cores: ["Titânio Natural", "Titânio Preto", "Titânio Branco", "Titânio Azul"]
  },
  {
    id: 2,
    nome: "Galaxy S24 Ultra",
    preco: 6799.90,
    categoria: "Celulares",
    emEstoque: true,
    imagem: "📱",
    descricao: "Tela AMOLED 6.8\", S Pen integrada e câmera de 200 MP.",
    conteudo: "O Samsung Galaxy S24 Ultra define um novo padrão para smartphones Android. A câmera principal de 200 MP com zoom óptico de 10x permite fotografar detalhes a grandes distâncias. O processador Snapdragon 8 Gen 3 garante fluidez em qualquer tarefa. A S Pen integrada oferece experiência de escrita natural diretamente na tela. Com 12 GB de RAM e bateria de 5000 mAh com carregamento rápido de 45W, é o companheiro ideal para profissionais exigentes.",
    avaliacao: 4.7,
    marca: "Samsung",
    garantia: "12 meses",
    cores: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"]
  },
  {
    id: 3,
    nome: "MacBook Air M3",
    preco: 12999.90,
    categoria: "Notebooks",
    emEstoque: true,
    imagem: "💻",
    descricao: "Chip M3, 8 GB RAM, SSD de 256 GB, tela Liquid Retina 13.6\".",
    conteudo: "O MacBook Air com chip M3 redefine o que um notebook ultrafino pode fazer. Com até 18 horas de bateria, você trabalha o dia todo sem precisar de tomada. O chip M3 oferece CPU 60% mais rápida e GPU até 2x mais potente que os modelos com Intel. A tela Liquid Retina de 13.6\" com 500 nits de brilho reproduz cores com precisão excepcional. O design sem ventilador garante operação completamente silenciosa. Compatível com todos os aplicativos macOS e com Rosetta 2 para apps legados.",
    avaliacao: 4.8,
    marca: "Apple",
    garantia: "12 meses",
    cores: ["Meia-Noite", "Luz das Estrelas", "Cinza-Espacial", "Dourado"]
  },
  {
    id: 4,
    nome: "Dell XPS 13",
    preco: 8799.90,
    categoria: "Notebooks",
    emEstoque: false,
    imagem: "💻",
    descricao: "Intel Core i7, 16 GB RAM, tela OLED 13.4\" TouchScreen.",
    conteudo: "O Dell XPS 13 é o notebook Windows mais elegante do mercado. Sua tela OLED de 13.4\" com resolução 3.5K oferece contraste infinito e cores vibrantes. O processador Intel Core i7 de 13ª geração e 16 GB de RAM LPDDR5 garantem desempenho excepcional para criadores de conteúdo e desenvolvedores. O design compacto com apenas 1,17 kg facilita o transporte. Conta com teclado de borda a borda, câmera infravermelha para reconhecimento facial e bateria de 55 Wh com carregamento rápido.",
    avaliacao: 4.5,
    marca: "Dell",
    garantia: "12 meses",
    cores: ["Platinum Silver", "Arctic White"]
  },
  {
    id: 5,
    nome: "AirPods Pro 2",
    preco: 2199.90,
    categoria: "Acessórios",
    emEstoque: true,
    imagem: "🎧",
    descricao: "Cancelamento de ruído ativo, chip H2 e áudio espacial personalizado.",
    conteudo: "Os AirPods Pro de 2ª geração elevam o padrão do áudio sem fio. O chip H2 processa o cancelamento de ruído ativo 2x mais rápido que a geração anterior, bloqueando até 29 dB de ruído externo. O Modo de Transparência Adaptável ajusta automaticamente o nível de áudio ambiente. O áudio espacial personalizado com rastreamento de cabeça cria uma experiência de som imersiva em 360°. Resistentes a suor e água (IPX4) com bateria de até 6 horas e 30 minutos adicionais com o estojo MagSafe.",
    avaliacao: 4.8,
    marca: "Apple",
    garantia: "12 meses",
    cores: ["Branco"]
  },
  {
    id: 6,
    nome: "Logitech MX Keys S",
    preco: 899.90,
    categoria: "Acessórios",
    emEstoque: true,
    imagem: "⌨️",
    descricao: "Teclado sem fio premium com retroiluminação adaptativa e Multi-Device.",
    conteudo: "O Logitech MX Keys S é o teclado definitivo para profissionais que passam horas digitando. As teclas esféricas côncavas se adaptam perfeitamente à curvatura dos dedos, reduzindo a fadiga. A retroiluminação adaptativa detecta automaticamente a presença das mãos e ajusta o brilho conforme a iluminação ambiente. Conecta-se a até 3 dispositivos simultaneamente via Bluetooth ou receptor USB-C Logi Bolt. A bateria dura até 10 dias com retroiluminação ou 5 meses sem ela.",
    avaliacao: 4.6,
    marca: "Logitech",
    garantia: "24 meses",
    cores: ["Grafite", "Rosa"]
  },
  {
    id: 7,
    nome: "PlayStation 5 Slim",
    preco: 3999.90,
    categoria: "Games",
    emEstoque: true,
    imagem: "🎮",
    descricao: "SSD ultrarrápido, 4K HDR, Ray Tracing e leitor de disco destacável.",
    conteudo: "O PlayStation 5 Slim traz toda a potência do PS5 original em um corpo 30% mais compacto. O SSD personalizado com velocidade de 5,5 GB/s elimina praticamente os tempos de carregamento. A GPU de 10,3 teraflops suporta Ray Tracing em tempo real e resolução 4K nativa a 60fps. O controle DualSense com feedback háptico e gatilhos adaptativos cria uma imersão inédita nos jogos. Compatível com toda a biblioteca do PS4. Agora com leitor de disco destacável e suporte WiFi 6.",
    avaliacao: 4.9,
    marca: "Sony",
    garantia: "12 meses",
    cores: ["Branco", "Preto"]
  },
  {
    id: 8,
    nome: "Xbox Series X",
    preco: 3599.90,
    categoria: "Games",
    emEstoque: false,
    imagem: "🎮",
    descricao: "4K nativo a 120fps, 1 TB SSD NVMe e Game Pass Ultimate incluso.",
    conteudo: "O Xbox Series X é o console mais potente da Microsoft, com 12 teraflops de poder de processamento e suporte a 4K nativo a 120fps. O SSD NVMe de 1 TB e a tecnologia Xbox Velocity Architecture eliminam os tempos de carregamento e permitem suspender até dois jogos simultaneamente com Quick Resume. O Game Pass Ultimate inclui acesso a mais de 400 jogos. O controle sem fio Xbox foi redesenhado com botão de compartilhamento, grip texturizado e compatibilidade com acessórios de gerações anteriores.",
    avaliacao: 4.7,
    marca: "Microsoft",
    garantia: "12 meses",
    cores: ["Preto Carbon"]
  }
]

function formatarPreco(preco) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderEstrelas(avaliacao) {
  const cheias = Math.floor(avaliacao);
  const meia = avaliacao % 1 >= 0.5 ? 1 : 0;
  const vazias = 5 - cheias - meia;
  return "★".repeat(cheias) + (meia ? "½" : "") + "☆".repeat(vazias);
}

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// --------------------------------------------------
// 3. HOME PAGE (index.html)
// --------------------------------------------------

function initHomePage() {
  const listaEl      = document.getElementById("product-list");
  const searchInput  = document.getElementById("search");
  const categorySelect = document.getElementById("category");
  const btnRender    = document.getElementById("btnRender");

  if (!listaEl) return; // não está na home

  // Preenche categorias no select
  const categorias = [...new Set(dados.map(p => p.categoria))];
  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });

  // Filtragem
  function filtrarProdutos() {
    const texto = searchInput.value.toLowerCase();
    const cat   = categorySelect.value;
    return dados.filter(p =>
      p.nome.toLowerCase().includes(texto) &&
      (cat === "" || p.categoria === cat)
    );
  }

  // Renderizar cards
  function renderizarProdutos(lista) {
    listaEl.innerHTML = "";

    if (lista.length === 0) {
      listaEl.innerHTML = `<p class="sem-resultado">Nenhum produto encontrado.</p>`;
      return;
    }

    lista.forEach((produto, i) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-id", produto.id);
      card.style.animationDelay = `${i * 60}ms`;

      card.innerHTML = `
        <div class="card-emoji">${produto.imagem}</div>
        <div class="card-body">
          <span class="card-categoria">${produto.categoria}</span>
          <strong class="card-nome">${produto.nome}</strong>
          <div class="card-avaliacao" title="${produto.avaliacao}/5">
            ${renderEstrelas(produto.avaliacao)}
            <span class="nota">${produto.avaliacao}</span>
          </div>
          <p class="card-preco">${formatarPreco(produto.preco)}</p>
          <p class="card-estoque ${produto.emEstoque ? 'ok' : 'esgotado'}">
            ${produto.emEstoque ? "✔ Em estoque" : "✘ Esgotado"}
          </p>
        </div>
        <div class="card-footer">
          <a class="btn-detalhes" href="detalhes.html?id=${produto.id}">Ver detalhes</a>
          <button class="btn-destacar" title="Destacar">⭐</button>
        </div>
      `;

      // botão destacar
      card.querySelector(".btn-destacar").addEventListener("click", () => {
        card.classList.toggle("destaque");
      });

      listaEl.appendChild(card);
    });
  }

  // Eventos
  searchInput.addEventListener("input",    () => renderizarProdutos(filtrarProdutos()));
  categorySelect.addEventListener("change", () => renderizarProdutos(filtrarProdutos()));
  btnRender.addEventListener("click", () => {
    searchInput.value = "";
    categorySelect.value = "";
    renderizarProdutos(dados);
  });

  // Carga inicial
  renderizarProdutos(dados);
}

// --------------------------------------------------
// 4. PÁGINA DE DETALHES (detalhes.html)
// --------------------------------------------------

function initDetalhesPage() {
  const detalhesEl = document.getElementById("detalhes-container");
  if (!detalhesEl) return; // não está na página de detalhes

  const id = parseInt(getQueryParam("id"));
  const produto = dados.find(p => p.id === id);

  if (!produto) {
    detalhesEl.innerHTML = `
      <div class="erro">
        <p>😕 Produto não encontrado.</p>
        <a href="index.html" class="btn-voltar">← Voltar para a loja</a>
      </div>`;
    return;
  }

  // Atualiza o título da aba
  document.title = produto.nome + " — Mini Ecommerce";

  detalhesEl.innerHTML = `
    <a href="index.html" class="btn-voltar">← Voltar para a loja</a>

    <div class="detalhe-card">
      <div class="detalhe-imagem">${produto.imagem}</div>

      <div class="detalhe-info">
        <span class="detalhe-categoria">${produto.categoria}</span>
        <h1 class="detalhe-nome">${produto.nome}</h1>

        <div class="detalhe-avaliacao">
          ${renderEstrelas(produto.avaliacao)}
          <span class="nota">${produto.avaliacao} / 5</span>
        </div>

        <p class="detalhe-preco">${formatarPreco(produto.preco)}</p>
        <p class="detalhe-estoque ${produto.emEstoque ? 'ok' : 'esgotado'}">
          ${produto.emEstoque ? "✔ Disponível em estoque" : "✘ Produto esgotado"}
        </p>

        <p class="detalhe-descricao">${produto.descricao}</p>

        <div class="detalhe-meta">
          <div class="meta-item"><span class="meta-label">Marca</span><span>${produto.marca}</span></div>
          <div class="meta-item"><span class="meta-label">Garantia</span><span>${produto.garantia}</span></div>
          <div class="meta-item"><span class="meta-label">Cores</span><span>${produto.cores.join(", ")}</span></div>
        </div>

        ${produto.emEstoque
          ? `<button class="btn-comprar">🛒 Adicionar ao carrinho</button>`
          : `<button class="btn-comprar desabilitado" disabled>Produto indisponível</button>`}
      </div>
    </div>

    <div class="detalhe-conteudo">
      <h2>Sobre o produto</h2>
      <p>${produto.conteudo}</p>
    </div>
  `;
}

// --------------------------------------------------
// 5. INICIALIZAÇÃO — detecta em qual página está
// --------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initHomePage();
  initDetalhesPage();
}); 