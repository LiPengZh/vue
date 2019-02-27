new Vue({
    el:".app",
    data:{
        array:[
            {name:"java",age:20,email:"222"},
            {name:"h5",age:30,email:"333"}
        ],
        user:{},
        nodeIndex:-1
    },
    methods:{
        //添加
        Add:function(){
            this.array.push(this.user);
            this.user={};
        },
        deld:function(){
            if(this.nodeIndex == -1){
                //删除所有
                this.array={}
            }else{
                this.array.splice(this.nodeIndex,1)
            }
        }
        
    }
})