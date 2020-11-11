

let para = document.querySelector('p');
let homeButt = document.querySelector("button.home");
let moreButt = document.querySelector("button.more");

homeButt.addEventListener('click', home);
moreButt.addEventListener('click', more);





let page = 0;

function more(){
  page += 1
  if (page == 1){
    para.textContent = "Firstly, it made me think about the difference between a technological product and the service it provides. Just as the medium provides the message, the product provides a service. Are the product and service inseperable and/or one and the same?";
  }

  if (page == 2){
    para.textContent = "Secondly, it reminded be of the function and form properties of a piece of art. In particular, substance and style in cinema. I remember clearly that a reviewer had argued 'The Man from U.N.C.L.E.' was a good piece of cinema while everyone else thought it was flashy but lacking in the story department. This reviewer claimed that U.N.C.L.E.'s style (medium) was its substance (message) and that the rest didn't really matter.";
    moreButt.style.visibility = "hidden";
  }
}

function home{

  homeButt.href = "https://derekdincer.github.io/"
}
