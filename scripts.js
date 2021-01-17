window.addEventListener('keydown', function(e) {
        console.info( event.keyCode );
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`li[data-key="${e.keyCode}"]`);

        audio.currentTime = 0
        
        if(!audio) return;

        key.classList.add('action');
        audio.play();

        setTimeout(() => {
            key.classList.remove('action');

        }, 200);

    });