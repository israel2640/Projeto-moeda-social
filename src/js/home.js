async function realizarLogin() {
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;
  
    if (matricula !== '123456' || senha !== '1234') {
      alert('Login ou senha inválidos.');
  
    } else {
        window.open('file:///F:/CURSO%20DE%20JS/Projeto%20moeda%20social/src/user.html', '_blank');
      try {
        // Simulação de uma requisição para o servidor
        const response = await fetch('file:///F:/CURSO%20DE%20JS/Projeto%20moeda%20social/src/user.html', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ matricula, senha }),
        });
  
        // Simulação de uma resposta do servidor
        const data = await response.json();
  
        if (data.success) {
          alert(data.message);
          // Redireciona para a página desejada após o login
          window.location.href = 'file:///F:/CURSO%20DE%20JS/Projeto%20moeda%20social/src/user.html';
        } else {
          alert('Matrícula ou senha inválidos. Solicitação não encontrada no banco de dados.');
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    }
  }
  




  
