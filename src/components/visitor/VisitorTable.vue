<template>
    <div>
        <div>
        <h1>adatbázis</h1>
        </div>
        <div>
        </div>
        <div id="app">
            <v-app id="inspire">
                <v-data-table
                    :headers="headers"
                    :items="visitors"
                    class="elevation-1"
                    v-on:
                    >
                    <template slot="items" slot-scope="props">
                        <td class="text-xs-right">{{ props.item.id }}</td>
                        <td class="text-xs-right">{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.birthDate }}</td>
                        <td class="text-xs-right">calculated age</td>
                        <td class="text-xs-right">{{ props.item.comment.commentText}}</td>

                    </template>
                </v-data-table>
            </v-app>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'VisitorTable',
        props: ['visitors'],

        data() {
            return {
                headers: [
                    {text: 'ID', align: 'right', sortable: false, value: 'id'},
                    {text: 'Név', align: 'right', value: 'name'},
                    {text: 'Születési dátum', align: 'right', value: 'birthDate'},
                    {text: 'életkor', align: 'right', value: 'age'},
                    {text: 'komment', align: 'right', value: 'commentText'},

                ],
            }
        },
        methods:{

        },

    
    }


</script>