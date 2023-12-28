function realizarPagamento() {
    const valorPagar = parseFloat(document.getElementById('valor').value);
  
    if (isNaN(valorPagar) || valorPagar <= 0) {
      alert('Informe um valor válido para o pagamento.');
      return;
    }
  
    const saldoAtual = parseFloat(document.getElementById('saldoAtual').innerText);
    
    if (valorPagar > saldoAtual) {
      alert('Saldo insuficiente para realizar o pagamento.');
      return;
    }
  
    // Simulação do desconto do saldo (esta lógica deve ser implementada no back-end)
    const novoSaldo = saldoAtual - valorPagar;
  
    // Atualiza o elemento HTML com o novo saldo
    document.getElementById('saldoAtual').innerText = novoSaldo.toFixed(2);
  
    alert('Pagamento realizado com sucesso!');
  }
  