<template>
    <div>
        <v-row>
            <v-col cols="12">
                <!-- <v-btn-toggle v-model="text" tile color="#3699FF" group>
                    <v-btn value="left">
                        Left
                    </v-btn>

                    <v-btn value="center">
                        Center
                    </v-btn>

                    <v-btn value="right">
                        Right
                    </v-btn>

                    <v-btn value="justify">
                        Justify
                    </v-btn>

                    <v-btn value="justify1">
                        Justify1
                    </v-btn>

                    <v-btn value="justify2">
                        Justify2
                    </v-btn>

                    <v-btn value="justify3">
                        Justify3
                    </v-btn>

                    <v-btn value="justify4">
                        Justify4
                    </v-btn>

                    <v-btn value="justify5">
                        Justify5
                    </v-btn>

                    <v-btn value="justify6">
                        Justify6
                    </v-btn>
                </v-btn-toggle> -->
                <v-tabs v-model="tabs" align-with-title>
                    <v-tab :href="'#'.concat(item)" v-for="item in riskType" :key="item">
                        {{item}}
                    </v-tab>
                    <v-tabs-slider color="pink"></v-tabs-slider>
                </v-tabs>
            </v-col>
        </v-row>  
        <div class="row">
            <div class="col-lg-3">
                <AsideMenu v-if="menuData" :menuData="menuData" v-on:gotoMainItem="changeForm"/>
            </div>
            <div class="col-lg-9">
                <div class="row">
                    <div class="col-lg-12">
                        <FormForMyAttentionSearch v-if="activeForm==0"/>
                        <FormForLawSearch v-if="activeForm==1"/>
                        <FormForPunishmentSearch v-if="activeForm==2"/>
                        <FormForEventsSearch v-if="activeForm==3"/>
                        <FormForEventsSearch v-if="activeForm==4"/>
                    </div>
                    <div class="col-lg-12 res-list">
                        <PublishList></PublishList>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
    import PublishList from "@/components/PublishList";
    import AsideMenu from "@/components/Aside/Aside";
    import FormForMyAttentionSearch from "@/components/FormForMyAttentionSearch";
    import FormForLawSearch from "@/components/FormForSearch";
    import FormForPunishmentSearch from "@/components/FormForPunishmentSearch";
    import FormForEventsSearch from "@/components/FormForEventsSearch";
    export default {
        name: "PunishmentSearch",
        components: {
            PublishList,
            AsideMenu,
            FormForMyAttentionSearch,
            FormForLawSearch,
            FormForPunishmentSearch,
            FormForEventsSearch,
        },
        computed: {
            ...mapGetters(["currentUserPhoto"])
        },
        data() {
            return {
                riskType:[
                "全部","信用风险","保险风险","市场风险","流动性风险","操作风险","国别风险","利率风险","战略风险","信息科技风险","其他风险",
                ],
                menuData:[
                    {
                        "企业信息":[],
                    },
                    {
                        "法律法规":[],
                    },
                    {
                        "行政处罚":[],
                    },
                    {
                        "违规案例":[]
                    },
                    {
                        "违规事件":[]
                    }              
                ],
                activeForm:0,
            };
        },
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "我的收藏" }]);
        },
        methods: {
            changeForm(index){
                console.log('主页面获取index',index);
                this.activeForm = index;
            }
        },
    };
</script>
<style scoped>
    .row:nth-of-type(2),
    .res-list {
        margin-top: 20px;
    }
</style>