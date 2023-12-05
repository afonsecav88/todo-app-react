
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notifications = () => {

   const notify = () => toast.info("Lorem ipsum dolor");
   return (
      <div>
         <button onClick={notify}>Notify !</button>
         <ToastContainer />
      </div>
   );
}


