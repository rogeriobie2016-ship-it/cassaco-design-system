# Cassaco Produtora Design System

Design system da Cassaco Produtora, exportado do Claude Design (Project HTML > Project archive).

- Marca: `Cassaco Design System.dc.html`
- Componentes e pacotes: `Cassaco Componentes.dc.html`
- Aplicações: `Cassaco Aplicacoes.dc.html`
- Tokens: `cassaco-tokens.css`, sprite SVG: `cassaco-sprite.js`

Site estático, sem build. Publicado via GitHub Pages a partir da branch `main`.
Para atualizar: exporte o zip de novo, copie os arquivos por cima e faça push.

## Loader (cassaco correndo)

`cassaco-loader.js` mostra o cassaco correndo enquanto a página carrega. Coloque no `<head>`, antes de qualquer outro script:

```html
<script src="cassaco-loader.js"></script>
```

Some sozinho no `load`. Para SPA, use `data-manual` e chame `CassacoLoader.hide()` quando o conteúdo estiver pronto. Demo: `loader-demo.html`.
Ao re-exportar do Claude Design, recoloque essa linha nas páginas `.dc.html`, antes de `support.js`.
