import React, {Component } from "react";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"

class NewDish extends Component {
    // constructor(){
    //     super();
    //     this.AddDish = this.AddDish.bind(this);
    // }

    newDish = React.createRef();

    AddDish = event => {
        console.log('Agregar platillo');
        event.preventDefault();
        console.log(this.newDish.value);
    }

    render() {
        return(
            <form autoComplete="off" onSubmit={this.AddDish}>
                {/* <input ref={this.newDish} /> */}

                <TextField 
                    label="Platillo..."
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={e => (this.newDish = e)}
                />
                <Fab color="primary" size="medium" 
                className="dish-form-icon" onClick={this.AddDish}>
                    <AddIcon/>
                </Fab>
            </form>
        )
    }
}

export default NewDish ;