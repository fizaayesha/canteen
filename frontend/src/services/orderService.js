import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const getAuthConfig = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Create a new order
export const createOrder = async (order) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/orders/create`,
      order,
      getAuthConfig()
    );
    return data;
  } catch (error) {
    console.error('Create Order Error:', error);
    throw error;
  }
};

// Get the latest order for the current user
export const getNewOrderForCurrentUser = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/orders/newOrderForCurrentUser`,
      getAuthConfig()
    );
    return data;
  } catch (error) {
    console.error('Get Order Error:', error);
    throw error;
  }
};

// Mark an order as paid
export const pay = async (paymentId) => {
  try {
    const { data } = await axios.put(
      `${BASE_URL}/api/orders/pay`,
      { paymentId },
      getAuthConfig()
    );
    return data;
  } catch (error) {
    console.error('Payment Error:', error);
    throw error;
  }
};

// Track an order by its ID
export const trackOrderById = async (orderId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/orders/track/${orderId}`,
      getAuthConfig()
    );
    return data;
  } catch (error) {
    console.error('Track Order Error:', error);
    throw error;
  }
};

// Get all orders by state
export const getAll = async (state) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/orders/${state ?? ''}`,
      getAuthConfig()
    );
    return data;
  } catch (error) {
    console.error('Get All Orders Error:', error);
    throw error;
  }
};

// Get all possible order statuses
export const getAllStatus = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/orders/allstatus`,
      getAuthConfig()
    );
    return data;
  } catch (error) {
    console.error('Get All Status Error:', error);
    throw error;
  }
};
