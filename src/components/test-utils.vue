<template>
  <div class="wrap">
    <hellobinuo />
    newUrl:
    <br />
    {{ url }}
    <br />
  </div>
</template>

<script>
import {
  debounce,
  composeUrl,
  isObject,
  isBrowser,
  isRetina
} from "@i61/common-function-utils";
import jquery from "jquery"

export default {
  data() {
    return {
      customName: "binuo20211010",
      name: "比诺",
      count: 1,
      url: ""
    };
  },
  mounted() {
    debugger
    console.log("jquery:", jquery);
    const b = isRetina();
    console.log("isRetina:", b);
    const a = isObject();
    console.log("isObject:", a);
    const url = composeUrl({
      host: "liuyi.local.com:8080",
      pathname: "/binuo",
      hash: "a=123123"
    });
    this.url = url;
    const preData1 = [
      {
        id: "1",
        text: "a",
        type: 1,
        child: [
          {
            parent_id: "1",
            id: "1-1",
            type: 2,
            text: "a-1"
          },
          {
            parent_id: "1",
            id: "1-2",
            type: 2,
            text: "a-2"
          }
        ]
      }
    ];
    const data1 = [
      {
        parent_id: "1",
        id: "1-3",
        text: "a-3",
        type: 2
      },
      {
        parent_id: "1-1",
        id: "1-1-1",
        text: "a-1-1",
        type: 3
      }
    ];

    // start-end
    const preData = [
      {
        child: [
          {
            child: [
              {
                child: null,
                id: 1986888399,
                parentName: "口才销售部$上海王端齐区",
                nodeName: "口才销售部$上海王端齐区$王端齐口才团队",
                parent_id: 913271796,
                cc_dep: "口才销售部",
                cc_sd_group: "上海王端齐区",
                cc_sm_group: "王端齐口才团队",
                cc_group: "",
                cc_adminid: "-1",
                cc_empno: "",
                cc_name: "",
                type: 3,
                cur_row_name: null,
                source: null,
                cc_num: null,
                call_num_after: 0,
                wait_call_num_after: 0,
                call_rate_after: "0",
                user_num: 110,
                invite_num: 5,
                no_invite_num: 105,
                invite_rate: "0.05",
                should_attend_num: 2,
                call_num_before: 0,
                wait_call_num_before: 2,
                call_rate_before: "0.00",
                call_num_success_before: 0,
                call_num_failed_before: 0,
                call_rate_success_before: "0",
                attend_num: 0,
                attend_count: 0,
                no_attend_num: 2,
                attend_rate: "0.00",
                call_num_success_after: 0,
                call_num_failed_after: 0,
                call_rate_success_after: "0",
                call_num_finish_after: 0,
                wait_call_num_finish_after: 0,
                call_rate_finish_after: "0",
                call_duration_after: null,
                payed_num: 0,
                transfor_rate: "0.00",
                hasChildren: true
              }
            ],
            id: 913271796,
            parentName: "口才销售部",
            nodeName: "口才销售部$上海王端齐区",
            parent_id: 1916773413,
            cc_dep: "口才销售部",
            cc_sd_group: "上海王端齐区",
            cc_sm_group: "",
            cc_group: "",
            cc_adminid: "-1",
            cc_empno: "",
            cc_name: "",
            type: 2,
            cur_row_name: null,
            source: null,
            cc_num: null,
            call_num_after: null,
            wait_call_num_after: null,
            call_rate_after: "0",
            user_num: 110,
            invite_num: 5,
            no_invite_num: 105,
            invite_rate: "0.05",
            should_attend_num: 2,
            call_num_before: null,
            wait_call_num_before: null,
            call_rate_before: "0.00",
            call_num_success_before: null,
            call_num_failed_before: null,
            call_rate_success_before: "0",
            attend_num: null,
            attend_count: null,
            no_attend_num: 2,
            attend_rate: "0.00",
            call_num_success_after: null,
            call_num_failed_after: null,
            call_rate_success_after: "0",
            call_num_finish_after: null,
            wait_call_num_finish_after: null,
            call_rate_finish_after: "0",
            call_duration_after: null,
            payed_num: null,
            transfor_rate: "0.00",
            hasChildren: true
          },
          {
            child: null,
            id: 1597918773,
            parentName: "口才销售部",
            nodeName: "口才销售部$上海童宇周区",
            parent_id: 1916773413,
            cc_dep: "口才销售部",
            cc_sd_group: "上海童宇周区",
            cc_sm_group: "",
            cc_group: "",
            cc_adminid: "-1",
            cc_empno: "",
            cc_name: "",
            type: 2,
            cur_row_name: null,
            source: null,
            cc_num: null,
            call_num_after: null,
            wait_call_num_after: null,
            call_rate_after: "0",
            user_num: 798,
            invite_num: 203,
            no_invite_num: 595,
            invite_rate: "0.25",
            should_attend_num: 56,
            call_num_before: null,
            wait_call_num_before: null,
            call_rate_before: "0.00",
            call_num_success_before: null,
            call_num_failed_before: null,
            call_rate_success_before: "0",
            attend_num: null,
            attend_count: null,
            no_attend_num: 56,
            attend_rate: "0.00",
            call_num_success_after: null,
            call_num_failed_after: null,
            call_rate_success_after: "0",
            call_num_finish_after: null,
            wait_call_num_finish_after: null,
            call_rate_finish_after: "0",
            call_duration_after: null,
            payed_num: null,
            transfor_rate: "0.00",
            hasChildren: true
          },
          {
            child: null,
            id: 1468345389,
            parentName: "口才销售部",
            nodeName: "口才销售部$拓科口才专项区",
            parent_id: 1916773413,
            cc_dep: "口才销售部",
            cc_sd_group: "拓科口才专项区",
            cc_sm_group: "",
            cc_group: "",
            cc_adminid: "-1",
            cc_empno: "",
            cc_name: "",
            type: 2,
            cur_row_name: null,
            source: null,
            cc_num: null,
            call_num_after: null,
            wait_call_num_after: null,
            call_rate_after: "0",
            user_num: 1,
            invite_num: 1,
            no_invite_num: 0,
            invite_rate: "1.00",
            should_attend_num: 1,
            call_num_before: null,
            wait_call_num_before: null,
            call_rate_before: "0.00",
            call_num_success_before: null,
            call_num_failed_before: null,
            call_rate_success_before: "0",
            attend_num: null,
            attend_count: null,
            no_attend_num: 1,
            attend_rate: "0.00",
            call_num_success_after: null,
            call_num_failed_after: null,
            call_rate_success_after: "0",
            call_num_finish_after: null,
            wait_call_num_finish_after: null,
            call_rate_finish_after: "0",
            call_duration_after: null,
            payed_num: null,
            transfor_rate: "0.00",
            hasChildren: true
          }
        ],
        id: 1916773413,
        parentName: null,
        nodeName: "口才销售部",
        parent_id: null,
        cc_dep: "口才销售部",
        cc_sd_group: "",
        cc_sm_group: "",
        cc_group: "",
        cc_adminid: "-1",
        cc_empno: "",
        cc_name: "",
        type: 1,
        cur_row_name: null,
        source: null,
        cc_num: null,
        call_num_after: null,
        wait_call_num_after: null,
        call_rate_after: "0",
        user_num: 909,
        invite_num: 209,
        no_invite_num: 700,
        invite_rate: "0.23",
        should_attend_num: 59,
        call_num_before: null,
        wait_call_num_before: null,
        call_rate_before: "0.00",
        call_num_success_before: null,
        call_num_failed_before: null,
        call_rate_success_before: "0",
        attend_num: null,
        attend_count: null,
        no_attend_num: 59,
        attend_rate: "0.00",
        call_num_success_after: null,
        call_num_failed_after: null,
        call_rate_success_after: "0",
        call_num_finish_after: null,
        wait_call_num_finish_after: null,
        call_rate_finish_after: "0",
        call_duration_after: null,
        payed_num: null,
        transfor_rate: "0.00",
        hasChildren: true
      }
    ];
    const data = [
      {
        child: null,
        id: 1795505658,
        parentName: "口才销售部$上海童宇周区",
        nodeName: "口才销售部$上海童宇周区$姚舒舒口才团队",
        parent_id: 1597918773,
        cc_dep: "口才销售部",
        cc_sd_group: "上海童宇周区",
        cc_sm_group: "姚舒舒口才团队",
        cc_group: "",
        cc_adminid: "-1",
        cc_empno: "",
        cc_name: "",
        type: 3,
        cur_row_name: null,
        source: null,
        cc_num: null,
        call_num_after: 0,
        wait_call_num_after: 0,
        call_rate_after: "0",
        user_num: 459,
        invite_num: 121,
        no_invite_num: 338,
        invite_rate: "0.26",
        should_attend_num: 29,
        call_num_before: 0,
        wait_call_num_before: 29,
        call_rate_before: "0.00",
        call_num_success_before: 0,
        call_num_failed_before: 0,
        call_rate_success_before: "0",
        attend_num: 0,
        attend_count: 0,
        no_attend_num: 29,
        attend_rate: "0.00",
        call_num_success_after: 0,
        call_num_failed_after: 0,
        call_rate_success_after: "0",
        call_num_finish_after: 0,
        wait_call_num_finish_after: 0,
        call_rate_finish_after: "0",
        call_duration_after: null,
        payed_num: 0,
        transfor_rate: "0.00"
      },
      {
        child: null,
        id: 2105304574,
        parentName: "口才销售部$拓科口才专项区",
        nodeName: "口才销售部$拓科口才专项区$童宇周口才团队",
        parent_id: 1468345389,
        cc_dep: "口才销售部",
        cc_sd_group: "拓科口才专项区",
        cc_sm_group: "童宇周口才团队",
        cc_group: "",
        cc_adminid: "-1",
        cc_empno: "",
        cc_name: "",
        type: 3,
        cur_row_name: null,
        source: null,
        cc_num: null,
        call_num_after: 0,
        wait_call_num_after: 0,
        call_rate_after: "0",
        user_num: 1,
        invite_num: 1,
        no_invite_num: 0,
        invite_rate: "1.00",
        should_attend_num: 1,
        call_num_before: 0,
        wait_call_num_before: 1,
        call_rate_before: "0.00",
        call_num_success_before: 0,
        call_num_failed_before: 0,
        call_rate_success_before: "0",
        attend_num: 0,
        attend_count: 0,
        no_attend_num: 1,
        attend_rate: "0.00",
        call_num_success_after: 0,
        call_num_failed_after: 0,
        call_rate_success_after: "0",
        call_num_finish_after: 0,
        wait_call_num_finish_after: 0,
        call_rate_finish_after: "0",
        call_duration_after: null,
        payed_num: 0,
        transfor_rate: "0.00"
      },
      {
        child: null,
        id: 846786796,
        parentName: "口才销售部$上海童宇周区",
        nodeName: "口才销售部$上海童宇周区$裴江蓝口才团队",
        parent_id: 1597918773,
        cc_dep: "口才销售部",
        cc_sd_group: "上海童宇周区",
        cc_sm_group: "裴江蓝口才团队",
        cc_group: "",
        cc_adminid: "-1",
        cc_empno: "",
        cc_name: "",
        type: 3,
        cur_row_name: null,
        source: null,
        cc_num: null,
        call_num_after: 0,
        wait_call_num_after: 0,
        call_rate_after: "0",
        user_num: 342,
        invite_num: 82,
        no_invite_num: 260,
        invite_rate: "0.24",
        should_attend_num: 27,
        call_num_before: 0,
        wait_call_num_before: 27,
        call_rate_before: "0.00",
        call_num_success_before: 0,
        call_num_failed_before: 0,
        call_rate_success_before: "0",
        attend_num: 0,
        attend_count: 0,
        no_attend_num: 27,
        attend_rate: "0.00",
        call_num_success_after: 0,
        call_num_failed_after: 0,
        call_rate_success_after: "0",
        call_num_finish_after: 0,
        wait_call_num_finish_after: 0,
        call_rate_finish_after: "0",
        call_duration_after: null,
        payed_num: 0,
        transfor_rate: "0.00"
      },
      {
        child: null,
        id: 1322671133,
        parentName: "口才销售部$拓科口才专项区",
        nodeName: "口才销售部$拓科口才专项区$王端齐口才团队",
        parent_id: 1468345389,
        cc_dep: "口才销售部",
        cc_sd_group: "拓科口才专项区",
        cc_sm_group: "王端齐口才团队",
        cc_group: "",
        cc_adminid: "-1",
        cc_empno: "",
        cc_name: "",
        type: 3,
        cur_row_name: null,
        source: null,
        cc_num: null,
        call_num_after: 0,
        wait_call_num_after: 0,
        call_rate_after: "0",
        user_num: 0,
        invite_num: 0,
        no_invite_num: 0,
        invite_rate: "0",
        should_attend_num: 0,
        call_num_before: 0,
        wait_call_num_before: 0,
        call_rate_before: "0",
        call_num_success_before: 0,
        call_num_failed_before: 0,
        call_rate_success_before: "0",
        attend_num: 0,
        attend_count: 0,
        no_attend_num: 0,
        attend_rate: "0",
        call_num_success_after: 0,
        call_num_failed_after: 0,
        call_rate_success_after: "0",
        call_num_finish_after: 0,
        wait_call_num_finish_after: 0,
        call_rate_finish_after: "0",
        call_duration_after: null,
        payed_num: 0,
        transfor_rate: "0"
      },
      {
        child: null,
        id: 1866259497,
        parentName: "口才销售部$拓科口才专项区",
        nodeName: "口才销售部$拓科口才专项区$范周斌口才团队",
        parent_id: 1468345389,
        cc_dep: "口才销售部",
        cc_sd_group: "拓科口才专项区",
        cc_sm_group: "范周斌口才团队",
        cc_group: "",
        cc_adminid: "-1",
        cc_empno: "",
        cc_name: "",
        type: 3,
        cur_row_name: null,
        source: null,
        cc_num: null,
        call_num_after: 0,
        wait_call_num_after: 0,
        call_rate_after: "0",
        user_num: 0,
        invite_num: 0,
        no_invite_num: 0,
        invite_rate: "0",
        should_attend_num: 0,
        call_num_before: 0,
        wait_call_num_before: 0,
        call_rate_before: "0",
        call_num_success_before: 0,
        call_num_failed_before: 0,
        call_rate_success_before: "0",
        attend_num: 0,
        attend_count: 0,
        no_attend_num: 0,
        attend_rate: "0",
        call_num_success_after: 0,
        call_num_failed_after: 0,
        call_rate_success_after: "0",
        call_num_finish_after: 0,
        wait_call_num_finish_after: 0,
        call_rate_finish_after: "0",
        call_duration_after: null,
        payed_num: 0,
        transfor_rate: "0"
      },
      {
        child: null,
        id: 1986888399,
        parentName: "口才销售部$上海王端齐区",
        nodeName: "口才销售部$上海王端齐区$王端齐口才团队",
        parent_id: 913271796,
        cc_dep: "口才销售部",
        cc_sd_group: "上海王端齐区",
        cc_sm_group: "王端齐口才团队",
        cc_group: "",
        cc_adminid: "-1",
        cc_empno: "",
        cc_name: "",
        type: 3,
        cur_row_name: null,
        source: null,
        cc_num: null,
        call_num_after: 0,
        wait_call_num_after: 0,
        call_rate_after: "0",
        user_num: 110,
        invite_num: 5,
        no_invite_num: 105,
        invite_rate: "0.05",
        should_attend_num: 2,
        call_num_before: 0,
        wait_call_num_before: 2,
        call_rate_before: "0.00",
        call_num_success_before: 0,
        call_num_failed_before: 0,
        call_rate_success_before: "0",
        attend_num: 0,
        attend_count: 0,
        no_attend_num: 2,
        attend_rate: "0.00",
        call_num_success_after: 0,
        call_num_failed_after: 0,
        call_rate_success_after: "0",
        call_num_finish_after: 0,
        wait_call_num_finish_after: 0,
        call_rate_finish_after: "0",
        call_duration_after: null,
        payed_num: 0,
        transfor_rate: "0.00"
      }
    ];

    const data11 = this.composeDataWithCache(preData, data);
    console.log("data11:", data11);
    window.data11 = data11;
  },
  methods: {
    composeDataWithCache(preData, data, level = 2) {
      if (!preData?.length) {
        throw preData;
      }
      for (const iterator of preData) {
        if (iterator.type === level) {
          const childDatas = data.filter(
            item => item.parent_id === iterator.id
          );
          if (!iterator.child?.length) {
            iterator.child = childDatas;
          }
          continue;
        } else {
          const index = preData.indexOf(iterator);
          preData[index].child = this.composeDataWithCache(
            iterator.child,
            data,
            level
          );
        }
      }
      return preData;
    },

    clickHandler: debounce(
      function(data) {
        this.count = this.count++;
        console.log("this.count:", data, this.count);
      },
      true,
      3000
    ),

    add(a, b) {
      console.log("this:", this.name);
      return a + b;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .wrap {
  background: red;
}
</style>