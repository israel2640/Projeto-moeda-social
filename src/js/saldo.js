function adquirirSaldo() {
    const valorAdquirir = parseFloat(document.getElementById('valor').value);
  
    if (isNaN(valorAdquirir) || valorAdquirir <= 0) {
      alert('Informe um valor válido para adquirir saldo.');
      return;
    }
  
    // Simulação da lógica de adição de saldo (esta lógica deve ser implementada no back-end)
    const saldoAtual = parseFloat(document.getElementById('saldoAtual').innerText);
    const novoSaldo = saldoAtual + valorAdquirir;
  
    // Atualiza o elemento HTML com o novo saldo
    document.getElementById('saldoAtual').innerText = novoSaldo.toFixed(2);
  
    alert(`Saldo de R$ ${valorAdquirir.toFixed(2)} adquirido com sucesso!`);
  }
  