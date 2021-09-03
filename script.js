const modalDeInstrucoes = document.getElementById('modalInstrucoes')

function abrirmodal() {
  modalDeInstrucoes.classList.add('abrirmodal')
}
document.getElementById('fechar').addEventListener('click', fecharmodal)
function fecharmodal() {
  modalDeInstrucoes.classList.remove('abrirmodal')
}
// Clique na janela fecha modal, exceto clique dentro do mesmo /// escopo de atuação variavel
document.addEventListener('click', fecharmodaljanela)
function fecharmodaljanela(evento) {
  const botaoVerInstrucoes = document.getElementById('instrucoes')
  const quandoModalNaoEstiverAberto =
    !modalDeInstrucoes.classList.contains('abrirmodal')
  const clicouDentroDoModal = modalDeInstrucoes.contains(evento.target)

  if (evento.target == botaoVerInstrucoes && quandoModalNaoEstiverAberto) {
    abrirmodal()
  } else if (
    !clicouDentroDoModal &&
    modalDeInstrucoes.classList.contains('abrirmodal')
  ) {
    fecharmodal()
  }
}

// Usando event listener target pai / event bubbling
document.getElementById('tabuleiro').addEventListener('click', cliquei)
function cliquei(evento) {
  // console.log(evento.target.className != "casa" && evento.target.className != "")
  // console.log(evento.target.className)

  if (evento.target.className != 'casa' && evento.target.className != '') {
    alert(`Você clicou numa ${evento.target.className}`)
  }
}

// Construção tabuleiro js

const tabuleiro = document.getElementById('tabuleiro')

//inserindo as linhas
for (let linha = 0; linha < 8; linha++) {
  let divLinha = document.createElement('div')
  divLinha.classList.add('linha')
  // inserindo div casas dentro das div linhas
  for (let casa = 0; casa < 8; casa++) {
    let divCasa = document.createElement('div')
    divCasa.classList.add('casa')

    divLinha.appendChild(divCasa)
  }

  tabuleiro.appendChild(divLinha)
}
