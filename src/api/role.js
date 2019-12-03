import http from '@/test-net/test-http';

export function getRoutes() {
  return http({
    url: '/routes',
    method: 'get'
  })
}

export function getRoles() {
  return http({
    url: '/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return http({
    url: '/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return http({
    url: `/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return http({
    url: `/role/${id}`,
    method: 'delete'
  })
}
