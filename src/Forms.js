import TApplication from './TApplication.js'
import TControl from './TControl.js'
import Utils from './Utils.js'
import * as Constants from './Constants.js'

const MODULE_STYLES = `
/* Styles for TOverlay, TForm, TMessageDlg */

.TOverlay {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
}

.TApplication .TForm {
    box-sizing: border-box;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    min-height: 32px;
    min-width: 100px;
    color: var(--form-color);
    text-shadow: 1px 1px 0 var(--form-shadow-color);
    background-color: var(--form-back-layer);
}

.TApplication .TForm .Borders {
    filter: grayscale(50%);
}

.TApplication .TForm.Active .Borders {
    filter: grayscale(0%);
}

.TApplication .TForm .BorderTop {
    top: 0;
    right: 4px;
    left: 4px;
    height: 30px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAMAAADaS4T1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0M0NBNEU0Q0FFMDkxMUU5OTVBQUI3OEEzMTQ3MDQyMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0M0NBNEU0QkFFMDkxMUU5OTVBQUI3OEEzMTQ3MDQyMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUwNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUwNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lgl1FgAAADxQTFRFAGD/AGX1AFntAETlAGz/AJb/AFr5AEHUAFztAFDqAFfyAFfrAJH/AFf3AFTvAGX/AGD9AGr/AFLmAFTqAXFw1gAAADBJREFUeNocx4cJADAMwDB37/3/rw1BYDCWQMdjyDSueqJop6gMIhtYHLXkHOkLMAAoZgFrf25PLgAAAABJRU5ErkJggg==');
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
}

.TApplication .TForm .BorderRight {
    top: 0;
    bottom: 4px;
    right: 0;
    width: 4px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAMAAADO4v//AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MTQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4OTYyMjM5NUFFMTIxMUU5QkYwQUZGRTUyQUI1QzUzMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OTYyMjM5NEFFMTIxMUU5QkYwQUZGRTUyQUI1QzUzMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUxNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wwXRuQAAAAxQTFRFABelADvhAEb2AAuQ52Br3gAAAA9JREFUeNpiYGJkYAYIMAAAEwAHOqAc6gAAAABJRU5ErkJggg==');
    background-repeat-x: no-repeat;
    background-repeat-y: repeat;
}

.TApplication .TForm .BorderBottom {
    bottom: 0;
    right: 0;
    left: 0;
    height: 4px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAMAAAB4BqUIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MjQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NUQyOURGNUFFMTIxMUU5ODZFRThDNjI4NjQ4MTdCNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NUQyOURGNEFFMTIxMUU5ODZFRThDNjI4NjQ4MTdCNyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUyNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5YzMsgAAAAxQTFRFADviABimAEb2AAuQ4dVEVQAAABJJREFUeNpiYGJgYGBkYAYIMAAAHAAHyPMm+AAAAABJRU5ErkJggg==');
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
}

.TApplication .TForm .BorderLeft {
    top: 0;
    bottom: 4px;
    left: 0;
    width: 4px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAMAAADO4v//AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MzQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NjEwN0VGNUFFMTIxMUU5OTdDQ0I0MjI2NjVCREY1NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjEwN0VGNEFFMTIxMUU5OTdDQ0I0MjI2NjVCREY1NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUzNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUzNDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hEs6ggAAAAxQTFRFAFTiABLUAGryAC3eESdBgAAAAA9JREFUeNpiYGRmYgAIMAAAFgAHOLLlfgAAAABJRU5ErkJggg==');
    background-repeat-x: no-repeat;
    background-repeat-y: repeat;
}

.TApplication .TForm .TForm__Title {
    top: 3px;
    left: 4px;
    right: 4px;
    height: 24px;
    cursor: pointer;
}
.TApplication .TForm .TForm__Title .TForm__Icon, 
.TApplication .TForm .TForm__Title .TForm__Caption,
.TApplication .TForm .TForm__Title .Buttons
 {
    height: 24px;
    top: 0;
}

.TApplication .TForm .TForm__Title .TForm__Icon {
    width: 24px;
    left: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 16px 16px;
  }

.TApplication .TForm .TForm__Title .TForm__Caption {
    left: 24px;
    right: 48px;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    font-size: 15px;
    line-height: 24px;
    color: var(--form-caption-color);
    text-shadow: 1px 1px 0 var(--form-caption-shadow-color);
}

.TApplication .TForm .TForm__Title .Buttons {
    width: 24px;
    filter: grayscale(25%);
    background-repeat: no-repeat;
    background-position: center center;
}

.TApplication .TForm .TForm__Title .Buttons:hover
{
  filter: grayscale(0%);
}

.TApplication .TForm .TForm__Title .Buttons:active  
{
  filter: grayscale(75%);
}

.TApplication .TForm .TForm__Title .CloseButton {
    right: 0;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAIAAAAmdTLBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NjQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTIwQzEwMkFFMjMxMUU5OUNDQkUxOTc4NzU5N0VGOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTIwQzEwMUFFMjMxMUU5OUNDQkUxOTc4NzU5N0VGOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU2NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU2NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dQfAqwAAAw1JREFUeNqUVM9LVFEU/u57b0YlUMpQGFu4qFZtqkUURaJBizQaDIpIWgRRFLRoIdEfkIsgTMgICSsJixb9kiiignYRkeDKICo1KNSZcebN+3Hvfbdz3nvjuPVyGe6c977zfec79zwL+fne4X9zi9Kscx0fmsOeaae3K/syX8b4EIqLqLrwPSgJGcCyoELQ0op/Ay8+a4RV47mlltzE9Qlgk6BMuDmIthzsDCpFlIsIfYQhooiRDDackZCUNAzgu6iUSsXCr2xL6/1vFmddWUZDIxqysB04GTjxL/FbNkesZNv1SCZrZbLun58dmzMO490VlEsM86sIaAfMT2xSxswKMmQVFNGSi1KKclk2Y2N+ekDKVwpwS+jux7XbcCuokM5yGi8vobSIsQ84fYU5tBKkxcnW8KFEtQKvzMy79nPkxiQnJSpiVj6X/egLx3vyLMFoUpOshD82LAhZ8NWB9MnoFL8aaVb7ZDoNHu3kiImAiJyv4bk9Pu/E58v9afDeRxiFya/p374t0CF0QEECC6ziqSXUMxkbQ22zDC71ppiHn9NDvhNWBKEBBSNFRFvX8ERL14bwZDVpiwxI2/lDWF0ntsVgsxaPSK36F7JVlC+pjfgpfOddHf/4O0c4hWJ8FAgdcIo1/sUmUyjhH5lKkef2pofxmTQF6LVQKN/Wdf0Bp0guBpUw/DzFXDjI1+bsTj5vaMbTvzQA3DwVWNo3KqrhaTao88mFu/WiBu5mLdykCGe2p8FnLpFTj4w0LLOun65t6PHh0+tYdlc6PGQS+6JwKsfxtw8QOwgqlMtHPH/7GrGxDU3NaGzi8RBIbkislnwlXR40FejR8FL5iOlmStj9w/AMSBnaniuELaj5PHCCOQWSVsWCA77FXCCSTYVKtg/OfCFqau3E8gKksbM+fwUIaiIhjDBaGOVQFu6WMkpbii8kGV0IYTraWX/PXe/VgdnZi8eKC78bMpYRQsdCbIsVUAqHckXGNoaaQzU5BgF1INe+Y+zNyfdbgQF5eNRd78dvbkkfGamgr/pfgAEA4u1YO0cOA2kAAAAASUVORK5CYII=');

  }

.TApplication .TForm .TForm__Title .MaximizeButton {
    right: 24px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAIAAAAmdTLBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ODQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzI4MDlEMkFFOUQxMUU5QjU0MEFDRDJGQzczNTVDOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzI4MDlEMUFFOUQxMUU5QjU0MEFDRDJGQzczNTVDOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3CUSYQAAAoFJREFUeNqUVLtuE0EUPXdmbSdQGCGgouAbkpIKaICKhgKJBiGoaKEAIVFQIiEKEEJARY34kYiKHyA8Ilt2YuPH7rwud+54k9AEuFrNzuzOuefcx4zBjcHlV+PtUeD/tCsvR7j+s7p6np5fO/HoY/w+DeOaJw6zwIMAY5A8siUdHa/mDmg8jk0+3+8TJxJPt9+Hc6eoYzBe8HCGpUftOSa4RD6BGcvIIWIased42ADziMkE+Lr9YtOI050Zr1foddCx1K1kRM+SNdQhFqeVQc9k7x3CuiEIwuqzMz970laCHy2wu0Rl8avheYOlE34sA+pAdWCRMA0cZH9AikDkHIV4MZk74+cBwxkLz7TGhzsVjjS61yAxiLKegl+EjBR3jcPfLQmMMl4t44eea0+W0IR/wHOG56yi5RebOVREMeUibTwNteNRwCAwJOA8Uo5ZavG6Cy5hoEwyPqfNc9fC6CepaDBwsijOSXMesNJMBWwO8XtMHY5XIiGvoj5BdsvS7tPpVzFDh5dVmUmFugasDEwQ/lWcxUtqVUArL+Gw7tvn/+GxZrCmbDHnmBYlGKPgpF5iG06pwgE+sLT6rkVf/y0ZDXNCK9wqgNuMFWmCj3zAL6diZNHRHfNIU5nQQZJXcxxOj0bR8uupqnhH+QdPjmxBEVLwif/EW/35wGl7tfykL1Yhss0TSlPkU7CPdx6NtmTUaItUUo9lzqq20MpF4CJcQMjXQ/VtN6E/wZ50L5B7KGVyEWmoPTF2VS0hlMJmFwHLCc7kFFc3P/mtx/3Nh1/kGkCnByqNqjAqRdJWk4aLUe8iC+9x2m0927j4Tjjv8oW39f9eftvjeOnNArf8bwEGACPwtCMtkV4mAAAAAElFTkSuQmCC');
}

.TApplication .TForm .TForm__Title .RestoreButton {
    right: 24px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAIAAAAmdTLBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1OTQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QUFFNkNCMkFFOUQxMUU5OTg1NURGN0U4OEQ3NTBFQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QUFFNkNCMUFFOUQxMUU5OTg1NURGN0U4OEQ3NTBFQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jwAzaQAAAqVJREFUeNqUVMtqFUEQPdUzc28ei4CoKxf6AwrmB0Qh/oTgQtCNWUaIJisXbrIRQUTQ/IDgF7h0GVy5FhLUkJDHvbm5M9Ovsqp7rokkLlIMQ890nzqnT1W3wSLfWW83DyJfMO6t13jclgu3Rm/uz658Cj+H2G94YDHyvONhDKKDRkxvy93YAq3DzODb0twzH0gyPfror1+mymB/zLsj1A6N4xBhI7kIZtSBfcAw4NDybgscBwwGwObW63kjSbdHPF2iX6EqqFfKG/2CCkMVsSQtDfpGs1eEaUMQRJGe7eNrl4pS8HtjHNQoCxy1fNyitsKP2qPx1HgWCUPPXtZ7xAAE1l1IFqPcij/22B2x8AwbHDUYW32+Lpc4E7TYQnyIDCLVk/Fjr0hJ11pYR9axdTg/AuU8ik+h+F3HjaOC0HrYwDagiXzjhfvtWf7As8LEyLc9hKRcsOIqJvwSI4uSKET+snSe7Kf25IM7BXmgq9U2x70Chv8juxIVaSAihVnB5hS/w9BithQJ+nXzpZMC7wSMolrFr3oKyyEopozUvXT4oBXqGZnSCVngTZKnKymv4rWqExKSi5wTTfh/OUwZTBWc80aicd6MyS4TLftkHnXtHOkU3rO0+kGBucRWM1rmiIlPJ7JZabM0wQc+4ZdTsVeIOv31Y7U6U4CcKG+bVYjveiHzp1NV8jbRzIptQJ1HNEEznaofdfjI/+ILnayz1cQdPvvHSbksc5TaKZ+Cv3hp1za1ZEgVzlIpZcxjTmozrVwE0qHWw2uTl1uHjLkBDqV7Ae2hqOQi0kw0U9FVSwilsJrCox7gqlpcPvzsNlbn5p9/l2sAVR+kTZOKX6gi3XlqNWm4EFLxCjiHK3Zj7fbCe+F8Eu5+qC96+W3tx4V3YzywfwQYAFxpz1+tP+FyAAAAAElFTkSuQmCC');
    display: none;
}

.TApplication .TForm.Maximized .TForm__Title .RestoreButton {
      display: block;
}

  
.TApplication .TForm.Maximized .TForm__Title .MaximizeButton {
    display: none;
}

.TApplication .TForm .TForm__ContentContainer {
    top: 30px;
    right: 4px;
    bottom: 4px;
    left: 4px;
    overflow: hidden;
    box-sizing: inherit;
}
 
.TApplication .TForm.noTitle .TForm__Title {
    display: none;
}
.TApplication .TForm.noTitle .TForm__ContentContainer {
    top: 4px;
}

.TApplication .TForm.noTitle .BorderTop {
    height: 4px;
}


.TApplication .TForm.noMaximizeButton .TForm__Title .MaximizeButton {
    display: none;
}

.TApplication .TForm.noMaximizeButton .TForm__Title .TForm__Caption {
    right: 24px;
}

.TApplication .TForm .SizeHandle {
    width: 12px;
    height: 12px;
    right: 0;
    bottom: 0;
    cursor: se-resize;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NzQwRjhGNTA4QUVFOTExQUM5QzhENDMwQzY4REU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNEFBRDg3REFFMjMxMUU5OEY5RTgyOEI4NDE5NEI0QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNEFBRDg3Q0FFMjMxMUU5OEY5RTgyOEI4NDE5NEI0QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU3NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU3NDBGOEY1MDhBRUU5MTFBQzlDOEQ0MzBDNjhERTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+j9zGmAAAAGxQTFRF4d3K7ejS7ejU5eDJ5+DL6uXQ6ujV39zE4dzJ6eXR39vD39zH5eHL5eHJ3Na+39rF4dzL3NbA4drG7enW4d3I7ebQ6+TO7urT29fA7OfT6uXPu7Wiu7ai7OjR7enU7enT7urWu7Wk7urV////1SXZ2AAAAGxJREFUeNpEilkOwkAMxd50o2VfprQQJmnI/e/Iq4TAkj8sGQt5E5dpwi9e8Q8Nxq1TrSqzlEpBp2YuqwxVNf6JFjzIGFHoiGFo2ye5E7g0jcv+4FLX4Lv5usUcMa9eIo4gOee+P++up48AAwCnMQ4FktRCuQAAAABJRU5ErkJggg==') no-repeat center center;
  }

  .TApplication .TPicture {
    background: transparent no-repeat center center;
    background-clip: border-box;
    background-size: auto;
  }
`;

