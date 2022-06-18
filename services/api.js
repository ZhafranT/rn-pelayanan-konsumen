import { checkobjectorno } from '../utils';

const mainUrl = 'https://pelayanan-konsumen.herokuapp.com'
// const mainUrl = 'https://7acc-139-0-234-230.ap.ngrok.io'

export const registernewdata = (body) =>
  fetch(mainUrl + '/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(([res, data]) => {
      if (res == 200) {
        // 200
        return {
          data: checkobjectorno(data),
          message: res
        }
      } else if (res == 400) {
        // 400
        return {
          data: checkobjectorno(data),
          message: res
        }
      } else {
        // 500
        return {
          data: checkobjectorno(data),
          message: res
        }
      }
    })
    .catch((err) => {
      // handle no internet
      return {
        data: 'no internet',
        message: 'no internet',
      }
    });