import json
import random
from random import randint, uniform
from datetime import datetime, timedelta
from faker import Faker

fake = Faker()

def generar_fecha():
    start_date = datetime(2024, 1, 1)
    end_date = datetime(2024, 12, 31)
    random_date = start_date + timedelta(days=randint(0, (end_date - start_date).days))
    return random_date.strftime("%Y-%m-%d")

def generar_nota():
    return round(uniform(5, 20), 2)

def generar_usuario(dni, area_inicial, nivel):
    return f"{dni}{area_inicial}{nivel}"

def generar_contrasena(dni):
    return str(dni)

def generar_cursos(area_postulacion):
    cursos_generales = ["Algebra", "Aritmetica", "Lenguaje", "Raz. Metematico", "Raz. Verval", "Ingles"]
    
    if area_postulacion == 1:  # Medicina
        cursos_especificos = ["Biología", "Quimica Genaral", "Anatomia Humana", "Psicologia"]
    elif area_postulacion == 2:  # Letras
        cursos_especificos = ["Literatura", "Realidad Nacional", "Historia"]
    elif area_postulacion == 3:  # Ingeniería
        cursos_especificos = ["Trigonometria", "Geometria", "Fisica", "Quimica General"]
    elif area_postulacion == 4:  # Negocios
        cursos_especificos = ["Economia", "Realidad Nacional"]

    return cursos_generales + cursos_especificos

def generar_estudiante(dni, area_postulacion, nivel):
    area_inicial = {"1": "M", "2": "L", "3": "I", "4": "N"}[str(area_postulacion)]
    
    usuario = generar_usuario(dni, area_inicial, nivel)
    contrasena = generar_contrasena(dni)
    
    cursos = []
    for curso_nombre in generar_cursos(area_postulacion):
        cursos.append({
            "nombre": curso_nombre,
            "historial_notas": {
                f"{j + 1}": {"fecha": generar_fecha(), "nota": generar_nota()} for j in range(15)
            }
        })

    return {
        "dni": dni,
        "nombre_completo": fake.name(),
        "area_postulacion": area_postulacion,
        "nivel": nivel,
        "usuario": usuario,
        "contrasena": contrasena,
        "cursos": cursos
    }

estudiantes = []

for i in range(150):
    dni = f"{randint(100000000, 999999999)}"
    area_postulacion = randint(1, 4)
    nivel = random.choice(["B", "I", "A"])
    
    estudiantes.append(generar_estudiante(dni, area_postulacion, nivel))

academia_preuniversitaria = {"estudiantes": estudiantes}

with open("academia_preuniversitaria.json", "w") as file:
    json.dump(academia_preuniversitaria, file, indent=2)

print("JSON generado y guardado en 'academia_preuniversitaria.json'")
