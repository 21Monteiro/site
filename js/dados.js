/* ============================================================================
   21MONTEIRO (21monteiro.com.br) — ARQUIVO DE CONTEÚDO
   ----------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para atualizar o site.
   Troque textos, links e imagens aqui. O site se monta sozinho.
   ========================================================================== */

const DADOS = {

  /* ---- FORMULÁRIO DE PRÉ-QUALIFICAÇÃO ----------------------------------- *
   * Todo botão de WhatsApp abre este formulário antes de redirecionar.
   *
   * COLE AQUI a URL do Apps Script depois de implantar (passo a passo no
   * arquivo apps-script/COMO-INSTALAR.md). Ela termina em /exec.
   *
   * Enquanto estiver vazio o site continua funcionando: o formulário aparece
   * normal e os dados vão dentro da mensagem do WhatsApp — só não são
   * gravados na planilha.
   * -------------------------------------------------------------------- */
  formulario: {
    endpoint: "https://script.google.com/macros/s/AKfycbyd_pS_hHSAF8D6Pxer5TQKcj0DuR9zxq7BEk6mYtfepjY-1Z4o4gGOKi8dgjRI5tB65Q/exec",

    // Dias antes de perguntar de novo a quem já preencheu. 0 = sempre perguntar.
    lembrarPorDias: 7,

    // Faixas de investimento (o filtro que separa curioso de cliente).
    investimento: [
      "A partir de R$ 900",
      "R$ 1.500 a R$ 3.000",
      "R$ 3.000 a R$ 6.000",
      "Acima de R$ 6.000",
      "Ainda não sei"
    ],

    // Faixa que só existe para certos serviços. R$ 900 é o piso de landing
    // page: site institucional, e-commerce e página Bio não saem por esse
    // valor, então a opção some quando a pessoa escolhe outro serviço.
    // Chave = texto exato da faixa, valor = lista de serviços que a liberam.
    investimentoRestrito: {
      "A partir de R$ 900": ["Landing Page"]
    },

    // Urgência
    prazo: [
      "O quanto antes",
      "Nas próximas semanas",
      "Daqui a 1 ou 2 meses",
      "Só pesquisando por enquanto"
    ]
  },

  /* ---- RASTREAMENTO (só carrega depois do aceite no banner de cookies) -- *
   * Cole aqui os IDs DO 21MONTEIRO. Não use os da APNS Sites: cada site
   * tem o seu, para as campanhas e o público não se misturarem.
   *   gtm:   ID do contêiner do Google Tag Manager, ex.: "GTM-ABC1234"
   *   pixel: ID do Pixel da Meta (Gerenciador de Eventos), só números
   * Vazio = a ferramenta não carrega. O site funciona normal.
   * -------------------------------------------------------------------- */
  rastreamento: {
    gtm: "",
    pixel: "",
    politicaCookies: "/politica-de-cookies/"
  },

  /* ---- DADOS LEGAIS (aparecem no rodapé e nas políticas) ---------------- */
  empresa: {
    nome: "21Monteiro",
    responsavel: "Vitor da Silva Monteiro",
    cnpj: "69.586.869/0001-66",
    cidade: "Bragança Paulista/SP"
  },

  /* ---- CONTATO E REDES -------------------------------------------------- */
  contato: {
    whatsapp: "5511950218840",
    email: "contato21monteiro@gmail.com",
    // São duas contas com propósitos diferentes:
    // "sites" fala de trabalho, "pessoal" fala de vida.
    instagramSites:   "https://www.instagram.com/apenasites/",
    instagramPessoal: "https://www.instagram.com/21monteiro_/",
    youtube: "https://www.youtube.com/@21Monteiro",
    behance: "https://www.behance.net/21monteiro"
  },

  /* ---- SERVIÇOS --------------------------------------------------------- */
  servicos: [
    {
      icone: "servicoLanding",
      titulo: "Landing Page",
      descricao: "Uma página só, feita para transformar quem chega em contato no WhatsApp.",
      zap: "Olá! Vim direto do seu portfólio. Gostaria de fazer uma landing page com você."
    },
    {
      icone: "servicoInstitucional",
      titulo: "Site Institucional",
      descricao: "O site que mostra o tamanho real da sua empresa para quem pesquisa antes de ligar.",
      zap: "Olá! Vim direto do seu portfólio. Gostaria de fazer um site institucional com você."
    },
    {
      icone: "servicoEcommerce",
      titulo: "E-commerce",
      descricao: "Sua loja vendendo online, com catálogo organizado e compra sem atrito.",
      zap: "Olá! Vim direto do seu portfólio. Gostaria de fazer um e-commerce com você."
    },
    {
      icone: "servicoBio",
      titulo: "Página Bio",
      descricao: "Um link só na bio, levando o cliente direto para onde você quer que ele vá.",
      zap: "Olá! Vim direto do seu portfólio. Gostaria de fazer uma página Bio com você."
    }
  ],

  /* O portfólio (números, projetos e depoimentos) agora mora em
     https://apenasites.com.br/ — aqui fica só a página de links. */
  numeros: [],
  projetos: [],
  depoimentos: [],

  /* ---- LINK BIO — MENU DE DESTINOS -------------------------------------- *
   * Ordem = prioridade (de cima para baixo na tela).
   *
   * Um item pode ser de dois tipos:
   *   a) COM BANNER  → use "banner". A arte ocupa o card inteiro.
   *                    O "titulo" vira o texto alternativo (leitores de tela).
   *   b) SEM BANNER  → usa "icone" + "titulo" + "descricao".
   *                    Ícones: whatsapp, portfolio, behance, instagram,
   *                            youtube, site, email
   *
   * Banners têm 773x246 (proporção 3,14:1). Mantenha essa proporção
   * ao criar novos, senão a arte corta.
   * -------------------------------------------------------------------- */
  bioLinks: [
    {
      banner: "/assets/img/banner-whatsapp.webp",
      titulo: "Entre em contato via WhatsApp",
      url: "https://wa.me/5511950218840?text=" + encodeURIComponent("Olá! Vim direto da sua página BIO. Gostaria de saber mais sobre seus serviços.")
    },
    {
      banner: "/assets/img/banner-portfolio.webp",
      titulo: "Ver meu portfólio de sites",
      url:"https://apenasites.com.br/"
    },
    {
      icone: "instagram",
      titulo: "@apenasites",
      descricao: "Os sites que eu crio, e os bastidores deles",
      url: "https://www.instagram.com/apenasites/"
    },
    {
      icone: "behance",
      titulo: "Behance",
      descricao: "Meus projetos de design em detalhe",
      url: "https://www.behance.net/21monteiro"
    },

    /* Daqui para baixo o assunto muda: não é mais trabalho, é vida. */
    {
      icone: "cerebro",
      etiqueta: "Curso",
      titulo: "Reset Mental",
      descricao: "Para quem está exausto de cabeça e quer voltar a pensar com clareza",
      url: "https://pay.cakto.com.br/yobiobw_1014216",
      destaque: true
    },
    {
      icone: "instagram",
      titulo: "@21monteiro_",
      descricao: "Desenvolvimento pessoal e outras coisas da vida",
      url: "https://www.instagram.com/21monteiro_/"
    },
    {
      icone: "youtube",
      titulo: "YouTube",
      descricao: "Vídeos sobre cansaço mental e outros nós do dia a dia",
      url: "https://www.youtube.com/@21Monteiro"
    }
  ]
};

/* Um `const` no topo de um script clássico NÃO vira propriedade de window
   (só `var` e funções fazem isso). Expomos explicitamente para o main.js. */
window.DADOS = DADOS;
