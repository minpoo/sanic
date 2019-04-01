<template>
  <div class="about">
    <button type="button" class="btn btn-primary">主要按钮</button>
    <div>连线状态：{{status.online}} 请求状态：{{status.req}}</div>
    <input type="text" v-model="sendOrder">
    <button v-on:click="wsend()">发送数据</button>
    <textarea readonly class="form-control textShow" rows="5" id="comment">{{show}}</textarea>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Vuex from "vuex";
import d from "websocket";
import axios from "axios";
// let ws = new WebSocket("wss://mongo.imdo.co");
let ws = new WebSocket("ws://127.0.0.1:3000");
export default Vue.extend({
  data() {
    return {
      sendOrder: "ls",
      show: Array(),
      boot: { now: "/", history: "", want: "" },
      id: 11,
      status: { online: "离线", req: "无指令" }
    };
  },
  mounted: function() {
    //this.initWebpack();
  },
  destroyed: function() {
    //destroyed page  websocketclose
    // this.websocketclose();
  },
  created() {
    let self = this;
    ws.onopen = () => {
      console.log("已经连线...");
      this.status.online = "在线";
    };
    ws.onmessage = evt => {
      console.log("数据已接收...");
      if (evt.data == "结束") {
        this.status.req = "完毕";
        this.receive_end();
      } else if (true) {
        this.show.push(evt.data);
      }
    };
    ws.onclose = function() {
      console.log("连接已关闭...");
      self.status.online = "连接已关闭";
    };
  },
  methods: {
    receive_end() {
      this.boot.now = this.show[this.show.length - 1];
      this.show.pop();
      console.log(this.boot);
    },
    wsend() {
      this.status.req = "请求中";
      let self = this;
      ws.send(
        `cd ${self.boot.now} 
         ${self.sendOrder} 
         pwd`
      );
    },
    websocket() {}
  },
  beforeDestroy() {
    ws.close();
  }
});
</script>

<style scoped>
.textShow {
  width: 80%;
  margin: auto;
  height: 500px;
}
</style>

