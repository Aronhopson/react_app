class App extends React.Component{
    render(){
        return(
            <div>
            <Hello 
            to="Aron"
            from="Love"
            bangs={5} 
            />
              <Hello 
            to="Hopson"
            bangs={5} 
            />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))