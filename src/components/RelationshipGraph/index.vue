<template>
    <div>
        <div style="height:calc(60vh);">
            <RelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-click="onNodeClick"
                :on-line-click="onLineClick" />
        </div>
    </div>
</template>

<script>
    import RelationGraph from 'relation-graph'
    export default {
        name: 'Demo',
        components: { RelationGraph },
        data() {
            return {
                graphOptions: {
                    allowSwitchLineShape: true,
                    allowSwitchJunctionPoint: true,
                    defaultJunctionPoint: 'border',
                    layouts: [
                        {
                            'label': '自动布局',
                            'layoutName': 'force',
                            'layoutClassName': 'seeks-layout-force'
                        }]
                    // 这里可以参考"Graph 图谱"中的参数进行设置
                }
            }
        },
        props: {
            graphData: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        mounted() {
            //   this.showSeeksGraph()
        },
        watch: {
            graphData: function () {
                console.log('监听到变化')
                this.showSeeksGraph()
            }
        },
        methods: {
            showSeeksGraph(query) {
                console.log(query)
                var __graph_json_data = {
                    rootId: 'a',
                    nodes: this.graphData.nodes,
                    //   [
                    //     { id: 'a', text: 'A', borderColor: 'yellow' },
                    //     { id: 'b', text: 'B', color: '#43a2f1', fontColor: 'yellow' },
                    //     { id: 'c', text: 'C', nodeShape: 1, width: 80, height: 60 },
                    //     { id: 'e', text: 'E', nodeShape: 0, width: 150, height: 150 }
                    //   ],
                    links: this.graphData.links,
                    //   [
                    //     { from: 'a', to: 'b', text: '关系1', color: '#43a2f1' },
                    //     { from: 'a', to: 'c', text: '关系2' },
                    //     { from: 'a', to: 'e', text: '关系3' },
                    //     { from: 'b', to: 'e', color: '#67C23A' }
                    //   ]
                }
                // 以上数据中的node和link可以参考"Node节点"和"Link关系"中的参数进行配置 
                this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
                    // Called when the relation-graph is completed 
                    console.log(seeksRGGraph)
                })
            },
            onNodeClick(nodeObject, $event) {
                console.log('onNodeClick:', nodeObject, $event)
                let nodeId = nodeObject.id;
                let nodeData = null;
                for (let item of this.graphData.nodes) {
                    if (item.id == nodeId) {
                        nodeData = item;
                    }
                }
                // console.log('123'+ nodeData)
                if (nodeData && nodeData.classType == 'Punishment') {
                    console.log('data find')
                    console.log(nodeData);
                    this.axios.post('/api/sykg/query/punish_infos/basic',
                        { IDs: [nodeData.ID] }
                    ).then((data) => {
                        console.log(data);
                        if (data.data.status == 0 && data.data.message.data[0]) {
                            let info = data.data.message.data[0];
                            this.$router.push({
                                path: '/fkgHome/punishmentDetail/' + nodeData.ID,
                                query: {
                                    info: info
                                }
                            })
                        }

                    })
                }
            },
            onLineClick(lineObject, $event) {
                console.log('onLineClick:', lineObject, $event)
            }
        }
    }
</script>