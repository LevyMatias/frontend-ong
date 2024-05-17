document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalDescription = document.getElementById('modal-description');
    const spanClose = document.querySelector('.close');
    const tableBody = document.getElementById('lista-clientes');

    tableBody.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('btn-secondary')) {
            const row = target.closest('tr');
            const id = row.dataset.id;
            showDetails(id, row);
        }
    });

    spanClose.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    function showDetails() {
        modalDescription.innerHTML = `
            <h2>Detalhes do cliente</h2>
        `;
        modal.style.display = "block";
    }
});
