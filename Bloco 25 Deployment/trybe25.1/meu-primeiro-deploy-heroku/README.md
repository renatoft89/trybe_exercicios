// inicializa o git para seu projeto, adiciona as alterações e realiza um commit

git init
git add .
git commit -m "first commit"
// cria o aplicativo heroku e envia para o heroku

heroku create
git push heroku master