#!/bin/bash

#Obtener lista de usuarios (GET /api/users)
curl -X GET http://localhost:3000/api/users

#Obtener un usuario específico (GET /api/users/:id)
curl -X GET http://localhost:3000/api/users/1

#Crear un nuevo usuario (POST /api/users)
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email": "newuser@example.com", "password": "newpassword", "type": "user", "active": true}'

#Actualizar un usuario (PUT /api/users/:id)
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"email": "updateduser@example.com"}'

#Eliminar un usuario (DELETE /api/users/:id)
curl -X DELETE http://localhost:3000/api/users/1

#Obtener lista de profesores (GET /api/teachers)
curl -X GET http://localhost:3000/api/teachers

#Obtener un profesor específico (GET /api/teachers/:id)
curl -X GET http://localhost:3000/api/teachers/1

#Crear un nuevo profesor (POST /api/teachers):Crear un nuevo profesor (POST /api/teachers)
curl -X POST http://localhost:3000/api/teachers \
  -H "Content-Type: application/json" \
  -d '{"dni": "12345678A", "name": "John", "last_name": "Doe", "date_of_birth": "1980-01-01", "user_id": 1}'

#Actualizar un profesor (PUT /api/teachers/:id)
curl -X PUT http://localhost:3000/api/teachers/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane"}'

#Eliminar un profesor (DELETE /api/teachers/:id)
curl -X DELETE http://localhost:3000/api/teachers/1

#Obtener estudiantes de un profesor (GET /api/teachers/:teacher_id/students)
curl -X GET http://localhost:3000/api/teachers/1/students

#Obtener lista de estudiantes (GET /api/students)
curl -X GET http://localhost:3000/api/students

#Obtener un estudiante específico (GET /api/students/:id)
curl -X GET http://localhost:3000/api/students/1

#Crear un nuevo estudiante (POST /api/students)
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{"dni": "87654321B", "name": "Alice", "last_name": "Smith", "date_of_birth": "2000-01-01", "teacher_id": 1}'

#Actualizar un estudiante (PUT /api/students/:id)
curl -X PUT http://localhost:3000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Bob"}'

#Eliminar un estudiante (DELETE /api/students/:id)
curl -X DELETE http://localhost:3000/api/students/1

#Tras la implementación de la clase 6

#Iniciar sesión (POST /login)
#url -X POST http://localhost:3000/login \
# -H "Content-Type: application/x-www-form-urlencoded" \
# -d "username=admin@example.com&password=password123"
#
#Obtener token JWT (POST /api/token)
#url -X POST http://localhost:3000/api/token \
# -H "Content-Type: application/json" \
# -d '{"username": "admin@example.com", "password": "password123"}'
#
#Activar un usuario (POST /api/users/:id/active)
#url -X POST http://localhost:3000/api/users/1/active \
# -H "Authorization: Bearer <tu_token_jwt>"
#
#Obtener estado de activación de un usuario (GET /api/users/:id/active)
#url -X GET http://localhost:3000/api/users/1/active \
# -H "Authorization: Bearer <tu_token_jwt>"