class TForm extends TControl {
    constructor(properties) {
        super(properties);
        this.setProperty('modal', false);
        this.setProperty('modalResult', false);
        this.setProperty('maximized', false);
        if (this.getProperty('icon') === undefined) {
            this.setProperty('icon', TApplication.icon);
        }
    }

    createNode() {
        super.createNode();
        const style = this.style;
        const container = this.objectContainer;
        /* ------------------------------------------------------------------------------ */
        container.classList.add('TForm');
        container.onclick = () => this.bringToFront().setActive();
        /* ------------------------------------------------------------------------------ */
        style.height = this.getProperty('height') ? (this.getProperty('height') + 'px') : '';
        style.width = this.getProperty('width') ? (this.getProperty('width') + 'px') : '';
        /* ------------------------------------------------------------------------------ */
        const borderTop = document.createElement('div');
        const borderRight = document.createElement('div');
        const borderBottom = document.createElement('div');
        const borderLeft = document.createElement('div');
        borderTop.className = 'Borders BorderTop';
        borderRight.className = 'Borders BorderRight';
        borderBottom.className = 'Borders BorderBottom';
        borderLeft.className = 'Borders BorderLeft';
        container.appendChild(borderTop);
        container.appendChild(borderRight);
        container.appendChild(borderBottom);
        container.appendChild(borderLeft);

        /* ------------------------------------------------------------------------------ */
        const endTransition = () => {
            document.onmousemove = null;
            container.onmouseup = null;
            style.opacity = '1.0';
        };

        /* ------------------------------------------------------------------------------ */
        if (this.getProperty('noTitle')) {
            style.height = (this.getProperty('height') + 'px');
            container.classList.toggle('noTitle', true);
        } else {
            const title = document.createElement('div');
            const caption = document.getElementById(`${container.id}.Caption`);
            const icon = document.getElementById(`${container.id}.Icon`);
            let maximizeButton = document.createElement('div');
            let restoreButton = document.createElement('div');
            const closeButton = document.createElement('div');

            container.appendChild(title);
            title.className = `${this.getProperty('className')}__Title`;

            title.appendChild(icon);

            title.appendChild(caption);

            caption.onmousedown = (e) => {
                const moveAt = (e) => {
                    style.left = e.pageX - deltaX + 'px';
                    style.top = e.pageY - deltaY + 'px';
                    if (style.opacity !== '0.5') {
                        style.opacity = '0.5'
                    }
                };
                const box = container.getBoundingClientRect();
                const deltaX = e.pageX - box.left;
                const deltaY = e.pageY - box.top;

                style.width = (box.width) + 'px';
                style.height = (box.height) + 'px';

                container.classList.remove('Maximized');

                this.bringToFront();

                document.onmousemove = (e) => moveAt(e);
                container.onmouseup = () => endTransition();
            };

            caption.ondblclick = () => {
                if (this.getProperty('maximized')) {
                    this.restore();
                } else {
                    this.maximize();
                }
            };

            if (this.getProperty('noMaximizeButton')) {
                maximizeButton = undefined;
                restoreButton = undefined;
            } else {
                title.appendChild(maximizeButton);
                maximizeButton.className = 'Buttons MaximizeButton';
                maximizeButton.id = container.id + '.MaximizeButton';
                maximizeButton.onclick = () => this.maximize();

                title.appendChild(restoreButton);
                restoreButton.className = 'Buttons RestoreButton';
                restoreButton.id = container.id + '.RestoreButton';
                restoreButton.onclick = () => this.restore();
            }

            title.appendChild(closeButton);
            closeButton.className = 'Buttons CloseButton';
            closeButton.id = container.id + '.CloseButton';
            closeButton.onclick = () => this.hide();
        }
        /* ------------------------------------------------------------------------------ */

        if (this.getProperty('sizeable')) {
            const sizeHandle = document.createElement('div');
            sizeHandle.id = `${container.id}.SizeHandle`;
            sizeHandle.className = 'SizeHandle';

            this.contentContainer.appendChild(sizeHandle);

            sizeHandle.onmousedown = (e) => {
                const sizeAt = (e) => {
                    style.width = e.pageX - deltaX + 'px';
                    style.height = e.pageY - deltaY + 'px';
                    if (style.opacity !== '0.5') {
                        style.opacity = '0.5';
                    }
                };
                const box = container.getBoundingClientRect();
                const deltaX = e.pageX - box.width;
                const deltaY = e.pageY - box.height;

                container.classList.remove('Maximized');

                this.bringToFront();

                document.onmousemove = (e) => sizeAt(e);
                container.onmouseup = () => endTransition()
            }
        }

        /* ------------------------------------------------------------------------------ */
    }

