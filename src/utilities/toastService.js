import { notification } from 'antd';

export const toast = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};
