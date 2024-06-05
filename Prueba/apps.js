const filtrar = x => x.name === "Evaluacion";

(async () => {
  //Leer archivo json
  let response = await fetch('data.json');
  let user = await response.json();
  //consultar usuarion github
  let respuestGithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
  let usuariogithub = await respuestGithub.json();

  usuariogithub.forEach(element => {
    if (element.name === "Evaluacion") {
      console.log(element)
    }
  });

  // let data = usuariogithub.filter(filtrar)
  // console.log(data)
  // console.log(usuariogithub)
})()