    align() {
        const container = this.objectContainer;
        const style = this.style;
        let containerWidth = parseInt(style.width, 10);
        let containerHeight = parseInt(style.height, 10);

        if (!this.getProperty('screenCenter')) {
            return this;
        }
        if (container.offsetWidth > 0) {
            containerWidth = container.offsetWidth;
        }
        if (container.offsetHeight > 0) {
            containerHeight = container.offsetHeight;
        }
        style.left = (window.innerWidth - containerWidth) / 2 + 'px';
        style.top = (window.innerHeight - containerHeight) / 2 + 'px';
        return this;
    }

    show() {
        if (TApplication.modalStack.length > 0) {
            this.showModal();
        }
        if (!this.getProperty('visible')) {
            this.style.opacity = '0';
            super.show();
            this.align().bringToFront().fadeIn();
        } else {
            this.style.visibility = 'unset';
            this.bringToFront();
        }
        setTimeout(() => {
            this.setActive()
        }, 0);
        return this;
    }

    showModal() {
        const modalStack = TApplication.modalStack;

        TApplication.overlay.show();
        this.style.opacity = '0';
        super.show();
        this.style.zIndex = Constants.OVERLAY_Z_INDEX + 1;
        this.align().fadeIn();
        if (modalStack.length > 0) {
            modalStack[modalStack.length - 1].style.zIndex = Constants.OVERLAY_Z_INDEX - 1;
        }
        modalStack.push(this);
        this.setProperty('modal', true);
        this.setProperty('modalResult');
        setTimeout(() => {
            this.setActive()
        }, 0);
    }

