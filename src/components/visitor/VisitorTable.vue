<template>
        
    <v-data-table
        :headers="headers"
        :items="visitors"
        class="elevation-1"
        v-on:
        >
        <template slot="items" slot-scope="props">
            
            <td class="text-xs-right">{{props.item.name }}</td>
            <td class="text-xs-right">{{props.item.birthDate }}</td>
            <td class="text-xs-right">{{props.item.age}}</td>
            <td class="text-xs-right">{{props.item.comment.commentText}}</td>
            <td class="text-xs-right">
                <a href="#" v-on:click.prevent="updateForm(props.item)">
                    <span class="glyphicon glyphicon-pencil"></span>
                </a>
            </td>
            <td class="text-xs-right">
                <a v-on:click.prevent.stop="deleteVisitor(props.item)">
                    <span class="glyphicon glyphicon-trash"></span>
                </a>
            </td>                        

        </template>
    </v-data-table>
          
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'VisitorTable',
        props: ['visitors'],

        data() {
            return {
                headers: [
                    
                    {text: 'Name (input)', align: 'right', value: 'name'},
                    {text: 'Date of Birth (input)', align: 'right', value: 'birthDate'},
                    {text: 'Age (calculated by backend)', align: 'right', value: 'age'},
                    {text: 'Comment (Famous person with same first name)', align: 'right', value: 'commentText'},
                    {text: 'Edit',align: 'right', value: 'edit'},
                    {text: 'Delete',align: 'right', value: 'delete'}
                ],
            }
        },
        methods:{
            deleteVisitor(visitor){
                this.$emit('delete',visitor);
            },
            updateForm(visitor){
                scroll(0,0)//jumping to the top of the page
                this.$emit('edit',visitor);
            }
        },

    
    }


</script>
