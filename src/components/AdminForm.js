import React, { Component } from "react";

import axios from "axios";



class Adminform extends Component{

    state={
         bild:" "
    }
    
    eventChange(e){
        console.log(e.target.files[0])
        this.setState({bild:e.target.files[0]})
    }

    async onSubmitToApi(e){
        e.preventDefault();
        //console.log(e.target.elements.file.files[0])

   const res = await axios.post("http://localhost:1337/produkts", {

         title: e.target.elements.title.value,
         beskrivning: e.target.elements.beskrivning.value,
         pris: e.target.elements.pris.value,
     })
    
    console.log(res)

    const data = new FormData();
        data.append('files', this.state.bild) 
        data.append('ref', 'produkt') 
        data.append('refId', res.data.id)  
        data.append('field', 'bild')

    const  resPic = await axios.post("http://localhost:1337/upload", data)
        console.log(resPic)
    
}


    render(){
        return(
            <div>
                 <form onSubmit={this.onSubmitToApi.bind(this)}>
                     <input type="text" name="title" placeholder="Title"/>
                     <input type="text" name="beskrivning" placeholder="Beskrivning"/>
                     <input type="number" name="pris" placeholder="Pris"/>
                     <input type="file" name="file" onChange={this.eventChange.bind(this)}/>
                     
                     <button>Spara</button>
                     {/* {this.state.title} */}
                 </form>

            </div>
        )
    }
}

export default Adminform;