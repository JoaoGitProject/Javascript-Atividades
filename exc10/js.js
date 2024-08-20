let opcoes = "";
let lista = [];

while (opcoes != '3') {

    opcoes = prompt(`Lista de Pacientes: ${lista.map((paciente, index) => `${index + 1}º ${paciente}`).join(', ')}.
  
  Digite '1' para adicionar um novo Paciente, '2' para Consultar um novo paciente e '3' para Sair.`);

    switch (opcoes) {

    case '1':
      let pacienteAdd = prompt(`Digite o nome do Paciente que deseja adicionar`);
      lista.push(pacienteAdd);
      break;

    case '2':
      if (lista.length > 0) {
        let pacienteConsultado = lista.shift();
        alert(`Paciente ${pacienteConsultado} foi consultado.`);
      } else {
        alert("Nenhum paciente na lista para consultar.");
      }
      break;

    case '3':
      alert("Programa Encerrado.");
      break;

    default:
      alert("Opção inválida. Por favor, escolha 1, 2 ou 3.");
      break;
  }
}
