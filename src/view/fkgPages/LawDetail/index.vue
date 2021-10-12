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
      <div class="col-lg-2">
        <aside-menu
          v-on:gotoItem="ToItem"
          v-if="articleMenu"
          :menuData="articleMenu"
        />
      </div>
      <div class="col-lg-10">
        <div class="row">
          <div class="col-lg-7">
            <!--begin::Card-->
            <div class="card card-custom card-stretch" id="kt_todo_view">
              <!--begin::Header-->
              <div class="card-header align-items-center border-0 mt-4">
                <h3 class="card-title align-items-start flex-column">
                  <span class="font-weight-bolder text-dark">法规正文</span>
                </h3>
              </div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body p-0">
                <!--begin::Header-->
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap card-spacer-x py-3"
                >
                  <!--begin::Title-->
                  <div class="d-flex flex-column mr-2 py-2" v-if="lawInfo[0]">
                    <a
                      href="#"
                      class="text-dark text-hover-primary font-weight-bold font-size-h4 mr-3"
                      >{{ lawInfo[0].title }}</a
                    >
                    <div class="d-flex align-items-center py-1">
                      <a
                        href="#"
                        class="d-flex align-items-center text-muted text-hover-primary mr-2"
                        v-if="lawInfo[0].status"
                      >
                        <span
                          class="fa fa-genderless text-danger icon-md mr-2"
                        ></span
                        >{{ lawInfo[0].status }}</a
                      >
                      <a
                        href="#"
                        class="d-flex align-items-center text-muted text-hover-primary"
                        v-if="lawInfo[0].release_date"
                      >
                        <span
                          class="fa fa-genderless text-success icon-md mr-2"
                        ></span
                        >{{ lawInfo[0].release_date | formatDate }}颁布</a
                      >
                      <a
                        href="#"
                        class="d-flex align-items-center text-muted text-hover-primary"
                        v-if="lawInfo[0].date"
                      >
                        <span
                          class="fa fa-genderless text-success icon-md mr-2"
                        ></span
                        >{{ lawInfo[0].date | formatDate }}生效</a
                      >
                    </div>
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

                <!--begin::Messages-->
                <div class="mb-3" v-if="lawInfo[0] && lawInfo[0].summary">
                  <!--begin::Message-->
                  <div
                    class="cursor-pointer shadow-xs toggle-on"
                    data-inbox="message"
                  >
                    <!--begin::Comment-->
                    <div class="card-spacer-x pt-2 pb-5 toggle-off-item">
                      <!--begin::Text-->
                      <div class="mb-1">
                        <p
                          v-for="(item, index) in lawInfo[0].summary"
                          :key="index"
                        >
                          {{ item }}
                        </p>
                      </div>
                      <!--end::Text-->
                    </div>
                    <!--end::Comment-->
                  </div>
                  <!--end::Message-->
                </div>
                <!--end::Messages-->

                <!-- 以下为正文内容 -->
                <!--begin::Messages-->
                <div class="mb-3" v-for="(item, index) in lawInfo" :key="index">
                  <!--begin::Message-->
                  <div
                    class="cursor-pointer shadow-xs toggle-on"
                    data-inbox="message"
                  >
                    <!--begin::Info-->
                    <div class="d-flex align-items-start card-spacer-x py-4">
                      <!--begin::User Details-->
                      <div
                        class="d-flex flex-column flex-grow-1 flex-wrap mr-2"
                      >
                        <div class="d-flex">
                          <span
                            class="font-size-lg font-weight-bolder text-dark-75 text-hover-primary mr-2"
                          ></span>
                        </div>
                        <div class="d-flex flex-column">
                          <div class="toggle-off-item">
                            <p
                              class="font-weight-bolder"
                              v-if="
                                index - 1 == -1 ||
                                  lawInfo[index - 1].index_f != item.index_f
                              "
                            >
                              {{ item.index_f }}
                            </p>
                            <p v-else>{{ item.index_s }}</p>
                            <!-- <span class="font-weight-bold text-muted cursor-pointer"
                                                            data-toggle="dropdown">to me
                                                            <i
                                                                class="flaticon2-down icon-xs ml-1 text-dark-50"></i></span> -->
                            <div
                              class="dropdown-menu dropdown-menu-md dropdown-menu-left p-5"
                            >
                              <table>
                                <tr>
                                  <td class="text-muted w-75px py-2">From</td>
                                  <td>Mark Andre</td>
                                </tr>
                                <tr>
                                  <td class="text-muted py-2">Date:</td>
                                  <td>11:27 PM</td>
                                </tr>
                                <tr>
                                  <td class="text-muted py-2">Subject:</td>
                                  <td>
                                    Trip Reminder. Thank you for flying with us!
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-muted py-2">Reply to:</td>
                                  <td>mark.andre@gmail.com</td>
                                </tr>
                              </table>
                            </div>
                          </div>
                          <div
                            class="text-muted font-weight-bold toggle-on-item"
                            data-inbox="toggle"
                          >
                            With resrpect, i must disagree with Mr.Zinsser. We
                            all know the most part of important part....
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div
                          class="d-flex align-items-center"
                          data-inbox="toolbar"
                        >
                          <span
                            class="btn btn-clean btn-xs btn-icon mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Star"
                          >
                            <i class="flaticon-star icon-1x text-warning"></i>
                          </span>
                          <span
                            class="btn btn-clean btn-xs btn-icon"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Mark as important"
                          >
                            <i class="flaticon-add-label-button icon-1x"></i>
                          </span>
                          <span
                            class="btn btn-clean btn-xs btn-icon"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Mark as important"
                          >
                            <i class="flaticon-star icon-1x text-warning"></i>
                          </span>
                        </div>
                      </div>
                      <!--end::User Details-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Comment-->
                    <div class="card-spacer-x pt-2 pb-5 toggle-off-item">
                      <!--begin::Text-->
                      <div class="mb-1">
                        <p
                          v-if="
                            (index - 1 == -1 ||
                              lawInfo[index - 1].index_f != item.index_f) &&
                              item.index_s
                          "
                          :id="item.index_s"
                        >
                          {{ item.index_s }}
                        </p>
                        <p v-if="item.content">{{ item.content }}</p>
                      </div>
                      <!--end::Text-->
                      <!--begin::Attachments-->
                      <!-- <div class="d-flex flex-column font-size-sm font-weight-bold">
                                                <a href="#"
                                                    class="d-flex align-items-center text-muted text-hover-primary py-1">
                                                    <span
                                                        class="flaticon2-clip-symbol text-warning icon-1x mr-2"></span>相关链接1</a>
                                                <a href="#"
                                                    class="d-flex align-items-center text-muted text-hover-primary py-1">
                                                    <span
                                                        class="flaticon2-clip-symbol text-warning icon-1x mr-2"></span>相关链接2</a>
                                            </div> -->
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
          </div>
          <div class="col-lg-5">
            <!-- 法律文件信息开始 -->
            <div class="card card-custom">
              <!--begin::Header-->
              <div class="card-header align-items-center border-0 mt-4">
                <h3 class="card-title align-items-start flex-column">
                  <span class="font-weight-bolder text-dark">法规详情</span>
                </h3>
              </div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body py-4">
                <div
                  class="form-group row my-2"
                  v-if="lawInfo[0] && lawInfo[0].important"
                >
                  <label class="col-4 col-form-label">重要性指数</label>
                  <div class="col-8">
                    <span
                      v-if="lawInfo[0].important < 6"
                      class="form-control-plaintext font-weight-bolder"
                      >{{ lawInfo[0].important * 20 }}</span
                    >
                    <span
                      v-else
                      class="form-control-plaintext font-weight-bolder"
                      >{{ lawInfo[0].important }}</span
                    >
                  </div>
                </div>
                <div
                  class="form-group row my-2"
                  v-if="lawInfo[0] && lawInfo[0].file_type"
                >
                  <label class="col-4 col-form-label">法律位阶</label>
                  <div class="col-8">
                    <span class="form-control-plaintext font-weight-bolder">{{
                      lawInfo[0].file_type
                    }}</span>
                  </div>
                </div>
                <div
                  class="form-group row my-2"
                  v-if="lawInfo[0] && lawInfo[0].dispatch_units"
                >
                  <label class="col-4 col-form-label">发文单位</label>
                  <div class="col-8">
                    <span class="form-control-plaintext font-weight-bolder">{{
                      lawInfo[0].dispatch_units
                    }}</span>
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
            <!-- 法律文件信息结束 -->

            <!-- 历史沿革开始 -->
            <div class="card card-custom history-timeline">
              <!--begin::Header-->
              <div class="card-header align-items-center border-0 mt-4">
                <h3 class="card-title align-items-start flex-column">
                  <span class="font-weight-bolder text-dark">法规历史沿革</span>
                </h3>
              </div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body pt-4">
                <!--begin::Timeline-->
                <div class="timeline timeline-6 mt-3">
                  <!--begin::Item-->
                  <div class="timeline-item align-items-start">
                    <!--begin::Label-->
                    <div
                      class="timeline-label font-weight-bolder text-dark-75 font-size-lg"
                    >
                      2015-4-24
                    </div>
                    <!--end::Label-->
                    <!--begin::Badge-->
                    <div class="timeline-badge">
                      <i class="fa fa-genderless text-warning icon-xl"></i>
                    </div>
                    <!--end::Badge-->
                    <!--begin::Text-->
                    <div
                      class="font-weight-mormal font-size-lg timeline-content text-muted pl-3"
                    >
                      第十二届全国人民代表大会常务委员会第十四次会议《关于修改〈中华人民共和国计量法〉等五部法律的决定》第三次修正）
                    </div>
                    <!--end::Text-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="timeline-item align-items-start">
                    <!--begin::Label-->
                    <div
                      class="timeline-label font-weight-bolder text-dark-75 font-size-lg"
                    >
                      2014-8-31
                    </div>
                    <!--end::Label-->
                    <!--begin::Badge-->
                    <div class="timeline-badge">
                      <i class="fa fa-genderless text-success icon-xl"></i>
                    </div>
                    <!--end::Badge-->
                    <!--begin::Content-->
                    <div class="timeline-content d-flex">
                      <span
                        class="font-weight-bolder text-dark-75 pl-3 font-size-lg"
                        >第十二届全国人民代表大会常务委员会第十次会议《关于修改〈中华人民共和国保险法〉等五部法律的决定》第二次修正</span
                      >
                    </div>
                    <!--end::Content-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="timeline-item align-items-start">
                    <!--begin::Label-->
                    <div
                      class="timeline-label font-weight-bolder text-dark-75 font-size-lg"
                    >
                      2002-10-28
                    </div>
                    <!--end::Label-->
                    <!--begin::Badge-->
                    <div class="timeline-badge">
                      <i class="fa fa-genderless text-danger icon-xl"></i>
                    </div>
                    <!--end::Badge-->
                    <!--begin::Desc-->
                    <div
                      class="timeline-content font-weight-bolder font-size-lg text-dark-75 pl-3"
                    >
                      第九届全国人民代表大会常务委员会第三十次会议《关于修改〈中华人民共和国保险法〉的决定》第一次修正
                    </div>
                    <!--end::Desc-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="timeline-item align-items-start">
                    <!--begin::Label-->
                    <div
                      class="timeline-label font-weight-bolder text-dark-75 font-size-lg"
                    >
                      1995-6-30
                    </div>
                    <!--end::Label-->
                    <!--begin::Badge-->
                    <div class="timeline-badge">
                      <i class="fa fa-genderless text-primary icon-xl"></i>
                    </div>
                    <!--end::Badge-->
                    <!--begin::Text-->
                    <div
                      class="timeline-content font-weight-mormal font-size-lg text-muted pl-3"
                    >
                      第八届全国人民代表大会常务委员会第十四次会议通过颁布
                    </div>
                    <!--end::Text-->
                  </div>
                  <!--end::Item-->
                </div>
                <!--end::Timeline-->
              </div>
              <!--end: Card Body-->
            </div>
            <!-- 历史沿革结束 -->

            <!-- 相关处罚开始 -->
            <div class="card card-custom relative-events">
              <!--begin::Header-->
              <div class="card-header align-items-center border-0 mt-4">
                <h3 class="card-title align-items-start flex-column">
                  <span class="font-weight-bolder text-dark">相关处罚</span>
                </h3>
              </div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body pt-1">
                <div class="tab-content mt-5" id="myTabLIist18">
                  <!--begin::Tap pane-->
                  <div
                    class="tab-pane fade active show"
                    id="kt_tab_pane_1_1"
                    role="tabpanel"
                    aria-labelledby="kt_tab_pane_1_1"
                  >
                    <!--begin::Form-->
                    <div class="form" v-if="relationData.punish">
                      <!--begin::Item-->
                      <div
                        class="d-flex align-items-center pb-9"
                        v-for="item in relationData.punish.slice(0, 10)"
                        :key="item.ID"
                      >
                        <!--begin::Section-->
                        <div class="d-flex flex-column flex-grow-1">
                          <!--begin::Title-->
                          <router-link
                            :to="{
                              path: '/fkgHome/punishmentDetail/' + item.ID
                            }"
                            class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-1"
                          >
                            {{ item.name }}</router-link
                          >
                          <!--end::Title-->
                        </div>
                        <!--end::Section-->
                      </div>
                      <!--end::Item-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Tap pane-->
                  <!--begin::Tap pane-->
                  <div
                    class="tab-pane fade"
                    id="kt_tab_pane_2_2"
                    role="tabpanel"
                    aria-labelledby="kt_tab_pane_2_2"
                  >
                    <!--begin::Form-->
                    <div class="form">
                      <!--begin::Item-->
                      <div class="d-flex align-items-center pb-9">
                        <!--begin::Symbol-->
                        <div
                          class="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4"
                        >
                          <div
                            class="symbol-label"
                            style="background-image: url('/metronic/theme/html/demo7/dist/assets/media/stock-600x400/img-20.jpg')"
                          ></div>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Section-->
                        <div class="d-flex flex-column flex-grow-1">
                          <!--begin::Title-->
                          <a
                            href="#"
                            class="text-dark-75 font-weight-bolder font-size-lg text-hover-primary mb-1"
                            >Cup &amp; Green</a
                          >
                          <!--end::Title-->
                          <!--begin::Desc-->
                          <span
                            class="text-dark-50 font-weight-normal font-size-sm"
                            >Your company your website have long term business
                            objectives. You should think about</span
                          >
                          <!--begin::Desc-->
                        </div>
                        <!--end::Section-->
                      </div>
                      <!--end::Item-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Tap pane-->
                </div>
              </div>
              <!--end::Body-->
            </div>
            <!-- 相关处罚结束 -->

            <!-- 相关案例开始 -->
            <div class="card card-custom relative-events">
              <!--begin::Header-->
              <div class="card-header align-items-center border-0 mt-4">
                <h3 class="card-title align-items-start flex-column">
                  <span class="font-weight-bolder text-dark">相关案例</span>
                </h3>
              </div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body pt-1">
                <div class="tab-content mt-5" id="myTabLIist18">
                  <!--begin::Tap pane-->
                  <div
                    class="tab-pane fade active show"
                    id="kt_tab_pane_1_1"
                    role="tabpanel"
                    aria-labelledby="kt_tab_pane_1_1"
                  >
                    <!--begin::Form-->
                    <div class="form">
                      <!--begin::Item-->
                      <div
                        class="d-flex align-items-center pb-9"
                        v-for="item in relationData.case"
                        :key="item.ID"
                      >
                        <!--begin::Section-->
                        <div class="d-flex flex-column flex-grow-1">
                          <!--begin::Title-->
                          <router-link
                            :to="{ path: '/fkgHome/eventDetail/' + item.ID }"
                            class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-1"
                          >
                            {{ item.name }}</router-link
                          >
                          <!--end::Title-->
                        </div>
                        <!--end::Section-->
                      </div>
                      <!--end::Item-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Tap pane-->
                  <!--begin::Tap pane-->
                  <div
                    class="tab-pane fade"
                    id="kt_tab_pane_2_2"
                    role="tabpanel"
                    aria-labelledby="kt_tab_pane_2_2"
                  >
                    <!--begin::Form-->
                    <div class="form">
                      <!--begin::Item-->
                      <div class="d-flex align-items-center pb-9">
                        <!--begin::Symbol-->
                        <div
                          class="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4"
                        >
                          <div
                            class="symbol-label"
                            style="background-image: url('/metronic/theme/html/demo7/dist/assets/media/stock-600x400/img-20.jpg')"
                          ></div>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Section-->
                        <div class="d-flex flex-column flex-grow-1">
                          <!--begin::Title-->
                          <a
                            href="#"
                            class="text-dark-75 font-weight-bolder font-size-lg text-hover-primary mb-1"
                            >Cup &amp; Green</a
                          >
                          <!--end::Title-->
                          <!--begin::Desc-->
                          <span
                            class="text-dark-50 font-weight-normal font-size-sm"
                            >Your company your website have long term business
                            objectives. You should think about</span
                          >
                          <!--begin::Desc-->
                        </div>
                        <!--end::Section-->
                      </div>
                      <!--end::Item-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Tap pane-->
                </div>
              </div>
              <!--end::Body-->
            </div>
            <!-- 相关案例结束 -->

            <!-- 相关事件开始 -->
            <div class="card card-custom relative-events">
              <!--begin::Header-->
              <div class="card-header align-items-center border-0 mt-4">
                <h3 class="card-title align-items-start flex-column">
                  <span class="font-weight-bolder text-dark">相关事件</span>
                </h3>
              </div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body pt-1">
                <div class="tab-content mt-5" id="myTabLIist18">
                  <!--begin::Tap pane-->
                  <div
                    class="tab-pane fade active show"
                    id="kt_tab_pane_1_1"
                    role="tabpanel"
                    aria-labelledby="kt_tab_pane_1_1"
                  >
                    <!--begin::Form-->
                    <div class="form">
                      <!--begin::Item-->
                      <div
                        class="d-flex align-items-center pb-9"
                        v-for="item in relationData.events"
                        :key="item.ID"
                      >
                        <!--begin::Section-->
                        <div class="d-flex flex-column flex-grow-1">
                          <!--begin::Title-->
                          <router-link
                            :to="{ path: '/fkgHome/oneEventDetail/' + item.ID }"
                            class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-1"
                          >
                            {{ item.name }}</router-link
                          >
                          <!--end::Title-->
                        </div>
                        <!--end::Section-->
                      </div>
                      <!--end::Item-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Tap pane-->
                  <!--begin::Tap pane-->
                  <div
                    class="tab-pane fade"
                    id="kt_tab_pane_2_2"
                    role="tabpanel"
                    aria-labelledby="kt_tab_pane_2_2"
                  >
                    <!--begin::Form-->
                    <div class="form">
                      <!--begin::Item-->
                      <div class="d-flex align-items-center pb-9">
                        <!--begin::Symbol-->
                        <div
                          class="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4"
                        >
                          <div
                            class="symbol-label"
                            style="background-image: url('/metronic/theme/html/demo7/dist/assets/media/stock-600x400/img-20.jpg')"
                          ></div>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Section-->
                        <div class="d-flex flex-column flex-grow-1">
                          <!--begin::Title-->
                          <a
                            href="#"
                            class="text-dark-75 font-weight-bolder font-size-lg text-hover-primary mb-1"
                            >Cup &amp; Green</a
                          >
                          <!--end::Title-->
                          <!--begin::Desc-->
                          <span
                            class="text-dark-50 font-weight-normal font-size-sm"
                            >Your company your website have long term business
                            objectives. You should think about</span
                          >
                          <!--begin::Desc-->
                        </div>
                        <!--end::Section-->
                      </div>
                      <!--end::Item-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Tap pane-->
                </div>
              </div>
              <!--end::Body-->
            </div>
            <!-- 相关事件结束 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import AsideMenu from "@/components/Aside/Aside";