    hide() {
        const modalStack = TApplication.modalStack;

        const afterFade = () => {
            super.hide();
            if (modalStack.length > 0) {
                const form = modalStack[modalStack.length - 1];
                form.style.zIndex = Constants.OVERLAY_Z_INDEX + 1;
                form.setActive();
            } else {
                TApplication.getMainForm().setActive();
            }
        };

        const afterHideQuery = () => {
            if (this.getProperty('modal')) {
                this.setProperty('modal', false);
                modalStack.pop();
                if (modalStack.length === 0) {
                    TApplication.overlay.hide();
                }
                if (!this.getProperty('modalResult')) {
                    this.setProperty('modalResult', Constants.MODAL_RESULT_CLOSE);
                }
            }
            this.fadeOut(afterFade);
        };

        if (this.hideQuery) {
            this.hideQuery(afterHideQuery)
        } else {
            afterHideQuery()
        }
    }

    setActive() {
        TApplication.getObjectsByClassName('TForm').forEach(function (form) {
            form.objectContainer.classList.remove('Active');
        });
        this.objectContainer.classList.add('Active');
        return this;
    }

    bringToFront() {
        if (this.getProperty('modal')) {
            return this;
        }
        if (this === TApplication.getMainForm()) {
            return this;
        }

        TApplication.getObjectsByClassName('TForm').forEach(function (form) {
            form.style.zIndex = '1';
        });
        this.style.zIndex = Constants.BRING_TO_FRONT_Z_INDEX;
        return this;
    }

