## Sección 5: Todo App - Aplicación con un estado un poco más complejo 0 / 23|2 h 12 min

    - 36. Introducción a la sección   1 min
        - Crear una aplicación mas compleja
        - Aplicación de tareas.
        - Como crear los reducer
        - Como crear al AppState
        - Temas:
            - Creación de componentes
            - Modelos
            - Acciones
            - Reducers
            - Estados
            - Estado inicial
            - Agregar tareas mediante acciones
            - Payload
            - Editar tareas
            - Despliegues a GitHub y GitHub Pages
        - El objetivo es no tocar los estados y crear nuevos estados
            - Evitar la mutabilidad de los objetos.
            
    - 37. Temas puntuales de la sección   1 min
        - Creación de componentes
        - Modelos
        - Acciones
        - Reducers
        - Estados
        - Estado inicial
        - Agregar tareas mediante acciones
        - Payload|
        - Editar tareas
        - Despliegues a GitHub y GitHub Pages
        
    - 38. Material para esta sección  1 min
        - https://github.com/Klerith/TODO-CSS-Template
        
    - 39. Inicio del proyecto - TodoApp   5 min
        - Codificación y configuración del proyecto.
        - Copiar contenido de body de index.html correspondiente al proyecto del repositorio.
            - Todo el contenido del body.
        - Agregar la ruta del estilo en archivo angular.json.
            - Se realiza la instalación del proyecto base
                - npm install todomvc-app-css --save
            - Agregamos la referencia en el archivo angular.json                 
                - "node_modules/todomvc-app-css/index.css"
                
    - 40. Creando los componentes para nuestra aplicación de tareas   6 min
        - Creando el módulo
            - ng g m todos/todo --flat
        - Se crean cada uno de los componentes que se utilizaran para crear la app Todo
                    
    - 41. Segmentar el template en múltiples componentes  10 min
        - Codificación
        
    - 42. Instalar NgRx, modelo, acciones y reducer de Todos  9 min
        -  Realizamos la instalación de ngrx de acuerdo al sitio oficial
            - https://ngrx.io/guide/store/install
        - Posteriormente realizamos la configuración 
            - Crear la action
            - Crear el reducer
            - agregar configuración en el app.module.
        - Es importante tomar en cuenta que para el caso de trabajo con objetos (como son los arreglos)
            - Debemos evitar la mutación de los objetos.
            - Aplicando técnica de destructuración y pasar valores por spread operator se logra evitar la mutación.
            - Para este ejemplo se realiza una nueva instancia del objeto para no alterar el valor del objeto
                - on(crear, (state, { texto }) => [...state, new Todo(texto)])
        
    - 43. Definiendo el AppState de nuestra aplicación    4 min
        - Instalación de las devtools
        - Configuración de la devtools en app.module.ts
            - https://ngrx.io/guide/store-devtools
    - 44. Agregar un TODO 8 min
        - Se agrega la configuración del formControl.
        - Se crea la inicialización del input.
        - Se codifica el método agregar.
        
    - 45. Desplegar nuestra lista de TODOS    4 min
        - Se obtiene el estado de la tienda store
        - se selecciona para luego asignarse a una variable que es renderizada con *ngFor
        
    - 46. Controlar los TODO-Items    11 min
        - Codificación.
        
    - 47. Toggle Action - Completar o desmarcar un TODO   12 min
        - codificación.
        
    - 48. Editar una tarea por hacer  6 min
        - codificación.
        
    - 49. Borrar una tarea de la lista    4 min
        - codificación.
        
    - 50. Toggle All - Marcar o Desmarcar Todos   7 min
        - codificación.
        
    - 51. Creando un segundo reducer - Filtro 7 min
        - codificación.
        - Utilizar el mismo lineamiento como lo marca el sitio oficial.
        - Usar types para definir elementos conocidos.
            - export type filtrosValidos = 'todos' | 'completados' | 'pendientes';
        
    - 52. Combinando 2 o más reducers en el AppState  5 min
        - codificación.
        
    - 53. Cambiar el filtro - únicamente el string    8 min
        - codificación.
        
    - 54. Conteo de tareas pendientes 4 min
        - codificación.
        
    - 55. Aplicar el filtro visualmente   7 min
        - codificación.
        - Crear pipe
            - ng g pipe directory/namePipe
        - La forma correcta de aplicar pipe es el siguiente:
             - <app-todo-item *ngFor="let todo of todos | filtroTodo:filtroActual" [todo]="todo"></app-todo-item>            
        - En este apartado le envamos parametros a un pipe
            - filtroTodo:filtroActual
                         
    - 56. Borrar todos los TODO completados   5 min
        - codificación.
        
    - 57. Desplegar nuestra aplicación en GitHub Pages    11 min
        - Tener instalado git
        - Tener las configuraciones correctas en git.
        - Tener cuenta en github
        - Crear un nuevo repositorio
            - Public.
            - Sin README.
        - Copiar los siguientes comandos:
            - git remote add origin git@github.com:Ingbetanzos/todo-redux.git
            - git push -u origin master
            - Subir proyecto
        - Despliegue
            - En settings debemos seleccionar la opción de despliegue por docs.
            - Generar los archivos de produccción.
                - El archivo dist, contendra el archivo todoapp, renombrarla a docs.
                - comentar la linea base href            
        
    - 58. Código fuente de la sección 1 min
        - codificación.
