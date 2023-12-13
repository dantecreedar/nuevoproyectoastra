import astra from "../assets/ojo.jpg"
function Resp() {
  return (
    <div className="tooltip" data-tip="Soy tu Asistente" >
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={astra} />
          </div>
        </div>
        <div className="chat-bubble"id="chat"></div>
      </div>
        {/* <div id="chat" className="m-5"></div> */}
    </div>
  )
}

export default Resp
