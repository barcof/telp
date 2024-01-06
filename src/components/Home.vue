<template>
    <div class="Home container">
        <!-- div LOGO or TITLE -->
        <div class="fs-1 text-primary fw-bold">JVCKENWOOD</div>
        <!-- div for tags -->
        <div>
            <!-- <b-nav justified class="fw-bold" align="center">
                <b-nav-item class="text-dark" v-for="telp in telps" :key="telp.name">{{ telp.name }}</b-nav-item>
            </b-nav> -->
            <ul class="nav justify-content-center">
                <li class="nav-item" v-for="telp in telps" :key="telp.name">
                    <a class="nav-link active fw-bold text-dark" aria-current="page" href="#"
                        v-on:click="filter(telp.name)">{{ telp.name }}</a>
                </li>
            </ul>
        </div>

        <div>
            <h1>On Click : {{ deptName }}</h1>
        </div>

        <!-- div for extention / phone number-->
        <div class="row g-2">
            <!-- <div class="col-md-4 col-sm-6 p-1" v-for="telp in selected" :key="telp.name"> -->
            <div class="p-1 col-4 m-auto" v-for="telp in selected" :key="telp.name">
            <!-- <div class="p-1" :class="{'col-4' : isCol}"  v-for="telp in selected" :key="telp.name"> -->
                <b-table responsive hover borderless label-sort-clear="" label-sort-asc="" label-sort-desc=""
                    :items="telp.data" :fields="fields">
                    <template #thead-top>
                        <b-tr>
                            <b-th :variant="telp.colorHeader" colspan="2">
                                <span class="fw-bold">{{ telp.name }}</span>
                            </b-th>
                        </b-tr>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>

<script>
import DataKaryawan from "../assets/data_karyawan.json";

export default {
    name: "Jkei-Ext",
    data() {
        return {
            fields: [
                { key: "name", label: "Name", sortable: true },
                { key: "ext", label: "Extension", sortable: true },
            ],
            loop1: 0,
            maxRow: 2,
            telps: DataKaryawan,
            selected: [],
            deptName: '',
            isCol: true
        };
    },
    mounted() {
        this.filter()
    },
    methods: {
        filter(name = null){
            // console.log('clicked', name)
            
            if(name == null)
            {
                this.selected = this.telps
                this.isCol = true;
                
            }
            else{
                // this.$refs.grid.classList.remove('col-4');
                this.deptName = name;
                this.telps.forEach(element => {
                    if(element.name == name){
                        console.log("selected", element)
                        this.selected = [element]
                        return
                    }
                });
                this.isCol = false;             // document.getElementsByClassName("col-4").classList.remove('col-4');
                // console.log(document.getElementsByClassName("col-4"));
            }
        }
    },
};
</script>
