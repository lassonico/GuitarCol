export const formatoFecha = (fecha) =>{
    const fechaNueva = new Date();
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones);
}