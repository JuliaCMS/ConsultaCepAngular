# Desafio Front-End - Busca CEP #

Aplicação desenvolvida como desafio para a ROKO. 
Criação de um novo componente em Angular que realiza a busca de endereços pelo CEP, utilizando a API pública [ViaCEP](https://viacep.com.br/).

## Layout App 
![layoutviacep](https://github.com/JuliaCMS/ConsultaCepAngular/assets/108769971/a9b2b449-8eda-4b01-9b57-02ed838fe8e9)

## Tecnologias utilizadas
Angular versão 14.2.12

## Pré-requisitos
- Node.js instalado na sua máquina.
- Angular CLI instalado globalmente.

## Instalação
- Clone este repositório para sua máquina local usando o seguinte comando:
```bash
git clone https://github.com/seu-usuario/ConsultaCepAngular.git
```
- Navegue até o diretório do projeto:
```bash
cd frontend
```

## Instale as dependências necessárias:
```bash
npm install
```

## Como Executar
Para executar a aplicação localmente, execute o seguinte comando:
```bash
ng serve
```
A aplicação estará disponível em http://localhost:4200/ no seu navegador.

## Como Usar
- Abra o seu navegador web e vá para http://localhost:4200/.
- No campo de pesquisa, digite um ou vários CEPs separados por ponto e vírgula (;).
- Clique no botão "Buscar".
- A aplicação buscará informações de endereço na API ViaCEP e as exibirá na página.
- Se vários CEPs forem inseridos, você pode navegar entre os resultados da pesquisa usando os botões "Endereço anterior" e "Próximo endereço".
