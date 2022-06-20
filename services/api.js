import { checkobjectorno } from '../utils';

const mainUrl = 'https://pelayanan-konsumen.herokuapp.com'
// const mainUrl = 'https://7acc-139-0-234-230.ap.ngrok.io'

const setheaders = { 'Content-Type': 'application/json' }
const post_method = 'POST'
const get_method = 'GET'
const no_internet = {
  data: 'no internet',
  message: 'no internet'
}

const responseparser = (val1,val2) => {
  try {
    return {
      data: checkobjectorno(val1),
      message: val2
    }
  } catch (error) {
    return no_internet
  }
}

export const registernewdata = (body) =>
  fetch(mainUrl + '/api/register', {
    method: post_method,
    headers: setheaders,
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
        return responseparser(data,res)
      } else if (res == 400) {
        // 400
        return responseparser(data,res)
      } else {
        // 500
        return responseparser(data,res)
      }
    })
    .catch((err) => {
      // handle no internet
      return no_internet
    });

export const insertpengaduan = (body) =>
  fetch(mainUrl + '/api/insertpengaduan', {
    method: post_method,
    headers: setheaders,
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
        return responseparser(data,res)
      } else if (res == 400) {
        // 400
        return responseparser(data,res)
      } else {
        // 500
        return responseparser(data,res)
      }
    })
    .catch((err) => {
      // handle no internet
      return no_internet
    });

export const loginapi = (body) =>
  fetch(mainUrl + '/api/login', {
    method: post_method,
    headers: setheaders,
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
        return responseparser(data,res)
      } else if (res == 400) {
        // 400
        return responseparser(data,res)
      } else {
        // 500
        return responseparser(data,res)
      }
    })
    .catch((err) => {
      // handle no internet
      return no_internet
    });

export const getnewsapi = () =>
  fetch(mainUrl + '/api/berita', {
    method: get_method,
    headers: setheaders
  })
    .then((response) => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(([res, data]) => {
      if (res == 200) {
        // 200
        return responseparser(data,res)
      } else if (res == 400) {
        // 400
        return responseparser(data,res)
      } else {
        // 500
        return responseparser(data,res)
      }
    })
    .catch((err) => {
      // handle no internet
      return no_internet
    });

export const getstatuspengaduan = () =>
  fetch(mainUrl + '/api/respon-pengaduan', {
    method: get_method,
    headers: setheaders
  })
    .then((response) => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(([res, data]) => {
      if (res == 200) {
        // 200
        return responseparser(data,res)
      } else if (res == 400) {
        // 400
        return responseparser(data,res)
      } else {
        // 500
        return responseparser(data,res)
      }
    })
    .catch((err) => {
      // handle no internet
      return no_internet
    });