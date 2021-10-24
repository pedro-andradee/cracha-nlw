const linksSocialMedia = {
  github: 'pedro-andradee',
  youtube: 'jakelinygracielly',
  facebook: 'pedro.andrade.758',
  instagram: 'pedrocostaandrade',
  twitter: 'pretoecinza_'
}
//uma função em JS sempre é seguida de (){}
//document (DOM) é usado para o JS acessar elementos do html
function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Pedro Andrade'; A seguir vai ser feito da forma
  //simplificada porque foi colocada a Id, só funciona com esse atributo. Se fosse classe não dava pra simplificar.
  //userName.textContent = 'Pedro Andrade'
  //for é um laço de repetição, precisa de um controlador pra dizer quando parar de repetir. i++ é a mesma coisa de i=1+1. Nesse caso a cada repetição soma 1 à variável i. Children faz o JS buscar no elemento da id socialLinks por todos os componentes dentro da tag.
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
