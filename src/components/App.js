
import React, {Component} from "react";
import Card from "./Card";
// import faker from "faker";
import axios from "axios";
// import Form from "./Form";

class App extends Component{
    
      state={
            produkts:[]
      }
    
      // componentDidUpdate(){
      //       console.log("testar")
      // }

      async componentDidMount(){
            const res= await axios.get("http://localhost:1337/produkts")
                  
            console.log(res.data);
            this.setState({produkts:res.data});
                  // this.setState({dataFromApi: res.data[0].title})
            
      }
      render(){
    return(
          <div>
                {this.state.produkts.map( (produkts) => 
                  <Card 
                        key={produkts.id}
                        title={produkts.title}
                        beskrivning={produkts.beskrivning}
                        pris={produkts.pris}
                        bild={"http://localhost:1337"+produkts.bild.formats.small.url}
                  />
                )}

                {/* <Card image={faker.image.avatar()}/> */}
                {/* <button onClick={this.onClickApi.bind(this)}>hämta</butto n> */}
                {/* {this.state.dataFromApi} */}
          </div>
    )
}
}

export default App;