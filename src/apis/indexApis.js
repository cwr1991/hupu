import Api from "../common/Api"
import {INDEXURL} from "../common/AjaxUrlSchema"
import {COMMUNITYURL} from "../common/AjaxUrlSchema"


export default  {

    getIndexData(cb){
       
       Api.get(INDEXURL,cb)

    },
    getCommunityData(cb){
       Api.get(COMMUNITYURL,cb)
    }
}
