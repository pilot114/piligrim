// TODO: последовательности клавиш (через пробел), запись последовательностей
import hotkeys from 'hotkeys-js';

let coord = {};

// TODO: вынести в компонент Preview
let preview = null;
let isHidePreview = true;
let elements = ['Area', 'Input', 'Select', 'TextExample'];
let curElementIndex = 0;

function prevPreview() {
    if (curElementIndex === 0) {
        curElementIndex = elements.length - 1;
    } else {
        curElementIndex--;
    }
    document.getElementById('preview').innerText = elements[curElementIndex];
}
function nextPreview() {
    if (curElementIndex === (elements.length - 1)) {
        curElementIndex = 0;
    } else {
        curElementIndex++;
    }
    document.getElementById('preview').innerText = elements[curElementIndex];
}
function changeViewPreview() {
    isHidePreview = !isHidePreview;
    document.getElementById('preview').style.display = isHidePreview ? 'none' : 'block';
}
function movePreview() {
    preview = document.getElementById('preview');
    if (!preview) {
        preview = document.createElement('div');
        preview.id = 'preview';
        preview.style.position = 'absolute';
        preview.style.width = '200px';
        preview.style.height = '100px';
        preview.style.padding = '10px';
        preview.style.background = 'rgba(0, 0, 0, 0.2)';
        preview.style.display = isHidePreview ? 'none' : 'block';
        preview.style['font-family'] = 'Calibri, sans-serif';
        preview.innerText = elements[curElementIndex];
        document.body.appendChild(preview);
    }
    preview.style.left = (coord.pageX+20) + 'px';
    preview.style.top = (coord.pageY+20) + 'px';
}


hotkeys('p', {keyup: true}, (event) => {
    if (event.type === 'keyup') {
        changeViewPreview();
    }
});

// TODO: hotkeys-like style
const mouseHandler = (event) => {
    if (event.shiftKey) { console.log('shiftKey'); }
    if (event.altKey) { console.log('altKey'); }
    if (event.ctrlKey) { console.log('ctrlKey'); }
    if (event.metaKey) { console.log('metaKey'); } // win key

    coord = {
        // window
        clientX: event.clientX,
        clientY: event.clientY,
        // document
        pageX: event.pageX,
        pageY: event.pageY,
    }

    if (event.type === 'wheel') {
        let direction = event.deltaY > 0;
        direction ? prevPreview() : nextPreview();
    }

    if (event.type === 'mousemove') {
        movePreview();
    }
}
window.onclick = mouseHandler;
window.ondblclick = mouseHandler;
window.onmousedown = mouseHandler;
window.onmouseup = mouseHandler;
window.onmouseover = mouseHandler;
window.onmouseout = mouseHandler;
window.onmousemove = mouseHandler;
window.onwheel = mouseHandler;

export default {
}