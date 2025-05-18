document.querySelectorAll('.view-recipe-btn').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            button.textContent = 'Hide Recipe';
        } else {
            details.style.display = 'none';
            button.textContent = 'View Recipe';
        }
    });
});
