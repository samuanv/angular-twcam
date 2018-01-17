# AngularTwcam
[https://github.com/samuanv/angular-twcam]

Para ejecutar json-server ir a la carpeta /json-server y ejecutar `json-server --watch db.json`.

Se ha utilizado una autenticación estática para simplificar el desarrollo.
Usuarios: admin@admin, employee@employee, user@user (o cualquier otro). Las contraseñas no importan.
El usuario admin@admin puede acceder a todas las funcionalidades de la aplicación.
El usuario employee@employee puede visualizar e interactuar con las vistas Flight y Journey.
El usuario user@user puede visualizar e interactuar con las vistas Book y MyFlights.
# Despliegue en AWS
Se ha desplegado la aplicación en Amazon Web Services.
Url: [http://cloud.samuanv.com.s3-website.eu-west-3.amazonaws.com/dist/].
Esta aplicación recoge los datos mediante el servicio My JSON Server Online [https://my-json-server.typicode.com/]. El fichero db.json se encuentra alojado en otro repositorio de este usuario [https://github.com/samuanv/myjsonserver].
Este servicio no ofrece persistencia, por lo tanto los datos no se guardan.

# Environments
Existen varios entornos: 
    - dev (environment.ts): Contiene la url apuntando al servidor local.
    - prod (environment.prod.ts): Contiene la url apuntando al servidor online.
Se puede ejecutar cada entorno con el parámetro ´--e´. Ejemplo: ´--e prod´. Por defecto ejecuta el dev.

# Lazy Modules
Para evitar cargar las dependencias de todos los módulos al principio, se van cargando según se acceda a las rutas. Esto mejora el rendimiento general de la app. 
Esto se realiza en el archivo [app/pages/pages.routing.ts]

# Componentes propios
Se crea un componente por cada vista en el menú (Flights, Journeys, Booking) y a parte para Login. 
Ademas se crea un componente tonto llamado 'journey-form' que sirve como vista para editar/crear nuevos journeys. Este componente recibe parámetros y emite un evento para indicar al padre que tiene que realizar una inserción/actualización.

# Componentes externos
Dentro del componente Flight, se utiliza una dependencia externa llamada ngx-datatable.
> Se utiliza una dependencia externa ya que ofrece unas funcionalidades que serían muy costosas de implementar desde 0 y para demostrar que se maneja el uso de dependencias de terceros. Ngx-datatable: [https://swimlane.github.io/ngx-datatable/]

# Servicios de componente
Cada componente posee un servicio que utiliza para realizar las llamadas http.

# Interfaces
En la carpeta [/shared/interfaces] se encuentrar clases que corresponden con los objetos que devuelve el servidor para mapearlos correctamente.

# Autenticación
Se crean tres servicios para gestionar la autenticación en la carpeta [/shared/services] (ya que son compartidos por varios componentes): authService, userService y utilsService.
La autenticación se hace de forma estática (a nivel de código) en authService.
userService se encarga de guardar en localStorage los datos del usuario y de devolver su rol.
utilsService proporciona dos funciones comunes e importantes en todas las llamadas http:
    - jwt(): forma la cabecera 'Authentication' con el token de seguridad guardado previamente.
    - get_url(): extrae la url a la que llamar dependiendo del environment.
    - handle_error(): capturador de errores genérico solo para modo dev.

## Roles
Existen tres roles: user, employee y admin. Cada uno solo puede ver ciertas vistas. Esto se hace en [app/pages/pages.routing.ts] para evitar acceder mediante url y en  [app/app.component.html] para ocultar las opciones en el menú.
Existen tres clases (AdminInGuard, EmployeeInGuard y UserInGuard) que se encargan de determinar si un usuario puede acceder a una url en concreto.

# Conexión HTTP / Llamadas Rest
Se utiliza HTTPClient en lugar de la dependencia propuesta RestAngular ya que es recomendado por el propio equipo de Angular y ofrece más posibilidades que la mencionada. Esta es una decisión personal.
Cada vez que se llama a nuestro servidor, se utiliza la función jwt() para configurar las cabeceras de manera correcta y a get_url() para obeter la url dependiendo del entorno:
```typescript
this.http.post<Journey>(`${this.utils.get_url(this.path)}` , journey , this.utils.jwt());
```

# Diseño
Para el diseño general de la app se utiliza Bootstrap. Para la tabla del componente Flight se utiliza Material Design.
Se ha utilizado la utilidad particles.js para crear el efecto de la barra de menú [https://github.com/VincentGarreau/particles.js]
# Dialogo
Se ha creado un servicio común llamado AlertService que es llamado por todos los componentes para notificar el resultado de una llamada http o cualquier otra información. Acepta distintos estilos como success, warning, general etc...
En la pantalla Book, al hacer click en la opción 'Book it' se abre un diálogo con un formulario para realizar la compra.

# Reactive Forms y validaciones
Se utilizan reactive forms tanto en el componente JourneyForm como en el Login.
En ambos se valida subscribiendose a los cambios del formulario.

# TsLint
Se puede ejecutar el comando ´ng lint´ para comprobar la limpieza del código en toda la app siguiendo las normas propuestas en el fichero [tslint.json].




