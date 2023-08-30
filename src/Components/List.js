import {React, Component} from "react";

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.elms=this.props.topicsArray.map((data,index)=>(<li key={index}>{data}</li>))

        return (
            <ul>
                {this.elms}
            </ul>

        )
    }
}