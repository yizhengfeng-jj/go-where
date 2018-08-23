<template>
    <span class='red'>{{name}} : {{age}} -- {{index}}</span>
</template>
<script>
import * as _ from 'lodash';
import $ from 'jquery';
console.log($)
console.log(666666);
    export default {
        name : 'List',
        props:['name','age'],
        data: function() {
            return {
                index: 4
            }
        }
    }
</script>
<style>
    .red {
        color:green;
    }
</style>