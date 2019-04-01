<template>
  <div id="footer">
    <div class="wrapper">
      <ul class="map-list">
        <li>
          <dl>
            <dt>关于天键</dt>
            <dd>
              <a href="#/about/">天健简介</a>
            </dd>
            <dd>
              <a href="#/list/hrshow">人力资源</a>
            </dd>
            <dd>
              <a href="#/list/organization">组织架构</a>
            </dd>
            <dd>
              <a href="#/list/certification">执业资质</a>
            </dd>
            <dd>
              <a href="#/list/culture">天健文化</a>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>专业服务</dt>
            <dd>
              <a href="#/serve">服务领域</a>
            </dd>
            <dd>
              <a href="#/list/customer">客户资源</a>
            </dd>
            <dd>
              <a href="#/list/n3b">新三板</a>
            </dd>
            <!-- <dd><a href="/services/industry.jsp">服务行业</a></dd> -->
          </dl>
        </li>
        <li>
          <dl>
            <dt>新闻中心</dt>
            <dd>
              <a href="#/news">天健资讯</a>
            </dd>
            <dd>
              <a href="#/list/hydt">行业动态</a>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>加入天健</dt>
            <dd>
              <a href="#/add">校园招聘</a>
            </dd>
            <dd>
              <a href="#/list/addC1">社会招聘</a>
            </dd>
            <dd>
              <a href="#/list/addC2">实习生招聘</a>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>专业研究</dt>
            <dd>
              <a href="#/study">天健刊物</a>
            </dd>
            <dd>
              <a href="#/list/studyC1">天健研究</a>
            </dd>
            <dd>
              <a href="#/list/studyC2">国际资料</a>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>联系我们</dt>
            <dd>
              <a href="#/contact">境内机构</a>
            </dd>
            <dd>
              <a href="#/list/contactC1">国际网络</a>
            </dd>
            <dt></dt>
            <dd>
              <a href="#/list/addC1">关注我们</a>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>友情链接</dt>
            <dd>
              <a href="http://oa.pccpa.cn">天健综合管理系统</a>
            </dd>
            <dd>
              <a href="http://www.zjpcedu.com">天健培训</a>
            </dd>
            <dd>
              <a href="http://mail.pccpa.cn">邮件系统</a>
            </dd>
            <dd>
              <a href="http://www.zicpait.org.cn">天易审计软件</a>
            </dd>
            <dd>
              <a href="/article/friendLinks.jsp">站外链接</a>
            </dd>
          </dl>
        </li>
      </ul>

      <div class="copyright">2015年 天健会计师事务所版权所有©&nbsp;&nbsp;浙ICP备09105494号-1©&nbsp;&nbsp;
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602001194"
        >浙公网安备 33010602001194号</a>
      </div>
    </div>
    <!-- .wrapper END -->
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      msg: "welcome"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  text-align: center;
  height: 300px;
  color: #fff;
  padding: 50px 0 30px;
  background-color: #4b5163;
  font-size: 12px;
}

#footer .map-list dt {
  display: inline-block;
  cursor: default;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
  margin-bottom: 20px;
}
#footer .map-list li {
  float: left;
  white-space: nowrap;
  margin: 0 35px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
#footer .map-list {
  display: block;
  width: 980px;
  text-align: left;
  zoom: 1;
  margin: 0 auto;
}
ul,
ol {
  list-style: none;
}

ul,
menu,
dir {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.wrapper {
  width: 1300px;
  margin: 0 auto;
  font-family: "Microsoft YaHei" !important;
}

body,
button,
input,
select,
textarea {
  font: 12px/1.5 tahoma, arial, \5b8b\4f53, sans-serif;
}
#footer .copyright {
  margin-top: 30px;
  clear: both;
}
.wrapper {
  width: 1300px;
  margin: 0 auto;
  font-family: "Microsoft YaHei" !important;
}
dt {
  margin: 0;
  padding: 0;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
ul,
ol {
  list-style: none;
}
#footer a {
  color: #fff;
  text-decoration: none;
}
a {
  color: #333;
}
a {
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
</style>