export default {
  name: "LawDetail",
  components: {
    AsideMenu
  },
  computed: {
    ...mapGetters(["currentUserPhoto"]),
    articleMenu: function() {
      let menuList = [];
      let preChapter = "#";
      let curChapter = [];
      for (let item of this.lawInfo) {
        if (item.index_f && item.index_f != preChapter) {
          //为新章节的第一条
          if (preChapter != "#") {
            let obj = {};
            obj[preChapter] = curChapter;
            menuList.push(obj);
          }
          curChapter = [item.index_s];
          preChapter = item.index_f;
        } else {
          curChapter.push(item.index_s);
        }
      }
      if (curChapter.length > 0) {
        let obj = {};
        obj[preChapter] = curChapter;
        menuList.push(obj);
      }
      // console.log(menuList);
      return menuList;
    }
  },
  data() {
    return {
      lawInfo: [],
      pre_index_f: "#", //记录前一章节，确定当前是否需要更换章节
      relationData: {
        case: [],
        events: [],
        punish: []
      }
    };
  },
  props: ["lawId"],
  created() {
    this.axios
      .post("/api/sykg/query/law_infos/infos", { sourceID: this.lawId })
      .then(data => {
        console.log("法规详情", data);
        let status = data.data.status;
        if (status == 0) {
          // console.log(data.data.message.size);
          this.lawInfo = data.data.message.data;
          this.relationData = data.data.message.extra_data;
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  mounted() {
    console.log(this.lawId);
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "法规详情" }]);
  },
  methods: {
    ToItem(item) {
      // console.log('去' + item);
      var obj = document.getElementById(item);
      document.documentElement.scrollTop = obj.offsetTop;
    }
  }
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
</style>
