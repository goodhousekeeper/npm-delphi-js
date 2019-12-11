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

 * name
 * className
 * contentProperties

### Methods

 * createContent
 * deleteContent
 * destroy
 * getProperty
 * setProperty
 
## TComponent &rarr; TControl: base object for visual components

**[TControl.js]**

### Settings  
 
 * bottom
 * color
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
 * width
 
### Properties 
 
### Methods

 * createNode
 




## TComponent -> TControl - визуальный компонент

## TComponent -> TControl -> TOverlay - оверлей для отображения модальных окон

## TComponent -> TControl -> TForm - форма, контейнер для остальных визуальных компонентов

## TComponent -> TControl -> TPanel - панель, контейнер для визуальных компонентов, визуальное зонирование

## TComponent -> TControl -> TPanel -> TGroupBox - панель с полосами прокрутки

## TComponent -> TControl -> TButton - кнопка

## TComponent -> TControl -> TButton -> TBitButton - кнопка c иконкой

## TComponent -> TControl -> TEdit - поле ввода. Построен на основе HTML-элемента INPUT TYPE="TEXT"

## TComponent -> TControl -> TStaticText - строка текста

## TComponent -> TControl -> TPicture - изображение