    maximize() {
        if (this.getProperty('noMaximizeButton')) {
            return this;
        }
        const container = this.objectContainer;
        const style = this.style;
        const box = container.getBoundingClientRect();
        const widthDelta = window.innerWidth - box.width;
        const heightDelta = window.innerHeight - box.height;
        const animateOptions = {
            duration: TApplication.animationSpeed,
            timing: Constants.ANIMATION_FUNCTION_ARC
        };
        /* save previous position */
        this.setProperty('positionBeforeMaximize', {
            top: box.top,
            left: box.left,
            width: box.width,
            height: box.height
        });

        const onEndMaximize = () => {
            this.objectContainer.classList.add('Maximized');
            this.setProperty('maximized', true);
        };

        Utils.animate(Object.assign({
                draw: function (progress) {
                    style.top = (String(box.top - progress * box.top)) + 'px';
                },
                callback: onEndMaximize
            },
            animateOptions
        ));
        Utils.animate(Object.assign({
                draw: function (progress) {
                    style.left = (String(box.left - progress * box.left)) + 'px';
                }
            },
            animateOptions
        ));
        Utils.animate(Object.assign({
                draw: function (progress) {
                    style.width = (String(box.width + progress * widthDelta)) + 'px'
                }
            },
            animateOptions
        ));
        Utils.animate(Object.assign({
                draw: function (progress) {
                    style.height = (String(box.height + progress * heightDelta)) + 'px'
                }
            },
            animateOptions
        ));
        return this
    }

