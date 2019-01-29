<template>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                    v-model="visitor.name"
                    :rules="nameRules"
                    :counter="10"
                    label="Name"
                    required
                    ></v-text-field>


                <v-menu
                    ref="menu"
                    :close-on-content-click="false"
                    v-model="menu"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                    >
                    <v-text-field
                        slot="activator"
                        v-model="visitor.birthDate"
                        label="Birthday date"
                        prepend-icon="event"
                        readonly
                        ></v-text-field>
                    <v-date-picker
                        ref="picker"
                        v-model="visitor.birthDate"
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                        @change="save"
                        ></v-date-picker>
                </v-menu>

                <v-btn
                    :disabled="!valid"
                    v-on:click.prevent="createVisitor"
                    >
                    submit
                </v-btn>
                <v-btn @click="clear">clear</v-btn>
            </v-form>
</template>

<script>
    import axios from 'axios'
    export default{
        name: 'VisitorForm',
        props:['visitor'],

        data: () => ({
                valid: true,
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],                
                date: null,
                menu: false,
                birthDate: '',
            }),
        computed:{
          
        },
        watch: {
            menu(val) {
                val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
            }
        },

        methods: {
     
            createVisitor() {
                if (this.$refs.form.validate()) {
                    this.$emit('submit',this.visitor);
                    this.clear();
                }
            },
            clear() {
                this.$refs.form.reset()
            },
            save(date) {
                this.$refs.menu.save(date)
            },
        }
    }



</script>


<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>