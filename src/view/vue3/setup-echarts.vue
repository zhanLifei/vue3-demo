<template>
  <div class="cost-date">
    <div class="effect-box-min pdlr0 clearfix">
      <div class="mgb15 alert-bd-bottom pdb10 pdlr15 clearfix">
        <h3 class="bold-border-l font14">
          <i class="pillars"></i>总览
        </h3>
      </div>
      <div class="f-l position-relative" style="width: 78%">
        <div class="date-chart" id="line-chart1" style="height: 292px"></div>
        <div class="text-center">
            <span class="color-gray">车贷: </span>
            <span class="orange-font">180000元</span>
            <span class="color-gray">借款: </span>
            <span class="orange-font">40000元</span>
            <span class="color-gray">日常开销: </span>
            <span class="orange-font">5328元</span>
        </div>
      </div>
      <div class="f-r" style="width: 20%; padding-right: 2%">
        <div class="property-plate">
          <div class="son">
            <div class="mgb15" style="color: #35a3cb">
              <i class="gaishuanIcon"></i>总金额
            </div>
            <div class="font20" id="budgetCost_one">{{totalAmountAll}}元</div>
          </div>
          <div class="son">
            <div class="mgb15" style="color: #4dcbc0">
              <i class="chenbenIcon"></i>总剩余还款金额
            </div>
            <div class="font20" id="actualCost_one">{{residualRrepaymentAll}}元</div>
          </div>
          <div class="son">
            <div class="mgb15" style="color: #ff9600">
              <i class="zhixinIcon"></i>总已还款
            </div>
            <div class="font20" id="actualRate_one">{{hasReimbursementAll}}元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cost-date">
    <div class="effect-box-min pdlr0 clearfix">
      <div class="mgb15 alert-bd-bottom pdb10 pdlr15 clearfix">
        <h3 class="bold-border-l font14">
          <i class="pillars"></i>还款记录
        </h3>
      </div>
      <!-- tab栏 -->
      <div class="select-tabs normal">
        <ul class="select-bd clearfix">
          <li class="selectOn" :class="index == activeIndex ? 'on': ''" v-for="(item, index) in list" :key="index" @click="selectClick(index)">{{item.name}}</li>
        </ul>
      </div>
      <!-- 表格 -->
      <div class="section-check">
        <div class="check-header">
            <!--	表格	-->
            <table class="meterial-tb table-fixed" id="lineInfo_grid" cellpadding="0" cellspacing="0" border="0" width="100%">
                <thead>
                <tr>
                    <th><span>序号</span></th>
                    <th><span>还款日期</span></th>
                    <th><span>月还款金额</span></th>
                    <th><span>剩余还款金额</span></th>
                    <th><span>还款方式</span></th>
                </tr>
                </thead>
            </table>
            <div class="scrollTable-box">
              <div class="scrollTable">
                <table class="meterial-tb table-fixed" id="lineInfo_grid" cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr v-for="(item, index) in list[activeIndex].list" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{item.time}}</td>
                            <td>{{item.Repaid}}</td>
                            <td>{{item.remainingAmount}}</td>
                            <td>{{item.type}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="temporarily-no-data" v-if="list[activeIndex].list.length == 0">
                    <div>暂无还款记录</div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, inject, onMounted } from "vue";
