document.getElementById('downloadResume').addEventListener('click', function() {
    const element = document.body; // Select the entire document
    const opt = {
        margin: 0.5,
        filename: 'Podishetti_Sathwik_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Use html2pdf to generate the PDF
    html2pdf().set(opt).from(element).save();
});
