---
title: Puente Visual to Code |Innovación de desarrollo de IA de Hatcher
description: Experimente el puente visual a código de Hatcher que revoluciona el desarrollo asistido por AI-AI.Haga clic, arrastre y manipule su interfaz de usuario directamente para generar cambios de código precisos con control determinista.
---

# Puente visual a código

El puente de Visual to Code es la característica de la firma de Hatcher que revoluciona cómo los desarrolladores interactúan con los asistentes de codificación de IA.En lugar de describir los cambios en el texto, manipula directamente la interfaz visual de su aplicación y Hatcher traduce sus acciones en modificaciones precisas de código.

## Cómo funciona

### El problema tradicional

`` `sirena
Gráfico LR
A [intención del desarrollador] -> B [Descripción del texto]
B -> C [Interpretación AI]
C -> D [Generación de código]
D -> E [Resultado a menudo incorrecto]
E -> F [Corrección manual]
F -> B
`` `` ``

** Ejemplo del ciclo frustrante: **

- Desarrollador: "Haz que el encabezado sea azul y cúbrelo"
- AI: genera CSS que hace que el elemento incorrecto sea azul
- Desarrollador: "No, el encabezado principal, no el encabezado de la barra lateral"
- ai: lo hace el tono incorrecto de azul
- Desarrollador: "Hágalo #3B82F6 y también aumente el tamaño de la fuente"
- ... etcétera

### Enfoque visual de código de escotilla: los modos duales del puente

El puente visual a código funciona de manera diferente dependiendo de la misión de su proyecto, proporcionando el equilibrio adecuado de libertad y control.

** En modo generativo: Creación asistida por AI **

En un proyecto 'generativo', el puente actúa como un sistema de orientación de alta precisión para la IA.El flujo de trabajo es:

1. ** Usted ancla el contexto: ** Haga clic para seleccionar un elemento.

2. ** Usted proporciona el comando: ** Use el lenguaje natural para describir el cambio deseado.

3. ** El AI ejecuta: ** Genera el código necesario, limitado al alcance que definió.

** En un huevo: manipulación determinista **

En un `huevo`, el puente se convierte en una herramienta de manipulación directa donde la generación de código de IA no se usa para cambios visuales.El flujo de trabajo es 100% determinista:

1. ** Manipula directamente: ** Arrastre, cambia el tamaño o edite las propiedades en un panel visual.

2. ** El motor captura el evento: ** Hatcher registra el cambio como una actualización estructurada.

3- ** La configuración se actualiza: ** El cambio se escribe en un archivo de configuración del proyecto, no se genera como nuevo código fuente.

## Características del núcleo

### 1. Selección de elementos

** Sistema de selección inteligente **

- Haga clic en cualquier elemento para seleccionarlo
- Desvale los límites de selección de vista previa
- Seleccione múltiples elementos para operaciones por lotes
- Selección jerárquica (niño, padre, hermanos)

`` `mecanografiado
// Ejemplo: seleccionar un botón
selección const = {
elemento: 'botón.submit-btn',
propiedades: {
Posición: {x: 120, y: 45},
dimensiones: {ancho: 100, altura: 36},
estilos: {
backgroundcolor: '#3b82f6',
Borderradius: '6px',
FontSize: '14px',
},
},
contexto: {
Padre: 'Form.Checkout-Form',
hermanos: ['input.email', 'input.password'],
Marco: 'Vue 3',
Componente: 'SubtButton.vue',
},
}
`` `` ``

### 2. Manipulación visual

** Edición de propiedades directas **

- Arrastre los elementos a nuevas posiciones
- Cambiar el tamaño arrastrando esquinas
- Picker de color para fondos y texto
- Controles de tipografía (fuente, tamaño, peso)
- Controles de espaciado (margen, relleno)

** Vista previa en vivo **

- Consulte los cambios instantáneamente en su aplicación
- No hay necesidad de refrescar o reconstruir
- Integración de reemplazo del módulo caliente
- Actualizaciones de CSS en tiempo real

### 3. Reconocimiento de intenciones

Hatcher analiza sus cambios visuales y entiende:

** Cambios de diseño **

- Modificaciones de posición (absoluto, relativo, flex)
- Ajustes de tamaño (ancho, altura, receptivo)
- Cambios de alineación (centro, flex, cuadrícula)

** Cambios de estilo **

- Modificaciones de color (Hex, RGB, HSL, Variables CSS)
- Actualizaciones de tipografía (familia de fuentes, tamaño, peso, altura de línea)
- Efectos visuales (sombras, bordes, gradientes)

** Cambios de componentes **

- Modificaciones de accesorios
- Actualizaciones estatales
- Adiciones de controladores de eventos

### 4. Generación de código

Basado en su intención visual, Hatcher genera:

** Código específico del marco **

`` `Vue
<!-Vue 3 Ejemplo->
<template>
<Botón
class = "Subt-btn"
: style = "{
Transform: `traduce ($ {posicion.x} px, $ {posicion.y} px)`,
backgroundcolor: '#3b82f6',
} "
@click = "handlesubmit"
>
Entregar
</botón>
</template>
`` `` ``

** actualizaciones de CSS **

`` `CSS
.submit-btn {
Posición: Absoluto;
Izquierda: 120px;
arriba: 45px;
Color de fondo: #3B82F6;
Ancho: 100px;
Altura: 36px;
Border-Radius: 6px;
tamaño de fuente: 14px;
}
`` `` ``

** Integración mecanografiada **

