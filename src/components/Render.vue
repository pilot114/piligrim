<script>

import Piligrim from './../piligrim'

export default {
    name: "Render",
    components: {
        ...Piligrim.lib,
    },
    render: function (createElement) {
        return createElement(
            this.component,
            this.$slots.default
        )
    },
    props: {
        component: {
            type: String,
        }
    }
}
</script>
