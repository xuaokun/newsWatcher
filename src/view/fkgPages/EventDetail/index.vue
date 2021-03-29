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
                        <div class="card card-custom first-row" id="kt_todo_view">
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
                                            class="text-dark-75 font-size-lg text-hover-primary font-weight-bolder">案例正文</a>
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
                                        <a href="#"
                                            class="text-dark text-hover-primary font-weight-bold font-size-h4 mr-3">{{$route.query.info
                                            && $route.query.info.title ? $route.query.info.title :'-'}}</a>
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
                                                <p v-for="item in eventInfo" :key="item.ID">
                                                    {{item.content && item.content[0] && item.content[0].content ?
                                                    item.content[0].content:''}}
                                                </p>
                                            </div>
                                            <!--end::Text-->
                                            <!--begin::Attachments-->
                                            <div class="d-flex flex-column font-size-sm font-weight-bold">
                                                <a href="#"
                                                    class="d-flex align-items-center text-muted text-hover-primary py-1">
                                                    <span
                                                        class="flaticon2-clip-symbol text-warning icon-1x mr-2"></span>相关法规</a>
                                                <a href="#"
                                                    class="d-flex align-items-center text-muted text-hover-primary py-1">
                                                    <span
                                                        class="flaticon2-clip-symbol text-warning icon-1x mr-2"></span>相关案例</a>
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

                        <!-- <PublishList/> -->

                    </div>
                    <div class="col-lg-4">
                        <!-- 处罚详情信息开始 -->
                        <div class="card card-custom first-row">
                            <!--begin::Header-->
                            <div class="card-header h-auto py-4">
                                <div class="card-title">
                                    <h3 class="card-label">相关对象
                                        <!-- <span class="d-block text-muted pt-2 font-size-sm">company Info
                                        </span> -->
                                    </h3>
                                </div>
                            </div>
                            <!--end::Header-->
                            <!--begin::Body-->
                            <div class="card-body py-4">
                                <div class="form-group row my-2" v-for="(item,index) in relationObjects" :key="index">
                                    <!-- <label class="col-4 col-form-label">全称:</label> -->
                                    <div class="col-8">
                                        <router-link v-if="item.length > 3" router-link
                                            :to="{path:'/fkgHome/home',query:{name:item}}"
                                            class="form-control-plaintext font-weight-bolder">{{item}}</router-link>
                                        <span v-else class="form-control-plaintext font-weight-bolder">{{item}}</span>
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

                <div class="row">
                    <!-- 事件脉络开始 -->
                    <div class=" col-lg-6">
                        <div class="card card-custom history-timeline first-row">
                            <!--begin::Header-->
                            <div class="card-header align-items-center border-0 mt-4">
                                <h3 class="card-title align-items-start flex-column">
                                    <span class="font-weight-bolder text-dark">事件脉络</span>
                                    <!-- <span class="text-muted mt-3 font-weight-bold font-size-sm">890,344 Sales</span> -->
                                </h3>
                                <div class="card-toolbar">
                                    <div class="dropdown dropdown-inline">
                                        <a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="ki ki-bold-more-hor"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                            <!--begin::Navigation-->
                                            <ul class="navi navi-hover">
                                                <li class="navi-header font-weight-bold py-4">
                                                    <span class="font-size-lg">Choose Label:</span>
                                                    <i class="flaticon2-information icon-md text-muted"
                                                        data-toggle="tooltip" data-placement="right" title=""
                                                        data-original-title="Click to learn more..."></i>
                                                </li>
                                                <li class="navi-separator mb-3 opacity-70"></li>
                                                <li class="navi-item">
                                                    <a href="#" class="navi-link">
                                                        <span class="navi-text">
                                                            <span
                                                                class="label label-xl label-inline label-light-success">Customer</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="navi-item">
                                                    <a href="#" class="navi-link">
                                                        <span class="navi-text">
                                                            <span
                                                                class="label label-xl label-inline label-light-danger">Partner</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="navi-item">
                                                    <a href="#" class="navi-link">
                                                        <span class="navi-text">
                                                            <span
                                                                class="label label-xl label-inline label-light-warning">Suplier</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="navi-item">
                                                    <a href="#" class="navi-link">
                                                        <span class="navi-text">
                                                            <span
                                                                class="label label-xl label-inline label-light-primary">Member</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="navi-item">
                                                    <a href="#" class="navi-link">
                                                        <span class="navi-text">
                                                            <span
                                                                class="label label-xl label-inline label-light-dark">Staff</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="navi-separator mt-3 opacity-70"></li>
                                                <li class="navi-footer py-4">
                                                    <a class="btn btn-clean font-weight-bold btn-sm" href="#">
                                                        <i class="ki ki-plus icon-sm"></i>Add new</a>
                                                </li>
                                            </ul>
                                            <!--end::Navigation-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end::Header-->
                            <!--begin::Body-->
                            <div class="card-body pt-4">
                                <!--begin::Timeline-->
                                <div class="timeline timeline-6 mt-3">
                                    <!--begin::Item-->
                                    <div class="timeline-item align-items-start" v-for="item in eventInfo"
                                        :key="item.ID">
                                        <!--begin::Label-->
                                        <div class="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                                            {{$moment(item.endTime).format("YYYY-MM-DD")}}
                                        </div>
                                        <!--end::Label-->
                                        <!--begin::Badge-->
                                        <div class="timeline-badge">
                                            <i
                                                :class="['fa', 'fa-genderless', importantDict[item.important], 'icon-xl']"></i>
                                        </div>
                                        <!--end::Badge-->
                                        <!--begin::Text-->
                                        <div class="font-weight-bolder font-size-lg timeline-content pl-3">
                                            {{item.name}}
                                        </div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Item-->
                                </div>
                                <!--end::Timeline-->
                            </div>
                            <!--end: Card Body-->
                        </div>
                    </div>

                    <!-- 事件脉络结束 -->
                    <div class=" col-lg-6">
                        <div class="card card-custom history-timeline first-row">
                            <SeeksRelationGraph :graphData="graphData" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
    import SeeksRelationGraph from "@/components/RelationshipGraph";
    // import PublishList from "@/components/PublishList";
    // import AsideMenu from "@/components/Aside/Aside";

    export default {
        name: "PunishmentDetail",
        components: {
            SeeksRelationGraph,
            // AsideMenu,
            // PublishList,
        },
        computed: {
            ...mapGetters(["currentUserPhoto"]),
            relationObjects: function () {
                console.log(this.eventInfo)
                let list = {};
                for (let item of this.eventInfo) {
                    // list = list.concat(item.orgs, item.person);
                    for (let org of item.orgs) {
                        list[org] = 1
                    }
                    for (let person of item.person) {
                        list[person] = 1
                    }
                }
                console.log(Object.keys(list))
                return Object.keys(list);
            }
        },
        data() {
            return {
                eventInfo: [],
                importantDict: {
                    '一般': 'text-success',
                    '严重': 'text-warning',
                    '很严重': 'text-danger'
                },
                graphData: {}
            };
        },
        props: ['eventId'],
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "案例详情" }]);
        },
        created() {
            console.log(this.eventId)
            this.axios.post("/api/sykg/query/events_infos/basic", { "IDs": [this.eventId] })
                .then((data) => {
                    // console.log("事件脉络结果", data);
                    let status = data.data.status;
                    // console.log('状态', status)
                    if (status == 0) {
                        console.log(data.data.message.data);
                        this.eventInfo = data.data.message.data;
                    }
                })
                .catch((e) => {
                    console.log(e);
                });

            this.axios.post('/api/sykg/query/gremlin', { "query": `V().hasLabel('Case').has('udfID','${this.eventId}').repeat(both()).times(1).bothE().bothV().bothE()` })
                .then((data) => {
                    console.log("图谱结果", data);
                    let status = data.data.status;
                    // console.log('状态', status)
                    console.log(data.data.message);
                    let message = data.data.message;
                    if (status == 0) {

                        let data = {
                            nodes: [],
                            links: []
                        }
                        for (let item of message.nodes) {
                            let oneNode = {
                                id: item.id,
                                text: item.alias ? item.alias.slice(0,10) : item.name.slice(0,10),
                                classType: item.classType,
                                ID: item.ID,
                                data: {
                                    fullName: item.name
                                }
                                // color: '#43a2f1', 
                                // fontColor: '#000',
                                // borderWidth: 2
                            }
                            if((item.alias && item.alias.length > 10) || item.name.length > 10){
                                oneNode.text += '...'
                            }
                            // if (item.img) {
                            //     oneNode.innerHTML = `<div class="c-my-node" style="background-image: url(https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2110325119,1633583088&fm=58&app=83&f=JPEG?w=120&h=120&s=971E35C05A43305DCA7C1C0B030080C)"><div class="c-node-name">${item.name}</div></div>`
                            // }
                            data.nodes.push(oneNode)
                        }
                        for (let item of message.links) {
                            data.links.push({
                                from: item.source,
                                to: item.target,
                                text: item.relation,
                                // color: '#43a2f1'
                            })
                        }
                        console.log(data);
                        this.graphData = data;
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
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
        /* align-items: flex-start; */
    }

    .first-row {
        height: 100%;
    }
</style>