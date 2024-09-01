# API RESTful para Gestión de Usuarios y Comentarios
Manuel Herrera - A00381987


Este proyecto es una API backend desarrollada con Node.js y TypeScript para la gestión de usuarios y comentarios. La aplicación permite realizar operaciones CRUD en usuarios y comentarios, manejar la autenticación de usuarios y gestionar roles que controlan las acciones permitidas en el sistema.
Se tomo como base la plantilla que se genera con el comando ``` npx typescript-express-starter```

## Tabla de Contenidos
- Instalación
- Configuración
- Ejecución
- Endpoints
- Estructura del Proyecto
- Tecnologías Utilizadas
- Funcionalidades Implementadas
- Despliegue
- Pruebas
- Limitaciones y Dificultades

## Instalación

1. Clona este repositorio:
    ```bash
    git clone (https://github.com/Herre1/typescript-express-starter.git)
    cd typescript-express-starter
    ```

2. Hacer build:
    ```bash
    npm run build
    ```

## Configuración

1. Configura tu base de datos MongoDB o usa la que tengo ahi.

## Ejecución

Para iniciar el servidor en modo de desarrollo:

```bash
npm run dev
```

## Endpoints

### Gestión de Usuarios
- GET /users - Obtener la lista de usuarios.
- POST /users - Crear un nuevo usuario (solo superadmin).
- PUT /users/:id - Modificar un usuario existente (solo superadmin).
- DELETE /users/:id - Eliminar un usuario (solo superadmin).

### Gestión de Comentarios
- GET /comments - Obtener la lista de comentarios.
- POST /comments - Crear un nuevo comentario.
- PUT /comments/:id - Modificar un comentario.
- DELETE /comments/:id - Eliminar un comentario.
  
### Reacciones a Comentarios
- POST /comments/:id/reactions - Reaccionar a un comentario.
- DELETE /comments/:id/reactions/:reactionId - Eliminar una reacción.

## Estructura del Proyecto
![image](https://github.com/user-attachments/assets/b4be0189-5114-4599-b12a-3f370e3bf129)


## Tecnologías Utilizadas
- Node.js: Entorno de ejecución para JavaScript en el servidor.
- TypeScript: Superconjunto de JavaScript que añade tipado estático.
- MongoDB: Base de datos NoSQL para la persistencia de datos.
- JWT: Para la autenticación y autorización segura de los usuarios.

## Funcionalidades Implementadas
- Autenticación y Autorización: Sistema de autenticación mediante JWT, con roles de usuario (superadmin, usuario regular).
- Gestión de Usuarios: CRUD completo para usuarios, con restricciones basadas en roles.
- Gestión de Comentarios: CRUD completo para comentarios, incluyendo la funcionalidad de hilos de discusión.
- Reacciones a Comentarios: Sistema para que los usuarios reaccionen a los comentarios.

## Despliegue
El proyecto ha sido desplegado en la nube. Puedes acceder a la API en la siguiente URL: https://taller-nodejs-12a6443008f1.herokuapp.com .

## Pruebas
Se incluye un archivo JSON de Postman en la raíz del proyecto (TallerNodeJS.json) que contiene pruebas de cada una de las funcionalidades de la API.
Este archivo contiene todas las solicitudes y scripts de test utilizados para validar la funcionalidad de la API.

Aqui un ScreenShot de referencia para entender como fueron tomadas las pruebas : 
![image](https://github.com/user-attachments/assets/4e2f3686-fe0b-4b9e-b22c-1bf01e79dab1)

 
**Cómo importar el archivo de Postman**

1. Abre Postman.
2. Haz clic en "Import" en la parte superior izquierda.
3. Selecciona el archivo `TallerNodeJS.postman_collection.json` .
4. Ejecuta las pruebas desde la colección importada.



## Limitaciones y Dificultades
Algunas funcionalidades avanzadas, como la paginación , no se lograron implementar debido a limitaciones de tiempo.
Por lo que el despliegue en la nube no tiene interfaz grafica
