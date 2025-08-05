
let notificacoes = [];
let loopInterval = null;

function testarNotificacao() {
  const plataforma = document.getElementById('plataforma').value;
  const valor = document.getElementById('valor').value;
  const imagem = document.getElementById('imagem').value;
  const som = document.getElementById('som').checked;

  exibirNotificacao({ plataforma, valor, imagem, som });
}

function adicionarNotificacao() {
  const plataforma = document.getElementById('plataforma').value;
  const valor = document.getElementById('valor').value;
  const imagem = document.getElementById('imagem').value;
  const som = document.getElementById('som').checked;

  if (!plataforma || !valor || !imagem) {
    alert("Preencha todos os campos!");
    return;
  }

  notificacoes.push({ plataforma, valor, imagem, som });
  alert("Notificação adicionada!");
}

function iniciarLoop() {
  const intervalo = parseInt(document.getElementById('intervalo').value);
  if (notificacoes.length === 0) {
    alert("Adicione pelo menos uma notificação!");
    return;
  }

  let index = 0;
  loopInterval = setInterval(() => {
    exibirNotificacao(notificacoes[index]);
    index = (index + 1) % notificacoes.length;
  }, intervalo);

  exibirNotificacao(notificacoes[index]);
}

function pararLoop() {
  clearInterval(loopInterval);
}

function exibirNotificacao({ plataforma, valor, imagem, som }) {
  const notif = document.getElementById('notificacao');
  const plat = document.getElementById('notifPlataforma');
  const val = document.getElementById('notifValor');
  const img = document.getElementById('notifImg');
  const sound = document.getElementById('notifSound');
  const historico = document.getElementById('historico');

  plat.textContent = plataforma;
  val.textContent = valor;
  img.src = imagem;

  notif.classList.remove('hidden');
  setTimeout(() => notif.classList.add('hidden'), 6000);

  if (som) sound.play();

  const entry = document.createElement('div');
  entry.innerHTML = `✅ ${plataforma} - R$ ${valor}`;
  historico.prepend(entry);
}
