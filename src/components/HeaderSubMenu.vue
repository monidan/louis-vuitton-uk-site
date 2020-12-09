<template>
    <div class="header__contacts_menu">
        <page-wrapper>
            <div class="header__contacts">
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <img src='../assets/flag.svg' alt="Ukraine flag" width="32px" height="20px" class="header__ukrainian__flag">
                                Доставка в: 
                                {{ country }}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon='["far", "question-circle"]'/>
                                Нужна помощь?
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon icon='phone-alt'/>
                                + 1 234 567 890
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Устойчивое развитие
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header__user_info">
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon='["fas", "map-marker-alt"]'/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon='["far", "heart"]'/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon='["far", "user"]'/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon='["fas", "shopping-bag"]'/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </page-wrapper>
    </div>
</template>
<script>
import PageWrapper from '@/components/PageWrapper.vue'

export default {
    name: 'HeaderSubMenu',
    components: {
        PageWrapper
    },
    props: {
        country: String,
    }
}
</script>
<style lang="scss">
    .header__contacts_menu{
        box-shadow: inset 0 1px 0 0 #eae8e4,
                    inset 0 -1px 0 0 #eae8e4;

        .wrapper{
            padding: .25rem 0;
            height: 2.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .8rem;
        }

        .header__contacts{


            li{

                a{
                    display: flex;
                    align-items: center;
                }
            }

            .header__ukrainian__flag{
                display: block;
                width: 15px;
                height: 10px;
                border: 1px solid #e1dfd8;
                margin-right: .5rem;
            }

            ul{
                align-items: center;

                li{
                    margin-right: 1.5rem;
                    svg{
                        margin-right: .5rem;
                        font-size: .9rem;
                    }       
                }
            }
        }

        .header__user_info{
            ul{
                align-items: center;
                li{
                    padding-left: 1rem;
                    svg{
                        font-size: .9rem;
                    }
                }

                li:not(:last-child){
                    padding-right: 1rem;
                }
            }
        }
    }
</style>