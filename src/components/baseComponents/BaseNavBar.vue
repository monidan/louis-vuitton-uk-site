<template>
    <div class="nav_bar">
        <nav>
            <ul>
                <li v-for="item in navItems"
                    :key="item.name">
                    <router-link :to="item.link">
                        {{ item.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'BaseNavigationBar',
    props: {
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