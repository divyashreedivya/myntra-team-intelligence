export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user) {
      // return { 'x-access-token' : user.token };
      return {'Authorization':'Bearer '+user}
    } else {
      return {};
    }
  }
  