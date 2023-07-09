import React from "react";

class ListingWMap extends React.Component{
    constructor(){
        super()
        this.state={
          list:[{name:" vishal  ",phone:" 846846484  ",email:" vishal@example.com"},{name:" budha",phone:" 8460000004  ",email:" budha@example.com"},{name:" yogi  ",phone:" 5757846484  ",email:" yogi@example.com"}]
        }
    }
    render(){
        return(<div>
            <h1>Listing With Map</h1>
            {
                this.state.list.map((item)=><div>Name:<span>{item.name}</span>Phone:<span>{item.phone}</span>Email:<span>{item.email}</span></div>
                )}
        </div>)
    }
}
export default ListingWMap;