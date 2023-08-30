import {React, Component} from "react";
import './Root.css'
import AddAgenda from "./Components/AddAgenda";
import ViewAgenda from "./Components/ViewAgenda";

export default class Root extends Component {
    constructor() {
        super();
        this.state = {
            datas: [],
            toggleView: true
        }
    }

    dataGatherHandler = d => {

        this.setState(prevState => {
            return {datas: [d, ...prevState.datas]}
        })
        console.log(this.state.datas)
    }
    toggleBtnHandler = () => {
        this.setState({toggleView: !this.state.toggleView})
    }

    render() {
        if (this.state.datas.length>0) {
            this.viewagenda = this.state.datas.map((d, index) => (<ViewAgenda data={d} key={index}/>))
        }
        else
        {
             this.viewagenda=<h1>No agenda to show</h1>
        }
        return (

            <div className={"container"}>
                <button onClick={this.toggleBtnHandler}>{this.state.toggleView? `Show ${this.state.datas.length} agendas`:"Add agenda"}</button>
                {this.state.toggleView ?
                    <AddAgenda onSubmitHandler={this.dataGatherHandler}/> : this.viewagenda}

            </div>
        )
    }
}
