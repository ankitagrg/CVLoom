import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async (element: HTMLElement, filename: string) => {
  try {
    // Create canvas from HTML element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight
    });

    // Calculate dimensions for PDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // A4 dimensions in mm
    const pdfWidth = 210;
    const pdfHeight = 297;
    
    // Calculate scaling to fit content
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ratio = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);
    
    const imgWidth = canvasWidth * ratio;
    const imgHeight = canvasHeight * ratio;
    
    // Center the image on the page
    const x = (pdfWidth - imgWidth) / 2;
    const y = (pdfHeight - imgHeight) / 2;

    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting PDF:', error);
    alert('Failed to export PDF. Please try again.');
  }
};