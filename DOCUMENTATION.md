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


## TComponent -> TControl -> TOverlay - оверлей для отображения модальных окон

## TComponent -> TControl -> TForm - форма, контейнер для остальных визуальных компонентов

## TComponent -> TControl -> TPanel - панель, контейнер для визуальных компонентов, визуальное зонирование

## TComponent -> TControl -> TPanel -> TGroupBox - панель с полосами прокрутки

## TComponent -> TControl -> TButton - кнопка

## TComponent -> TControl -> TButton -> TBitButton - кнопка c иконкой

## TComponent -> TControl -> TEdit - поле ввода. Построен на основе HTML-элемента INPUT TYPE="TEXT"

## TComponent -> TControl -> TStaticText - строка текста

## TComponent -> TControl -> TPicture - изображение
