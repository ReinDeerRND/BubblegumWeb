import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: ""
    }

    componentDidMount() {
        this.setState({
            status: this.props.status
        });
    }
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        });
    }

    onStatusChange(event) {
        console.log(event.target.value);
        this.setState({
            status: event.target.value
        });

    };
    render() {
        return (
            <div >
                <div>Status</div>
                {
                    !this.state.editMode &&
                    <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.status}</span></div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} onChange={this.onStatusChange.bind(this)} />
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;