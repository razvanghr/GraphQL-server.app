
![alt text](https://graphql.org/img/og-image.png)


### App Url
```
http://localhost:8080/graphql
```


## Instalation
```
docker compose up --build
```

## GraphQL - Query

## Get all clients fields
```
{
  clients{
    id
    name
    email
    phone
  }
}
```


## Get all projects fields
```
{
  projects{
    title
    description
    status
    client{
      name
      email
      phone
    }
  }
}
```



## Get client by id
```
{
  client(id: "65bbbc22ece69a3859ecfaea"){
    name
    phone
    email
  }
}
```


## Get project by id
```
{
  project(id: "65bbbc22ece69a3859ecfaea"){
    title
    description
    status
    client{
      name
      phone
      email
    }
  }
}
```

### GraphQL - Mutations


## Create Client
```
mutation {
  addClient(name: "Client Name", email: "client@email.com", phone: "000-000-000") {
  }
}
```


## Create Project
```
mutation{
  addProject(title: "Project Title" , status: new || progress || completed , description: "Project-Description" , clientId: "65bbe2a6f052994894799c1e") {
  }
}

```



## Delete Client by Id
```
mutation {
  deleteClient(id: "65bbbc22ece69a3859ecfaea") {
  }
}
```


## Delete Project by Id
```
mutation{
  deleteClinet(id :"65bbbc22ece69a3859ecfaea") {
  }
}
```



