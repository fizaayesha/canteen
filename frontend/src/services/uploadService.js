import { toast } from 'react-toastify';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const uploadImage = async (event) => {
  let toastId = null;

  const image = await getImage(event);
  if (!image) return null;

  const formData = new FormData();
  formData.append('image', image, image.name);

  try {
    const response = await axios.post(`${BASE_URL}/api/upload`, formData, {
      onUploadProgress: (progressEvent) => {
        const progress = progressEvent.loaded / progressEvent.total;
        if (toastId)
          toast.update(toastId, {
            progress,
            render: 'Uploading...',
          });
        else toastId = toast.success('Uploading...', { progress });
      },
    });
    toast.dismiss(toastId);
    return response.data.imageUrl;
  } catch (err) {
    toast.error('Image upload failed');
    if (toastId) toast.dismiss(toastId);
    return null;
  }
};

const getImage = async (event) => {
  const files = event.target.files;

  if (!files || files.length <= 0) {
    toast.warning('Upload file is not selected!', {
      toastId: 'file-warning',
    });
    return null;
  }

  const file = files[0];

  if (file.type !== 'image/jpeg') {
    toast.error('Only JPG type is allowed', {
      toastId: 'file-type-error',
    });
    return null;
  }

  return file;
};
