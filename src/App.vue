<template>
    <div id="app">
        <Input/>
        <Select/>
        <TextExample/>
        <Area/>
        <Area/>
    </div>
</template>

<script>
import Input from './components/test/Input.vue'
import Select from './components/test/Select.vue'
import TextExample from './components/test/TextExample.vue'
import Area from './components/test/Area.vue'
import piligrim from './piligrim'

export default {
    name: 'App',
    components: {
        Input, Select, TextExample, Area
    },
    created() {
        console.log(piligrim)
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
