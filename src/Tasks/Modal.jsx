import Chat from "../Chat/Chat"

function Modal() {
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>AtraBot</button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <div className="py-4">
                <Chat/>
            </div>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default Modal