    restore() {
        if (this.getProperty('noMaximizeButton')) {
            return this
        }
        const style = this.style;
        const box = this.getProperty('positionBeforeMaximize');
        const animateOptions = {
            duration: TApplication.animationSpeed,
            timing: Constants.ANIMATION_FUNCTION_ARC
        };
        if (!box) {
            return this
        }
        const widthDelta = window.innerWidth - box.width;
        const heightDelta = window.innerHeight - box.height;

        const onEndRestore = () => {
            this.objectContainer.classList.remove('Maximized');
            this.setProperty('maximized', false)
        };

        Utils.animate(Object.assign({
                draw: function (progress) {
                    style.top = (String(progress * box.top)) + 'px';
                },
                callback: onEndRestore
            },
            animateOptions
        ));
        Utils.animate(Object.assign({
                draw: function (progress) {
                    style.left = (String(progress * box.left)) + 'px';
                }
            },
            animateOptions
        ));
        Utils.animate(Object.assign({
                draw: function (progress) {
                    style.width = (String(window.innerWidth - progress * widthDelta)) + 'px';
                }
            },
            animateOptions
        ));
        Utils.animate(Object.assign({
                draw: function (progress) {
                    style.height = (String(window.innerHeight - progress * heightDelta)) + 'px';
                }
            },
            animateOptions
        ));

        return this;
    }
}

