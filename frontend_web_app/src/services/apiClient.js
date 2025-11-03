import { getEnv } from '../utils/env';

const BASE = getEnv('REACT_APP_BASE_API_URL') || 'http://localhost:4000';
const ENABLE_MOCKS = (getEnv('REACT_APP_ENABLE_MOCKS') || 'false') === 'true';

function sleep(ms){ return new Promise(res=>setTimeout(res, ms)); }

// In-memory mock DB
const mockDB = {
  restaurants: [
    { id:'r1', name:'Spice Hub', rating:4, cuisines:['Indian','Chinese'] },
    { id:'r2', name:'Pizza Plaza', rating:5, cuisines:['Italian','Pizza'] },
    { id:'r3', name:'Veg Delight', rating:4, cuisines:['North Indian'] }
  ],
  users: {}
};

async function mockGet(path, params){
  await sleep(200);
  if (path === '/restaurants') {
    const q = (params?.q || '').toLowerCase();
    const filtered = q ? mockDB.restaurants.filter(r => r.name.toLowerCase().includes(q) || r.cuisines.join(',').toLowerCase().includes(q)) : mockDB.restaurants;
    return { restaurants: filtered };
  }
  return {};
}

async function mockPost(path, body){
  await sleep(300);
  if (path === '/auth/otp') {
    return { txnId: `txn_${Date.now()}` };
  }
  if (path === '/auth/verify') {
    const phone = body.phone;
    const user = mockDB.users[phone] || { id: phone, phone, role: 'customer', name: '' };
    mockDB.users[phone] = user;
    return { user };
  }
  if (path === '/auth/profile') {
    const name = body.name || 'User';
    // assume single active user
    const phone = Object.keys(mockDB.users)[0];
    const updated = { ...mockDB.users[phone], name };
    mockDB.users[phone] = updated;
    return { user: updated };
  }
  return {};
}

async function http(method, path, bodyOrParams) {
  if (ENABLE_MOCKS) {
    return method==='GET' ? mockGet(path, bodyOrParams) : mockPost(path, bodyOrParams);
  }
  const url = method==='GET'
    ? `${BASE}${path}${bodyOrParams ? `?${new URLSearchParams(bodyOrParams).toString()}`:''}`
    : `${BASE}${path}`;
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type':'application/json' },
    body: method==='GET' ? undefined : JSON.stringify(bodyOrParams)
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

const api = {
  // PUBLIC_INTERFACE
  get: (path, params) => http('GET', path, params),
  // PUBLIC_INTERFACE
  post: (path, body) => http('POST', path, body)
};

export default api;
