Calendário de Eventos

Este é um projeto de calendário de eventos desenvolvido com React e integrado ao banco de dados Supabase para armazenamento e gerenciamento de eventos.

Configuração
Para configurar e executar este projeto em sua máquina local, siga estas etapas:

1. Clone o repositório:
bash
git clone https://github.com/seu-usuario/calendario-eventos.git

2. Instale as dependências: Navegue até o diretório do projeto e execute o comando:
bash
cd calendario-eventos/frontend npm install

3. Configure o Supabase:
•	Crie uma conta no Supabase se ainda não tiver uma.
•	Crie um novo projeto no painel do Supabase e obtenha sua URL e chave anônima.
•	Cole a URL e a chave anônima no arquivo supabase.js localizado em frontend/src/services.

4. Execute o projeto: De volta ao diretório raiz do projeto, execute o comando:
sql:
npm start
Isso iniciará o servidor de desenvolvimento. O aplicativo estará disponível em http://localhost:3000.

Funcionalidades
•	Adição de eventos.
•	Busca de eventos por título, data ou descrição.
•	Listagem de todos os eventos cadastrados.
•	Exclusão de eventos.

Estrutura do Projeto

O projeto possui a seguinte estrutura de pastas:
•	public: Arquivos públicos, incluindo o arquivo HTML principal.
•	src: Código-fonte React.
•	components: Componentes React reutilizáveis.
•	pages: Componentes de página individuais.
•	services: Configuração e integração com o Supabase.
•	App.js: Componente principal do aplicativo.
•	index.js: Ponto de entrada do React.

Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga estas etapas:
1.	Fork este repositório.
2.	Crie sua própria branch (git checkout -b feature/sua-funcionalidade).
3.	Faça suas alterações e commit (git commit -am 'Adicionar nova funcionalidade').
4.	Empurre para a branch (git push origin feature/sua-funcionalidade).
5.	Abra um pull request.

Autores
•	Rafael Rocha

Licença
Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.