class TOverlay extends TControl {
    createNode() {
        super.createNode();
        this.objectContainer.classList.add('TOverlay');
        this.style.zIndex = Constants.OVERLAY_Z_INDEX;
    }

    show() {
        this.style.opacity = '0';
        super.show();
        this.fadeIn();
    }

    hide() {
        this.fadeOut(() => super.hide());
    }
}

class TPicture extends TControl {
    createNode() {
        super.createNode();
        const container = this.objectContainer;
        container.classList.add('TPicture');
        Object.assign(container.style, {
            backgroundColor: this.getProperty('backgroundColor') !== undefined ? this.getProperty('backgroundColor') : '',
            backgroundRepeat: this.getProperty('backgroundRepeat') !== undefined ? this.getProperty('backgroundRepeat') : '',
            backgroundPosition: this.getProperty('backgroundPosition') !== undefined ? this.getProperty('backgroundPosition') : '',
            backgroundClip: this.getProperty('backgroundClip') !== undefined ? this.getProperty('backgroundClip') : '',
            backgroundSize: this.getProperty('backgroundSize') !== undefined ? this.getProperty('backgroundSize') : ''
        });
        if (this.getProperty('image')) {
            this.setImage(this.getProperty('image'));
        }
        if (this.getProperty('imagePath')) {
            this.setImageByPath(this.getProperty('imagePath'));
        }
    }

    setImage(image) {
        this.style.backgroundImage = `url(${image})`;
    }

    setImageByPath(imagePath) {
        this.setImage(Utils.getAbsolutePathToResource(imagePath));
    }
}

export {MODULE_STYLES, TForm, TOverlay, TPicture}
