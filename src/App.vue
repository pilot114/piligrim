<template>
    <div id="app">
        <ElementExample/>

        <Preview
            :isHidePreview="isHidePreview"
            :coord="coords"
            :components="components"
            ref="preview"
        >
        </Preview>
    </div>
</template>

<script>

import Preview from './components/Preview.vue'
import Piligrim from './piligrim'
import ElementExample from "./components/ElementExample";

export default {
    name: 'App',
    components: {
        ElementExample,
        ...Piligrim.lib, Preview
    },
    computed: {
        components() {
            return Object.keys(Piligrim.lib);
        },
    },
    created() {
        Piligrim.handleInput(
            // move
            (coords) => {
                this.coords = coords;
            },
            // p, esc
            (disable) => {
                if (disable) {
                    this.isHidePreview = true;
                } else {
                    this.isHidePreview = !this.isHidePreview;
                }
            },
            // wheel
            (direction) => {
                if (direction) {
                    this.$refs.preview.prevPreview();
                } else {
                    this.$refs.preview.nextPreview();
                }
            },
            // click
            (coords) => {
                if (this.isHidePreview) return;

                // TODO: должна быть возможна вставка только в слоты компонентов
                let el = document.elementFromPoint(coords.clientX, coords.clientY);
                let parent = null;

                if (el.tagName !== "DIV") {
                    if (el.parentNode.tagName !== "DIV") return;
                    parent = el.parentNode;
                }

                let name = this.$refs.preview._data.currentComponent;

                let instance = Piligrim.createInstanse(name);
                if (parent) {
                    parent.insertBefore(instance.$el, el.nextSibling);
                } else {
                    el.appendChild(instance.$el);
                }
            },
            // hover
            (direction, el) => {
                el.style.backgroundColor = el.style.backColor;
                if (this.isHidePreview) return;

                if (direction) {
                    el.style.backColor = el.style.backgroundColor;
                    el.style.backgroundColor = 'honeydew';
                } else {
                    el.style.backgroundColor = el.style.backColor;
                }
            },
        );
    },
    data() {
        return {
            coords: null,
            isHidePreview: true,
        }
    },
}
</script>

<style>
#app {
    font-family: Calibri, sans-serif;
    margin: 60px 20px;
}
</style>
