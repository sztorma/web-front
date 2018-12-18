<template>
    <section>
        <visitor-table :visitors="visitors"></visitor-table>
    </section>
</template>

<script>
    import VisitorTable from './VisitorTable'
    import axios from 'axios'
    
export default {
    components:{
        VisitorTable
    },
    data: function () {
        return {
            visitorInForm: {
                id: null,
                name: ''
            },
            visitors: []
        }
    },
    methods:{
        getVisitors(){
            axios.get(global.config.api + '/visitor').then(serverResponse => {
                this.visitors = serverResponse.data
            })
        }
    },
    created() {
        this.getVisitors();
    }
}
</script>
