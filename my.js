function scrollToBlock() {
    var block = document.getElementById('div4');
          if (block) {
                block.scrollIntoView({ behavior: 'smooth' }); // Прокрутка до блока с плавным эффектом
          }
    }