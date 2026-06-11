# 🚀 Projeto Node.js + Jest | Desafio DIO / DIO Challenge

[🇧🇷 Versão em Português](#-versão-em-português) | [🇺🇸 English Version](#-english-version)

---

## 🇧🇷 Versão em Português

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

Este repositório contém o projeto prático desenvolvido para o desafio da **DIO (Digital Innovation One)**. O objetivo principal desta aplicação é aplicar conceitos de Engenharia de Qualidade de Software, focado na migração de uma API de JavaScript puro para **TypeScript**, garantindo a tipagem estática e implementando uma suíte rigorosa de **Testes Unitários com Jest**.

### 🎯 Foco do Projeto e Arquitetura de Qualidade

Como parte da estratégia de qualidade (*Shift-Left Testing*), a arquitetura foi desenhada para prever e isolar falhas antes que cheguem ao ambiente de execução:

* **Tipagem Estática (TypeScript):** Prevenção de erros de contrato e validação de regras de negócio em tempo de desenvolvimento.
* **Isolamento de Componentes (Mocks):** Criação de um ambiente de *Virtualização de Serviços* utilizando tipagens avançadas (`MockResponse` e `MockRequest`) para testar Controllers isoladamente do servidor Express.
* **Cobertura de Testes (Jest):** Validação de caminhos felizes e cenários de exceção (como tentativas de cadastro com dados inválidos e validação de HTTP Status Codes).

### 📂 Estrutura Principal

```text
📁 src
 ├── 📁 controllers              # Regras de negócio e validações
 │    └── 📄 usersController.test.ts # Casos de teste unitário
 ├── 📁 mocks                    # Dublês de teste para isolamento do Express
 │    ├── 📄 mockRequest.ts
 │    └── 📄 mockResponse.ts
 ├── 📄 routes.ts                # Mapeamento de endpoints da API
 ├── 📄 database.ts              # Estrutura de dados em memória
 └── 📄 index.ts                 # Ponto de entrada do servidor
```

### 🛠️ Instruções de Execução Básica

**Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) e o gerenciador de pacotes `yarn` (ou `npm`) instalados.

1. **Clone o repositório e acesse a pasta:**
   ```bash
   git clone [https://github.com/seu-usuario/projeto-node-jest-dio.git](https://github.com/seu-usuario/projeto-node-jest-dio.git)
   cd projeto-node-jest-dio
   ```
2. **Instale as dependências da aplicação:**
   ```bash
   yarn install
   ```
3. **Valide as Regras de Negócio (Testes Unitários):**
   ```bash
   yarn test
   ```
4. **Gere a build para produção (Transpilação para JS):**
   ```bash
   yarn build
   ```

---

### 📔 Diário de Bordo / Troubleshooting Detalhado

Durante a migração para TypeScript e configuração do ambiente, alguns desafios de ecossistema foram resolvidos. Abaixo estão as instruções detalhadas caso seja necessário replicar a configuração do zero:

#### 1. Resolução de Conflito CommonJS vs ES Modules (Erro no Jest)
Ao rodar o Jest pela primeira vez com o `ts-jest`, o Node.js pode apresentar o erro `ReferenceError: require is not defined in ES module scope`. Para resolver:
* **Passo A:** Remover a linha `"type": "module"` do arquivo `package.json`. O TypeScript se encarregará de traduzir os imports.
* **Passo B:** Renomear o arquivo de configuração do Jest para forçar a leitura em CommonJS, alterando de `jest.config.js` para `jest.config.cjs`.
* **Passo C:** Garantir que o conteúdo do `jest.config.cjs` utilize a sintaxe correta de exportação (`module.exports`):
  ```javascript
  /** @type {import('ts-jest').JestConfigWithTsJest} */
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
  };
  ```

#### 2. Instruções de Versionamento e Git (Resolução de Conflitos Remotos)
Ao enviar o projeto para o GitHub, se o repositório remoto for inicializado com arquivos (como README ou .gitignore), o `git push` pode ser rejeitado (`error: failed to push some refs`). O fluxo correto adotado foi:

* **Conectar o repositório local ao GitHub:**
  ```bash
  git remote add origin [https://github.com/seu-usuario/projeto-node-jest-dio.git](https://github.com/seu-usuario/projeto-node-jest-dio.git)
  ```
* **Alterar a URL caso o nome do repositório mude:**
  ```bash
  git remote set-url origin [https://github.com/seu-usuario/projeto-node-jest-dio.git](https://github.com/seu-usuario/projeto-node-jest-dio.git)
  ```
* **Salvar as alterações locais:**
  ```bash
  git add .
  git commit -m "feat: migracao para typescript e configuracao do jest"
  ```
