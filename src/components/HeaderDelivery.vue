<template>
    <div class="header__delivery_menu">
        <page-wrapper>
            <div class="header__delivery_text">
                <p>
                    Доставка в удобное время: новый сервис для Киева.
                    <a href="#">
                        Узнать больше
                    </a>
                </p>
            </div>
            <div class="header__delivery_button">
                <button @click="closeMenuHandler">
                    <font-awesome-icon icon='times'/>
                </button>
            </div>
        </page-wrapper>
    </div>
</template>
<script>
import PageWrapper from '@/components/PageWrapper.vue'

export default {
    name: 'SmallMenu',
    components: {
        PageWrapper
    },
    methods: {
        closeMenuHandler() {
            const menuEl = document.querySelector('.header__delivery_menu')
            menuEl.style.display = 'none';
        },
    }
}
</script>
<style lang="scss">
    .header__delivery_menu{
        background-color: #f6f5f3;
        padding:.25rem 0;

        .wrapper{
            display: flex;
            align-items: center;
            font-weight: 300;
            font-size: .9rem;
        }

        .header__delivery_text{
            margin-left: auto;
            line-height: 2.5rem;
            letter-spacing: .025rem;
            
            a{
                text-decoration: underline;
            }
        }

        .header__delivery_button{
            fill: black;
            margin-left: auto;

            button{
                outline:none;
            }
        }
    }
</style>