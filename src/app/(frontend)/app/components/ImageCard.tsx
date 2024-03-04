export default function ImageCard({ ImageSrc }: { ImageSrc: any }) {
  return ImageSrc ? (
    <div className="card card-compact mx-1  h-72 max-w-56 overflow-hidden rounded-2xl border shadow-lg sm:h-80 ">
      <img
        className="h-full w-full cursor-pointer object-cover"
        onClick={() => {
          const modal = document.getElementById('my_modal_3') as HTMLDialogElement
          if (modal != null) {
            modal.showModal()
          }
        }}
        src={ImageSrc}
        alt="quiz image"
      />

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-0">
          <form method="dialog">
            {/* Close button inside the modal */}
            <button
              className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 z-10 bg-slate-400"
              onClick={() => {
                const modal = document.getElementById('my_modal_3') as HTMLDialogElement
                if (modal != null) {
                  modal.close()
                }
              }}
            >
              ✕
            </button>
          </form>
          {/* Modal content */}
          <img className="m-0 h-full w-full object-cover" src={ImageSrc} alt="quiz image" />
        </div>
      </dialog>
    </div>
  ) : (
    ' '
  )
}
