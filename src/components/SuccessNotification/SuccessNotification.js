import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearSuccessUser } from "../../JS/Actions/AuthAction";

const SuccessNotification = ({ success }) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setshow(false);

      dispatch(clearSuccessUser());
    }, 3000);
  }, [show, dispatch]);

  const customId = "";

  return (
    <div>
      {show && (
        <div>
          {toast.success(success.msg, { toastId: customId })}
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            draggable
            className="toast-text"
            theme="dark"
            limit={1}
          />
        </div>
      )}
    </div>
  );
};

export default SuccessNotification;
