# App para cadastro de jogos já concluídos e em andamento
# 
# Servidor em Adonis e cliente em React

# Rotas para o backend: 
 ## rota base: http://localhost:3333/;
 
## rotas secundárias:
 
  ## Cadastro de novo usuário: 
   <p>rota: /user/cadastrar
   <p>tipo: post
   <p>recebe: json{ username : string, email: string, password: string}
   <p>retorna: 
   <p>  status: 201
   <p>  json: {username: string, email: string, password: hash, created_at: datetime, updated_at: datetime, id: number, type: "bearer", token: string, refreshToken: null}
   
  ## Autenticar usuário: 
   <p>rota: /user/login
   <p>tipo: post
   <p>recebe: json{ username : string, email: string, password: string}
   <p>retorna: 
   <p>  status: 200
   <p>  json: {type: "bearer", token: string, refreshToken: null }
     
# AS ROTAS A SEGUIR PRECISAM DE AUTENTICAÇÃO DO TIPO BEARER TOKEN

  ## Criar jogo:
   <p>rota: /jogos
   <p>tipo: post
   <p>recebe: json{ nome : string, genero: string, console: string, concluido: boolean}
   <p>retorna: 
   <p>  status: 201
   <p> json: {nome: string, genero: string, console: string, created_at: datetime, id: number}
     
  ## Editar jogo:
   <p>rota: /jogos/:id </p>
   <p>tipo: put;
   <p>recebe: json{ nome : string, genero: string, console: string, concluido: boolean}
   <p>retorna: 
   <p>  status: 200
   <p> json: {id: number, nome: string, genero: string, console: string, concluido: boolean, datatermino: datetime, created_at: datetime, id: number}
     
  ## Buscar jogo:
   <p>rota: /jogos/:id?nome=&genero=&console=&concluido=&limite=&pagina=
   <p>tipo: get
   <p>retorna: 
   <p>  status: 200
   <p>  json: {id: number, nome: string, genero: string, console: string, concluido: boolean, datatermino: datetime, created_at: datetime, id: number}  
     
  ## Listar jogos:
  <p>rota: /jogos
  <p>tipo: get
  <p>retorna: 
  <p>   status: 200
  <p>   json: [{id: number, nome: string, genero: string, console: string, concluido: boolean, datatermino: datetime, created_at: datetime, id: number}]
     
  ## Excluir jogo
   <p>rota: /jogos/:id
   <p>tipo: get
   <p>retorna: 
   <p>  status: 204
     
  # Rotas para o frontend: 
 ## rota base: http://localhost:3000/;
 
  ## Pagina Login
   <p>rota: /login/
![image](https://user-images.githubusercontent.com/82851823/115736653-d1168000-a361-11eb-89a9-1a479d7cd103.png)
 
  ## Pagina Cadastro
   <p>rota: /cadastar/
[image](https://user-images.githubusercontent.com/82851823/115736400-a4faff00-a361-11eb-9128-38d10aa77a0b.png)
 
  ## Pagina Inicial
   <p>rota: /dashboard/
 ![image](https://user-images.githubusercontent.com/82851823/115736215-7e3cc880-a361-11eb-9184-a7610b960d3d.png)

  ## Editar Jogo
   <p>rota: /jogo/:id
 ![image](https://user-images.githubusercontent.com/82851823/115736241-8268e600-a361-11eb-94fd-0268e9848c6c.png)

  ## Cadastrar Jogo
   <p>rota: /cadastrar/jogo
 ![image](https://user-images.githubusercontent.com/82851823/115736256-86950380-a361-11eb-9f15-7a2ae903c487.png)


     
