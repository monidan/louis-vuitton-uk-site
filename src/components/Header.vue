<template>
    <header id="header">
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
                        <input type="text" placeholder="Изделие, магазин...">
                    </div>
                </page-wrapper>
            </section>
            <HeaderClothesMenu />
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
        }
    },
    props: {
        country: String,
    }
}
</script>

<style lang="scss">
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
</style>