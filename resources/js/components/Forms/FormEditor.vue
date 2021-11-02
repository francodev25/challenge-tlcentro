<template>
    <div>

    <InputText
      :label="capitalizeLabel('Descripción')"
      :name="'description'"
      :value="current.description"
      :placeholder="'Descripción'"
      :helpText="'Descripción'"
      @change="handleChangeInput"
    />
    <InputText
      :label="capitalizeLabel('Host')"
      :name="'host'"
      :value="current.host"
      :placeholder="'Ex : the main Server'"
      :helpText="'host'"
      @change="handleChangeInput"
    />
    <InputText
      :label="capitalizeLabel('Ip')"
      :name="'ip'"
      :value="current.ip"
      :placeholder="'Ex : 192.168.0.1'"
      :helpText="'ip'"
      @change="handleChangeInput"
    />
    </div>
</template>

<script>

import InputText from './InputText.vue'
import {createNamespacedHelpers} from 'vuex'
const {
    mapActions: mapActionsEditor
} = createNamespacedHelpers("editorModal");
export default {
    name:'FormEditor',
    components:{
        InputText
    },
    props:{
        current:{
            type:Object
        }
    },
    methods:{
        ...mapActionsEditor(['updateEditor']),
        handleChangeInput(element){
            console.log('handleChangeInput',element)
            this.updateEditor(element);
        },
        capitalizeLabel(word){
            const loweredCase = word.toString().toLowerCase()
            return word.toString()[0].toUpperCase() + loweredCase.slice(1)
        },
    },
}
</script>
