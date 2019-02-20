<template>
    <section>
        <v-container fluid>
        <visitor-form
            :visitor="visitorInForm"
            v-on:submit="onFormSave">
        </visitor-form>
        <visitor-table :visitors="visitors" v-on:edit="onEditClicked" v-on:delete="onDeleteClicked"></visitor-table>
        </v-container>
    </section>
</template>

<script>
    import VisitorTable from './VisitorTable'
    import VisitorForm from './VisitorForm'
    import axios from 'axios'
    
export default {
    components:{
        VisitorTable,
        VisitorForm
    },
    data: function () {
        return {
            visitorInForm: {
                id: null,
                name: '',
                birthDate: ''
            },
            visitors: []
        }
    },
    methods:{
            onFormSave(visitor) {
                const index = this.visitors.findIndex((a)=>a.id===visitor.id)
                if (index==-1) {
                    axios.post(global.config.api + '/visitor', {
                        name: visitor.name,
                        birthDate: visitor.birthDate,
                    }).then(response => {
                        this.response = response.data
                        this.getVisitors();
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
                } else {
                    axios.put(global.config.api + '/visitor/'+visitor.id, {
                        name: visitor.name,                        
                        birthDate: visitor.birthDate,
                    }).then(response => {
                        this.response = response.data
                        visitor.id = null;
                        this.getVisitors();
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
                }
            },               
        getVisitors(){
            axios.get(global.config.api + '/visitor').then(serverResponse => {
                this.visitors = serverResponse.data
            })
        },
        onEditClicked(visitor){
            this.visitorInForm={...visitor}
        },
        onDeleteClicked(visitor){
            axios.delete(global.config.api+'/visitor/'+visitor.id).then(serverResponse=>{
                this.getVisitors()
            })
        }
    },
    created() {
        this.getVisitors();
    }
}
</script>



