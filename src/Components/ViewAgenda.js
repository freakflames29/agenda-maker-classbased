import {Component} from "react";
import List from "./List";

export default class ViewAgenda extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <hr/>
                <h3>{this.props.data.title}</h3>
                <List topicsArray={this.props.data.topicsArray}/>
                <p>{this.props.data.desc}</p>
                <hr/>
            </div>
        )
    }
}