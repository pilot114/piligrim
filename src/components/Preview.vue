<template>
    <div
        id="preview"
        v-if="coord"
        v-show="!isHidePreview"
        :style="{ left: (coord.pageX+20) + 'px', top: (coord.pageY+20) + 'px' }"
    >
        {{ currentComponent }}
        <br>
        <Render
            :component="currentComponent"
        />
    </div>
</template>

<script>
import Render from './Render'

export default {
    name: "Preview",
    components: { Render },
    props: {
        isHidePreview: {
            type: Boolean,
            default: false
        },
        // координаты отрисовки превью (завязаны на курсоре)
        coord: {
            type: Object,
        },
        // компоненты для отображения
        components: {
            type: Array,
        }
    },
    created() {
        this.currentComponent = this.components[0];
    },
    data() {
        return {
            currentComponent: null,
            currentComponentIndex: 0,
        }
    },
    methods: {
        prevPreview() {
            if (this.currentComponentIndex === 0) {
                this.currentComponentIndex = this.components.length - 1;
            } else {
                this.currentComponentIndex--;
            }
            this.currentComponent = this.components[this.currentComponentIndex];
        },
        nextPreview() {
            if (this.currentComponentIndex === (this.components.length - 1)) {
                this.currentComponentIndex = 0;
            } else {
                this.currentComponentIndex++;
            }
            this.currentComponent = this.components[this.currentComponentIndex];
        }
    }
}
</script>

<style scoped>
    #preview {
        position: fixed;
        width: 200px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.1);
        font-family: Calibri, sans-serif;
    }
</style>