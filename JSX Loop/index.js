class App extends React.Component{
    render(){
        return(
            <div>
                <Friend
                name= "king"
                hobbies = {["eat", "sleep" ,"code" , "repeat"]}
                />
               
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))