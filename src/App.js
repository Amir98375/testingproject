
import './App.css'
import ErrorComponent from './component/Error'
import FooterComponent from './component/Footer'

function App() {
  const footNote = [
    {
      id: "description_1",
      description: "<p>Hello, this is my first React app. <a href='www.google.com'>Footer</a> is nice, and Deadpool is also nice, but Nicepool is even nicer.</p>"
    },
    {
      id: "description_2",
      description: "<p>This is the second description. You can learn more at <a href='www.example.com'>this link</a>.</p>"
    },
    {
      id: "description_3",
      description: "<p>The third description talks about React and how it's a great framework for building UIs.</p>"
    },
    {
      id: "description_4",
      description: "<p>Fourth description here, focusing on component reuse in React applications.</p>"
    }
  ];
  

  return (
    <>
<ErrorComponent message={"app is not workig currently"}/>
<FooterComponent footNotes={footNote}/>
    </>
  )
}

export default App
