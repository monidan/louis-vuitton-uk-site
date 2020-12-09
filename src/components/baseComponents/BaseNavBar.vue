<template>
    <div class="nav_bar">
        <nav>
            <ul>
                <li v-for="item in navItems"
                    :key="item.name">
                    <a :href="item.link">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'BaseNavigationBar',
    props: {
        blockName: String,
        navItems: Array,
    }
}
</script>
<style lang="scss">
    .nav_bar{

        li{
            font-size: .9rem;
        }
    }
</style>