import React, { Component } from "react"
import { getUrlSearch } from "@utils"


class ShowData extends Component {
    state = {
        componentsList: []
    }
    componentDidMount() {
        this.getComponent()
    }
    getComponent = () => {
        const { location: { search } } = this.props
        const urlSearch = getUrlSearch(search)
        try {
            const components = sessionStorage.getItem("componentList")
            JSON.parse(components || "[]")

            this.setState({
                componentsList: components,
                urlSearch
            }, () => {
                const { componentsList } = this.state
                if (!componentsList || !componentsList.length) {
                    this.props.history.push("/componetdatacollect/choseway")
                }
            })
        } catch (error) {
            console.log("=ShowData==error===", error);
        }
    }

    componentWillUnmount() {
        sessionStorage.removeItem("componentList")
    }

    render() {
        return (
            <div>
                ShowData
            </div>
        )
    }
}


export default ShowData