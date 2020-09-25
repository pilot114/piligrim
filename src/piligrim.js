// TODO: последовательности клавиш (через пробел), запись последовательностей
import hotkeys from 'hotkeys-js';

/**
 * Обработка всех событий клавиатуры и мыши
 */
function handleInput(cbMove, cbPreview, cbWheel) {

    hotkeys('l', {keyup: true}, (event) => {
        if (event.type === 'keyup') {
            cbPreview();
        }
    });

    const mouseHandler = (event) => {
        if (event.shiftKey) { console.log('shiftKey'); }
        if (event.altKey) { console.log('altKey'); }
        if (event.ctrlKey) { console.log('ctrlKey'); }
        if (event.metaKey) { console.log('metaKey'); } // win key

        if (event.type === 'wheel') {
            let direction = event.deltaY > 0;
            cbWheel(direction);
        }

        if (event.type === 'mousemove') {
            cbMove({
                // window
                clientX: event.clientX,
                clientY: event.clientY,
                // document
                pageX: event.pageX,
                pageY: event.pageY,
            });
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
}

export default {
    handleInput
}