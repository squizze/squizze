# DISC

[![Build Status](https://travis-ci.org/teles/DISC.svg?branch=master)](https://travis-ci.org/teles/DISC)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b43701becda3457184adb4accd630bb7)](https://www.codacy.com/app/josetelesmaciel/DISC?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=teles/DISC&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/b43701becda3457184adb4accd630bb7)](https://www.codacy.com/app/josetelesmaciel/DISC?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=teles/DISC&amp;utm_campaign=Badge_Coverage)
[![Gitter chat](https://badges.gitter.im/teles/DISC.png)](https://gitter.im/teles/DISC)
[![dependencies Status](https://david-dm.org/teles/DISC/status.svg)](https://david-dm.org/teles/DISC)
[![devDependencies Status](https://david-dm.org/teles/DISC/dev-status.svg)](https://david-dm.org/teles/DISC?type=dev)

[Visite o site e descubra seu perfil DISC.](http://disc.surge.sh/src)

O DISC é um teste comportamental que classifica o indivíduo testado de acordo com uma de 4 categorias. 

* **D** para Dominação
* **I** para Influência
* **S** para Estabilidade
* **C** para Conformidade

Para mais sobre o teste visite a [página da Wikipédia sobre DISC](https://pt.wikipedia.org/wiki/DISC_(psicologia)).

> **Curiosidade:** o criador desse teste também é criador da personagem Mulher Maravilha!

## Para rodar localmente

Instale as dependências:

```shell
npm install
```

Crie o arquivo de bundle:

```shell
npm run build
```

Rode o projeto:

```shell
npm start
```

Então acesse a página principal em [http://localhost:8765/](http://localhost:8765/).

## Rodando testes

```shell
npm test
```

Um relatório de cobertura será gerado no caminho `/coverage/html/index.html`.

## Sobre as motivações para criar esse repositório

Criei essa repositório após fazer o teste do DISC na empresa onde trabalho. Na ocasião fiz o teste respondendo no papel e contabilizando o resultado manualmente olhando uma tabela. Logo pensei em transformar isso em um single page application.

Durante esse processo acabei percebendo que um projeto pequeno como esse serve de alvo para prática de diversas matérias relacionadas a desenvolvimento front-end. Sendo assim, listo aqui quais são os projetos que pretendo fazer nesse repositório.

| Projeto  | Prioridade |
| :--- | ------------- |
| [Adicionar **testes unitários** ao repositório](https://github.com/teles/DISC/projects/4)  | muito alta  |
| [Ter **nota A** no codacy](https://github.com/teles/DISC/projects/1) | muito alta |
| [Fazer um refactoring da api que torne o **modelo de dados ignorante** em relação a regras de negócios](https://github.com/teles/DISC/issues/14)  | alta  |
| Utilizar **webpack** no repositório | alta|
| Criar uma **progressive web app** a partir desse projeto | alta| 
| Aplicar **i18n** ao projeto | média |
| Aplicar design inspirado no **material design**  | média  |
| [Utilizar **recursos do ES6**](https://vivadecora.atlassian.net/browse/VDD-822) | média |
| Adicionar **arquivos de map** ao cdigo final | média| 
| Transformar o código em um **pacote genérico** distribuído via npm | média |
| [Utilizar **npm scripts** como gerenciador de tarefas](https://github.com/teles/DISC/projects/2)  | baixa  |
| Substituir diretivas por **component** | baixa |

Ou seja, com um código simples é possível exercitar boas práticas de desenvolvimento :tada:



