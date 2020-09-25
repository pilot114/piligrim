<template>
    <div id="app">
        <Input/>
        <Select/>
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
import Input from './components/test/Input.vue'
import Select from './components/test/Select.vue'
import TextExample from './components/test/TextExample.vue'
import Area from './components/test/Area.vue'
import Preview from './components/Preview.vue'
import Piligrim from './piligrim'

export default {
    name: 'App',
    components: {
        Input, Select, TextExample, Area, Preview
    },
    created() {
        Piligrim.handleInput(
            (coords) => {
                this.coords = coords;
            },
            () => {
                this.isHidePreview = !this.isHidePreview;
            },
            (direction) => {
                if (direction) {
                    this.$refs.preview.prevPreview();
                } else {
                    this.$refs.preview.nextPreview();
                }
            }
        );
    },
    data() {
        return {
            coords: {pageX: 100, pageY: 100},
            isHidePreview: true,
            components: { Input, Select, TextExample, Area }
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
