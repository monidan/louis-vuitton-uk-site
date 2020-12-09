<template>
    <div class="lv__clothes_menu">
        <page-wrapper>
            <div class="lv__clothes_group lv__clothes_gender">
                <div class="lv__women_clothes">
                    <h2>Для женщин</h2>
                    <BaseNavBar 
                        :navItems='womenClothesTypes'/>
                </div>
                <div class="lv__men_clothes">
                    <h2>Для мужчин</h2>
                    <BaseNavBar 
                        :navItems='menClothesTypes'/>
                </div>
                <div class="lv__magazin">

                </div>
            </div>

            <div class="lv__clothes_group lv__clothes__suggestions">
                <h2>Изделия</h2>
                <ul>
                    <li>
                        <img src="https://www.louisvuitton.com/images/FJCO20QWE820_PM2_Front%20view?wid=456" alt="">
                        <a href="#">Укороченное пальто с ремнём</a>
                    </li>
                    <li>
                        <img src="https://www.louisvuitton.com/images/HJK02WVFS900_PM2_Front%20view?wid=456" alt="">
                        <a href="#">Парка LV с вишивкой</a>
                    </li>
                    <li>
                        <img src="https://www.louisvuitton.com/images/M45142_PM2_Front%20view?wid=456" alt="">
                        <a href="#">Рюкзак Dauphine PM</a>
                    </li>
                    <li>
                        <img src="https://www.louisvuitton.com/images/N40408_PM2_Front%20view?wid=456" alt="">
                        <a href="#">Сумка-мессенджер ALPHA</a>
                    </li>
                </ul>
            </div>
        </page-wrapper>
    </div>
</template>
<script>
import PageWrapper from '@/components/PageWrapper.vue'
import BaseNavBar from '@/components/baseComponents/BaseNavBar.vue'

export default {
    name: 'HeaderClothesMenu',
    components: {
        PageWrapper,
        BaseNavBar
    },
    data() {
        return {
            womenClothesTypes: [
                {name: 'Подборка подарков для неё', link: '#'},
                {name: 'Новогодняя коллекция', link: '#'},
                {name: 'Шарфы и текстиль', link: '#'},
                {name: 'Кошельки и аксессуары из кожи', link: '#'},
            ],
            menClothesTypes: [
                {name: 'Подборка подарков для него', link: '#'},
                {name: 'Кошельки и аксессуары из кожи', link: '#'},
                {name: 'Рюкзаки', link: '#'},
                {name: 'Шарфы и текстиль', link: '#'},
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
    .lv__clothes_menu{

        .wrapper{
            display: grid;
            grid-template-columns: 50% 50%;
        }

        .lv__clothes_group{
            padding: 3rem;
            
            &.lv__clothes_gender{
                display:flex;

                div {
                    
                    li{
                        display: none;
                    }   
                }
            }

            &.lv__clothes__suggestions{
                

                ul{
                    display: grid;
                    grid-template-columns: 50% 50%;
                    grid-template-rows: 50% 50%;
                    
                    li{
                        display: flex;
                    }
                }
                
                img{
                    width: 100%;
                    height: 100%;
                    border: 1px solid #e1dfd8;
                    object-fit: contain;
                }
            }
        }
    }
</style>