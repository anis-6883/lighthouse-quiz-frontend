'use client';

export default function ReferModal() {
  return (
    <div>
      <div className="mt-14 grid grid-flow-row place-items-center gap-4 px-2 text-center sm:px-8">
        <img
          className="h-full max-h-64 w-full max-w-64"
          src="/images/refer.png"
          alt="quiz image"
        />
        <h2 className="px-4 text-xl font-semibold sm:text-2xl">
          Share with your family & friends
        </h2>
        <div className="w-full max-w-lg pb-2 pt-1">
          <button
            onClick={() => {
              const referModal = document.getElementById(
                'refer_modal'
              ) as HTMLDialogElement;
              if (referModal) {
                referModal.showModal();
              }
            }}
            className="btn btn-md h-14 w-full rounded-full bg-[var(--primary-color)] uppercase text-white hover:bg-[#7456ff]"
          >
            share
          </button>
        </div>
        <hr className="h-[3px] w-full max-w-lg bg-[#fafafa] "></hr>
        <p className="px-3 text-[15px] leading-6 sm:px-12">
          Have you been blessed by the Lighthouse Bible Quiz ? Why keep this
          blessing to yourself? Invite your loved ones to join you on this
          journey with Jesus. Together, we can grow in faith and knowledge of
          the Word of God!
        </p>
      </div>

      <dialog
        id="refer_modal"
        className="modal modal-bottom mx-auto max-w-3xl "
      >
        <div className="modal-box rounded-t-[3rem]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute left-6 top-6 border-slate-400 text-xl">
              ✕
            </button>
          </form>
          <div className="pb-16 pt-6 text-center">
            <p className="max-w-[100ch] overflow-hidden text-ellipsis whitespace-nowrap py-6 text-[13px]">
              Hello! 🌟 This Lighthouse Bible Quiz app has been incredibly
              useful for me, helping me grow in my knowledge of the Bible and
              deepening my faith. I’m sure you’ll enjoy it too! 📖✨. This is
              the App Link: https://onelink.to/lighthouse-biblequiz Website
              Link: https://lighthousequiz.com Let’s grow together in faith and
              knowledge of the Word of God together! 🙏
            </p>
            <div className="flex items-center justify-center">
              <p
                id="pop"
                className="mt-[-100px] text-sm text-green-500 opacity-0"
              >
                Text copied
              </p>
            </div>
            <span
              id="copyButton"
              className="text-[rgb(255 255 255)] cursor-copy rounded-full border border-slate-400 px-3 py-1"
            >
              Copy
            </span>
          </div>
        </div>
      </dialog>
    </div>
  );
}
