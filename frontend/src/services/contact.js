// Servicio para abrir WhatsApp con número y mensaje predeterminado
export function openWhatsApp(phoneNumber, message) {
  if (!phoneNumber) {
    console.warn('openWhatsApp: phoneNumber no proporcionado');
    return;
  }

  const cleanNumber = String(phoneNumber).replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message || '');
  const url = `https://wa.me/${cleanNumber}${encoded ? `?text=${encoded}` : ''}`;

  // Abrir en nueva pestaña
  window.open(url, '_blank');
}

export default openWhatsApp;