`` `mecanografiado
interfaz buttonprops {
Posición: {x: número;Y: número}
variante: 'primaria' |'secundario'
Tamaño: 'SM' |'MD' |'LG'
}
`` `` ``

## Capacidades avanzadas

### 1. Diseño receptivo

** Edición multi-Breakpoint **

- Editar diferentes tamaños de pantalla simultáneamente
- Generar CSS receptivo automáticamente
- Mantener la consistencia del diseño en todos los dispositivos

`` `CSS
/ * Código receptivo generado */
.submit-btn {
/* Móvil */
Ancho: 100%;
margen: 0 16px;
}

@Media (Min-Width: 768px) {
/ * Tableta */
.submit-btn {
Ancho: 200px;
margen: 0 auto;
}
}

@Media (Min-Width: 1024px) {
/ * Escritorio */
.submit-btn {
Ancho: 150px;
Posición: Absoluto;
Izquierda: 120px;
}
}
`` `` ``

### 2. Cambios de componentes conscientes

** Detección de componentes inteligentes **

- Reconoce los componentes Vue, Reaccion, esbeltos
- Comprende los accesorios de componentes y el estado
- Mantiene los límites de los componentes

** Ejemplo: modificación de un componente VUE **

`` `Vue
<-antes->
<UserCard: user = "CurrentUser" size = "Medium" />

<!-después de la modificación visual->
<Usercard
: user = "CurrentUser"
size = "grande"
: style = "{margintop: '24px'}"
espectáculo
/>
`` `` ``

### 3. Integración del sistema de diseño

** Uso de token automático **

- Reconoce los tokens del sistema de diseño
- sugiere valores apropiados
- Mantiene la consistencia

`` `CSS
/ * En lugar de valores arbitrarios */
Color: #3B82F6;
relleno: 12px;

/ * Usa tokens de diseño */
color: var (-color-primario-500);
relleno: var (-espaciado-3);
`` `` ``

## Ejemplos de flujo de trabajo

### Ejemplo 1: Ajuste de diseño

** Objetivo **: Mueva una barra lateral de izquierda a derecha

1. ** Seleccione **: haga clic en el componente de la barra lateral
2. ** Arrast **: Arrálelo al lado derecho de la pantalla
3. ** Revisión **: Consulte los cambios generados de Flex/Grid
4. ** Aplicar **: Acepte las modificaciones CSS

** Código generado **:

`` `CSS
.lalaut-continer {
Pantalla: Flex;
Dirección flexible: fila;/ * Cambiado de Row-Reverse */
}

.sidebar {
Orden: 2;/ * Cambiado de 1 */
margen-izquierda: auto;/* Agregado */
}
`` `` ``

### Ejemplo 2: estilo componente

** Objetivo **: Cambiar la apariencia del botón para que coincida el diseño

1. ** Seleccione **: haga clic en el botón
2. ** Estilo **: Use el selector de color, ajuste el tamaño, modifique el borde
3. ** Vista previa **: Consulte los cambios en vivo en la aplicación
4. ** Generar **: Obtener actualizaciones de accesorios de componentes

** Código generado **:

`` `Vue
<Configuración de script>
const buttonstyle = {
variante: 'primaria',
Tamaño: 'LG',
redondeado: verdadero,
}
</script>

<template>
<AppButton V-Bind = "ButtonStyle"> Enviar pedido </AppButton>
</template>
`` `` ``

### Ejemplo 3: Ajuste receptivo

** Objetivo **: Haz una cuadrícula sensible

1. ** Seleccionar **: Elija el contenedor de cuadrícula
2. ** Cambiar el tamaño **: Ajustar columnas para diferentes puntos de interrupción
3. ** Prueba **: Vista previa en móviles/tableta/escritorio
4. ** Aplicar **: Generar una red CSS receptiva

** Código generado **:

`` `CSS
.Product-Grid {
Pantalla: cuadrícula;
Gap: 1rem;
Columna de plantilla de cuadrícula: 1fr;/* Móvil */
}

@Media (Min-Width: 640px) {
.Product-Grid {
Columna de plantilla de cuadrícula: repita (2, 1fr);/ * Tableta */
}
}

@Media (Min-Width: 1024px) {
.Product-Grid {
columnas de plantilla de cuadrícula: repetir (3, 1fr);/ * Escritorio */
}
}
`` `` ``

## Integración con motores AI

El puente visual a código funciona sin problemas con los motores AI compatibles:

### Integración del código de Claude

`` `mecanografiado
const visualIntent = captureVisualchange (selección, modificación)
const codeChange = espera Claudecode.GenerAtechange ({
Intención: VisualIntent,
Contexto: ProjectContext,
Playbook: TeamPlaybook,
})
`` `` ``

### Integración de Gemini CLI

`` `mecanografiado
const indic = buildVisualPrompt (VisualIntent, CodeContext)
sugerencia const = espera geminicli.complete (aviso)
const refinedcode = refinewithplaybook (sugerencia)
`` `` ``

## Las mejores prácticas

### 1. Comience pequeño

- hacer cambios visuales incrementales
- Pruebe cada modificación antes de pasar al siguiente
- Desarrollar cambios complejos a través de pasos más pequeños

### 2. Use libros de jugadas

- Definir patrones de componentes en sus libros de jugadas
- Establecer reglas de estilo consistentes
- Documentar patrones de diseño comunes

### 3. Revisión del código generado

- Siempre revise el código diff antes de aplicar
- Asegúrese de que el código generado siga sus estándares
- Refine las indicaciones si es necesario para obtener mejores resultados

### 4. Prueba a fondo

- Use pruebas automatizadas para validar los cambios
- Verifique el comportamiento receptivo
- Verificar el cumplimiento de la accesibilidad

---

El puente visual a código representa un cambio fundamental en la forma en que interactuamos con la IA para el desarrollo.Al eliminar la capa de traducción entre la intención y la implementación, crea una experiencia de desarrollo más intuitiva, precisa y eficiente.