* **Forçar o envio sobrescrevendo o histórico divergente inicial:**
  ```bash
  git push -u origin main --force
  ```

---

### 📝 Aprendizados
Com 20 anos de experiência atuando na intersecção entre tecnologia e regras de negócio, este projeto consolida a evolução natural das práticas de Quality Assurance. A migração para TypeScript e a implementação do Jest representam a aplicação direta do conceito de Shift-Left Testing, unindo a visão estratégica de análise de negócios à engenharia de testes (SDET) diretamente na base de código.

<br>

---

## 🇺🇸 English Version

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

This repository contains the practical project developed for the **DIO (Digital Innovation One)** challenge. The main goal of this application is to apply Software Quality Engineering concepts, focusing on migrating a pure JavaScript API to **TypeScript**. This ensures static typing and implements a rigorous **Unit Testing** suite with **Jest**.

### 🎯 Project Focus & Quality Architecture

As part of the quality strategy (*Shift-Left Testing*), the architecture was designed to predict and isolate failures before they reach the runtime environment:

* **Static Typing (TypeScript):** Contract error prevention and business rule validation during development time.
* **Component Isolation (Mocks):** Creation of a *Service Virtualization* environment using advanced typings (`MockResponse` and `MockRequest`) to test Controllers in isolation from the Express server.
* **Test Coverage (Jest):** Validation of happy paths and exception scenarios (such as registration attempts with invalid data and HTTP Status Code validation).

### 📂 Main Structure

```text
📁 src
 ├── 📁 controllers              # Business rules and validations
 │    └── 📄 usersController.test.ts # Unit test cases
 ├── 📁 mocks                    # Test doubles for Express isolation
 │    ├── 📄 mockRequest.ts
 │    └── 📄 mockResponse.ts
 ├── 📄 routes.ts                # API endpoints mapping
 ├── 📄 database.ts              # In-memory data structure
 └── 📄 index.ts                 # Server entry point
```

### 🛠️ Basic Execution Instructions

**Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) and the `yarn` (or `npm`) package manager installed.

1. **Clone the repository and access the folder:**
   ```bash
   git clone [https://github.com/seu-usuario/projeto-node-jest-dio.git](https://github.com/seu-usuario/projeto-node-jest-dio.git)
   cd projeto-node-jest-dio
   ```
2. **Install application dependencies:**
   ```bash
   yarn install
   ```
3. **Validate Business Rules (Unit Tests):**
   ```bash
   yarn test
   ```
4. **Generate the production build (Transpilation to JS):**
   ```bash
   yarn build
   ```

---

### 📔 Logbook / Detailed Troubleshooting

During the migration to TypeScript and environment setup, some ecosystem challenges were resolved. Below are the detailed instructions in case the setup needs to be replicated from scratch:

#### 1. CommonJS vs ES Modules Conflict Resolution (Jest Error)
When running Jest for the first time with `ts-jest`, Node.js might throw the error `ReferenceError: require is not defined in ES module scope`. To solve this:
* **Step A:** Remove the `"type": "module"` line from the `package.json` file. TypeScript will handle the imports translation.
* **Step B:** Rename the Jest config file to force CommonJS reading, changing from `jest.config.js` to `jest.config.cjs`.
* **Step C:** Ensure the contents of `jest.config.cjs` use the correct export syntax (`module.exports`):
  ```javascript
  /** @type {import('ts-jest').JestConfigWithTsJest} */
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
  };
  ```

#### 2. Git & Versioning Instructions (Remote Conflict Resolution)
When pushing the project to GitHub, if the remote repository was initialized with files (like README or .gitignore), the `git push` might be rejected (`error: failed to push some refs`). The correct flow adopted was:

* **Connect the local repository to GitHub:**
  ```bash
  git remote add origin [https://github.com/seu-usuario/projeto-node-jest-dio.git](https://github.com/seu-usuario/projeto-node-jest-dio.git)
  ```
* **Change the URL if the repository name changes:**
  ```bash
  git remote set-url origin [https://github.com/seu-usuario/projeto-node-jest-dio.git](https://github.com/seu-usuario/projeto-node-jest-dio.git)
  ```
* **Save local changes:**
  ```bash
  git add .
  git commit -m "feat: typescript migration and jest setup"
  ```
* **Force push overwriting the initial divergent history:**
  ```bash
  git push -u origin main --force
  ```

---

### 📝 Learnings
With 20 years of experience working at the intersection of technology and business rules, this project consolidates the natural evolution of Quality Assurance practices. The migration to TypeScript and the implementation of Jest represent the direct application of the Shift-Left Testing concept, uniting the strategic vision of business analysis with test engineering (SDET) directly within the codebase.
