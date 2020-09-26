import hotkeys from 'hotkeys-js';

function handleSequense(sequenses) {
    let seq = [];
    let skipClear = false;

    hotkeys('*', (event) => {
        if (event.key) {
            seq.push(event.key);
        }
        skipClear = true;
    });
    // сброс последовательности по таймауту
    setInterval(() => {
        if (skipClear) {
            skipClear = false;
            return;
        }
        seq = [];
    }, 500);
    setInterval(() => {
        let key = seq.join(' ');
        if (sequenses[key]) {
            sequenses[key]();
            seq = [];
        }
    }, 100);
}

/**
 * Обработка всех событий клавиатуры и мыши
 */
function handleInput(cbMove, cbPreview, cbWheel, cbClick, cbHover) {
    handleSequense({
        'i d d q d': () => {
            console.log('oh my god');
        }
    });

    hotkeys('l,esc', {keyup: true}, (event) => {
        if (event.type === 'keyup') {
            cbPreview();
        }
    });

    const mouseHandler = (event) => {
        // if (event.shiftKey) { console.log('shiftKey'); }
        // if (event.altKey) { console.log('altKey'); }
        // if (event.ctrlKey) { console.log('ctrlKey'); }
        // if (event.metaKey) { console.log('metaKey'); } // win key

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

        if (event.type === 'click') {
            cbClick({
                // window
                clientX: event.clientX,
                clientY: event.clientY,
                // document
                pageX: event.pageX,
                pageY: event.pageY,
            });
        }

        if (event.type === 'mouseover') {
            cbHover(true, event.target);
        }
        if (event.type === 'mouseout') {
            cbHover(false, event.target);
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

/**
 * Регистрация библиотеки компонентов
 */
import * as test from './components/test';
import * as form from './components/test/form';
let lib = {...test, ...form}

export default {
    handleInput,
    lib
}