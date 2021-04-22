# App para cadastro de jogos já concluídos e em andamento
# 
# Servidor em Adonis e cliente em React

# Rotas para o backend: 
 ## rota base: http://localhost:3333/;
 
## rotas secundárias:
 
  ## Cadastro de novo usuário: 
   <p>rota: /user/cadastrar</p>
   <p>tipo: post</p>
   <p>recebe: json{ username : string, email: string, password: string}</p>
   <p>retorna: </p>
   <p>  status: 201</p>
   <p>  json: {username: string, email: string, password: hash, created_at: datetime, updated_at: datetime, id: number, type: "bearer", token: string, refreshToken: null}</p>
   
  ## Autenticar usuário: 
   <p>rota: /user/login</p>
   <p>tipo: post</p>
   <p>recebe: json{ username : string, email: string, password: string}</p>
   <p>retorna: </p>
   <p>  status: 200</p>
   <p>  json: {type: "bearer", token: string, refreshToken: null }</p>
     
# AS ROTAS A SEGUIR PRECISAM DE AUTENTICAÇÃO DO TIPO BEARER TOKEN

  ## Criar jogo:
   <p>rota: /jogos</p>
   <p>tipo: post</p>
   <p>recebe: json{ nome : string, genero: string, console: string, concluido: boolean}</p>
   <p>retorna: </p>
   <p>  status: 201</p>
   <p> json: {nome: string, genero: string, console: string, created_at: datetime, id: number}</p>
     
  ## Editar jogo:
   <p>rota: /jogos/:id </p>
   <p>tipo: put;</p>
   <p>recebe: json{ nome : string, genero: string, console: string, concluido: boolean}</p>
   <p>retorna: </p>
   <p>  status: 200</p>
   <p> json: {id: number, nome: string, genero: string, console: string, concluido: boolean, datatermino: datetime, created_at: datetime, id: number}</p>
     
  ## Buscar jogo:
   <p>rota: /jogos/:id?nome=&genero=&console=&concluido=&limite=&pagina=</p>
   <p>tipo: get</p>
   <p>retorna: </p>
   <p>  status: 200</p>
   <p>  json: {id: number, nome: string, genero: string, console: string, concluido: boolean, datatermino: datetime, created_at: datetime, id: number}  </p>
     
  ## Listar jogos:</p>
  <p>rota: /jogos</p>
  <p>tipo: get</p>
  <p>retorna: </p>
  <p>   status: 200</p>
  <p>   json: [{id: number, nome: string, genero: string, console: string, concluido: boolean, datatermino: datetime, created_at: datetime, id: number}]</p>
     
  ## Excluir jogo
   <p>rota: /jogos/:id</p>
   <p>tipo: get</p>
   <p>retorna: </p>
   <p>  status: 204</p>
     
  # Rotas para o frontend: 
 ## rota base: http://localhost:3000/;
 
  ## Pagina Login
   <p>rota: /login/</p>

![image](https://user-images.githubusercontent.com/82851823/115741456-2b194480-a366-11eb-8aa5-24da9d2f11bd.png)

  ## Pagina Cadastro
   <p>rota: /cadastar/</p>
   
![image](https://user-images.githubusercontent.com/82851823/115741423-205eaf80-a366-11eb-8d98-14095da138ee.png)

  ## Pagina Inicial
   <p>rota: /dashboard/</p>
   
 ![dashboard](https://user-images.githubusercontent.com/82851823/115736215-7e3cc880-a361-11eb-9184-a7610b960d3d.png)

  ## Editar Jogo
   <p>rota: /jogo/:id</p>
   
 ![edit](https://user-images.githubusercontent.com/82851823/115736241-8268e600-a361-11eb-94fd-0268e9848c6c.png)

  ## Cadastrar Jogo
   <p>rota: /cadastrar/jogo</p>
   
 ![create](https://user-images.githubusercontent.com/82851823/115736256-86950380-a361-11eb-9f15-7a2ae903c487.png)


     
