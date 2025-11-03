document.addEventListener('DOMContentLoaded', function() {
    const dugme = document.getElementById('dugme');
    const poruka = document.getElementById('poruka');
    
    dugme.addEventListener('click', function() {
        poruka.textContent = 'Kliknuto!';
    });
});