import { datainjs } from '../../util/data';
export default {
  setup() {
    let echarts = inject("ec"); //引入
    let state = reactive({
      totalAmountAll: 225328, //总金额
      residualRrepaymentAll: 0, //总剩余还款金额
      hasReimbursementAll: 0,  //总已还款金额
      activeIndex: 0,
      list : datainjs()
    });
    function selectClick(index){
      state.activeIndex = index
    }
    onMounted(() => {
      state.list = state.list.map((item)=>{
        let num=0;
        let data=[];
        // 遍历datainjs的data
        item.list.map((item1)=>{
          // 将每月每项的还款金额相加
          num += item1.Repaid
          // 将每月每项的还款金额累计相加
          state.hasReimbursementAll += item1.Repaid
          data.push({time: item1.time, Repaid: item1.Repaid, type: item1.type, remainingAmount: item.totalAmount - num})
        })
        return {
          id: item.id,
          name: item.name, 
          value : item.totalAmount,
          remainingAmount: item.totalAmount - num,
          Repaid: num,
          list: data
        }
      });
      // 总剩余还款金额 = 总金额 - 总已还款金额
      state.residualRrepaymentAll = state.totalAmountAll - state.hasReimbursementAll
      //需要获取到element,所以是onMounted的Hook
      let myChart = echarts.init(document.getElementById("line-chart1"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter:function(value){
            let data = state.list
            return `剩余还款: ${data[value.dataIndex].remainingAmount}元<br>已还款: ${data[value.dataIndex].Repaid}元`
          },
        },
        label:{
          fontSize: '12',
          formatter:function(value){
            let data = state.list
            return `剩余还款: ${data[value.dataIndex].remainingAmount}元\n\n已还款: ${data[value.dataIndex].Repaid}元`
          }
        },
        calculable: true,
        series: [
          {
            type: "pie",
            radius: [20, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: state.list,
          },
        ],
      });
      window.onresize = function () {
        //自适应大小
        myChart.resize();
      };
    });
    return { ...toRefs(state), selectClick }
  },
};
</script>

<style scoped>
.cost-date {
  width: 100%;
  float: left;
  padding-right: 20px;
  box-sizing: border-box;
  margin-top: 20px;
}
.effect-box-min {
  height: 390px;
  padding: 15px 0;
  border-radius: 0px;
  background-color: #fff;
  position: relative;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
}
.pillars,
.green-pillars {
  width: 5px;
  height: 21px;
  border-radius: 3px;
  background-color: #ff9600 !important;
  margin-right: 8px;
  margin-bottom: 2px;
  display: inline-block;
  vertical-align: middle;
}
.alert-bd-bottom {
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px 10px 10px;
}
.cost-date .bold-border-l {
  float: left;
  font-size: 16px;
}
.chartValueClass {
  width: 88px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -34px;
  margin-left: -44px;
  text-align: center;
}
.color-gray {
  color: #999 !important;
  font-size: 16px;
}
.orange-font{
  color: #5870c4;
  margin-right: 40px;
}
.text-center {
  margin-top: 20px;
  text-align: center !important;
}
.f-l {
  float: left;
}
.f-r {
  float: right;
}
.cost-date .property-plate {
  width: 100%;
  height: 100%;
  background-color: #f6f8f9;
}
.cost-date .property-plate .son {
  height: 63px;
  padding: 25px 0;
  text-align: center;
}
.mgb15 {
  margin-bottom: 15px !important;
}
.font20 {
  font-size: 20px !important;
}
.select-tabs.normal{
  margin-left: 10px;
}
.select-tabs.normal .select-bd {
    vertical-align: inherit;
    margin: auto;
    box-sizing: border-box;
    border-left: 1px solid #d9d9d9;
}
.select-tabs .select-bd > li {
    position: relative;
    float: left;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #d9d9d9;
    color: #666;
    cursor: pointer;
}

.select-tabs .select-bd > li.on, .select-tabs .select-bd > li.active {
    background-color: #FF9600;
    border-color: #FF9600;
    color: #fff;
}
.table-fixed {
    table-layout: fixed;
    width: 100%;
}
.section-check{
  padding: 10px;
  
}
.scrollTable-box{
  width: 100%;
  height: 250px;
  overflow: hidden;
}
.scrollTable{
  width: 101.2%;
  overflow: scroll;
  height: 270px;
  max-height: 270px;
}
table thead th {
    height: 47px;
    background-color: #f0f3f5;
    font-size: 12px;
    border-top: 1px solid #F3F3F3;
    color: #333;
}
.check-header tr td {
    padding: 10px 0;
    border-bottom: 1px solid #e5e5e5;
    text-align: center;
    color: #666;
}
.meterial-tb thead th, .meterial-tb tbody td {
    border-bottom: 1px solid #e5e5e5;
    color: #666;
}
.temporarily-no-data{
  margin: 100px;
  text-align: center;
  color: #999;
}
</style>