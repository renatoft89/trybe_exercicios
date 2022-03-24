# COMANDOS DOCKER
##  Exibindo os recursos do ambiente

```sh
docker container ls ===  Lista os contêineres que estão em execução. (docker ps)
```
```sh
docker container ls -a	=== Lista todos os contêineres. (docker ps -a)
```
```sh
docker image ls	=== Lista as imagens (docker images)
```
```sh
docker volume ls ==== Lista os volumes
```
```sh
docker network ls === Lista as redes
```
```
docker info	=== Lista a quantidade de contêineres e imagens e informações do ambiente
```
## Removendo recursos individualmente
```sh
docker container rm <id>   ou   docker rm <id>
```
```sh
docker image rm <id>         ou   docker rmi <id>
```
```sh
docker volume <id>
```
```sh
docker network <id>
```
