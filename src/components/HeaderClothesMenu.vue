<template>
    <div class="lv__clothes_menu">
        <div class="lv__close__button">
            <button>
                <font-awesome-icon icon='times'/>
            </button>
        </div>
        <page-wrapper>
            <div class="lv__clothes_group lv__clothes_gender">
                <div class="lv__women_clothes lv__clothes">
                    <h2>Для женщин</h2>
                    <BaseNavBar 
                        :navItems='womenClothesTypes'/>
                </div>
                <div class="lv__men_clothes lv__clothes">
                    <h2>Для мужчин</h2>
                    <BaseNavBar 
                        :navItems='menClothesTypes'/>
                </div>
                <div class="lv__magazine">
                    <h2 class="lv__magazine__heading">Журнал</h2>
                    <a href="#" class="lv__magazine__current__fashion">
                        <img src="../assets/W_Fa_LG_Petite_Malle_Souple_DI3.jpg" alt="Fashion magazine">
                        <div class="lv__magazine__text">
                            <h3>Petite Malle Souple</h3>
                            <p>
                                <span datetime='2020-09-04'>04/09</span> — Мода
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="lv__clothes_group lv__clothes__suggestions">
                <h2>Изделия</h2>
                <ul>
                    <li>
                        <a href="#">
                            <img src="../assets/coat__lv.webp" alt="">
                            <p>Укороченное пальто с ремнём</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/parka__lv.webp" alt="">
                            <p>Парка LV с вишивкой</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/bag__lv.webp" alt="">
                            <p>Рюкзак Dauphine PM</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/bananka__lv.webp" alt="">
                            <p>Сумка-мессенджер ALPHA</p>
                        </a>
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
<style lang="scss">
    .lv__clothes_menu{
        display:none;
        border-bottom: 1px solid #eae8e4;
        position: relative;

        .wrapper{
            display: grid;
            grid-template-columns: 50% 50%;
        }

        .lv__clothes_group{
            padding: 3rem;
            max-width: 100%;
            
            
            &.lv__clothes_gender{
                display: grid;
                grid-template-columns: repeat(2, calc(50% - 1rem));
                box-shadow: inset -1px 0 0 0 #eae8e4;
                row-gap: 3rem;

                h2{
                    text-transform: uppercase;
                    font-size: .85rem;
                }
                
                .lv__clothes{
                    display: flex;
                    flex-direction: column;
                    row-gap: 3rem;

                    .nav_bar{
                    
                        ul{
                            flex-direction: column;
                            row-gap: 2rem;
                            font-size: .75rem;
                            font-weight: 500;
                            
                            li{

                                a{
                                    display: inline-block;

                                    &::after{
                                        display: block;
                                        content: '';
                                        width: 0%;
                                        height: 1px;
                                        background-color: rgba(0, 0, 0, .8);

                                        transition: width .5s ease-in-out;
                                    }

                                    &:hover::after{
                                        width: 100%;
                                    }
                                }
                            }
                        }
                    }
                }
                
                .lv__magazine{
                    display: flex;
                    row-gap: 2rem;
                    flex-direction: column;
                    grid-column: 1/3;

                    &__current__fashion{
                        display: grid;
                        column-gap: 1.5rem;
                        grid-template: auto / 15% calc(75% - 1.5rem) ;
                        
                        img{
                            max-width: 100%;
                        }

                        .lv__magazine__text{
                            display: flex;
                            flex-direction: column;
                            row-gap: .7rem;
                            align-self: center;

                            h3{
                                text-transform: uppercase;
                                font-size: .85rem;
                                
                                font-weight: 400;
                            }

                            p{
                                font-weight: 300;
                            }
                        }
                    }
                }

            }

            &.lv__clothes__suggestions{
                margin-left: 1rem;

                h2{
                    text-transform: uppercase;
                    font-size: .85rem;

                    margin-bottom: 2rem;
                }

                ul{
                    display: grid;
                    grid-template-columns: 50% 50%;
                    grid-template-rows: 50% 50%;
                    row-gap: .5rem;
                    
                    li{
                        a{
                             display: grid;
                            grid-template-columns: 98px auto;
                            grid-template-rows: 98px;
                            column-gap: 1rem;
                            align-items: center;

                            text-transform: uppercase;
                            font-size: .85rem;
                        }
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

        .lv__close__button{
            position: absolute;
            right: 1rem;
            top: 1rem;
        }
    }
</style>