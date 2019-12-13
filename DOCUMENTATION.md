# delphi-js

### My tribute to Delphi 7. Let the Web be your new home

### Live demo at [Netlify](https://delphi-js.netlify.com/)

## TApplication: core object

**[TApplication.js]**

### Methods

 * addComponentsToLibrary
 * animationSpeed
 * caption
 * createForm
 * createObject
 * destroyObject
 * icon 
 * mainFormName
 * getMainForm
 * getObject
 * getObjectsByClassName
 * setCSSVariable

## TComponent: base object for all components

**[TComponent.js]**

### Properties

 * className
 * contentProperties
 * name

### Methods

 * createContent
 * deleteContent
 * destroy
 * getProperty
 * setProperty
 
## TComponent &rarr; TControl: base object for visual components

**[TControl.js]**

### Properties  
 
 * bottom
 * checked
 * color
 * caption
 * enabled
 * icon
 * invalidated
 * fontSize
 * fontWeight
 * height
 * left
 * minHeight
 * minWidth
 * multiLine
 * right
 * textAlign
 * top
 * visible
 * width
 
### Methods

 * checked
 * click 
 * createNode
 * destroyNode
 * enabled
 * fadeIn
 * fadeOut
 * hide
 * invalidated 
 * onChange
 * onDestroy
 * onHide
 * onInput
 * onShow
 * setEventListener
 * show
 
## TComponent &rarr; TControl &rarr; TOverlay: 

**[Forms.js]**

### Methods

 * createNode
 * hide
 * show 


## TComponent &rarr; TControl &rarr; TForm - container for all visual components

**[Forms.js]**

### Properties

 * maximized
 * modal
 * modalResult
 * noMaximizedButton
 * noTitle
 * screenCenter
 * sizeable
 
 
### Methods

 * align
 * bringToFront
 * createNode
 * hide
 * maximize
 * restore
 * setActive
 * show
 * showModal


## TComponent &rarr; TControl &rarr; TPanel - панель, контейнер для визуальных компонентов, визуальное зонирование

## TComponent &rarr; TControl &rarr; TGroupBox - 

## TComponent &rarr; TControl &rarr; TButton - кнопка

## TComponent &rarr; TControl &rarr; TButton &rarr; TBitButton - кнопка c иконкой

## TComponent &rarr; TControl &rarr; TEdit - поле ввода. Построен на основе HTML-элемента INPUT TYPE="TEXT"

## TComponent &rarr; TControl &rarr; TStaticText - строка текста

## TComponent &rarr; TControl &rarr; TPicture - изображение
