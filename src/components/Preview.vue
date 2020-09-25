<template>
    <div
        v-show="!isHidePreview"
        :style="{ left: (coord.pageX+20) + 'px', top: (coord.pageY+20) + 'px' }"
    >
        {{ currentComponent }}
    </div>
</template>

<script>
export default {
    name: "Preview",
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
            type: Object,
        }
    },
    created() {
        this.currentComponent = this.cs[0];
    },
    data() {
        return {
            currentComponent: null,
            currentComponentIndex: 0,
        }
    },
    computed: {
        cs() {
            return Object.values(this.components);
        },
    },
    methods: {
        prevPreview() {
            if (this.currentComponentIndex === 0) {
                this.currentComponentIndex = this.cs.length - 1;
            } else {
                this.currentComponentIndex--;
            }
            this.currentComponent = this.cs[this.currentComponentIndex];
        },
        nextPreview() {
            let arr = Object.values(this.components);
            if (this.currentComponentIndex === (this.cs.length - 1)) {
                this.currentComponentIndex = 0;
            } else {
                this.currentComponentIndex++;
            }
            this.currentComponent = this.cs[this.currentComponentIndex];
        }
    }
}

</script>

<style scoped>
    div {
        position: absolute;
        width: 200px;
        height: 100px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.2);
        font-family: Calibri, sans-serif;
    }
</style>