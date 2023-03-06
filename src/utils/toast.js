import { toast } from '@whityha/toast/dist/index.es';

export const errorToast = (description) => {
    toast.addToast({
        type: toast.TYPE.ERROR,
        title: 'Mistake',
        description,
        duration: 4000,
        position: toast.POSITION.BOTTOM_RIGHT,
    });
};

export const successToast = (description) => {
    toast.addToast({
        type: toast.TYPE.SUCCESS,
        title: 'Great!',
        description,
        duration: 4000,
        position: toast.POSITION.BOTTOM_RIGHT,
    });
};
