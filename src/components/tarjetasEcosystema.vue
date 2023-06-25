<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-12 col-md-4 bg-dark m-2" style="max-width: 22rem;" v-for="(item, index) in items" :key="index">
                <div class="card-body">
                    <h5 class="card-title"><a class="nav-link text-white" :href="item.web" target="_blank"> {{ item.name }} </a></h5>
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
import Eco from '../assets/archjson/ecosystem.json'

export default {
    name: "Eco",
    data() {
        return {
            mensajeIr: 'go...',
            items: Eco,
        }
    }
}
</script>

<style scoped>
li::first-letter {
text-transform: uppercase;
}
</style>