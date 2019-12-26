# Changelog

Inspired by [keepchangelog](https://keepachangelog.com/)

## [Unreleased]

### To add

### To fix
 
 - style duplicates in inherited class
 - move multiline property from TControl to TStaticText
 - do we need TBitButton and TButton at the same time?
 - do we need **path** npm module import in *post-install.js*?
 
## [1.2.2] - 2019-12-26
 
### Fixed
 
 - invisible background image in Mozilla Firefox with *background-size: cover*
 
## [1.2.1] - 2019-12-26

### Fixed

 - set static getters for NAME and STYLE for components instead of static properties 
  
## [1.2.0] - 2019-12-20

### Added

 - Single component in single file
 - Export all standard components excepting service components (e.g. TOverlay)
 - Standard components add their style on import
 - Easy creating custom components
 
### Fixed

 - Uncouple TApplication and components
 - Remove unnecessary methods and properties from TApplication 
 
## [1.1.4] - 2019-12-18

### Added

 - *maximized* property for TForm
 - CSS variable for overlay background color
 - CSS variable for main background:
   - color
   - image
   - size
   - repeat
   - position
 
### Fixed

 - inconsistency with TApplication methods **mainFormName** and **getMainForm**. Now it's **setMainForm(newName)**

## [1.1.3] - 2019-12-13

### Added  

 - CHANGELOG.md for keep changelog.
 - DOCUMENTATION.md for documentation.
 - Function TApplication.setCSSVarible(name, value) to change default values of application's css variables.
 
### Changed

 - Some css variables' names due to consistent naming 