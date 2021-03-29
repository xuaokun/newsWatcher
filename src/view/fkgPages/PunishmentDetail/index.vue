<template>
    <div>
        <!-- <v-row>
            <v-col cols="12">
                <v-btn-toggle v-model="text" tile color="#3699FF" group>
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
                </v-btn-toggle>
            </v-col>
        </v-row> -->
        <div class="row">
            <!-- <div class="col-lg-3">
                <AsideMenu />
            </div> -->
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-8">
                        <!--begin::Card-->
                        <div class="card card-custom card-stretch" id="kt_todo_view">
                            <!--begin::Header-->
                            <div
                                class="card-header align-items-center flex-wrap justify-content-between border-0 py-6 h-auto">
                                <!--begin::Left-->
                                <div class="d-flex align-items-center my-2">
                                    <div class="d-flex align-items-center">
                                        <!-- <div class="symbol symbol-35 mr-3">
                                            <div class="symbol-label"
                                                style="background-image: url('assets/media/users/100_12.jpg')"></div>
                                        </div> -->
                                        <a href="#"
                                            class="text-dark-75 font-size-lg text-hover-primary font-weight-bolder">处罚正文</a>
                                    </div>
                                </div>
                                <!--end::Left-->
                                <!--begin::Right-->
                                <div class="d-flex align-items-center justify-content-end text-right my-2">
                                    <!-- <span class="btn btn-default btn-icon btn-sm mr-2" data-toggle="tooltip"
                                        title="Archive">
                                        <span class="svg-icon svg-icon-md">
                                        </span>
                                    </span> -->
                                    <span class="btn btn-light-danger btn-sm text-uppercase font-weight-bolder mr-2"
                                        data-toggle="tooltip" title="Change due date">复制</span>
                                    <span class="btn btn-light-success btn-sm text-uppercase font-weight-bolder"
                                        data-toggle="tooltip" title="Mark as complete">收藏</span>
                                </div>
                                <!--end::Right-->
                            </div>
                            <!--end::Header-->
                            <!--begin::Body-->
                            <div class="card-body p-0">
                                <!--begin::Header-->
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap card-spacer-x py-3">
                                    <!--begin::Title-->
                                    <div class="d-flex flex-column mr-2 py-2">
                                        <a target="_blank" :href="$route.query.info.url"
                                            class="text-dark text-hover-primary font-weight-bold font-size-h4 mr-3">{{$route.query.info.title}}</a>
                                        <!-- <div class="d-flex align-items-center py-1">
                                            <a href="#"
                                                class="d-flex align-items-center text-muted text-hover-primary mr-2">
                                                <span class="fa fa-genderless text-danger icon-md mr-2"></span>现行有效</a>
                                            <a href="#" class="d-flex align-items-center text-muted text-hover-primary">
                                                <span
                                                    class="fa fa-genderless text-success icon-md mr-2"></span>2017年颁布</a>
                                        </div> -->
                                    </div>
                                    <!--end::Title-->
                                    <!--begin::Toolbar-->
                                    <!-- <div class="d-flex py-2">
                                        <span class="btn btn-default btn-sm btn-icon" data-dismiss="modal">
                                            <i class="flaticon2-fax"></i>
                                        </span>
                                    </div> -->
                                    <!--end::Toolbar-->
                                </div>
                                <!--end::Header-->



                                <!-- 以下为正文内容 -->
                                <!--begin::Messages-->
                                <div class="mb-3">
                                    <!--begin::Message-->
                                    <div class="cursor-pointer shadow-xs toggle-on" data-inbox="message">
                                        <!--begin::Comment-->
                                        <div class="card-spacer-x pt-2 pb-5 toggle-off-item">
                                            <!--begin::Text-->
                                            <div class="mb-1">
                                                <p v-html="$route.query.info.content"></p>
                                                <!-- <p>关于对海通证券股份有限公司及曾军、周威采取出具警示函监管措施的决定(2020-12-24)

                                                    一、案情简介

                                                    经查，中国证监会发现海通证券股份有限公司及曾军、周威在保荐四方光电股份有限公司（以下简称发行人）首次公开发行股票并上市过程中，在首次提交的保荐工作报告等材料中未披露发行人实际控制人熊友辉涉嫌行贿的事项。

                                                    上述行为违反了《证券发行上市保荐业务管理办法》（证监会令第137号）第四条的规定。



                                                    二、纪律处分及监管措施

                                                    按照《证券发行上市保荐业务管理办法》第六十二条的规定，中国证监会决定对海通证券股份有限公司及曾军、周威采取出具警示函的监督管理措施。



                                                    三、申辩情况

                                                    无申辩



                                                    相关附件：

                                                    关于对海通证券股份有限公司及曾军、周威采取出具警示函监管措施的决定 </p> -->
                                            </div>
                                            <!--end::Text-->
                                            <!--begin::Attachments-->
                                            <div class="d-flex flex-column font-size-sm font-weight-bold">
                                                <a href="#"
                                                    class="d-flex align-items-center text-muted text-hover-primary py-1">
                                                    <span
                                                        class="flaticon2-clip-symbol text-warning icon-1x mr-2"></span>相关法规：证券发行上市保荐业务管理办法（2017年修正）
                                                </a>
                                                <a href="#"
                                                    class="d-flex align-items-center text-muted text-hover-primary py-1">
                                                    <span
                                                        class="flaticon2-clip-symbol text-warning icon-1x mr-2"></span>关联案例：关于对四方光电股份有限公司采取出具警示函监管措施的决定</a>
                                            </div>
                                            <!--end::Attachments-->
                                        </div>
                                        <!--end::Comment-->
                                    </div>
                                    <!--end::Message-->
                                </div>
                                <!--end::Messages-->
                            </div>
                            <!--end::Body-->
                        </div>
                        <!--end::Card-->

                        <PublishList :tableHead="tableHead" :dataList="tableData" class="list-box"/>
                    </div>
                    <div class="col-lg-3">

                        <!-- 事件信息开始 -->
                        <div v-if="eventInfoList.length > 0" class="card card-custom">
                            <!--begin::Header-->
                            <div class="card-header h-auto py-4">
                                <div class="card-title">
                                    <h3 class="card-label">相关事件
                                        <!-- <span class="d-block text-muted pt-2 font-size-sm">company Info
                                        </span> -->
                                    </h3>
                                </div>
                            </div>
                            <!--end::Header-->
                            <!--begin::Body-->
                            <div class="card-body py-4">
                                <div class="form-group row my-2">
                                    <!-- <label class="col-4 col-form-label">全称:</label> -->
                                    <div v-for="item in eventInfoList" :key="item.ID" class="col-8">
                                        <router-link
                                            :to="{path:'/fkgHome/oneEventDetail/' + item.ID, query:{info: item}}"
                                            class="form-control-plaintext font-weight-bolder">{{item.name}}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <!--end::Body-->
                            <!--begin::Footer-->
                            <!-- <div class="card-footer">
                                <a href="#" class="btn btn-primary font-weight-bold mr-2">Manage company</a>
                                <a href="#" class="btn btn-light-primary font-weight-bold">Learn more</a>
                            </div> -->
                            <!--end::Footer-->
                        </div>
                        <!-- 事件信息结束 -->

                        <!-- 相关案例信息开始 -->
                        <div v-if="caseInfoList.length > 0" class="card card-custom case-box">
                            <!--begin::Header-->
                            <div class="card-header h-auto py-4">
                                <div class="card-title">
                                    <h3 class="card-label">相关案例
                                        <!-- <span class="d-block text-muted pt-2 font-size-sm">company Info
                                        </span> -->
                                    </h3>
                                </div>
                            </div>
                            <!--end::Header-->
                            <!--begin::Body-->
                            <div class="card-body py-4">
                                <div class="form-group row my-2">
                                    <!-- <label class="col-4 col-form-label">全称:</label> -->
                                    <div v-for="item in caseInfoList" :key="item.ID" class="col-8">
                                        <router-link :to="{path:'/fkgHome/eventDetail/' + item.ID, query:{info: item}}"
                                            class="form-control-plaintext font-weight-bolder">{{item.title}}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <!--end::Body-->
                            <!--begin::Footer-->
                            <!-- <div class="card-footer">
                                <a href="#" class="btn btn-primary font-weight-bold mr-2">Manage company</a>
                                <a href="#" class="btn btn-light-primary font-weight-bold">Learn more</a>
                            </div> -->
                            <!--end::Footer-->
                        </div>
                        <!-- 处罚详情信息结束 -->
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
    // import PublishList from "@/components/PublishObjectList";
    // import AsideMenu from "@/components/Aside/Aside";

    export default {
        name: "PunishmentDetail",
        components: {
            // AsideMenu,
            PublishList,
        },
        computed: {
            ...mapGetters(["currentUserPhoto"])
        },
        data() {
            return {
                tableHead: [
                    {
                        name: '处罚对象',
                        property: 'name',
                        sortAble: true,
                        currentSort: -1//0代表升序
                    },
                    {
                        name: '处罚对象身份',
                        property: 'objType',
                        sortAble: true,
                        currentSort: -1//0代表升序
                    },
                    {
                        name: '违规原因',
                        property: 'reason',
                        sortAble: true,
                        currentSort: -1//0代表升序
                    },
                    {
                        name: '处罚类型',
                        property: 'punishmentType',
                        sortAble: true,
                        currentSort: -1//0代表升序
                    },
                    {
                        name: '处理人',
                        property: 'decisonName',
                        sortAble: true,
                        currentSort: -1//0代表升序
                    }
                ],
                tableData: [],
                relationEventsAndCase: {},
                eventInfoList: [],
                caseInfoList: []
            };
        },
        props: ['movieId'],
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "处罚详情" }]);
            console.log(this.$route.query.info)
            this.detailInfo = this.$route.query.info;
            let list = [];
            let name = this.detailInfo.punishedCompany ? this.detailInfo.punishedCompany.name : '-';
            let objType = this.detailInfo.punishedCompany ? this.detailInfo.punishedCompany.type : '-';
            let reason = this.detailInfo.decisionResion;
            let punishmentType = '-';
            let decisonName = this.detailInfo.decisionOrganName.name;
            list.push({
                name,
                objType,
                reason,
                punishmentType,
                decisonName
            })
            if (this.detailInfo.punishedPersons) {
                for (let person of this.detailInfo.punishedPersons) {
                    list.push({
                        name: person.name,
                        objType: '-',
                        reason,
                        punishmentType: person.type,
                        decisonName
                    })
                }
            }
            this.tableData = list;

        },
        created() {
            this.getRelationEvents();
        },
        methods: {
            getRelationEvents() {
                let detailInfo = this.$route.query.info;
                this.axios.post('/api/sykg/query/punish_infos/related', {
                    punishName: detailInfo.title
                })
                    .then((data) => {
                        console.log(data);
                        if (data.data.status == 0) {
                            this.relationEventsAndCase = data.data.message.data;
                            console.log(this.relationEventsAndCase)
                            let eventIDs = Object.keys(this.relationEventsAndCase.events);//获取事件信息
                            if (eventIDs && eventIDs.length > 0) {
                                return this.axios.post('/api/sykg/query/events_infos/basicbyeventID', {
                                    "IDs": eventIDs
                                })
                            }
                        }
                    })
                    .then((data) => {
                        console.log('案例详情')
                        console.log(data)
                        if (data.data.status == 0) {
                            this.eventInfoList = data.data.message.data;
                        }

                        //获取案例信息
                        // console.log(this.relationEventsAndCase)
                        let caseIDs = Object.keys(this.relationEventsAndCase.case);//获取事件信息
                        console.log(caseIDs);
                        if (caseIDs && caseIDs.length > 0) {
                            let params = { "ID": caseIDs, "startTime": {}, "endTime": {}, "or": { "content": [], "title": [] }, "and": { "subject": [], "caseType": [] } }
                            return this.axios.post('/api/sykg/query/case_infos/keywords', params)
                        }

                    }).then((data) => {
                        console.log('案例详情')
                        console.log(data)
                        if (data.data.status == 0) {
                            this.caseInfoList = data.data.message.data[0] ? [data.data.message.data[0]] : [];
                        }
                    })
            }
        },
    };
</script>
<style scoped>
    .row:nth-of-type(2),
    .history-timeline,
    .relative-events {
        margin-top: 20px;
    }

    .form-group label {
        align-self: center;
    }

    .row {
        align-items: flex-start;
    }

    .case-box{
        margin-top: 10px;
    }

    .list-box{
        margin-top: 10px;
    }
</style>