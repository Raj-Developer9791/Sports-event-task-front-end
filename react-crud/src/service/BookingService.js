import http from '../http-common';

const findAll = () => {
  return http.get("/event");
  
};

const create = data => {
  return http.post("/event", data);
};

const update= (id,data) =>{
  return http.put(`/event/${id}`,data)
};

const remove = id => {
  return http.delete(`/event/${id}`);
};


const BookingService = {
  findAll,
  create,
  update,
  remove
};

export default BookingService;
