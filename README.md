# Organização e Categorização de Produtos
Este projeto tem como objetivo categorizar e organizar dados de produtos de diferentes supermercados com base em seus nomes e atributos comuns. 
Ele normaliza os nomes dos produtos, remove caracteres especiais e agrupa produtos semelhantes sob uma categoria comum.

# Funcionalidades
- Normalização dos Nomes dos Produtos: A função organizeProductNames padroniza os nomes dos produtos, removendo caracteres especiais, substituindo unidades de medida por abreviações consistentes e ordenando as palavras.
- Categorização dos Produtos: A função categorizeProducts agrupa produtos semelhantes de diferentes supermercados com base nos títulos normalizados. Ela conta a quantidade de produtos e os supermercados associados a cada item.
- Estrutura de Dados Flexível: Os dados são representados utilizando interfaces TypeScript para Product e Category, facilitando a escalabilidade e extensão do projeto.

#Iniciando
Pré-requisitos
Para rodar este projeto, você precisa ter os seguintes itens instalados:
 - Node.js (versão 12 ou superior)
- TypeScript (versão 4 ou superior)
