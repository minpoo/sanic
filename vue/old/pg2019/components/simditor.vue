<template>
<div>
     <input type="text" @focus="onEditorFocus($event)" @change="onEditorChange($event)"  v-model="con.title"  class="form-control" placeholder="这里只是标题索引，不参与显示">
     <input type="date" @focus="onEditorFocus($event)" @change="onEditorChange($event)"  v-model="con.date"  class="form-control">
     <quill-editor
      v-model="content" 
      ref="myQuillEditor" 
      :options="editorOption" 
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
    <div style="margin-top:20px;">
        <button type="button" @click="sub($event)" class="btn btn-success" >保存并修改</button>
        <button type="button" id="test" @click="timeC()" class="btn btn-secondary" data-dismiss="modal">关闭</button>
    </div>
</div>
   
</template> 
<script>
    // import { quillEditor } from 'vue-quill-editor'
    export default{
        props: ['childCom'],
    //     props: {
    //       formData: {
    //           type: Object,
    //           default: () => {
    //               return {}
    //           }
    //       }
    //   },
        inject: ['reload'],
        data(){
            return {
                content:"",
                editorOption:{},
                con:{title:"",date:""},
                time:"",
                childrenSay: 'hello, parent'
            }
        },
        mounted:function(){
            let self=this
            createcode()
            function createcode() {
                        if(self.childCom.order=="modify"){
                            self.con.title=self.childCom.title
                            self.con.date=self.childCom.date
                            self.content=self.childCom.content
                            return
                        }

               
                        // if(localStorage.newscontent){
                        //     self.content=localStorage.newscontent
                        // }
                        // if(localStorage.con){
                        //     self.con=JSON.parse(localStorage.con)
                        // }
               
                   
                   
            }
        },
        methods:{
            say(e){
              let self=this
                if(e=="time"){
                            self.con.title=self.childCom.title
                            self.con.date=self.childCom.date
                            self.content=self.childCom.content
                            return
                }

                if(e=="empty"){
                            self.con.title=""
                            self.con.date=""
                            self.content=""
                            return
                }
      
            },
            timeC(){
                    let self=this
                  
                        if(self.childCom.order=="modify"){
                            self.con.title=self.childCom.title
                            self.con.date=self.childCom.date
                            self.content=self.childCom.content
                            return
                        }

               
                        // if(localStorage.newscontent){
                        //     self.content=localStorage.newscontent
                        // }
                        // if(localStorage.con){
                        //     self.con=JSON.parse(localStorage.con)
                        // }
             

            },
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件

                localStorage.newscontent=this.content
                localStorage.con=JSON.stringify(this.con)
            },
            sub(){
                    let con=this.con,content=this.content,
                        type=this.childCom.menu,self=this
                    this.axios.post(this.$url+'companypg/article', {con,content,type},{
                    headers: {
                    }
                    })
                    .then(function(res){
                        if(res){
                            self.$emit('showCityName',"reload");
                        if(self.childCom.order=="modify"){
                            self.con.title=self.childCom.title
                            self.con.date=self.childCom.date
                            self.content=self.childCom.content
                            return
                        }

               
                        // if(localStorage.newscontent){
                        //     self.content=localStorage.newscontent
                        // }
                        // if(localStorage.con){
                        //     self.con=JSON.parse(localStorage.con)
                        // }
              
                        }else{
                            alert("提交失败")
                        }
                    })
                    .catch(function(err){
                        if(err.response) {
                        console.log(err.response)
                        }
                    })

            }
        }
    }
</script>   
