<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-12 col-md-4 bg-dark m-2" style="max-width: 22rem;" v-for="(item, index) in items" :key="index">
                <div class="card-body">
                    <h5 class="card-title text-white">Lista de {{ item.name }}</h5>
                    <li class="list-unstyled"><span class="text-muted b-neon">{{ item.update }}</span></li>
                    <template v-for="i in 30">
                        <li class="card-text list-unstyled">{{ item['t' + i] }} 
                            <a :href="item['link' + i]" target="_blank" v-if="item['link' + i]">{{ mensajeIr }}</a>
                        </li>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Tools from '../assets/archjson/tools.json'

export default {
    name: "Tools",
    data() {
        return {
            mensajeIr: 'go...',
            items: Tools,
        }
    }
}
</script>

<style></style>