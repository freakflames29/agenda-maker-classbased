import {React, Component, createRef} from "react";
import List from "./List";

export default class AddAgenda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: "",
            topic: "",
            topicsArray: [],
            titleError: false,
            descError: false,
            topicError: false,
            submitDisable:true
        }
        this.focusme=createRef()

    }

    titleChangeHandler = e => {
      this.submitDisableHandler()

        this.setState({title: e.target.value})
    }
    descChangeHandler = e => {
      this.submitDisableHandler()

        this.setState({desc: e.target.value})
    }
    topicChangeHandler = e => {

        this.setState({topic: e.target.value},)
    }
    addTopicsHandler = e => {
        e.preventDefault()
         if(this.state.topic.length ===0){
             return;
         }

        this.setState(prevState => {
            return (
                {
                    topicsArray: [this.state.topic, ...prevState.topicsArray]
                }
            )


        },()=> this.submitDisableHandler())
        this.focusme.current.focus()

        // console
        // .log(this.state)
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.onSubmitHandler(this.state)
        this.setState({
            title: "",
            desc: "",
            topic: "",
            topicsArray: [],
            titleError: false,
            descError: false,
            topicError: false,
            submitDisable:true
        })
    }


    //validations handler goes here
     submitDisableHandler=()=>{
        if(this.state.title.length >0  && this.state.desc.length >0 && this.state.topicsArray.length >0 ){
            this.setState({submitDisable:false})
        }
        else
        {
            this.setState({submitDisable:true})

        }
    }

    titleErrorHandler = () => {
        this.submitDisableHandler()
        if (this.state.title.length === 0) {
            this.setState({titleError: true})

        } else {
            this.setState({titleError: false})

        }
    }
    descErrorHandler = () => {
        this.submitDisableHandler()
        if (this.state.desc.length === 0) {
            this.setState({descError: true})

        } else {
            this.setState({descError: false})

        }
    }
    topicErrorHandler = () => {
        this.submitDisableHandler()
        if (this.state.topic.length === 0 && this.state.topicsArray.length === 0) {
            this.setState({topicError: true})

        } else {

            this.setState({topicError: false})

        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1> 📆 Agenda Creation form</h1>
                <label htmlFor="title">💁‍ Title</label> <br/>
                <input type="text" id={"title"} placeholder={"Enter the title"} value={this.state.title}
                       onChange={this.titleChangeHandler} onBlur={this.titleErrorHandler}/>
                {
                    this.state.titleError && (<code style={{color: "red"}}> --> Title cant be blank</code>)
                }

                <br/><br/>

                <label htmlFor="desc">📕 Desc</label> <br/>
                <input type="text" id={"desc"} placeholder={"Enter the short desc"} value={this.state.desc}
                       onChange={this.descChangeHandler} onBlur={this.descErrorHandler}/>
                {
                    this.state.descError && (<code style={{color: "red"}}> --> Description cant be blank</code>)
                }

                <br/><br/>

                <label htmlFor="topic" >💡 Topic</label> <br/>
                <input type="text" id={"topic"} placeholder={"Enter topic"} value={this.state.topic}
                       onChange={this.topicChangeHandler} onBlur={this.topicErrorHandler} />
                <button onClick={this.addTopicsHandler}>Add topic +</button>
                {
                    this.state.topicError && (<code style={{color: "red"}}> --> Please enter at least one topic</code>)
                }

                <br/><br/>
                <List topicsArray={this.state.topicsArray}/>

                <button type={"submit"} disabled={this.state.submitDisable} ref={this.focusme}>Submit ✈️</button>


            </form>
        )
    }

}