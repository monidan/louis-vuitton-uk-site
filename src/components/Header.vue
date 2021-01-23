<template>
    <header id="header" v-custom-scroll>
        <HeaderDelivery />
            <HeaderSubMenu 
                :country='country'/>
            <section class="header__navigation">
                <page-wrapper>
                    <img src="../assets/logo.svg" alt="Louis Vuitton" class="header__logo">
                    <BaseNavBar 
                        class='header__nav_bar'
                        :navItems="itemsList"/>
                    <div class="header__search_input">
                        <div class="header__search_icon">
                            <font-awesome-icon icon='search'/>
                        </div>
                        <input  type="text" 
                                placeholder="Изделие, магазин..." 
                                @focus="showClothesMenu">
                    </div>
                </page-wrapper>
            </section>
            <transition 
                name="dropdown-menu"
                >
                <HeaderClothesMenu 
                    v-show="visibleClothesMenu"
                    @close-clothes-menu="closeClothesMenu"/>
            </transition>
            <transition name="clothes-menu-mask">
                <div v-if='visibleClothesMenu' 
                     class="clothes-menu-mask"
                     @click="closeClothesMenu"></div>
            </transition>
    </header>
</template>

<script>

import BaseNavBar from '@/components/baseComponents/BaseNavBar.vue'
import HeaderDelivery from '@/components/HeaderDelivery.vue'
import PageWrapper from '@/components/PageWrapper.vue'
import HeaderSubMenu from '@/components/HeaderSubMenu.vue'
import HeaderClothesMenu from '@/components/HeaderClothesMenu.vue'

export default {
    name: 'Header',
    components: {
        BaseNavBar,
        HeaderDelivery,
        HeaderSubMenu,
        PageWrapper,
        HeaderClothesMenu
    },
    data() {
        return {
            itemsList: [
                    {name: "Новинки", link: "#"},
                    {name: "Для женщин", link: "#"},
                    {name: "Для мужчин", link: "#"},
                    {name: "Стиль жизни и путешествий", link: "#"},
                    {name: "Журнал", link: "#"}
                ],
            visibleClothesMenu: false,
        }
    },
    props: {
        country: String,
    },
    computed: {
        clothesMenuEl() {
            return document.querySelector('.lv__clothes_menu')
        }
    },
    methods: {
        closeClothesMenu() {
            this.visibleClothesMenu = false

            const {body} = document;
            body.style.overflow = 'auto'
            body.style.position = null;
            body.style.width = null;
            // body.style.top = null

            const html = document.documentElement;
            html.style.overflow = 'auto';
        },
        showClothesMenu() {
            this.visibleClothesMenu = true;

            const {body} = document;
            body.style.overflow = 'hidden';
            body.style.width = '100%';

            const html = document.documentElement;
            html.style.overflow = 'hidden';
        }
    }
}
</script>

<style lang="scss">
    #header{
        position: fixed!important;
        width: 100%;
        top: 0;

        transition: transform .3s ease-in-out;

        background-color: white;
    }

    .header_hide{
        transform: translateY(-100%);
    }


    .header__navigation{
        box-shadow: inset 0 -1px 0 0 #eae8e4;


        .wrapper{
            display: flex;
            align-items: center;
        }

        .header__nav_bar{

            li{
                text-transform: uppercase;
                margin: 0 .5rem;
                font-weight: 300;
                box-sizing: border-box;
                padding: 1.25rem 0; 
                cursor: pointer;
                transition: .5s;
                font-size: .85rem;

                &:hover{
                    box-shadow: inset 0 -1px 0 0 #19110b;
                }
            }
        }

        .header__search_input{
            margin-left: auto;
            display: flex;
            background-color: #f6f5f3;
            padding: .5rem 2.75rem .5rem 0 ;
            border-radius: .375rem;
            border: none;

            input{
                font-size: .85rem;
                font-weight: 300;
                outline: none;
                font-style: italic;
                width: 15.25vw
            
            }
            .header__search_icon{
                padding-left:1.25rem;
                padding-right: .8rem;
            }
        }

        .header__logo{
            height: 20px;
            margin-right: 3rem;
       }
    }

    // Drop down menu styles for the <transition> 

    .dropdown-menu-enter-active, .dropdown-menu-leave-active{
        transition: all .5s ease-in-out;
        max-height: 50vh;
    }

    .dropdown-menu-enter, .dropdown-menu-leave-to{
        max-height: 0;
    }

    .clothes-menu-mask-enter-active, .clothes-menu-mask-leave-active{
        transition: all .5s;
        opacity: 1;
    } 

    .clothes-menu-mask-enter, .clothes-menu-mask-leave-to{
        opacity: 0;
    }

    // Drop down meny overlay mask styles 

    .clothes-menu-mask{
        background-color: rgba(0, 0, 0, .8);
        height: 100vh;
        width: 100%;
        z-index: 19;
        position: absolute;
    }
</style>