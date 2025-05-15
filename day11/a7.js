const roles = {
    admin:'Has full access',
    user: 'Has limited access',
    guest: 'Has read-only access'
};

console.log(roles['admin'] || 'Role not Found');