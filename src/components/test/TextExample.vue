<template>
    <p>
        Is there a reason? Richard Feynman says no. (Well the technical justification is easy to see if you have
        written any tree-structure programs. The child must inform the parent anyway otherwise the tree structure
        may be broken. Since it must do it internally anyway, if it provided you a one line function,
        it's just a convenient function for you that you may as well define yourself.)
    </p>
</template>

<script>
export default {
    name: "TextExample"
}
</script>

<style scoped>
    p {
        padding: 5px;
    }
</style>