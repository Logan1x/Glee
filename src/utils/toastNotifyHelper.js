import toast from "react-hot-toast";

const toastStyle = {
  borderRadius: "10px",
  background: "#333",
  color: "#fff",
};

export const notify = (msg, status, emojitype = null) => {
  if (status === "success") {
    if (emojitype) {
      return toast.success(msg, { icon: emojitype, style: toastStyle });
    } else {
      return toast.success(msg, { style: toastStyle });
    }
  } else {
    return toast.error(msg, { style: toastStyle });
  }
};
