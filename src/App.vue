<template>
    <div id="app">
        <Input/>
        <Select/>
        <TextExample/>
        <Area/>
        <Area/>
        <TextExample/>
        <Area/>
        <Area/>

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
import Vue from 'vue'

export default {
    name: 'App',
    components: {
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
            // p
            () => {
                this.isHidePreview = !this.isHidePreview;
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
                Piligrim.lib[name]().then(module => {
                    let ComponentClass = Vue.extend(module.default);

                    // TODO: настройки компонента
                    let instance = new ComponentClass({
                        // пропсы
                        propsData: { type: 'primary' }
                    });
                    // слоты
                    instance.$slots.default = [ 'Click me!' ];
                    instance.$mount();

                    if (parent) {
                        console.log(parent);
                        parent.insertBefore(instance.$el, el.nextSibling);
                    } else {
                        el.appendChild(instance.$el);
                    }
                })
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
    text-align: center;
    margin-top: 60px;
}
</style>
