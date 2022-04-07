<template>
    <div class="page">
        <span>Page No.: {{page_num}}</span>
    </div>
</template>

<script>
export default {
    name: 'Page',
    props: ['page_num']
}
</script>
