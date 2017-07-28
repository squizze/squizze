# DISC

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d058b27bd11e4c039341d4b60c89c931)](https://www.codacy.com/app/josetelesmaciel/teste-disc?utm_source=github.com&utm_medium=referral&utm_content=teles/teste-disc&utm_campaign=badger)

## Descubra seu perfil comportamental DISC.

[Visite o site e descubra seu perfil DISC.](http://disc.surge.sh/src)

O DISC é um teste comportamental que classifica o indivíduo testado de acordo com uma de 4 categorias. 

* **D** para Dominação
* **I** para Influência
* **S** para Estabilidade
* **C** para Conformidade

Para mais sobre o teste visite a [página da Wikipédia sobre DISC](https://pt.wikipedia.org/wiki/DISC_(psicologia)).

> **Curiosidade:** o criador desse teste também é criador do personagem Mulher Maravilha!

## Para rodar localmente

Por enquanto a sugestão é subir um servidor usando python mesmo:

```shell
python -m SimpleHTTPServer 1234
```

Então acesse a página principal em [http://localhost:1234/src](http://localhost:1234/src).

## Sobre as motivações para criar esse repositório

Criei essa repositório após fazer o teste do DISC na empresa onde trabalho. Na ocasião fiz o teste respondendo no papel e contabilizando o resultado manualmente olhando uma tabela. Logo pensei em transformar isso em um single page application.

Durante esse processo acabei percebendo que um projeto pequeno como esse serve de alvo para prática de diversas matérias relacionadas a desenvolvimento front-end. Sendo assim, listo aqui quais são os projetos que pretendo fazer nesse repositório.

| Projeto  | Prioridade |
| ------------- | ------------- |
| Adicionar **testes unitários** ao repositório  | muito alto  |
| Ter **nota A** no codacy | muito alto |
| Fazer um refactoring da api que torne o **modelo de dados ignorante** em relação a regras de negócios  | alto  |
| Utilizar **webpack** no repositório | alto|
| Criar uma **progressive web app** a partir desse projeto | alto| 
| Aplicar **i18n** ao projeto | médio |
| Aplicar design inspirado no **material design**  | médio  |
| Utilizar **recursos do ES6** | médio |
| Adicionar **arquivos de map** ao cdigo final | médio| 
| Transformar o código em um **pacote genérico** distribuído via npm | médio |
| Utilizar **npm scripts** como gerenciador de tarefas  | baixo  |
| Substituir diretivas por **component** | baixo |

Ou seja, com um código simples é possível exercitar boas práticas de desenvolvimento :tada:



