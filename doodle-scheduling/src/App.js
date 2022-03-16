import './App.css';

function App() {

  const getFormatedDate = (date) => {
    if (!date) return "";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
  }

  return (
    <div className="app">
      <div className='background'></div>
      <div className="messages" >
        <div className="message">
          <div className="username">Patricia</div>
          <div className='text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div className="time">{getFormatedDate(new Date())}</div>
        </div>
        <div className="message">
          <div className="username">Patricia</div>
          <div className='text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div className="time">{getFormatedDate(new Date())}</div>
        </div>
        <div className="message user-message">
          <div className='text'>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="time">{getFormatedDate()}</div>
        </div>
      </div>
      <div className="footer">
        <div className='footer-wrap'>
          <div className="input-wrap">
            <input className="input" type="text" placeholder='Message' />
          </div>
          <div className="btn-wrap">
            <button className="btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
