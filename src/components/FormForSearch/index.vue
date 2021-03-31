<template lang="">
    <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">检索条件</span>
          <!-- <span class="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span> -->
        </h3>
      </div>
      <!--end::Header-->

        <!--begin::Form-->
        <form>
            <div class="card-body">
                <div class="form-group mb-8" v-if="false">
                    <div class="alert alert-custom alert-default" role="alert">
                        <div class="alert-icon"><i class="flaticon-warning text-primary"></i></div>
                        <div class="alert-text">
                            Here are examples of <code>.form-control</code> applied to each textual HTML5 input type:
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-1 col-form-label">标题关键词</label>
                    <div class="col-3">
                        <input class="form-control" type="text" placeholder="包含以下全部关键词（以空格区分）"
                            id="title_word_include_all" v-model="title_word_include_all" />
                    </div>
                    <label class="col-1 col-form-label"></label>
                    <div class="col-3">
                        <input class="form-control" type="search" placeholder="包含以下任一关键词（以空格区分）"
                            id="title_word_include_one" v-model="title_word_include_one" />
                    </div>
                    <label class="col-1 col-form-label"></label>
                    <div class="col-3">
                        <input class="form-control" type="email" placeholder="不包含以下任一关键词（以空格区分）"
                            id="title_word_not_include" v-model="title_word_not_include" />
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-1 col-form-label">全文关键词</label>
                    <div class="col-3">
                        <input class="form-control" type="text" placeholder="包含以下全部关键词（以空格区分）"
                            id="content_word_include_all" v-model="content_word_include_all" />
                    </div>
                    <label class="col-1 col-form-label"></label>
                    <div class="col-3">
                        <input class="form-control" type="search" placeholder="包含以下任一关键词（以空格区分）"
                            id="content_word_include_one" v-model="content_word_include_one" />
                    </div>
                    <label class="col-1 col-form-label"></label>
                    <div class="col-3">
                        <input class="form-control" type="email" placeholder="不包含以下任一关键词（以空格区分）"
                            id="content_word_not_include" v-model="content_word_not_include" />
                    </div>
                </div>

                <!-- <div class="form-group row">
                    <label class="col-form-label col-3">其他条件</label>
                    <div class="col-3">
                        <div class="input-daterange input-group" id="kt_datepicker_5">
                            <input type="text" class="form-control" name="start" />
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="la la-ellipsis-h"></i></span>
                            </div>
                            <input type="text" class="form-control" name="end" />
                        </div>
                        <span class="form-text text-muted">颁布开始时间至颁布结束时间</span>
                        <v-row justify="center" v-if="false">
                            <v-date-picker v-model="picker"></v-date-picker>
                          </v-row>
                    </div>
                    <div class="col-3">

                        <div class="input-daterange input-group" id="kt_datepicker_5">
                            <input type="text" class="form-control" name="start" />
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="la la-ellipsis-h"></i></span>
                            </div>
                            <input type="text" class="form-control" name="end" />
                        </div>

                        <span class="form-text text-muted">生效开始时间至生效结束时间</span>
                    </div>
                    <div class="col-3">
                        <div class="input-daterange input-group" id="kt_datepicker_5">
                            <input type="text" class="form-control" name="start" />
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="la la-ellipsis-h"></i></span>
                            </div>
                            <input type="text" class="form-control" name="end" />
                        </div>
                        <span class="form-text text-muted">发文单位</span>
                    </div>
                </div> -->
                <div class="form-group row">
                    <label for="example-datetime-local-input" class="col-1 col-form-label">颁布时间</label>
                    <div class="col-2">
                        <input class="form-control" type="date" id="publish_start" v-model="publish_start" />
                    </div>
                    <label for="example-datetime-local-input" class="col-1 col-form-label">至</label>
                    <div class="col-2">
                        <input class="form-control" type="date" id="publish_end" v-model="publish_end" />
                    </div>
                    <label for="example-datetime-local-input" class="col-1 col-form-label">生效时间</label>
                    <div class="col-2">
                        <input class="form-control" type="date" id="effetive-start" v-model="effective_start"/>
                    </div>
                    <label for="example-datetime-local-input" class="col-1 col-form-label">至</label>
                    <div class="col-2">
                        <input class="form-control" type="date" id="effetive-end" v-model="effective_end"/>
                    </div>
                </div>
                <div class="form-group row">
                   

                </div>
                <!-- <div class="form-group row">
                    <label for="example-date-input" class="col-1 col-form-label">发文单位</label>
                    <div class="col-3">
                        <select class="form-control" v-model="publish_department">
                            <option value="1">1</option>
                            <option value="1">2</option>
                        </select>
                    </div>
                </div> -->
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-3">
                    </div>
                    <div class="col-9">
                        <button class="btn btn-success mr-2" @click="submitSearch">检索</button>
                        <button class="btn btn-secondary">重置</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'FormForLawSearch',
        data() {
            return {
                title_word_include_all: '',
                title_word_include_one: '',
                title_word_not_include: '',
                content_word_include_all: '',
                content_word_include_one: '',
                content_word_not_include: '',
                publish_start: this.$moment().subtract('days', 180).format('YYYY-MM-DD'),
                publish_end: this.$moment().format('YYYY-MM-DD'),
                effective_start: '',
                effective_end: '',
                publish_department: '',
            }
        },
        methods: {
            submitSearch() {
                let title_word_include_all_list = this.title_word_include_all ? this.title_word_include_all.split(' '): [];
                let title_word_include_one_list = this.title_word_include_one ? this.title_word_include_one.split(' '): [];
                let title_word_not_include_list = this.title_word_not_include ? this.title_word_not_include.split(' '): [];
                let content_word_include_all_list = this.content_word_include_all ? this.content_word_include_all.split(' '): [];
                let content_word_include_one_list = this.content_word_include_one ? this.content_word_include_one.split(' '): [];
                let content_word_not_include_list = this.content_word_not_include ? this.content_word_not_include.split(' '): [];
                let public_start = this.publish_start ? this.publish_start + ' 00:00:00': null;
                let public_end = this.publish_end ? this.publish_end + ' 00:00:00': null;
                let effetive_start = this.effective_start ? this.effective_start + ' 00:00:00': null;
                let effetive_end = this.effective_end ? this.effective_end + ' 00:00:00': null;
                console.log(public_start,public_end,effetive_start,effetive_end);
                let publish_department = this.publish_department ? this.publish_department: '';
                console.log(publish_department)
                let action_time_cond = {}, pub_time_cond={}
                if(effetive_start){
                    action_time_cond.from = effetive_start
                }
                if(effetive_end){
                    action_time_cond.to = effetive_end
                }
                if(public_start){
                    pub_time_cond.from = public_start
                }
                if(public_end){
                    pub_time_cond.to = public_end
                }
                let params = {
                    "or": {
                        "content": content_word_include_one_list,
                        "title": title_word_include_one_list
                    },
                    "and":
                    {
                        "content": content_word_include_all_list,
                         "title": title_word_include_all_list
                    },
                    "not":
                    {
                        "content": content_word_not_include_list, 
                        "title": title_word_not_include_list
                    },
                    publishDepartment: publish_department,
                    actionTime:action_time_cond,
                    pubTime: pub_time_cond,
                }
                console.log(params);
                this.$emit("gotoSearch", params);
            }
        },
    }
</script>
<style scoped>
    .row{
        align-items: center;
    }
</style>