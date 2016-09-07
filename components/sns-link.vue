<template>
    <li>
        <a href="{{ link }}">
            <i v-if="fontClass" class="fa fa-{{fontClass}}" aria-hidden="true"></i>
            {{ name }}
        </a>
    </li>
</template>
<script>
    export default {
        props: {
            link: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            fontClass: {
                type: String,
                required: false
            }
        }
    }
</script>