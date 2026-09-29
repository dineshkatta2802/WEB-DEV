  window.addEventListener('load', () => {
            const container = document.querySelector('.bars-ani');
            const mainContent = document.getElementById('main-content');

            // Total duration = max delay + animation duration
            const totalDuration = 1.5 * 1000 + 0.1 * 6 * 1000; // 1.5s + 0.6s = 2.1s
            setTimeout(() => {
                container.classList.add('finished');
                mainContent.style.opacity = '1';
                mainContent.style.visibility = 'visible';
            }, totalDuration);
        });

        function logout() {
            alert("Logging out...");
        }