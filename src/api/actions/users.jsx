const getUsersList = (page = 1) => ({
  method: "GET",
  endpoint: `/3/movie/now_playing?language=en-US&page=${page}`
});

const postUsersList = data => ({
  method: "POST",
  endpoint: "users",
  body: data
});

const putUsersList = data => ({
  method: "PUT",
  endpoint: "users",
  body: data
});

const deleteUsersList = ({ id }) => ({
  method: "DELETE",
  endpoint: "users",
  body: id
});

export { getUsersList, postUsersList, putUsersList, deleteUsersList };
