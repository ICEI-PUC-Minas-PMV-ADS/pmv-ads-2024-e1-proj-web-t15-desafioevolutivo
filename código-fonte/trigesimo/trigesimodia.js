$(document).ready(function() {
    $('#my-button').click(function() {
      $('#popup-modal').fadeIn();
    });
    
    $('#ok-button').click(function() {
      window.location.href = "segundodia.html";
    });
    
    $('cancel-button').click(function() {
      window.location.href = "segundodia.html";
    });

    const iniciarButton = document.querySelector(".conteudo-secundario-escrito-botao-principal");
    const backgroundBlur = document.querySelector(".background-blur");
    const highlightedContainer = document.querySelector(".highlighted-container");
    const closeButton = document.querySelector(".close-button");
    const commentBox = document.querySelector("#comment-box");
    
    iniciarButton.addEventListener("click", createHighlightedButton);
    
    function createHighlightedButton() {
      backgroundBlur.style.display = "block";
      highlightedContainer.style.display = "block";
      commentBox.style.display = "block";
    }
    
    closeButton.addEventListener("click", exitBlur);
    
    function exitBlur() {
      backgroundBlur.style.display = "none";
      highlightedContainer.style.display = "none";
      commentBox.style.display = "none";
    }
    
    let isOpen = false;
    
    commentButton.addEventListener('click', function() {
      if (isOpen) {
        commentBox.style.display = 'none';
        isOpen = false;
      } else {
        commentBox.style.display = 'block';
        isOpen = true;
      }
    });
    
    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', function() {
      const commentText = document.getElementById('comment-textarea').value;
      // Salvar o comentário em outra página com JavaScript
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'save-comment.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('comment=' + encodeURIComponent(commentText));
      commentBox.style.display = 'none';
      isOpen = false;
    });
  
  });
  document.addEventListener('DOMContentLoaded', (event) => {
    // Recupera o contador e a data do último desafio do localStorage
    let contador = parseInt(localStorage.getItem('contador')) || 29; //alterar esse número para forçar teste
    let lastChallengeDate = localStorage.getItem('lastChallengeDate') || '';
    
    // Exibe o contador atual na página
    // document.getElementById('contador').textContent = `${contador}/30`;
    // Atualiza o contador se o botão for clicado
    document.getElementById('cancel-button').addEventListener('click', () => {
        const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD               
        
        // Verifica se o desafio já foi feito hoje
        if (today !== lastChallengeDate && contador < 30) {
            contador = Math.min(contador + 1); // Incrementa o contador
            lastChallengeDate = today;
            // Atualiza o contador e a data do último desafio no localStorage
            localStorage.setItem('contador', contador);
            localStorage.setItem('lastChallengeDate', lastChallengeDate);
            // Atualiza o contador na página
            // document.getElementById('contador').textContent = `${contador}/30`;
            
            // Vitória no desafio
            if (contador >= 30) {
                alert('Parabéns! Você venceu o desafio!');
            } 
        }
        else {
            alert('Você já completou o desafio de hoje!');
        }
        //A pessoa pulou um dia e perdeu o desafio
        //if (today !== lastChallengeDate && yesterday !== lastChallengeDate && chancedevacilo == 1) {
        //    alert('Que vacilo! Você falhou no desafio. Mas não se preocupe, você terá uma chance!');
        //    contador = Math.min(contador + 1);
        //   chancedevacilo = chancedevacilo - 1;
        //    lastChallengeDate = today;
        //}
        //else if (today !== lastChallengeDate && yesterday !== lastChallengeDate && chancedevacilo == 0) {
        //   alert('Volte ao início do desafio! Tente novamente, você irá conseguir!');
        //    contador = 0;
        //}
    });
  });

