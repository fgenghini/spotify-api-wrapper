let authToken;

export const setAuthToken = (token) => {
  authToken = token;
};

export const getAuthToken = () => authToken;

export const getAuthHeader = () => {
  if (authToken === undefined) {
    return {};
  }

  const header = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  return header;
};
