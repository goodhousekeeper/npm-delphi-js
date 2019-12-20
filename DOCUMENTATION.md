# delphi-js

### My tribute to Delphi 7. Let the Web be your new home

### Live demo at [Netlify](https://delphi-js.netlify.com/)

## TApplication: core object

### Methods

 * addComponentToLibrary
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

### Properties

 * ~~icon~~
 * toolTip

---

## TComponent &rarr; TControl &rarr; TButton &rarr; TBitButton

---

## TComponent &rarr; TControl &rarr; TPanel

### Properties

 * overflowX
 * overflowY
 
### Methods

 * ~~caption~~
 * low
 * raise 
 
--- 

## TComponent &rarr; TControl &rarr; TGroupBox 

---

## TComponent &rarr; TControl &rarr; TStaticText

### Properties

 * multiLine

---

## TComponent &rarr; TControl &rarr; TEdit

### Properties

 * placeholder
 * text

---
