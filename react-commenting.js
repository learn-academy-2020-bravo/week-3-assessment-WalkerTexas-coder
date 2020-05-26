// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. State: holds objects with key: value pairs. State can be altered and rendered depending on the code-- this state holds an empty string which clues us into the idea that we wil be adding string values at some point.
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. e~ event: we can expect that on some event (a click perhaps?) the state^ will be changed to a determined value below
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. destructered variable input
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. this onchange calls the mthod robot from the class above*/}
          onChange={ this.robot }
          {/* 5. this sets the new 'userInput' variable as the user types in information*/}
          value={ userInput }
        />

        <div>
          {/* 6. Component Goodrobot is a child class of the earliewr class. (line 58) anything rendered by the child class should be visible because of this.  */}
          <GoodRobot
            {/* 7.Good robots value for user input is being passed into it here as props. */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. this div holds all of the information that the user will see from GoodRobot.
      <div>
        <h3>Good Robot</h3>
        {/* 9. "props" was passed into the child Component by our parent Component and allows access to the "propeties" of the parent. In this case its the state 'user input' as it displays its associated string*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. this makes GoodRobot available to the rest of the code
export default GoodRobot
