onload = () =>{
        document.body.classList.remove("container");

        // Crear estrellas de fondo
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            starsContainer.appendChild(star);
        }

        // Crear partículas flotantes
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
            particlesContainer.appendChild(particle);
        }

        // Crear destellos
        const sparklesContainer = document.getElementById('sparkles');
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparkle.style.animationDuration = (Math.random() * 2 + 1) + 's';
            sparklesContainer.appendChild(sparkle);
        }

        // Crear anillos de brillo
        const glowRingsContainer = document.getElementById('glowRings');
        for (let i = 0; i < 8; i++) {
            const ring = document.createElement('div');
            ring.className = 'glow-ring';
            ring.style.left = Math.random() * 100 + '%';
            ring.style.top = Math.random() * 100 + '%';
            ring.style.width = (Math.random() * 100 + 50) + 'px';
            ring.style.height = ring.style.width;
            ring.style.animationDelay = Math.random() * 4 + 's';
            glowRingsContainer.appendChild(ring);
        }

        // Crear luces flotantes
        const floatingLightsContainer = document.getElementById('floatingLights');
        for (let i = 0; i < 15; i++) {
            const light = document.createElement('div');
            light.className = 'floating-light';
            light.style.left = Math.random() * 100 + '%';
            light.style.top = Math.random() * 100 + '%';
            light.style.animationDelay = Math.random() * 6 + 's';
            light.style.animationDuration = (Math.random() * 4 + 4) + 's';
            floatingLightsContainer.appendChild(light);
        }

        // Crear corazones
        const heartsContainer = document.getElementById('hearts');
        const heartColors = ['heart-red', 'heart-pink', 'heart-purple', 'heart-gold', 'heart-blue'];
        const heartEmojis = ['❤️‍🩹', '🐱', '🐶', '💖', '💗'];
        for (let i = 0; i < 40; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-particle ' + heartColors[Math.floor(Math.random() * heartColors.length)];
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 6 + 's';
            heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heartsContainer.appendChild(heart);
        }

        // Manejar el botón de música en la pantalla de inicio
        const musicButton = document.getElementById('musicButton');
        // 👇 ACTUALIZADO AQUÍ TAMBIÉN CON TU NUEVA URL
        let introAudio = new Audio('https://videotourl.com/audio/1791274389780-b3e214c7-7ee2-4ad3-9ae0-bfaf2fbb3a31.mp3');
        let isPlaying = false;

        musicButton.addEventListener('click', () => {
            if (isPlaying) {
                introAudio.pause();
                musicButton.classList.remove('playing');
                musicButton.textContent = '🎵';
            } else {
                introAudio.play().catch(e => console.log('Audio play blocked:', e));
                musicButton.classList.add('playing');
                musicButton.textContent = '⏸️';
            }
            isPlaying = !isPlaying;
        });

        // Manejar el botón de regalo
        const giftButton = document.getElementById('giftButton');
        const introScreen = document.getElementById('introScreen');

        giftButton.addEventListener('click', () => {
            // Pausar música de intro si está sonando
            if (isPlaying) {
                introAudio.pause();
                musicButton.classList.remove('playing');
                musicButton.textContent = '🎵';
                isPlaying = false;
            }

            // Reproducir música del regalo
            const giftAudio = new Audio('Https://videotourl.com/audio/1791272994250-44edbe22-597f-49c7-8ca5-48ea955d06e1.mp3');
            giftAudio.play().catch(e => console.log('Audio autoplay blocked:', e));

            // Ocultar pantalla de intro inmediatamente
            introScreen.classList.add('hidden');
        });
};
