export default function ImageCard({ ImageSrc }: { ImageSrc?: any }) {
  return (
    <div className="card card-compact mx-1  h-72 max-w-56 overflow-hidden rounded-2xl border shadow-lg sm:h-80 ">
      <img
        className="h-full w-full cursor-pointer"
        onClick={() => {
          const modal = document.getElementById(
            'my_modal_3'
          ) as HTMLDialogElement;

          if (modal != null) {
            modal.showModal();
          }
        }}
        src={ImageSrc}
        alt="quiz image"
      />

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 z-10 bg-slate-400">
              ✕
            </button>
          </form>
          <img
            className="m-0 h-full w-full "
            onClick={() => {
              const modalPop = document.getElementById(
                'my_modal_3'
              ) as HTMLDialogElement;
              if (modalPop != null) {
                modalPop.showModal();
              }
            }}
            src={ImageSrc}
            alt="quiz image"
          />
        </div>
      </dialog>
    </div>
  );
}
