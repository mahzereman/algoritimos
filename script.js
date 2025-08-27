function makeChoice(choice) {
  const storyText = document.getElementById('story-text');
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const restartSection = document.getElementById('restart-section');

  // Esconde o botão de reiniciar enquanto a história está em andamento
  restartSection.style.display = 'none';

  if (choice === 'floresta') {
    storyText.textContent = "Você entra na floresta encantada e ouve o som de criaturas misteriosas ao longe. De repente, você encontra uma caverna escura à sua esquerda e uma luz brilhante à direita.";
    button1.textContent = "Entrar na caverna";
    button2.textContent = "Seguir em direção à luz brilhante";
    button1.setAttribute('onclick', 'makeChoice("caverna")');
    button2.setAttribute('onclick', 'makeChoice("luz")');
  } else if (choice === 'estrada') {
    storyText.textContent = "Você segue pela estrada iluminada e encontra um guardião misterioso no meio do caminho. Ele lhe oferece duas opções: uma chave dourada ou uma pedra brilhante.";
    button1.textContent = "Pegar a chave dourada";
    button2.textContent = "Pegar a pedra brilhante";
    button1.setAttribute('onclick', 'makeChoice("chave")');
    button2.setAttribute('onclick', 'makeChoice("pedra")');
  } else if (choice === 'caverna') {
    storyText.textContent = "Você entra na caverna e encontra um tesouro escondido, mas precisa resolver um enigma para abrir o baú.";
    button1.textContent = "Tentar resolver o enigma";
    button2.textContent = "Desistir e sair da caverna";
    button1.setAttribute('onclick', 'endStory("enigma")');
    button2.setAttribute('onclick', 'endStory("desistir")');
  } else if (choice === 'luz') {
    storyText.textContent = "Você segue em direção à luz brilhante e encontra uma fada mágica que oferece uma dádiva. Você deve escolher sabiamente.";
    button1.textContent = "Aceitar o presente";
    button2.textContent = "Recusar o presente";
    button1.setAttribute('onclick', 'endStory("aceitar")');
    button2.setAttribute('onclick', 'endStory("recusar")');
  } else if (choice === 'chave') {
    storyText.textContent = "Você escolhe a chave dourada e abre um portão secreto, entrando em um novo mundo onde tudo é possível.";
    button1.textContent = "Feliz com a escolha";
    button2.textContent = "Aventuras aguardam";
    button1.setAttribute('onclick', 'endStory("feliz")');
    button2.setAttribute('onclick', 'endStory("aventura")');
  } else if (choice === 'pedra') {
    storyText.textContent = "Você escolhe a pedra brilhante e ao tocá-la, ganha poderes mágicos que transformam o guardião em um aliado.";
    button1.textContent = "Usar os poderes mágicos";
    button2.textContent = "Sair do caminho";
    button1.setAttribute('onclick', 'endStory("poderes")');
    button2.setAttribute('onclick', 'endStory("sair")');
  }
}

function endStory(ending) {
  const storyText = document.getElementById('story-text');
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const restartSection = document.getElementById('restart-section');
  
  if (ending === 'enigma') {
    storyText.textContent = "Você resolve o enigma e abre o baú, encontrando um item mágico que lhe dá poderes para sempre!";
  } else if (ending === 'desistir') {
    storyText.textContent = "Você decide sair da caverna e voltar para o mundo real, com a sensação de que algo incrível poderia ter acontecido.";
  } else if (ending === 'aceitar') {
    storyText.textContent = "Você aceita o presente e a fada lhe dá uma chave para o seu futuro. O caminho se torna claro diante de você.";
  } else if (ending === 'recusar') {
    storyText.textContent = "Você recusa o presente e a fada desaparece, deixando uma sensação de mistério no ar.";
  } else if (ending === 'feliz') {
    storyText.textContent = "Você está feliz com a escolha da chave dourada, sabendo que o novo mundo trará muitas aventuras!";
  } else if (ending === 'aventura') {
    storyText.textContent = "A jornada no novo mundo apenas começou. Muitas aventuras e mistérios aguardam por você!";
  } else if (ending === 'poderes') {
    storyText.textContent = "Você agora possui poderes mágicos e um grande aliado. Sua jornada se torna uma lenda!";
  } else if (ending === 'sair') {
    storyText.textContent = "Você decide deixar tudo para trás e seguir um novo caminho. O futuro ainda está em aberto!";
  }

  button1.style.display = "none";
  button2.style.display = "none";

  // Exibe o botão de reiniciar a história
  restartSection.style.display = 'block';
}

function restartStory() {
  const storyText = document.getElementById('story-text');
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const restartSection = document.getElementById('restart-section');

  // Reinicia a história
  storyText.textContent = "Você acorda em um mundo desconhecido, rodeado por cores vibrantes e um ar mágico. Duas portas se apresentam diante de você.";

  button1.style.display = "inline-block";
  button2.style.display = "inline-block";
  button1.textContent = "Explorar a floresta encantada";
  button2.textContent = "Seguir pela estrada iluminada";
  button1.setAttribute('onclick', 'makeChoice("floresta")');
  button2.setAttribute('onclick', 'makeChoice("estrada")');

  // Esconde o botão de reiniciar
  restartSection.style.display = 'none';
}
