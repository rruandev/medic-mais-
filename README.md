# MedicMais Sobradinho-DF

Site da clínica médica e odontológica MedicMais Sobradinho-DF. Publicado na Vercel (medicmais-sobradinho-site.vercel.app).

## Estrutura
- `index.html`: conteúdo da página e ícones (sprite SVG)
- `css/estilo.css`: estilos (cores da marca em `:root`)
- `js/site.js`: cabeçalho que encolhe ao rolar, aviso de aberto/fechado (horário de Brasília) e barra do WhatsApp no celular
- `img/`: logo, símbolo e foto do topo
- `robots.txt` e `sitemap.xml`: SEO básico

## SEO
O endereço do site aparece no `index.html` (canonical, og:url, og:image e dados estruturados JSON-LD), no `robots.txt` e no `sitemap.xml`. Quando o domínio próprio entrar, trocar `medicmais-sobradinho-site.vercel.app` por ele nesses três arquivos.

Sem framework e sem etapa de build: basta abrir o `index.html` ou servir a pasta.

## Pendências com a clínica
- Trocar a foto do topo (banco de imagem) por foto real da equipe

As fotos `img/foto-*.jpg` são reais, tiradas do Google Maps e do Instagram públicos da clínica.
