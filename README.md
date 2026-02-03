# 🧪 Exercícios de Automação Frontend com Cypress

Este repositório contém um conjunto de exercícios e cenários de testes automatizados para aplicações frontend, utilizando o framework **Cypress**. O objetivo deste projeto é demonstrar boas práticas de automação, estruturação de testes E2E (End-to-End) e validação de interfaces web.

## 🚀 Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/):** Framework de testes automatizados de ponta a ponta.
* **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript.
* **[JavaScript/TypeScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Linguagem utilizada para escrita dos scripts.

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/download/) (versão 12 ou superior recomendada)
* [Git](https://git-scm.com/)
* Um editor de código (Ex: [VS Code](https://code.visualstudio.com/))

## 🔧 Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/tiagosantos0412/exercicios-automacao-frontend-cypress.git](https://github.com/tiagosantos0412/exercicios-automacao-frontend-cypress.git)
    ```
2.  Acesse a pasta do projeto:
    ```bash
    cd exercicios-automacao-frontend-cypress
    ```
3.  Instale as dependências necessárias:
    ```bash
    npm install
    ```

## 🏃 Execução dos Testes

Você pode executar os testes de duas formas:

### 1. Interface Gráfica (Cypress Runner)
Ideal para desenvolvimento e debug de testes.
```bash
npx cypress open

Após abrir a interface, selecione o navegador desejado e a spec que deseja executar.

2. Modo Headless (Linha de Comando)
Ideal para execução rápida ou em ambientes de CI/CD.

Bash
npx cypress run
📁 Estrutura do Projeto
cypress/e2e: Contém os arquivos de testes (specs).

cypress/fixtures: Arquivos de dados estáticos para massa de teste (JSON).

cypress/support: Comandos personalizados e configurações globais.

cypress.config.js: Arquivo de configuração principal do Cypress.

🛠️ Boas Práticas Aplicadas
Seletores Otimizados: Uso de seletores estáveis para evitar flakiness.

Custom Commands: Abstração de ações repetitivas para facilitar a manutenção.

Clean Code: Código organizado seguindo padrões de legibilidade.
