import axios from "axios";

const hiddenGemsApi = axios.create({
  baseURL: "https://hidden-gems-project.onrender.com/api",
});

export const fetchGems = (sort_by, order, category) => {
  return hiddenGemsApi
    .get(`/gems`, {
      params: {
        sort_by: sort_by,
        order: order,
        category: category,
      },
    })
    .then(({ data: { gems } }) => {
      return gems;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchGemById = (gem_id) => {
  return hiddenGemsApi.get(`/gems/${gem_id}`).then(({ data }) => {
    return data;
  });
};

export const updateRating = (gem_id, rating) => {
  return hiddenGemsApi
    .patch(`/gems/${gem_id}`, { new_rating: rating })
    .then(({ data }) => {
      return data;
    });
};

export const getCommentsByGemId = (gem_id, sort_by, order) => {
  return hiddenGemsApi
    .get(`/comments/${gem_id}`, {
      params: {
        sort_by: sort_by,
        order: order,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const addCommentsByGemId = (body) => {
  return hiddenGemsApi.post(`/comments`, body).then(({ data }) => {
    return data;
  });
};

export const deleteCommentById = (comment_id) => {
  return hiddenGemsApi.delete(`/comments/${comment_id}`);
};

export const postGemByUserID = (body) => {
  return hiddenGemsApi.post(`/gems`, body).then(({ data }) => {
    return data;
  });
};

export const postNewUser = (body) => {
  return hiddenGemsApi.post(`/users`, body).then(({ data }) => {
    return data;
  });
};

export const getAllUsers = () => {
  return hiddenGemsApi
    .get("/users")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      throw error;
    });
};

export const getUserById = () => {
  return hiddenGemsApi.get(`/users/${user_id}`).then(({ data }) => {
    return data;
  });
};
