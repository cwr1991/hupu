
//fetch jquery axios
export default  {

    
    /**
     * 获取数据
     * @param cb
     */
    get(url,cb){
        fetch(url).then(res=>{
            res.json().then(cb)
        })
    }
}
