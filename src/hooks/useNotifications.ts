import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useNotifications = () => {
  const taskAdd = () => toast.info('Tarea creada correctamente!');
  const taskEdited = () => toast.info('Tarea editada correctamente!');
  const taskDeleted = () => toast.info('Tarea eliminada correctamente!');

  return {
    ToastContainer,
    taskAdd,
    taskEdited,
    taskDeleted,
  };
};
