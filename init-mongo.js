db.createUser({
    user: 'docker',
    pwd: 'zzzvvv',
    roles: [{
        role: 'readWrite', 
        db: 'DOCKER_DB',
    }]
})