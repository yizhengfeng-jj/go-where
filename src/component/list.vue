<template>
  <div> {{index}}</div>
</template>
<script>
import * as _ from 'lodash';
import $ from 'jquery';
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
