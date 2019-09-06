class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Greetings!</h1>
          <Hello 
          to="LOVE" 
          from="LIVER" 
          bangs={5} 
          img="https://www.cinewriters.com/wp-content/uploads/2015/02/actress-simran-latest-phots-hot-pics-images-stills-wallpapers-2.jpg"
          />
      </div>
      );
    }
  }
ReactDOM.render(<App/>, document.getElementById("root"))  