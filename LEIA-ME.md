# 21Monteiro — 21monteiro.com.br (página de links)

Desde 2 de novembro de 2026 este site é **só a página de links (bio)**.
O portfólio foi para o site próprio da APNS Sites: **apenasites.com.br**
(pasta `D:\Apenas Sites\01 - Site\Código\apenasites-site`).

| Site | Domínio | Repositório no GitHub |
|---|---|---|
| **21Monteiro** (este) | 21monteiro.com.br | `21Monteiro/site` |
| APNS Sites | apenasites.com.br | `21Monteiro/landing-page` |

## Estrutura

```
21monteiro-site/
├── index.html                  → Página de links (era /bio/)
├── bio/index.html, bio.html    → Endereços antigos: redirecionam para "/"
├── politica-de-privacidade/    → Política de Privacidade (21Monteiro)
├── politica-de-cookies/        → Política de Cookies (21Monteiro)
├── 404.html
├── CNAME                       → 21monteiro.com.br (GitHub Pages, não apague)
├── robots.txt, sitemap.xml
├── css/   base, bio, lead (formulário), legal, consentimento (banner)
├── js/    dados.js ★, main.js, lead.js, consentimento.js
└── assets/
```

## Para atualizar

Tudo fica em `js/dados.js`:

- `bioLinks` → os cards da página, na ordem da tela. Banner usa 773 × 246 px.
- `contato` → WhatsApp, e-mail (**contato21monteiro@gmail.com**) e redes.
- `empresa` → nome, CNPJ e cidade (rodapé e políticas).
- `formulario` → endpoint do Apps Script e opções do formulário.
- `servicos` → as opções de "o que você precisa" no formulário.
- `rastreamento` → IDs do Google Tag Manager e do Pixel **do 21Monteiro**.

## Formulário

Todo botão de WhatsApp abre antes o formulário de 6 perguntas. O lead vai
para a planilha (Apps Script em `../apps-script`) e para o WhatsApp.
A planilha é a mesma da APNS; a coluna "Página" começa pelo domínio
(`21monteiro.com.br · home`) para separar de onde veio.

## Banner de cookies e rastreamento

Nada de Google Tag Manager ou Pixel carrega antes do aceite. Para ativar,
cole os IDs em `dados.js`:

```js
rastreamento: {
  gtm: "GTM-XXXXXXX",        // contêiner DO 21MONTEIRO
  pixel: "123456789012345",  // Pixel DO 21MONTEIRO
  politicaCookies: "/politica-de-cookies/"
}
```

Envio do formulário dispara `Lead` no Pixel e `gerar_lead` no dataLayer.

## Testar localmente

```
cd 21monteiro-site
python -m http.server 8000
```

## Publicar

Suba o **conteúdo** desta pasta na raiz do repositório `21Monteiro/site`
(GitHub Pages). O zip pronto está em `..\21monteiro-site.zip`.
