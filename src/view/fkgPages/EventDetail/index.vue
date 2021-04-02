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
                                <!--begin::Header-->
                                <h3 class="card-title align-items-start flex-column">
                                    <span class="font-weight-bolder text-dark">案例正文</span>
                                    <!-- <span class="text-muted mt-3 font-weight-bold font-size-sm">890,344 Sales</span> -->
                                </h3>
                                <!--end::Header-->
                                <!--begin::Right-->
                                <div class="d-flex align-items-center justify-content-end text-right my-2">
                                    <!-- <span class="btn btn-default btn-icon btn-sm mr-2" data-toggle="tooltip"
                                        title="Archive">
                                        <span class="svg-icon svg-icon-md">
                                        </span>
                                    </span> -->
                                    <!-- <span class="btn btn-light-danger btn-sm text-uppercase font-weight-bolder mr-2"
                                        data-toggle="tooltip" title="Change due date">复制</span> -->
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
                                        <span
                                            class="text-dark text-hover-primary font-weight-bold font-size-h4 mr-3">{{caseTitle
                                            ? caseTitle : '-'}}</span>
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
                                    <div class="cursor-pointer toggle-on" data-inbox="message">
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
                                                <div v-for="oneEvent in eventInfo" :key="oneEvent.ID">
                                                    <router-link v-if="oneEvent.relatedLaw"
                                                        :to="'/fkgHome/lawDetail/' + oneEvent.lawInfos[0]._source"
                                                        class="d-flex align-items-center text-muted text-hover-primary py-1">
                                                        <span
                                                            class="flaticon2-clip-symbol text-warning icon-1x mr-2"></span>{{oneEvent.relatedLaw}}
                                                    </router-link>
                                                </div>
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
                        <RelationEntity :relationObjects="relationObjects"></RelationEntity>
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
                            </div>
                            <!--end::Header-->
                            <!-- <v-virtual-scroll height="100" item-height="20"> -->
                            <!--begin::Body-->
                            <div class="card-body pt-4 overflow-y-auto overflow-x-hidden" style="max-height: 50vh;">
                                <!--begin::Timeline-->
                                <div class="timeline timeline-6 mt-3">
                                    <!--begin::Item-->
                                    <div class="timeline-item align-items-start" v-for="item in eventInfo"
                                        :key="item.ID">
                                        <!--begin::Label-->
                                        <div class="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                                            {{$moment(item.startTime).format("YYYY-MM-DD")}}
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
                                            <router-link :to="'/fkgHome/oneEventDetail/' + item.ID">{{item.name}}
                                            </router-link>
                                        </div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Item-->
                                </div>
                                <!--end::Timeline-->
                            </div>
                            <!--end: Card Body-->
                            <!-- </v-virtual-scroll> -->
                        </div>
                    </div>

                    <!-- 事件脉络结束 -->
                    <div class=" col-lg-6">
                        <div class="card card-custom history-timeline first-row">
                            <!--begin::Header-->
                            <div class="card-header align-items-center border-0 mt-4">
                                <h3 class="card-title align-items-start flex-column">
                                    <span class="font-weight-bolder text-dark">案例图谱</span>
                                    <!-- <span class="text-muted mt-3 font-weight-bold font-size-sm">890,344 Sales</span> -->
                                </h3>
                            </div>
                            <!--end::Header-->
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
    import RelationEntity from "@/components/RelationEntity";
    // import PublishList from "@/components/PublishList";
    // import AsideMenu from "@/components/Aside/Aside";
    // import snackbar from "@/core/services/store/snackbar.module";
    export default {
        name: "EventDetail",
        components: {
            SeeksRelationGraph,
            RelationEntity,
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
                        if (org) {
                            list[org] = 1
                        }
                    }
                    for (let person of item.person) {
                        if (person) {
                            list[person] = 1
                        }
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
                graphData: {},
                caseTitle: '',
                graphLinkNameDict: { 'eventObjectC': '关联事件(企业)', 'CONTAINS': '牵连事件', 'RELATED': '涉事相关人', 'PUNISHC': '相关处罚', 'PUNISHP': '处罚相关人', 'ISOF': '相关处罚' }
            };
        },
        props: ['eventId'],
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "案例详情" }]);
        },
        created() {
            console.log(this.eventId)
            //获取案例title
            this.caseTitle = this.$route.query.info && this.$route.query.info.title ? this.$route.query.info.title : '';
            if (!this.caseTitle) {
                this.axios.post('/api/sykg/query/case_infos/keywords', { "ID": this.eventId, "startTime": {}, "endTime": {}, "or": { "content": [], "title": [] }, "and": { "subject": [], "caseType": '' } })
                    .then((data) => {
                        console.log("获取案例title", data);
                        let status = data.data.status;
                        // console.log('状态', status)
                        if (status == 0 && data.data.message.size == 1) {
                            console.log(data.data.message.data[0].title);
                            this.caseTitle = data.data.message.data[0].title;
                        }
                    })
            }
            this.axios.post("/api/sykg/query/events_infos/basic", { "IDs": [this.eventId] })
                .then((data) => {
                    // console.log("事件脉络结果", data);
                    let status = data.data.status;
                    // console.log('状态', status)
                    if (status == 0) {
                        // console.log(data.data.message.data);
                        let dataList = data.data.message.data;
                        this.eventInfo = dataList.sort((a, b) => {
                            return this.$moment(a.startTime).diff(b.startTime);
                        });
                        // console.log(this.eventInfo)

                    }
                })
                .catch((e) => {
                    console.log(e);
                });

            this.axios.post('/api/sykg/query/gremlin', { "query": `V().hasLabel('Case').has('udfID','${this.eventId}').union(outE('caseObjectC').inV().bothE().not(hasLabel('BRANCH','INVEST')),out('CONTAINS').bothE())` })
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
                        let colorDict = {
                            "Company": "#00b0f0",
                            "Punishment": "#b88adc",
                            "Person": "#92d050",
                            "Event": "#ffc93c",
                            "Case": "#ff4646"
                        }
                        // let colorList = ['#31326f', '#2581ff', '#00b0f0', '#9ddfd3', '#ffc93c']
                        let color_map = {};
                        for (let item of message.nodes) {
                            if (color_map[item.classType]) {
                                continue;
                            } else {
                                color_map[item.classType] = colorDict[item.classType] ? colorDict[item.classType] : '#8ac4d0';
                            }

                        }
                        console.log(color_map)
                        for (let item of message.nodes) {
                            let oneNode = {
                                id: item.id,
                                text: item.alias ? item.alias.slice(0, 10) : item.name.slice(0, 10),
                                classType: item.classType,
                                ID: item.ID,
                                data: {
                                    fullName: item.name
                                },
                                color: color_map[item.classType],
                                // fontColor: '#000',
                                // borderWidth: 2
                            }
                            if ((item.alias && item.alias.length > 10) || item.name.length > 10) {
                                oneNode.text += '...'
                            }
                            // if (item.img) {
                            //     oneNode.innerHTML = `<div class="c-my-node" style="background-image: url(https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2110325119,1633583088&fm=58&app=83&f=JPEG?w=120&h=120&s=971E35C05A43305DCA7C1C0B030080C)"><div class="c-node-name">${item.name}</div></div>`
                            // }
                            data.nodes.push(oneNode)
                        }
                        for (let item of message.links) {
                            if (item.relation == 'eventObjectC'
                                || item.relation == 'PUNISHC') {
                                data.links.push({
                                    from: item.target,
                                    to: item.source,
                                    text: this.graphLinkNameDict[item.relation],
                                    // color: '#43a2f1'
                                })
                            } else {
                                data.links.push({
                                    from: item.source,
                                    to: item.target,
                                    text: this.graphLinkNameDict[item.relation],
                                    // color: '#43a2f1'
                                })
                            }
                        }
                        console.log(data);
                        this.graphData = data;
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        methods: {
            createdSnackbar() {
                console.log('显示提示')
                this.$store.dispatch('snackbar/openSnackbar', {
                    msg: '温馨提示：抱歉，暂无企业数据，后台将尽快更新，换个企业试试~ ',
                    color: 'warning'
                })
            },
            checkHaveCompany(item) {
                let that = this;
                if (item.length < 4) {
                    return;
                }
                this.axios.post("/api/sykg/query/company_detail", { "params": { "name": item }, "label": "Company" })
                    .then((data) => {
                        console.log("Here what post returns", data);
                        let status = data.data.status;
                        // console.log(status);
                        if (status == 0 && data.data.message.nodes[0] && data.data.message.nodes[0].organizationCode) {
                            console.log(data.data.message.nodes[0]);
                            that.$router.push({ path: '/fkgHome/home', query: { name: item } })
                        } else {
                            that.createdSnackbar()
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                    });
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
        /* align-items: flex-start; */
    }

    .first-row {
        height: 100%;
    }
</style>