import { lighthouseBackendUrl } from '@/lib/axios/getAxios';
import { useState } from 'react';
import toast from 'react-hot-toast';

function LeagueDeleteModal({ session, singleLeague, popularLeaguesRefetch }) {
  const [submitting, setSubmitting] = useState(false);

  const deleteLeagueHandler = async (id) => {
    setSubmitting(true);
    try {
      const { data } = await lighthouseBackendUrl.delete(
        `/api/admin/popular-leagues/${id}`,
        {
          headers: { Authorization: `Bearer ${session?.user?.accessToken}` },
        }
      );
      if (data.status) {
        setSubmitting(false);
        document.getElementById('leagueDeleteModal').close();
        toast.success(data?.message);
        popularLeaguesRefetch();
      } else {
        setSubmitting(false);
        toast.error(data?.message);
      }
    } catch (error) {
      setSubmitting(false);
      console.error(error);
    }
  };

  return (
    <dialog id="leagueDeleteModal" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Delete Confirmation!</h3>
        <p className="py-4">
          Do you want to delete
          <span className="font-medium text-red-500">
            {' '}
            {singleLeague?.name}{' '}
          </span>
          League?
        </p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <button
            className="btn btn-error btn-sm"
            onClick={() => deleteLeagueHandler(singleLeague?.id)}
            disabled={submitting}
          >
            Confirm
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default LeagueDeleteModal;
