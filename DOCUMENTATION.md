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
 * getMainForm
 * getObject
 * getObjectsByClassName
 * setCSSVariable
 * setMainForm

---

## TComponent
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
 
---
 
## TComponent &rarr; TControl
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
 
---
 
## TComponent &rarr; TControl &rarr; TForm
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
 * maximize
 * restore
 * setActive
 * showModal
 
--- 
 
## TComponent &rarr; TControl &rarr; TPicture
**[Forms.js]**

### Properties

 * backgroundClip
 * backgroundColor
 * backgroundPosition
 * backgroundRepeat
 * backgroundSize
 * image
 * imagePath

### Methods

 * setImage
 * setImageByPath
 
--- 

## TComponent &rarr; TControl &rarr; TButton
**[Buttons.js]**

### Properties

 * ~~icon~~
 * toolTip

---

## TComponent &rarr; TControl &rarr; TButton &rarr; TBitButton
**[Buttons.js]**

---

## TComponent &rarr; TControl &rarr; TPanel
**[Panels.js]**

### Properties

 * overflowX
 * overflowY
 
### Methods

 * ~~caption~~
 * low
 * raise 
 
--- 

## TComponent &rarr; TControl &rarr; TGroupBox 
**[Panels.js]**

---

## TComponent &rarr; TControl &rarr; TStaticText
**[Panels.js]**

### Properties

 * multiLine

---

## TComponent &rarr; TControl &rarr; TEdit
**[Panels.js]**

### Properties

 * placeholder
 * text

---
