import qrcode
import random

# Ejemplo de Datos del estudiante
estudiante = {
    "dni": "954925169",
    "nombre_completo": "Andrew Roman",
    "area_postulacion": 4,
    "nivel": "B",
    "usuario": "954925169NB",
    "contrasena": "954925169"
}

# Generar código QR a partir de datos de estudiante
codeqr = ''.join([
    str(estudiante['dni'])[:3],                     # Primeros 3 dígitos del DNI
    estudiante['nombre_completo'][:3].upper(),      # Primeras 3 letras del nombre (mayúsculas)
    str(estudiante['area_postulacion']),            # Área de postulación
    estudiante['nivel'],                            # Nivel
    estudiante['usuario'][-3:],                     # Últimos 3 caracteres del usuario
    str(estudiante['contrasena'])[-3:]              # Últimos 3 dígitos de la contraseña
])

# Limitar la longitud del código QR a un máximo de 19 caracteres
codeqr = codeqr[:19]

# Crear un objeto QRCode
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

print("codeqr:", codeqr)

# Agregar los datos al código QR
qr.add_data(codeqr)
qr.make(fit=True)

# Crear una imagen del código QR
imagen_qr = qr.make_image(fill_color="black", back_color="white")

# Guardar la imagen del código QR
imagen_qr.save("codigo_qr_estudiante.png")

print("Código QR generado y guardado como 'codigo_qr_estudiante.png'")