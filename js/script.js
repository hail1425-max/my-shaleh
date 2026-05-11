document.addEventListener('DOMContentLoaded', function() {
    const confirmBtn = document.querySelector('button');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            alert('تم تأكيد الحجز بنجاح! سيظهر للشريكين فوراً.');
        });
    }
});
